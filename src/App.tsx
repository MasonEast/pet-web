import React from "react";
import { Layout, Menu, theme, Input, Card } from "antd";

import "./assets/global.less"; // 引入全局 less 样式
import "./App.less";

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;

const items = [
  {
    key: 1,
    label: "主页",
  },
  {
    key: 2,
    label: "城市",
  },
  {
    key: 3,
    label: "服务",
  },
  {
    key: 4,
    label: "主页",
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onSearch = (value: string) => console.log(value);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          className="menu_left"
        />
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          className="search"
        />
        <Menu mode="horizontal" className="menu_right">
          <Menu.Item key="5">登录</Menu.Item>
          <Menu.Item key="6">注册</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 48px", height: "3000px" }}>
        <div
          className="content"
          style={{
            background: colorBgContainer,
            minHeight: 600,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src="/banner.jpeg" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
