import { Link } from 'react-router-dom';

import Button from '../Button/index.jsx';

function createSection({ name, links }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function createSocialMediaLink({ name }) {
  return (
    <li className=' shadow-md cursor-pointer flex align-middle justify-center p-2  h-15 w-15 rounded-xl bg-[#212121]'>
      <img className='w-full' src={`assets/icons/brand-${name}.svg`} alt={name} />
    </li>
  );
}

function createApps() {

  let html = [];
  for (let i = 1; i < 9; i++) {
    html.push(
      <li className=' cursor-pointer flex align-middle justify-center'>
        <img className='h-8' src={`assets/icons/apps/${i}.svg`} alt={i} />
      </li>
    );
  }
  return html;

}


export default function Footer() {
  return (
    <footer className='w-screen hidden md:flex gap-14 flex-col align-middle justify-center px-20 py-10 text-white'>

      <div className=" bg-[#212121] shadow-2xl rounded-3xl gap-10 flex align-middle justify-start p-8">
        <div className="flex align-middle justify-start flex-col gap-3 my-2">
          <h2 className="text-4xl font-bold">Join the Tribe</h2>
          <p className="text-lg">Get the Doculetter</p>
        </div>
        <div className=" flex align-middle justify-start gap-5 p-5">
          <input className=" bg-[#1d1d1d] border w-[20vw] border-[#2b2b2b]  rounded-md h-12 px-5" placeholder="Email Address" />
          <button className='h-12 font-semibold rounded-md px-12 bg-red-600 shadow-xl'>SUBMIT</button>
        </div>
      </div>

      <div className="">
        <div className="flex align-middle justify-between gap-8">
          {createSection({ name: 'About Us', links: ['About Docubay', 'Careers', 'Press'] })}

          {createSection({ name: 'Support', links: ['Contact Us', 'FAQ’s'] })}

          {createSection({ name: 'Legal', links: ['Terms Of Use', 'Privacy Policy'] })}
          <div className="flex flex-col items-end">
            <h3 className="text-3xl font-bold mb-4">DOCUBAY</h3>
            <ul className="flex  gap-3 mb-4">
              {createSocialMediaLink({ name: 'twitter' })}
              {createSocialMediaLink({ name: 'instagram' })}
              {createSocialMediaLink({ name: 'youtube' })}
              {createSocialMediaLink({ name: 'linkedin' })}


            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-white mt-8">Available on many devices. Install the app now.</p>
        <ul className="flex align-middle justify-center gap-5 my-10">
          {createApps()}
        </ul>
        <p className="text-center text-sm text-gray-500 mt-8">@2023 DocuBay Media Pvt.Ltd All Rights Reserved</p>


      </div>
    </footer>
  )
}