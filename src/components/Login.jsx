import React from 'react';
import {connect} from 'react-redux';
import {user_check} from '../redux/action';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.props)
        this.props.user_check(this.state)
        console.log(this.props.isAuth)
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        if(this.props.isAuth){
            return <Redirect  to='/'/>
        }else
        return(
            <div>
                <form className='m-2' onSubmit={this.handleSubmit}>
                    <div className="h1 text-center text-info">Login Page</div>
                    <div className="form-group text-center">
                        <div>
                            <label className='text-center' htmlFor="username">Users Name</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="username"
                            placeholder='Username'
                            autoComplete='off'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="passwword">Password</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="password" 
                            name="password"
                            placeholder='Password'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className='mx-2 '>
                        <button type="submit" className='font-weight-bold btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        isAuth: state.isAuth
    }
}
const mapDispatchProps=dispatch=>{
    return{
        user_check: payload=>dispatch(user_check(payload))
    }
}
export default connect(mapStateToProps,mapDispatchProps)(Login)