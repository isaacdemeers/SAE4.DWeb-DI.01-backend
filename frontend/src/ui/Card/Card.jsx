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


export default function Card({ data }) {
  console.log(data);

  let sLI = 'border-[1px] border-[solid] border-[slategray] px-[.3rem] py-[.1rem] rounded-2xl text-[.6rem] text-[slategray]'

  return (

    <>

      <figure className="card flex relative items-center justify-center flex-col  w-[fit-content] rounded-2xl">

        <div className="h-[16vw] w-[16vw] min-h-[200px] min-w-[200px] flex items-center justify-center overflow-hidden rounded-2xl">
          <img className="w-full min-h-full object-cover object-center" src={`../public/assets/moviesImg/${data['imgName'] + '.png'}`} alt="preview" />
        </div>

        <figcaption className="text-[rgb(165,_165,_165)] text-[.8rem] p-[.3rem] text-center max-w-[18vw] whitespace-nowrap overflow-hidden overflow-ellipsis min-w-[200px]">{data['name']}</figcaption>

        <section className="cardPreview bg-dark md:flex bg-background z-50 hidden justify-start items-start flex-col overflow-hidden h-[fit-content] rounded-2xl min-w-[300px] w-[25vw] [transition:all_.3s] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/3 opacity-0  origin-[0_0]">
          <iframe className="w-full h-1/2 border-[none]" src={`https://www.youtube.com/embed/${data['embedLink']};controls=0`} title=" YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>

          <div className="p-[.6rem]">
            <figcaption className="text-[.8rem] text-primary">{data['name']}</figcaption>

            <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
              <Tag text={data['year']}></Tag>
              <Tag text={data['duration'] + 'mn'}></Tag>

            </ul>

            <ul className="flex items-center justify-start gap-[.4rem] mx-[0] my-[.6rem]">
              <Tag text={'+' + data['pegi']}></Tag>

              {createCategoryList(data['category'])}

            </ul>

            <figcaption className="text-[.6rem] text-[slategray] w-full mb-4">{data['description']}</figcaption>

            <div className="flex items-center justify-between">
              <Button type="action" link="gggggg" style="primary" text="Watch" icon='playIcon'></Button>
              <Button type="action" link="gggggg" style="primary" text="Add" icon='addIcon'></Button>


            </div>


          </div>

        </section >

      </figure>





    </>

  );


}
