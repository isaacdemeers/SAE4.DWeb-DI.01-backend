import { Link } from 'react-router-dom';


export default function Tag({ text }) {

  return (
    <li className='border-[1px] border-[solid] border-[slategray] px-[.3rem] py-[.1rem] rounded-md text-[.6rem] text-[slategray]'>{text}</li>
  )

}

