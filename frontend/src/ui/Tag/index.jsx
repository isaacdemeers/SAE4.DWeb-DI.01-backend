import { Link } from 'react-router-dom';

let colors = {
  primary: 'border-[slategray] text-[slategray]',
  white: 'border-white text-white',

};

export default function Tag({ text, color }) {
  if (!color) {
    color = 'primary';
  }
  let randomKey = Math.random().toString(36).substring(7);
  return (

    <li key={randomKey} className={`border-[1px] border-[solid] px-[.3rem] py-[.1rem] rounded-md text-[.6rem] ${colors[color]}`}>{text}</li>
  )

}

