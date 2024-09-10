import React from 'react';

const About = () => {
  return (
    <section className='' id='about'>
      {/* <h2 className='text-center mb-6 text-4xl sm:text-5xl lg:text-6xl mt-20 text-transparent bg-clip-text bg-white'>About Us</h2> */}
      <div className='rounded-lg bg-gray-200  shadow-md shadow-white text-blue-950 py-10'>
      <h2 className='text-center mb-6 text-4xl sm:text-5xl lg:text-6xl mt-4 text-blue-950 bg-clip-tex py-4 font-poppins font-semibold'>About HACKHUB</h2>
        <div className='flex flex-col text-justify justify-center '>
          <div className='mx-8'>
          <p className='text-xl  max-w-90 leading-8 text-justify '><span className='font-bold  text-3xl text-violet-950'>
          HackHub</span> is an innovative platform designed to transform the way events are organized and managed. It simplifies the complex process of finding sponsors by eliminating the need for web scraping, allowing organizers to seamlessly connect with sponsors that perfectly match their event’s requirements. This targeted approach not only saves time but also enhances the effectiveness of sponsorships.In addition to sponsor management, HackHub facilitates collaboration with Community Partners, who play a crucial role in expanding the event's reach. By leveraging their networks, these partners help promote events to a broader audience, ensuring maximum visibility and engagement.</p>
          <br/>
          <p className='text-xl  max-w-90  leading-8 text-justify pb-10' >HackHub also serves as a powerful platform for designers, offering them the chance to work on real-world projects. This not only allows them to showcase their creative talents but also provides opportunities for earning through their contributions. With HackHub, event management becomes more streamlined, effective, and rewarding for everyone involved.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;