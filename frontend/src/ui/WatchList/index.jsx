import Card from "../Card/Card.jsx";


export default function WatchList({ catalogue, name, style }) {

  let movies = [];
  for (let elt of catalogue) {
    movies.push(
      <li className="" key={elt.id}>
        <Card data={elt} />
      </li>
    );
  }

  let styles = {
    'WatchList': 'mb-20 mt-32 md:mt-[-8rem]',
    'WatchListPage': '',
  }
  if (!style) style = 'WatchList';
  return (


    <section className={`flex flex-col p-5 ${styles[style]}`}>

      <div className=" z-30">
        <h2 className="font-semibold text-2xl mx-5 text-white">{name}</h2>
      </div>

      <ul className="flex align-middle justify-start rounded-3xl overflow-scroll px-5 py-14 gap-5">
        {movies}
      </ul>

    </section>

  );
}
