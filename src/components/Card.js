import React from 'react'

const Card = (props) => {
    let review = props.review;

    return (
        <div>
            <div>
                <img  src={review.image}/>
            </div>

            <div>
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>
        </div>
    )
}

export default Card
