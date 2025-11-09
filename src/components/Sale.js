import iphone17 from "../assets/images/17.jpg"
import macbook from "../assets/images/18.jpg"
import iwatch from "../assets/images/19.jpg"

function Sale()
{
    return( 
        <div>
            <h1 className="sale__heading">The latest. Take a look at what’s new right now. </h1>
        <div className="sale__container">
            <div  className="container1">
             <img src={iphone17}></img>
             <div className="text-on-image">
                <h2>Iphone 17 Pro</h2>
                <h3>All out pro</h3>
                <p>From Rs 130000.00</p>

             </div>
            </div>

            <div  className="container1">
             <img src={macbook}></img>
             <div className="text-on-image">
                <h2>Mac Book </h2>
                <h3>All out pro</h3>
                <p>From Rs 130000.00</p>

             </div>
            </div>

            <div  className="container1">
             <img src={iwatch}></img>
             <div className="text-on-image">
                <h2>Iwatch pro</h2>
                <h3>All out pro</h3>
                <p>From Rs 130000.00</p>

             </div>
            </div>

        </div>
        </div>
    )
}

export default Sale