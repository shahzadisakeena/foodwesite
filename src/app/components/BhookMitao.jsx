import React from 'react'
import Image from 'next/image'
const BhookMitao = () => {
  return (
    <div className='flex items-center justify-center h-full w-[85vw] bg-brand-darkGray mx-auto rounded-md my-20'>
        <div className='flex flex-col items-center justify-center my-10'>
<Image
src="/images/bhookmitao.png"
width={450}
height={450}
className="object-cover"
/>
<p className='text-sm mt-5 text-brand-secondary px-20 text-center'>is KFC’s pledge to give back to society. Over the years we have made it our mission to spread the message of hope, bringing positive change in the lives of people and providing better living standards. Mitao Bhook strengthens the community on the pillars of Education, Inclusion & Diversity.</p>
        </div>

    </div>
  )
}

export default BhookMitao