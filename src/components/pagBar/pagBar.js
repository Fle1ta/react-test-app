import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { switchActiveImg, switchForward, switchBack } from "../../redux/actions/actions";
import './pagBar.css'


const PagBar = (props) => {

    let {imgs, currentHistImg} = props;

    let shownImgs = [],
        startNum;

    if(currentHistImg < 2) {

        shownImgs = imgs.slice(0, 5);
        startNum = 0;
        console.log(shownImgs);


    } else if (currentHistImg > imgs.length - 3){

        shownImgs = imgs.slice(props.imgs.length - 5);
        startNum = imgs.length - 4; 
        console.log(shownImgs);


    } else {

        shownImgs = imgs.slice(currentHistImg - 2 , currentHistImg + 3);
        console.log(shownImgs);
        startNum = currentHistImg - 2;

    }
    
    return <div className='pagBar'>
                <div className='arrow' onClick={props.switchBack}>Prev</div>
                { 
                    shownImgs.map((item, index) => (<div 
                                                        key={item.id}
                                                        onClick={() => props.switchActiveImg(startNum + index)}
                                                        className = {((startNum + index) === props.currentHistImg) ? "active" : ""} 
                                                    >{startNum + index +1}</div>)
                                )
                }
                <div className='arrow' onClick={props.switchForward}>Next</div>
            </div>

}

const mapStateToProps = (state) => {
    return {
        imgs: state.imgs,
        currentHistImg: state.currentHistImg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchActiveImg: index => dispatch(switchActiveImg(index)),
        switchForward: () => dispatch(switchForward()),
        switchBack: () => dispatch(switchBack()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PagBar);