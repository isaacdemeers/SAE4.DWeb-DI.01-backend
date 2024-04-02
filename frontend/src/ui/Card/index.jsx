import Card from "./Card.jsx";


export default function Catalogue({ catalogue, name }) {


  let movies = [];
  for (let elt of catalogue) {
    movies.push(
      <li className="">
        <Card data={elt} />
      </li>
    );
  }
  return (

<<<<<<< Updated upstream
    <section className="flex flex-col p-5 mt-20 ">

      <div className="">
        <h2 className="font-semibold text-2xl mx-5 text-white">{name}<span className=" text-primary">Bay</span></h2>
=======
    <section className="flex flex-col rounded-3xl mb-16 p-5 mt-[-8rem]">

      <div className=" translate-y-5 z-30">
        <h2 className="font-semibold text-2xl mx-5 text-white">{name}<span className=" text-red-600 text-primary">Bay</span></h2>
>>>>>>> Stashed changes
      </div>

      <ul className="flex align-middle justify-start rounded-3xl overflow-scroll px-5 py-14 gap-5">
        {movies}
      </ul>

    </section>

  );
}
