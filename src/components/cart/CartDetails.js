import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import {Button,Table} from "reactstrap"
class CartDetails extends Component {
  removeFromCart(cartItem){
    this.props.actions.removeFromCart(cartItem)
  }
  render() {
    return (
      <div>
        <Table bordered>
          <thead>
            <tr >
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (

              <tr key= {cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td >{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td><Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>Sil</Button></td>
              </tr>

            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetails)
