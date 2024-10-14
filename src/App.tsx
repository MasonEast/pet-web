import React from "react";
import { Layout, Menu, Input, Card, Flex, Button, List, Avatar } from "antd";
import banner from "@/assets/imgs/banner.jpeg";

import ArticleList from "@/components/ArticleList";

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

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const App: React.FC = () => {
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
      <div className="content_wrapper">
        <Content className="content">
          <div className="left">
            <Card hoverable cover={<img alt="example" src={banner} />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card className="classify">
              <Flex wrap gap="small">
                {Array.from({ length: 24 }, (_, i) => (
                  <Button key={i} type="primary">
                    Button
                  </Button>
                ))}
              </Flex>
            </Card>
            <Card>
              <ArticleList />
            </Card>
          </div>
          <div className="right">
            <Card>
              <Button>发布帖子</Button>
              <Button>发布帖子</Button>
            </Card>
            <Card>
              <div>金牌代办推荐</div>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </Card>
            <Card hoverable cover={<img alt="example" src={banner} />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card hoverable cover={<img alt="example" src={banner} />}>
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Content>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
