import Card from "./Card.jsx";


export default function Catalogue({ catalogue, name }) {

  console.log(catalogue);

  let movies = [];
  for (let elt of catalogue) {
    movies.push(
      <li id={'movieID-' + elt.id}>
        <Card data={elt} />
      </li>
    );
  }
  return (

    <section className="flex flex-col p-5 mt-16 ">

      <div className="b">
        <h2 className="font-semibold mx-5 text-white">{name}<span className=" text-primary">Bay</span></h2>
      </div>

      <ul className="flex align-middle justify-start overflow-scroll p-5 gap-5">
        {movies}
      </ul>

    </section>

  );
}
