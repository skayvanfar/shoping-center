import React , {Component} from 'react'
import { Row , Col , Button } from 'antd';


import Header from './section/Header';
import Welcome from './section/Welcome';

export default class Contact extends Component {

    handleSubmit(e) {
        e.preventDefault();
        let DataForm = {
            name : this.refs.name.value,
            email : this.refs.email.value,
            message : this.refs.message.value,
        }
        console.log(DataForm);
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={12}>
                    <Header SelectedMenu="morepage:contact" />
                    <Welcome title="Welcome To About Contact" />
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <h2>Contact Form</h2>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label">
                                        <label className="">Name</label>
                                    </div>
                                    <div className="">
                                        <div className="ant-form-item-control">
                                            <input type="text" name="name" placeholder="Please enter your name" ref="name" className="ant-input ant-input-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label">
                                        <label className="">Email</label>
                                    </div>
                                    <div className="">
                                        <div className="ant-form-item-control">
                                            <input type="text" name="email" placeholder="Please enter your email" ref="email" className="ant-input ant-input-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="ant-form-item-label">
                                        <label className="">Message</label>
                                    </div>
                                    <div className="">
                                        <div className="ant-form-item-control">
                                            <textarea name="message" placeholder="Please enter your message" ref="message" className="ant-input ant-input-lg"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-row ant-form-item">
                                    <div className="">
                                        <div className="ant-form-item-control">
                                            <Button type="primary" htmlType="submit">Send</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
