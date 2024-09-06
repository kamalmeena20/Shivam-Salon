import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Reviewscard({ name, username, image, review, time, star }) {
    return (
        <div class="testimonial-box">
            <div class="box-top">
                <div class="profile">
                    <div class="profile-img">
                        <img src={image} />
                    </div>
                    <div class="name-user">
                        <strong>{name}</strong>
                    </div>
                </div>
                <div class="review">
                    <StarIcon className='star-icon' />
                    <StarIcon className='star-icon' />
                    <StarIcon className='star-icon' />
                    <StarIcon className='star-icon' />
                    <StarBorderIcon className='star-icon' />
                </div>
            </div>
            <div class="clint-comment">
                <p>{review}</p>
            </div>
        </div>
    )
}
