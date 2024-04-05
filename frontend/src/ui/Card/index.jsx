import Card from "./Card.jsx";


export default function Catalogue({ catalogue, name }) {

  let movies = [];
  for (let elt of catalogue) {
    movies.push(
      <li className="" key={elt.id}>
        <Card data={elt} />
      </li>
    );
  }
  return (

    <section className="flex flex-col md:mb-20 p-5 mt-32 md:mt-[-8rem]">

      <div className=" z-30">
        <h2 className="font-semibold text-2xl mx-5 text-white">{name}<span className=" text-primary">Bay</span></h2>
      </div>

      <ul className="flex align-middle justify-start rounded-3xl overflow-scroll px-5 py-14 gap-5">
        {movies}
      </ul>

    </section>

  );
}
