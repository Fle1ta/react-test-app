import React from 'react';
import { connect } from 'react-redux';
import { switchActiveImg, switchForward, switchBack } from "../../redux/actions/actions";
import './pagBar.css'


const PagBar = (props) => {

    
    return <div className='pagBar'>
        <div className='arrow' onClick={props.switchBack}>Prev</div>
        { 
            props.imgs.map((item, index) => <div 
                                                key={item.id}
                                                onClick={() => props.switchActiveImg(index)}
                                                className = {(index === props.currentHistImg) ? "active" : ""} 
                                            >{index+1}</div>)
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