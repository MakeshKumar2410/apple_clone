import mac from "../assets/images/mac.png"
import phone from "../assets/images/phone.png"
import ipad from "../assets/images/ipad.png"
import watch from "../assets/images/watch.png"
import Airpods from "../assets/images/airpods.png"
import airtag from "../assets/images/airtag.png"



function Images()
{
    return(
        <div className="image__container">
            <img src={mac}></img>
            <img src={phone}></img>
            <img src={ipad}></img>
            <img src={watch}></img>
            <img src={Airpods}></img>
            <img src={airtag}></img>        
        </div>
    )
}

export default Images