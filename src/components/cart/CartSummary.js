import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge,NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { bindActionCreators } from 'redux'
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"

class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName+" sepetten silindi")
    }
    renderEmpty() {
        return (
            <div>
                <NavItem>
                    <NavLink>
                        Sepet Boş
                    </NavLink>
                </NavItem>
            </div>
        )
    }
    renderSummary() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav >
                    <DropdownToggle caret nav >
                        Sepetiniz
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.props.cart.map(cartItem => (
                            <DropdownItem key= {cartItem.id}>
                                <Badge color="danger" onClick= {()=>this.removeFromCart(cartItem.product)}>-</Badge>
                                {cartItem.product.productName}
                                <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))}


                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to= {"/cartDetails"}>Sepete Git</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)