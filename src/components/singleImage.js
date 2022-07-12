import React from 'react';
const Intro = ({image, children, title}) => {
    return (
        <div className='single-image'>
            <div className="image-row-0">
                <h5>{title}</h5>
            </div>
            <div className='image-row-1'>
                {image &&
                    <img src={image} className="standard-image" alt="graphic"/>
                }
            </div>
            <div className='image-row-2'>
                {children}
            </div>
        </div>
    );
};

export default Intro;