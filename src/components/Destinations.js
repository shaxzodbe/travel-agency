import React from 'react'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'

const Destinations = () => {
    return (
        <>
            <section className="grid">
                <h3>We are currently in 46 countries!</h3>

                <div className="grid-items">
                    <div>
                        <img src={image2} alt="" />
                        <h4>Fly to Aruba</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam, quo sunt est fugit distinctio.</p>
                    </div>

                    <div>
                        <img src={image3} alt="" />
                        <h4>Experience Mombasa</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam, quo sunt est fugit distinctio.</p>
                    </div>

                    <div>
                        <img src={image4} alt="" />
                        <h4>Sayour Hawaii</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam, quo sunt est fugit distinctio.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destinations
