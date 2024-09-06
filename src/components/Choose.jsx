import React from 'react'
import image1 from '../images/choose1.jpg'
import image2 from '../images/choose2.jpg'

export default function Choose() {
    return (
        <>
            <div className="main-choose">
                <div className="choose-left">
                    <h3>Why Choose us ?</h3>
                    <h2>BEST SALON</h2>
                    <h4>Hair Treatment Salon</h4>
                    {/* <div className="para-div"> */}
                    <div className='main-para'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Blanditiis natus in tempore facilis inventore perferendis
                        voluptatem sapiente autem aliquam vel similique, ut maiores eos vitae facere.</p>
                        <div className="para-01"><p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis adipisci quas magnam recusan sequi, unde autem eos harum </p></div>
                        <div className="para-02"><p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis adipisci quas magnam recusan sequi, unde autem eos harum </p></div>
                    </div>

                    {/* </div> */}
                </div>
                <div className="choose-right">
                    <img className='img-01' src={image1} />
                    <img className='img-02' src={image2} />
                </div>
            </div>
        </>
    )
}
