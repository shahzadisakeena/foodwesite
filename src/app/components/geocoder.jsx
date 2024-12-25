'use client'
import React, { useEffect, useRef, useState } from 'react'

const GeocodingService = ({onMesageChange}) => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [geocoder, setGeocoder] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [latLng, setLatLng] = useState({ lati: '', long: '' })

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      if (window.google && window.google.maps) {
        // If API is already loaded, initialize the map
        initializeMap()
      } else {
        // If not loaded, create and append script
        const script = document.createElement('script')
        script.src =
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZZUXJEB6v7iXbsDfiq23FfrvTN2hxaXM&callback=initMap&v=weekly'
        script.defer = true
        script.async = true
        document.body.appendChild(script)

        // Attach initMap to window for callback
        window.initMap = initializeMap
      }
    }

    loadGoogleMapsAPI()

    return () => {
      // Cleanup: Prevent duplicate listeners and potential memory leaks
      if (window.initMap) {
        delete window.initMap
      }
    }
  }, [])

  const initializeMap = () => {
    const defaultLocation = { lat: 33.027968, lng: 73.6010478 }

    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 15,
      center: defaultLocation,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    })

    const geocoderInstance = new google.maps.Geocoder()
    const markerInstance = new google.maps.Marker({
      position: defaultLocation,
      map: mapInstance
    })

    setMap(mapInstance)
    setGeocoder(geocoderInstance)
    setMarker(markerInstance)

    // Try to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          mapInstance.setCenter(userLocation)
          markerInstance.setPosition(userLocation)
        },
        () => {
          console.warn('Geolocation failed. Defaulting to predefined location.')
        }
      )
    } else {
      console.warn(
        'Geolocation not supported by browser. Defaulting to predefined location.'
      )
    }

    // Add map click listener to update marker
    mapInstance.addListener('click', e => {
      const position = e.latLng
      markerInstance.setPosition(position)
      mapInstance.setCenter(position)
      
      const newLatLng = {
        lati: position.lat().toString(),
        long: position.lng().toString()
    };
    setLatLng(newLatLng);
    onMesageChange(newLatLng); // Updated to use newLatLng
    
      
    })
  }

  const handleGeocode = async request => {
    if (!geocoder || !map || !marker) return

    try {
      const result = await geocoder.geocode(request)
      const { results } = result

      if (results.length > 0) {
        const location = results[0].geometry.location
        map.setCenter(location)
        marker.setPosition(location)
        console.log(
          'Geocode results:',
          results[0].formatted_address,
          location.toString()
        )
      } else {
        alert('No results found.')
      }
    } catch (error) {
      alert(
        'Geocode was not successful for the following reason: ' + error.message
      )
    }
  }

  const handleSubmit = () => {
    if (inputValue) {
      handleGeocode({ address: inputValue })
    } else {
      alert('Please enter a location.')
    }
  }

  // Optional: Log latLng when it updates
  useEffect(() => {
    if (latLng.lati && latLng.long) {
      console.log('Updated latLng:', latLng)
    }
  }, [latLng])

  return (
    <div className='relative flex justify-center'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          alignItems: 'center',
          marginBottom: '10px'
        }}
      >
        <input
          type='text'
          placeholder='Enter a location'
          value={inputValue}
          className='w-full text-black h-12 border-2'
          onChange={e => setInputValue(e.target.value)}
        />
        <button className='bg-brand-darkGray rounded p-3' onClick={handleSubmit}>Geocode</button>
      </div>
      {/* Map Container */}
      <div
        id='map'
        ref={mapRef}
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid #ccc'
        }}
      ></div>
    </div>
  )
}

export default GeocodingService
