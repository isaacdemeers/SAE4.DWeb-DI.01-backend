import { Link } from 'react-router-dom';


export default function Button({ type, ...props }) {
  // type: link, button
  //  props.style: primary, secondary, noText
  //  props.text: string
  //  props.icon: string
  //  props.link: string

  let styles = {
    primary: 'cursor-pointer flex items-center content-left text-[white] text-[1rem] gap-[.5rem] px-[.8rem] py-[.5rem] pointer',
    blackBordered: 'text-sm cursor-pointer px-3 py-1 rounded-md bg-transparent border-[1px] border-white text-white hover:bg-white hover:text-black',
    live: ' text-sm hidden md:block cursor-pointer rounded-md px-3 py-1 bg-primary text-white',
    none: ' text-sm cursor-pointer rounded-md px-3 py-1 text-white',
    noPad: 'cursor-pointer flex items-center content-left text-[white] text-[1rem] gap-[.5rem] py-[.5rem]',
    search: 'cursor-pointer flex items-center content-left text-[white] text-[1rem] gap-[.5rem] py-[.5rem] px-3 rounded-md bg-red-600 bg-primary'


  };

  let icon = '';
  if (props.icon) {
    icon = <img className={props.imgAdditionalStyles} src={'../public/assets/icons/' + props.icon + '.svg'} alt="logo" />;
  }

  let button = <button className={styles[props.style] + ' ' + props.additionalStyles}>
    {icon}
    {props.text}
  </button>;


  if (type == 'link') {
    return (<Link to={"/" + props.link}>
      {button}
    </Link>);
  }

  return button;

}

