function HintBtn({onClick}){
    return(
        <button
            className="bg-slate-800 p-2 text-[#fff] rounded-md hover:bg-slate-700"
            onClick={onClick}
        >
            Show Hint
        </button>
    )
}

export default HintBtn;