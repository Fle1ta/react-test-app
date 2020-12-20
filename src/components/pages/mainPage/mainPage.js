import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchImg } from "../../../redux/actions/actions";
import PictureBlock from '../../pictureBlock';
import '../Page.css';


const MainPage = (props) => {

    useEffect(() => {
        if(props.loading || !props.img){
            props.fetchImg();
        }
    }, []);


    let content = props.loading ? (<h3>loading</h3>) : (<PictureBlock img = {props.img}/>)  


    return (
            <div className="container">
                <div className="wrapper">
                    { content }
                </div>
                
                <button onClick = { () => props.fetchImg()}>Refresh</button>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        img: state.imgs[0],
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImg: () => dispatch(fetchImg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);