import Image from 'next/image'
import React from 'react'

const Values = () => {
  const data = [
    { image: '/images/people.png', title: "Believe in All People", desc: "We trust each other and believe everyone can be their best self here. Our generous nature shines through everything we do." },
    { image: '/images/recog.png', title: "Recognize", desc: "We look for ways to recognize our people for their courage and celebrate all achievements – big and small. We never forget to have fun doing it!" },
    { image: '/images/res.png', title: "Run Great Restaurants", desc: "We are passionate about our food and take pride in creating a great experience for our guests. We do things the right way, even when no one is looking." },
    { image: '/images/breakt.png', title: "Go for Breakthrough", desc: "We always strive to do and be our best. We work with a sense of urgency and ownership in our brand. We take smart risks to achieve amazing results!" },
    { image: '/images/build.png', title: "Build Know How", desc: "We always seek to learn more and share our know how with others. Everyone can grow here." },
    { image: '/images/team.png', title: "Work as a Team", desc: "We help and support each other to grow and achieve more. We benefit from healthy debate to get the best outcomes. We win together as the KFC family!" }
  ]
  return (
    <div className=' container flex flex-col items-center w-[81vw] justify-center h-full mx-auto'>
      <h2 className='text-[41px] text-brand-secondary font-bold lg:mt-28 mt-32'>Our Values</h2>
      <div className=' w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 mx-auto mt-10'>
        {data.map((d, index) => (
          <div key={index} className={`value text-brand-secondary w-full flex flex-col flex-shrink gap-5 mb-12`}>
            <img src={d.image} className='w-full object-contain' />
            <p className=' text-[32px] w-full' >{d.title}</p>
            <p className='text-[16px] font-ftr'>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Values
