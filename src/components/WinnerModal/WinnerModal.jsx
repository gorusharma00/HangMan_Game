import { Link} from "react-router-dom"
import StartGameBtn from "../Button/StartGameBtn"

function WinnerModal({ showWinnerModal, wordSelected, info}){
    return(
        <>
            {showWinnerModal && (
                <div className="fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)] h-full w-full">
                    <div 
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-[#fff] justify-center items-center flex-col h-[15rem] w-[25rem] rounded-lg leading-3 gap-3"
                    >
                        
                        <span className="font-carter text-3xl tracking-widest">{info}</span>
                        <span className="font-carter text-2xl tracking-widest">Word is: {wordSelected}</span>

                        <Link to='/start'><StartGameBtn value={'Restart Game'}/></Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default WinnerModal