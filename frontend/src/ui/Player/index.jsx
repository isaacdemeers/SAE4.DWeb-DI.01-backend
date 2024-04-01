import { Link } from 'react-router-dom';
import Button from "../Button";
import Tag from "../Tag";

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
  console.log(movie)

  return (
    <section className=' relative mb-20 mt-24 md:m-10 md:mt-24 '>
      <Button className='md:mt-32' type="link" link="movies" style="primary" text="Back" icon='arrowLeft'></Button>

      <div className=' h-[50vh] mt-10 flex align-middle justify-center'>
        <iframe className="w-full border-[none] md:rounded-3xl" src={`https://www.youtube.com/embed/${movie['embedLink']};controls=0`} title=" YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
      </div>

      <section className=" top-1/2 p-5 md:rounded-3xl bg-gray-800 mt-10">

        <div className="p-[.6rem]">
          <figcaption className="text-[6rem] font-bold text-primary text-white overflow-hidden overflow-ellipsis min-w-[200px]">{movie['name']}</figcaption>

          <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
            <Tag text={movie['year']}></Tag>
            <Tag text={movie['duration'] + 'mn'}></Tag>

          </ul>

          <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
            <Tag text={'+' + movie['pegi']}></Tag>

            {createCategoryList(movie['category'])}

          </ul>

          <figcaption className="text-[.6rem] text-[slategray] w-full mb-4">{movie['description'].replace('<div>', '').replace('</div>', '')}</figcaption>

          <div className="flex items-center justify-between">
            <Button type="action" link="gggggg" style="noPad" text="Add" icon='addIcon'></Button>


          </div>


        </div>

      </section >
    </section>
  )

}
//movie['embedLink']
