import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <p className="text-6xl font-light">🙂</p>
      <h1 className="text-6xl font-bold text-white">Oups</h1>
      <p>
        <i className="text-white">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}