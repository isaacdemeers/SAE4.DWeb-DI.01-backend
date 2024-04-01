import { Link } from 'react-router-dom';
import Tag from "../Tag";
import Button from "../Button";





export default function Preview({ movie }) {

  return (
    <section className='h-screen w-screen'>
      <div>
        <img className='rounded-b-[50%]' src={`../public/assets/moviesImg/${movie['imgBig']}`} alt="" />
      </div>
      <nav>
        <div className='flex align-middle justify-between w-full px-2 -translate-y-10'>

          <Button type="action" style="none" text="" icon='infosIcon' ></Button>
          <Button type="action" style="none" imgAdditionalStyles="w-[100px] h-[100px]" text="" icon='playIcon-big' ></Button>
          <Button type="action" style="none" text="" icon='addIcon-big' ></Button>


        </div>
        <div className='flex flex-col align-middle justify-center gap-3 -translate-y-8'>
          <p className='text-white font-medium m-auto w-full uppercase text-center'>{movie['title']}</p>
          <ul className='flex align-middle justify-center gap-3'>
            <Tag text={movie['age']}></Tag>
            <Tag text={movie['categorie']}></Tag>

          </ul>
        </div>

      </nav>
    </section>
  )

}

