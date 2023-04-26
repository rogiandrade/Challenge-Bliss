import { useRouteError } from "react-router-dom";
import restart from "../Styles/assets/restart.svg"


{/*This function was created in case there is an error in the connection with the API*/}
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  {/*this function reloads the page*/}
  function refreshPage(){
    window.location.reload(false);
  }

  return (
    <div className="errorpage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
       onClick={refreshPage}
       className="error"
       ><img src={restart} width={25} alt="restart" /></button>
    </div>
  );
}