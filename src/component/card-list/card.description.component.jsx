import React from 'react';
import { useState } from 'react';

const CardDescription = ({description}) => {
    const [showMore, setShowMore] = useState(true);
    const descLength = description.length;
    return (
        <>
            <p className="card__description">{descLength > 200 && showMore ? description.slice(0,200): description}</p>
            {descLength > 200?<button onClick={()=>setShowMore(!showMore)}className="card__link">Read more</button>:null}
        </>
    )

}

export default CardDescription