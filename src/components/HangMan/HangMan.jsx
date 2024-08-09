import level1 from '../../assets/Images/1.svg'
import level2 from '../../assets/Images/2.svg'
import level3 from '../../assets/Images/3.svg'
import level4 from '../../assets/Images/4.svg'
import level5 from '../../assets/Images/5.svg'
import level6 from '../../assets/Images/6.svg'
import level7 from '../../assets/Images/7.svg'

function HangMan({ chance }){
    const levels = [level1, level2, level3, level4, level5, level6, level7]

    return(
        <div
            className='flex justify-center items-center mix-blend-darken w-full h-full '
        >
            <img src={chance >= levels.length ? levels[levels.length - 1] : levels[chance]}/>
        </div>
    )
}

export default HangMan