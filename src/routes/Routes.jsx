import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Books from '../components/Books';
const NotFound=()=>{
    return <h1>404: Not Found</h1>
}
function Routes(props){
    return(
        <Switch>
            <Route  exact path='/' render={()=><Home />} />
            <Route  path="/add_books" render={()=><Books />} />
            <Route path='/login' render={()=> <Login />} />
            <Route component={NotFound} />
        </Switch>
    )
}
export default Routes