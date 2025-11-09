import  powerbeat from "../assets/images/a1.jpg"
import speaker from "../assets/images/a2.jpg"
import boom from "../assets/images/a3.jpg"
import buds from "../assets/images/a4.jpg"

function Accessories()
{
    return(
        <div className="accessories">
            <h2>Categories Section</h2>
        <div className="accessories__containter">
            <div className="acc__container">
                <img src = {powerbeat}></img>
            </div>

             <div className="acc__container">
                <img src = {speaker}></img>
            </div>

             <div className="acc__container">
                <img src = {boom}></img>
            </div>

             <div className="acc__container">
                <img src = {buds}></img>
            </div>
        </div>
        </div>
    )
}

export default Accessories 