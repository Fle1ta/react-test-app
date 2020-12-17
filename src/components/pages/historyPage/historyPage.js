import React from 'react';
import { connect } from 'react-redux';
import { delImgFromHistory } from "../../../redux/actions/actions";
import '../Page.css';
import PagBar from '../../pagBar';
import InfoBlock from "../../infoBlock";

const HistoryPage = (props) => {
    let img = props.img;
    let content = !img ? (<div>History is unavailable, please return to main page.</div>) : (<>
                                                            <InfoBlock/>
                                                            <div className='wrapper'>
                                                                <img src={img.url} alt=""/>
                                                            </div>
                                                            <PagBar />
                                                            <button onClick = { props.delImgFromHistory }>Delete</button>
                                                        </>); 

    return (
        <div className='container'>
            { content }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        img: state.imgs[state.currentHistImg],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delImgFromHistory: () => dispatch(delImgFromHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
