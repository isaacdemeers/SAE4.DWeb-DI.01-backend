import Tag from "../Tag";
import Button from "../Button";

function createCategoryList(categories) {
  let categoryList = [];
  for (let category of categories) {
    categoryList.push(
      <Tag text={category.name} color={'white'}></Tag>

    );
  }
  return categoryList;
}


export default function Featured({ movie }) {

  return (
    <section className=' w-screen h-[40vh] md:h-screen relative'>
      <div className=' relative h-full w-full flex align-middle justify-center '>
        <iframe className="  w-full rounded-b-[50%] md:rounded-none border-[none]" src={`https://www.youtube.com/embed/${movie['embedLink']};controls=0`} title=" YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        <div className="bg-gradient-to-t from-dark absolute w-full h-full hidden md:block"></div>
      </div>

      <nav className="-translate-y-20">
        <div className='flex align-middle justify-between w-full px-2 md:absolute md:w-auto md:justify-start md:px-0 md:top-[-25rem] md:ml-10 md:m-auto'>

          <Button type="action" style="none" text="" additionalStyles='md:hidden' icon='infosIcon' ></Button>
          <Button type="link" link={`viewMovie/${movie.id}`} style="none" imgAdditionalStyles="w-[100px] h-[100px] md:w-[80px] md:h-[80px]" text="" icon='playIcon-big' ></Button>
          <Button type="" style="none" text="" icon='addIcon-big' ></Button>


        </div>
        <div className=' z-40 flex flex-col align-middle justify-center gap-3 md:absolute md:top-[-40rem] md:ml-10 md:justify-start md:m-auto'>
          <p className='text-white font-medium m-auto uppercase text-[2rem] w-full text-center md:text-left'>{movie['name']}</p>
          <div className="flex align-middle gap-3 justify-center md:flex-col">
            <ul className='flex md:w-full align-middle justify-center md:justify-start gap-3'>
              <Tag text={'+' + movie['pegi']} color='white'></Tag>
              <Tag text={movie['duration'] + 'mn'} color='white'></Tag>
            </ul>

            <ul className='flex md:w-full align-middle justify-center md:justify-start gap-3'>
              {createCategoryList(movie['category'])}
            </ul>
          </div>

          <figcaption className="text-[.8rem] hidden max-w-96 md:block  text-white mb-4">{movie['description'].replace('<div>', '').replace('</div>', '')}</figcaption>
        </div>

      </nav>
    </section>
  )

}
