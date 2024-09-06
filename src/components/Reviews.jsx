import React from 'react'
import image from '../images/aboutimg.jpg'
import Reviewscard from './Reviewscard'
// import { LocalFireDepartment } from '@mui/icons-material'



export default function Reviews() {
    return (
        <>
            <div className='reviews'>
                <h2 className="reviews-h2">What our clints Says..</h2>
                <Reviewscard name={"Kamal Meena"} image={image} username={"@meena2005"} star={5} time={"2 week"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem nam praesentium molestias eaque ullam. Ullam, molestiae amet cupiditate consequuntur error reiciendis quod dolore quibusdam! Vel odit itaque totam fuga."
                } />
                <Reviewscard name={"Kamal Meena"} image={image} username={"@meena2005"} star={5} time={"2 week"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem nam praesentium molestias eaque ullam. Ullam, molestiae amet cupiditate consequuntur error reiciendis quod dolore quibusdam! Vel odit itaque totam fuga."
                } />
                <Reviewscard name={"Kamal Meena"} image={image} username={"@meena2005"} star={5} time={"2 week"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem nam praesentium molestias eaque ullam. Ullam, molestiae amet cupiditate consequuntur error reiciendis quod dolore quibusdam! Vel odit itaque totam fuga."
                } />
                <div className="card-hide d-flex">
                    <Reviewscard name={"Kamal Meena"} image={image} username={"@meena2005"} star={5} time={"2 week"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem nam praesentium molestias eaque ullam. Ullam, molestiae amet cupiditate consequuntur error reiciendis quod dolore quibusdam! Vel odit itaque totam fuga."
                    } />
                    <Reviewscard name={"Kamal Meena"} image={image} username={"@meena2005"} star={5} time={"2 week"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem nam praesentium molestias eaque ullam. Ullam, molestiae amet cupiditate consequuntur error reiciendis quod dolore quibusdam! Vel odit itaque totam fuga."
                    } />
                </div>
            </div>

        </>
    )
}
