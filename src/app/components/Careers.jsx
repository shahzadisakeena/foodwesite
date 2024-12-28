"use client"
import React, { useState } from 'react'
import { TextField, MenuItem, InputAdornment, Typography, createTheme, ThemeProvider } from '@mui/material';
import { MapPin, User } from 'lucide-react';


const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            color: "white",
            backgroundColor: "#1d1815",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            "&:hover": {
              backgroundColor: "#2a2521",
            },
            "&.Mui-focused": {
              backgroundColor: "#1d1815",
            },
            "&::before": {
              borderBottom: "1px solid white",
            },
            "&:hover:not(.Mui-disabled)::before": {
              borderBottom: "2px solid black",
            },
            "&::after": {
              borderBottom: "2px solid red",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
          "& .MuiSelect-select": {
            color: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            backgroundColor: "#1D1815",
          },
          "& .MuiMenu-paper": {
            backgroundColor: "#1D1815",
          },
          "& .MuiMenuItem-root": {
            color: "#F5F5F5",
            "&:hover": {
              backgroundColor: "#1C1F24",
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1D1815', // Dropdown background color
        },
        list: {
          color: '#F5F5F5', // Text color of dropdown items
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F5F5F5', // Dropdown item text color
          '&:hover': {
            backgroundColor: '#1C1F24', // Hover effect color
          },
        },
      },
    }
  },
});

const Careers = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [cob, setCob] = useState("");
  const [ciob, setCiob] = useState("");
  const [cnic, setCnic] = useState('');
  const [cnicExp, setCnicExp] = useState("");
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState("");
  const [disability, setDisability] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");



  const [error, setError] = useState(false);

  const stdfu = () => {
    console.log(name, dob, cob, ciob, cnic, cnicExp, maritalStatus, gender)
  }

  return (
    <>
      <div className="flex flex-col mt-10 h-full w-[85vw] mx-auto">
        <div className="flex items-center justify-center my-6">
          <h2 className='text-[41px] text-brand-secondary font-bold'>Careers</h2>
        </div>
      </div>
      <div className="w-full text-brand-secondary mx-auto mb-5">
        <div className="flex flex-wrap justify-around">
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <User fill='white' />&nbsp;&nbsp;Personnel Info
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id="name"
                  label="FULL NAME "
                  variant="filled"
                  name="name"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                  }}
                />

                <TextField
                  id='dob'
                  label="Date of Birth "
                  variant="filled"
                  name="dob"
                  className='date bg-brand-darkGray rounded-t-xl'
                  type="date"
                  fullWidth
                  helperText={error && "Date of Birth is required."}
                  required
                  value={dob}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDob(value);
                    // Example validation (you can customize this)
                    if (!value) {
                      setError(true);
                    } else {
                      setError(false);
                    }
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id='cob'
                  label="Country of Birth"
                  variant="filled"
                  name="cob"
                  fullWidth
                  required
                  value={cob}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCob(value);
                  }}
                />

                <TextField
                  id='ciob'
                  label="City of Birth "
                  variant="filled"
                  name="ciob"
                  fullWidth
                  required
                  value={ciob}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCiob(value);
                  }}
                />

                <TextField
                  id='cnic'
                  label="CNIC "
                  variant="filled"
                  name="cnic"
                  type="text"
                  fullWidth
                  required
                  value={cnic}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only non-numeric input and clearing input
                    if (!isNaN(value) && value.length <= 13) {  // Check if the input doesn't contain any digits
                      setCnic(value);   // Update state if no numbers are in the input
                    }
                  }}
                />

                <TextField
                  id='cnicExp'
                  label="CNIC Expiry Date "
                  variant="filled"
                  name="cnicExp"
                  type="date"
                  fullWidth
                  required
                  className='date bg-brand-darkGray rounded-t-xl'
                  helperText={error && "CNIC expiry is required."}
                  value={cnicExp}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCnicExp(value);
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id="mar"
                  label="Marital Status "
                  variant="filled"
                  name="mar"
                  select
                  fullWidth
                  required
                  value={maritalStatus} // Set controlled value
                  onChange={(event) => {
                    setMaritalStatus(event.target.value); // Update state when an option is selected
                  }}
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                </TextField>

                <TextField
                  id='gender'
                  label="Gender"
                  variant="filled"
                  name="gender"
                  select
                  fullWidth
                  className='bg-brand-darkGray rounded-t-xl'
                  value={gender} // Set controlled value
                  onChange={(event) => {
                    setGender(event.target.value); // Update state when an option is selected
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                <TextField
                  id='religion'
                  label="Religion "
                  variant="filled"
                  name="religion"
                  fullWidth
                  required
                  value={religion}
                  onChange={(e) => {
                    const value = e.target.value;
                    setReligion(value);
                  }}
                />

                <TextField
                  id='disability'
                  label="Disability "
                  variant="filled"
                  name="disability"
                  fullWidth
                  required
                  value={disability}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDisability(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <MapPin />&nbsp;&nbsp;Address
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id='phoneNumber'
                  label="Phone Number (3XXXXXXXXX)"
                  name='phoneNumber'
                  variant="filled"
                  fullWidth
                  type="text"
                  autoComplete="mobile tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    // Allow only numeric input that starts with '3' and is max 10 characters long
                    if (!isNaN(inputValue) && inputValue.startsWith("3") && inputValue.length <= 10) {
                      setPhoneNumber(inputValue);
                    } else if (!isNaN(inputValue) && inputValue === "3") {
                      setPhoneNumber(inputValue);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "white", // Replace with actual color if needed
                            fontWeight: "bold",
                            borderRight: "2px solid white",
                            paddingRight: "8px",
                            marginLeft: "4px",
                            marginTop: "4px",
                          }}
                        >
                          +92&nbsp;&nbsp;
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id='address'
                  label="Address "
                  variant="filled"
                  name="address"
                  fullWidth
                  required
                  value={address}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAddress(value);
                  }}
                />

                <TextField
                  id='country'
                  label="Country "
                  variant="filled"
                  name="country"
                  fullWidth
                  required
                  value={country}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCountry(value);
                  }}
                />

                <TextField
                  id='prov'
                  label="State/Province "
                  variant="filled"
                  name="prov"
                  fullWidth
                  required
                  value={province}
                  onChange={(e) => {
                    const value = e.target.value;
                    setProvince(value);
                  }}
                />

                <TextField
                  id='city'
                  label="City "
                  variant="filled"
                  name="city"
                  fullWidth
                  required
                  value={city}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCity(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          {/* <button onClick={stdfu}>hdjhfjh</button> */}
        </div>
      </div>
    </>
  )
}

export default Careers
