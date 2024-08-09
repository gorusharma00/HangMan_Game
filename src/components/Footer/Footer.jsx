import { Link } from "react-router-dom"

function Footer(){
    return (
        <footer 
            className="fixed bottom-0 w-[100%] h-8 font-carter  bg-gray-950 text-[#fff]"
        >
            <div
                className="flex justify-center tracking-widest items-center h-[100%]"
            >
                &#169; 2024 Hangman Game. Created by <Link to="https://github.com/gorusharma00" className="text-orange-600 ml-1"> Gourav</Link>.
            </div>
            
        </footer>
    )
}

export default Footer