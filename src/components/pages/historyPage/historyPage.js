import React, { useState } from 'react';
import { connect } from 'react-redux';
import { delImgFromHistory } from '../../../redux/actions/actions';
import '../Page.css';
import PictureBlock from '../../pictureBlock';
import InfiniteScroll from 'react-infinite-scroll-component';

const HistoryPage = ({imgs, delImgFromHistory}) => {

    const [hasMore, setHasMore] = useState(true);
    const [scrolledTimes, setScrolledTimes] = useState(1);

    const shownImgs = imgs.slice(0, scrolledTimes * 5);

    if(!imgs.length){
        return (
            <div className='container'>
                <div>History is empty, please return to main page.</div>
            </div>
        )
    }

    const addMoreImgs = () => {
        if( shownImgs.length === imgs.length) {
            setHasMore(false);
            return;
        }
        setScrolledTimes(scrolledTimes + 1);
    }

    return (
        <div className='container'>
            <InfiniteScroll
                dataLength={ shownImgs.length }
                hasMore={ hasMore }
                next={ addMoreImgs }
            >
            { shownImgs.map((img, index) => {
                return (
                    <div className='img__container' key={ img.id }>
                        <PictureBlock withInfo img = { img }/>
                        <button onClick = { () => delImgFromHistory(index) }>Delete</button>
                    </div>
                )
                
            })}
            </InfiniteScroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        imgs: state.imgs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delImgFromHistory: (index) => dispatch(delImgFromHistory(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
