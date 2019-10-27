import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from './section/Header';
import Welcome from './section/Welcome';

export default class Contact extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:contact" />
              <Welcome title="Welcome To About Contact" />
          </Col>
        </Row>
      );
  }
}
