import React from 'react';
import {connect} from 'react-redux';

const Description =props=>{
   console.log(props.match)
   let {id}= props.match.params;
   let {data}= props
   console.log(data)
   let selectedBook= data.find(item=> item.id == id)
   console.log(selectedBook)
    return(
        <div className='container'>
            <div className='row'>
                <div className="col-4">
                    <img src={selectedBook.img} alt={selectedBook.title} height={250} weight={250} />
                </div>
                <div className="col-8">
                    <h4 className='text-left font-weight-bold mb-0 pb-0 text-info '>{selectedBook.Title}</h4>
                    <p className='text-justify'>{selectedBook.Description}</p>
                    <div className="d-flex">
                    Catergory:<p className='badge badge-primary mx-2 p-2'>{selectedBook.Category}</p>
                    Price:<p className='badge badge-warning mx-2 p-2'>{selectedBook.Price}</p>
                    Quantity:<p className='badge badge-danger mx-2 p-2'>{selectedBook.Quantity}</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        data: state.data
    }
}
export default connect(mapStateToProps, null)(Description);