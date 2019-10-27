import React , {Component} from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

export default class ButtonCart extends Component {
  constructor(props) {
    super(props);

    this.renderMenu = this.renderMenu.bind(this);
  }
  handleMenuClick(e) {
    console.log('click', e);
  }

  renderMenu(key) {
    return <Menu.Item key={key}>{ this.props.products[this.props.orders[key]].title} <Icon type="close" style={{ margin: 5 }}/></Menu.Item>
  }

  render() {

    let menu = (
      <Menu onClick={(key) => this.props.removeOfCart(key)}>
          {Object.keys(this.props.orders).map(this.renderMenu)}
      </Menu>
    );

    return (
      <div className="cart-button">
        <Dropdown overlay={menu}>
          <Button type="primary" style={{ marginLeft : 8 }}>
            Your Cart <Icon type="shopping-cart" />
          </Button>
        </Dropdown>
      </div>
    );
  }


}
