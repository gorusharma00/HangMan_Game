import { Link, useLocation } from "react-router-dom"
import StartGameBtn from "../../components/Button/StartGameBtn";

function ErrorPage(){

    const location = useLocation();

    const error = location.state?.err

    return(
        <div className="flex justify-center items-center w-full flex-grow text-3xl font-carter flex-col gap-5 tracking-wide">
            {error !== undefined ? <h1>{error}</h1> : <h1>Not Found</h1>}
            <Link to='/start'><StartGameBtn value={'Try Again'}/></Link>
        </div>
    )
}

export default ErrorPage;