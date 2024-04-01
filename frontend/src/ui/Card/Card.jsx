import Button from "../Button";
import Tag from "../Tag";
import { Link } from 'react-router-dom';



function createCategoryList(categories) {
  let categoryList = [];
  for (let category of categories) {
    categoryList.push(
      <Tag text={category.name}></Tag>

    );
  }
  return categoryList;
}


export default function Card({ data }) {

  let sLI = 'border-[1px] border-[solid] border-[slategray] px-[.3rem] py-[.1rem] rounded-2xl text-[.6rem] text-[slategray]'

  return (
    <Link to={'/viewMovie/' + data['id']}>

      <figure className="card flex relative items-center justify-center flex-col  w-[fit-content] rounded-2xl">

        <div className="shadow-lg h-[16vw] w-[16vw] min-h-[200px] min-w-[200px] flex items-center overflow-hidden justify-center rounded-2xl">
          <img className="w-full min-h-full object-cover object-center" src={`../public/assets/moviesImg/${data['imgName']}`} alt="preview" />
        </div>

        <figcaption className="text-[rgb(165,_165,_165)] text-[.8rem] p-[.3rem] text-center max-w-[18vw] whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[200px]">{data['name']}</figcaption>

        <section className="cardPreview bg-dark backdrop-blur-lg shadow-xl md:flex z-50 hidden justify-start items-start flex-col overflow-hidden h-[fit-content] rounded-2xl w-[350px] [transition:all_.3s] absolute top-2/4 left-2/4 -translate-x-[45%] -translate-y-1/2 opacity-0  origin-[0_0]">
          <iframe className="w-full h-1/2 rounded-2xl border-[none]" src={`https://www.youtube.com/embed/${data['embedLink']};controls=0`} title=" YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>

          <div className="p-[.6rem]">
            <figcaption className="text-[1.2rem] font-medium text-white text-primary">{data['name']}</figcaption>

            <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
              <Tag text={data['year']}></Tag>
              <Tag text={data['duration'] + 'mn'}></Tag>
              <Tag text={'+' + data['pegi']}></Tag>


            </ul>

            <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">

              {createCategoryList(data['category'])}

            </ul>

            <figcaption className="text-[.6rem] text-[slategray] w-full mb-4">{data['description'].replace('<div>', '').replace('</div>', '')}</figcaption>

            <div className="flex items-center justify-between">
              <Button type="action" link="gggggg" style="primary" text="Watch" icon='playIcon'></Button>
              <Button type="action" link="gggggg" style="primary" text="Add" icon='addIcon'></Button>


            </div>


          </div>

        </section >

      </figure>





    </Link>

  );


}
