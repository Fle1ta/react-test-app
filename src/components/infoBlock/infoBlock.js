import React from 'react';
import { connect } from 'react-redux';

const InfoBlock = (props) => {
    return (<div className='info'>
                <div>Title: {props.img.title || "no data"}</div>
                <div>Loaded:{props.img.date}</div>
            </div>)
}

const mapStateToProps = (state) => {
    return {
        img: state.imgs[state.currentHistImg], 
    }
}


export default connect(mapStateToProps)(InfoBlock);