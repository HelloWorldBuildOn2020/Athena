import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PieChartOutlined, IdcardOutlined, SettingOutlined } from "@ant-design/icons";
import Overview from "../Overview";
import Analytics from "../Analytics";
import EmailSub from "../EmailSub";
import Logo from "../../athenalogo.png"

const Sider = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo">
          <img src={Logo} style={{ padding: 5, margin: '16px 0' }}/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <span>Overview</span>
            <Link to="/Overview" />
          </Menu.Item>
          <Menu.Item key="2" icon={<IdcardOutlined />}>
            Email Subscription
            <Link to="/EmailSub" />
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Analytics
            <Link to="/Analytics" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>
          <Route exact path="/Overview" component={Overview} />
          <Route exact path="/Analytics" component={Analytics} />
          <Route exact path="/EmailSub" component={EmailSub} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Athena of Build On Thailand ©2020 Created by HelloWorld
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sider;
