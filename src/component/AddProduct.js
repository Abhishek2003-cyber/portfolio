import React from 'react'
import Rating from './Rating'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
let masterList=[
    {
        produtname:'Mouse',
        url:'image/mouse.jpg',
        price:'Rs 500/-',
        disc:"HP mouse ,best quality",
        rating:"4"
},
{
    produtname:'Laptop',
    url:'image/th.jpeg',
    price:'Rs 50000/-',
    disc:"HP laptop ,best quality",
    rating:"3"
},
{
produtname:'Keyboard',
url:'image/keyboard.jpg',
price:'Rs 500/-',
disc:"Logitech K480 Wireless Multi-Device Keyboard For Windows, Macos, Ipados, Android Or Chrome Os",
rating:"5"
},
{
  productname: "Router",
  url: "image/router.jpg",
  price: "Rs-1400/-",
  disc: "AC 1200 Mbps WAVE 2 Concurrent dual band wireless Router with 4 High gain Omni Antenna;802.11 a/b/g/n/ac standards with speed of 300 Mbps",
  rating: "4"
},
{
  productname: "Fire Stick",
  url: "image/fire.jpg",
  price: "Rs-6500/-",
  disc: "Latest generation of our best-selling Fire TV device - 50% more powerful than the 2nd generation for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons.",
  rating: "5"
},
]
export default function AddProduct() {
   
   return( masterList.map(
        (obj)=>
        {
            return (
              <div className='container bg-secondary'>
              <div className='row justify-content-center'>
                <div className='col-md-4 mt-4'> 
                  <div className="card ">
                    <img src={obj.url} className="cardImgTop" alt="..." height={250}/>
                    <div className="cardBody" style={{textAlign:"center"}}>
                      <h5 className="cardTitle">{obj.produtname}</h5>
                      <h6 className='cardTitle'>{obj.price}</h6>
                      <p className="cardText">{obj.disc}</p>
                      <p><Rating rating={obj.rating}/></p>
                    </div>
                  </div>           
                </div>
              </div>
            </div>
            
                )
        }
    )
   )
}
