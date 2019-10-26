import React , {Component} from 'react'
import { Row , Col , Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current : this.props.SelectedMenu
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault ;
    console.log(this);
    this.setState({
      current : e.key
    });
  }

  render() {
    return (
        <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
          <Menu.Item key="home">
              <Icon type="home" /> Home
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />Products
          </Menu.Item>
          <Menu.Item key="alipay">
            <a href="https://roocket.ir" target="_blank">Example - Link</a>
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />More Page</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="aboutpage">About Page</Menu.Item>
              <Menu.Item key="contactpage">Contact Us</Menu.Item>
            </MenuItemGroup>
         </SubMenu>
        </Menu>
    )
  }
}
