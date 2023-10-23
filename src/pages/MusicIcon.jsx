import React from 'react'
import music from '../assets/icon-music.svg'
import '../style/MusicIcon.css'

const MusicIcon = () => {
  return (

    <section className='container text-center col-lg'> 
        <div className=" stv">
            {/* You can replace 'your-music-icon' with your actual icon */}
            <img src={music} alt="Music Icon" className="icon" />
            <p className=" text mt-2 p-1">Annual plan</p>
          </div>
          <div>
            <p>$59.99/year</p>
            
          </div>
          <div>
            <a href="">change</a>
          </div>
          <button className='me my-4'>Proceed to Payment</button>
          <div className='m-3'>
            <h6>Cancle Order</h6>
            </div>
          

    </section>
    
          
          
          
        );
      };
      
  

export default MusicIcon