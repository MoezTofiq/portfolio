import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>error heading</h1>
      <p>Sorry an expected error happened</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
