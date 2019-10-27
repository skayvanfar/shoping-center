import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from './section/Header';
import Welcome from './section/Welcome';
import Products from './section/Products';
import Data from './../data';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products : Data,
            orders : []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(key) {
        if(this.state.products[key].available && this.state.orders.indexOf(key) == -1) {
            this.state.orders.push(key);
            this.setState((prevState) => {
                orders : prevState.orders
            });
        }
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="home" />
                    <Welcome title="Welcome To My Shop" />
                    <Products products={this.state.products} addToCart={this.addToCart} orders={this.state.orders}/>
                </Col>
            </Row>
        );
    }

}
