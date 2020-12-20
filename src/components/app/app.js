import React from 'react';
import Header from '../header/';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import MainPage from '../pages/mainPage';
import HistoryPage from '../pages/historyPage';
import ErrorBoundary from "../ErrorBoundary"


const App = () => {
    return  (

        <Router>
                <Header/>
                <Switch>
                    
                    <Route path="/history" >
                        <HistoryPage/>
                    </Route> 
                    <Route path="/" >
                        <ErrorBoundary>
                            <MainPage/>
                        </ErrorBoundary>
                    </Route>
                </Switch>
        </Router>
            
    )
}

export default App;