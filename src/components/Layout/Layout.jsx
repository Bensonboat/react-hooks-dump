import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LayoutContent from '../Layout_content/Layout_content'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class HomeLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" style={{ color: 'white', padding: '20px', fontSize: '20px' }}>Logo</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <LinkContainer to="/content">
                  <span>Option 1</span>
                  </LinkContainer>
                </Menu.Item>
              {/* <LinkContainer to="/content">123</LinkContainer> */}
              <LinkContainer to="/">

              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              </LinkContainer>

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              {/* 內容 */}
              {/* <Route path="/content" component={LayoutContent}/> */}
              <Route exact path="/" render= {(props) => <LayoutContent {...props} content='init home page here'/>}/>
              <Route path="/content" render= {(props) => <LayoutContent {...props} content='878787'/>}/>
              {/* <LayoutContent content='998877' /> */}
              {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default HomeLayout