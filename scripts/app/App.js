import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from './section/Header';
import Welcome from './section/Welcome';

export default class App extends Component {

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="home" />
                    <Welcome title="Welcome To My Shop" />
                    {/*             //
                          // <Products />
                          // <Footer /> */}
                </Col>
            </Row>
        );
    }

}
