import React from 'react'
import Image from 'next/image'
const History = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-[85vw] mx-auto'>

<div className='flex bg-brand-darkGray mt-10 p-5 rounded-md items-center  w-[85vw]'>
<Image
src="/images/history.png"
width={400}
height = {400}
alt="history"
className='object-cover h-[400px] w-[400px]'
/>
<div>
    <h2 className='text-2xl font-bold text-brand-secondary mx-10'>History</h2>
    <p className='text-brand-secondary text-sm mx-10 mt-5 font-bold'>It all started with Colonel Harland Sanders, the man who convinced the world by saying “We do chicken right!” Sanders took a great deal of time perfecting his iconic secret recipe of 11 herbs and spices, a legacy he’s brought to the world through KFC’s 10,000+ restaurants. Starting from outside of his gas station in Korbin, Kentucky to being a globally recognized face, we owe our success to the Colonel’s hard work and passion for sharing his love for chicken with the world!</p>
</div>
</div>
</div>
  )
}

export default History