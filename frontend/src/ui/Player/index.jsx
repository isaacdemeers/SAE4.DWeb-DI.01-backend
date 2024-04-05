import { Link } from 'react-router-dom';
import Button from "../Button";
import Tag from "../Tag";
import Back from '../Back';

function createCategoryList(categories) {
  let categoryList = [];
  for (let category of categories) {
    categoryList.push(
      <Tag text={category.name}></Tag>

    );
  }
  return categoryList;
}



export default function Player({ movie }) {

  return (
    <section className=' relative mb-20 mt-24  md:mt-24 '>
      <Back />
      <div className=' md:m-10 h-[50vh] mt-10 flex align-middle justify-center'>
        <iframe className="w-full border-[none] md:rounded-3xl" src={`https://www.youtube.com/embed/${movie['embedLink']};controls=0`} title=" YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
      </div>

      <section className=" top-1/2 p-5 md:rounded-3xl md:m-10 bg-borders mt-10">

        <div className="p-[.6rem]">
          <figcaption className="text-[6rem] font-bold text-white overflow-hidden overflow-ellipsis min-w-[200px]">{movie['name']}</figcaption>

          <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
            <Tag text={movie['year']}></Tag>
            <Tag text={movie['duration'] + 'mn'}></Tag>

          </ul>

          <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
            <Tag text={'+' + movie['pegi']}></Tag>

            {createCategoryList(movie['category'])}

          </ul>

          <figcaption className="text-[.6rem] text-light w-full mb-4">{movie['description'].replace('<div>', '').replace('</div>', '')}</figcaption>




        </div>

      </section >
    </section>
  )

}
//movie['embedLink']
