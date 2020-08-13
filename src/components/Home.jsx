import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option: ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }
    componentDidUpdate(){
        console.log(this.props.data)
    }

    render(){
        const {data} =this.props
        return(
            <div className='container row'>
                <div className="col">
                    <div className="dropdown">
                    <select onChange={this.handleChange} >
                            <option value="all">All</option>
                            <option value="LifeStyle">LifeStyle</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data: state.data
    }
}
export default connect(mapStateToProps, null) (Home)