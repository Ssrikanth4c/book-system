import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookList from './BookList';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option: '',
            sortPrice:'AESC',
            sortQty:'AESC'
        }
    }
    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }
    componentDidUpdate(){
        console.log(this.props)
    }

    render(){
        const {data} =this.props
        return(
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="dropdown ">
                            <select onChange={this.handleChange} >
                                <option value="all">All</option>
                                <option value="LifeStyle">LifeStyle</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                            </select>
                        </div>
                        <p className='ml-3'> sort by Price:</p>
                        <div className="dropdown">
                            <select onChange={e=> this.setState({sortPrice: e.target.value})} >
                                <option value="default">Default</option>
                                <option value="ASCE">ASCE</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div>
                        <p className='ml-3'> sort by Quantity:</p>
                        <div className="dropdown ">
                            <select onChange={e=> this.setState({sortQty: e.target.value})} >
                                <option value="default">Default</option>
                                <option value="ASCE">ASCE</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='col'>
                        <div className='text-center border'>
                            <table className='table'>
                            <thead>
                                <th scope='col'>Category</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Price</th>
                                <th scope='col' >Qty</th>
                                <th scope='col'> Author</th>
                            </thead>
                            <tbody>
                            {
                                data?.filter(item=>{
                                    if(item.Category === this.state.option)
                                        return true
                                    if(this.state.option ==='all' || this.state.option==='')
                                        return true
                                })
                                .sort((a,b)=>{
                                    if(this.state.sortPrice==='ASCE')
                                        return a.Price- b.Price
                                    else if(this.state.sortPrice==='DESC')
                                        return b.Price- a.Price
                                    else return 0
                                })
                                .sort((a,b)=>{
                                    if(this.state.sortQty==='ASCE')
                                        return a.Price- b.Price
                                    else if(this.state.sortQty==='DESC')
                                        return b.Price- a.Price
                                    else return 0
                                })
                                .map((ele, ind)=>{
                                    return(
                                        <tr key={ind}>
                                            <td>{ele.Category}</td>
                                            <td><Link to={`/description/${ele.id}`} >{ele.Title}</Link></td>
                                            <td>{ele.Price}</td>
                                            <td>{ele.Quantity}</td>
                                            <td>{ele.Author}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps=state=>{
    return{
        data: state.bookList
    }
}
export default connect(mapStateToProps, null) (Home)