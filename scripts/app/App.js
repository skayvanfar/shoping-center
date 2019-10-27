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
            products : Data
        }
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="home" />
                    <Welcome title="Welcome To My Shop" />
                    <Products products={this.state.products } />
                </Col>
            </Row>
        );
    }

}
