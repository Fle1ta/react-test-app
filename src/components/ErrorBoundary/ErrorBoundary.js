import React from 'react';
import { connect } from 'react-redux';


const ErrorBoundary = (props) => {
    if(props.isError){
        return <div>Something went wrong...</div>
    }

    return (
        <>
            {props.children}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isError: state.isError
    }
}

export default connect(mapStateToProps)(ErrorBoundary)