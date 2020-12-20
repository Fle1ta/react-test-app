import React from 'react';
import './pictureBlock.css';

const PictureBlock = ({img, withInfo}) => {

    let infoBlock = withInfo ? (<div className='info'>
                                    <div>Title: {img.title || "no data"}</div>
                                    <div>Loaded:{img.date}</div>
                                </div>) : null;

    return (
        <div className = 'wrapper'>
            { infoBlock }
            <div className='picture'>
                <img src={img.url} alt=""/>
            </div>
        </div>
    )
}

export default PictureBlock;