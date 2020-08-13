import React from 'react';
import {connect} from 'react-redux';
import {add_books} from '../redux/action'
import {Redirect} from 'react-router-dom';

class Books extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Category:'',
            Price:0,
            Author:'',
            Quantity:0,
            img:'',
            Description:'',
            isT:false
        }
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleChange=(e)=>{
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        this.props.add_books(this.state)
        this.setState({
            isT:true
        })
    }
    render(){
        if(this.state.isT)
            return <Redirect to='/' />
        else
        return(
            <div>
                <h4 className='text-danger'>ADD BOOKS</h4>
                <div>
                <form className='m-2' onSubmit={this.handleSubmit}>
                    {/* category */}
                    <div className="form-group text-center md-0 pd-0">
                        <label>select Category</label><br/>
                        {/* <div className="dropdown "> */}
                            <select className=' px-4' name='Category' onChange={this.handleChange} >
                                <option value="LifeStyle">LifeStyle</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                            </select>
                        {/* </div> */}
                    </div>
                    {/* price */}
                    <div className="form-group text-center">
                        <div>
                            <label className='text-center' htmlFor="price">Price</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="Price"
                            placeholder='Price'
                            autoComplete='off'
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* Author */}
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="Author">Author</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="Author"
                            placeholder='Author'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    {/* title */}
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="Title">Title</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="Title"
                            placeholder='Title'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    {/* Quantity */}
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="Quantity">Quantity</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="number" 
                            name="Quantity"
                            placeholder='Quantity'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    {/* img */}
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="img">imgage URL</label>
                        </div>
                        <input 
                            className='text-center mx-2'
                            type="text" 
                            name="img"
                            placeholder='image URL'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>
                    {/* Description */}
                    <div className="form-group text-center">
                        <div>
                            <label htmlFor="Description">Description</label>
                        </div>
                        <textarea 
                            className='text-center mx-2'
                            name="Description"
                            placeholder='Description'
                            autoComplete='off'
                            onChange={this.handleChange} 
                        />
                    </div>

                    <div className='mx-2 '>
                        <button type="submit" className='font-weight-bold btn btn-primary'>ADD</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
const mapDispatchProps=dispatch=>{
    return{
        add_books:(payload)=>dispatch(add_books(payload))   
    }
}
export default connect(null, mapDispatchProps)(Books)