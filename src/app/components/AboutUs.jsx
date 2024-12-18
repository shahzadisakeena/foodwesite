import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-[85vw] mx-auto'>
    <h2 className='text-3xl text-brand-secondary font-bold mt-28'>ABOUT US</h2>

<div className='flex bg-brand-darkGray mt-10 p-5 rounded-md items-center justify-between'>
<p className='text-sm text-brand-secondary mx-5 w-[50%]'>
KFC entered Pakistan in 1997 and since then, it’s been a journey full of  excitement and Finger
 Lickin’ goodness! The first KFC restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi 
 and now our Finger Lickin’ Chicken is available in 37 cities withover 128 restaurants! Being the 
 most loved fast food chain in Pakistan, KFC leaves no stone unturned to provide its 
 customers the most delicious chicken and an excellent dining experience.
</p>
<div className='flex items-center justify-center bg-brand-primary mx-5 rounded-md w-[480px] h-[197px]'>
<p className='text-md text-brand-secondary text-center p-2 font-bold'>
WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL INGREDIENTS FROM TRUSTED SUPPLIERS
</p>
</div>
</div>
</div>
  )
}

export default AboutUs