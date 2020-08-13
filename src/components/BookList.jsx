import React from 'react';
export default class BookList extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {data}= this.props
        return(
            <div>
                <tr>
                    <td>{data.Category}</td>
                    <td>{data.Title}</td>
                    <td>{data.Price}</td>
                    <td>{data.Quantity}</td>
                    <td>{data.Author}</td>
                </tr>
            </div>
        )
    }
}