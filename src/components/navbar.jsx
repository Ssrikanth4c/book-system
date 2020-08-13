import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {user_logout} from '../redux/action'

function Navbar(props) {
    let {isAuth, login_user}= props
    console.log(isAuth, login_user)

    return (
        <div className="mb-5">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/add_books" className="nav-link" >Add Books</Link>
                        </li>
                        <li className="nav-item ">
                            {
                            isAuth?<Link to="/" className="nav-link" onClick={props.user_logout} >{login_user} Logout</Link>:
                                    <Link to="/login" className="nav-link" >Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        isAuth: state.isAuth,
        login_user: state.login_user
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        user_logout: payload=>dispatch(user_logout(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Navbar)