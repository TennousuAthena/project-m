import { Routes, Route } from 'react-router-dom';
import { Space, Flex, Empty } from 'react-vant';

import Layout from './layout';
import ReactComponent from './myReact';
import Home from './home';
import Question from './question';
import Settings from '../settings';
import Search from '../page/search';

function Router() {
  return (
    <div>
      <Layout />
      <Flex className="container" align="center">
        <Space
          className="main-space"
          direction="vertical"
          style={{
            padding: 30,
            width: '100%',
            backgroundColor: '#f2f2f2',
            boxSizing: 'border-box',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/react" element={<ReactComponent />} />

            <Route path="/马原">
              <Route
                path="顺序/:id"
                element={<Question subject="马原" mode="顺序" />}
              />
              <Route
                path="随机/:id"
                element={<Question subject="马原" mode="随机" />}
              />
              <Route
                path="测验/:id"
                element={<Question subject="马原" mode="测验" />}
              />
            </Route>

            <Route path="/毛概">
              <Route
                path="顺序/:id"
                element={<Question subject="毛概" mode="顺序" />}
              />
              <Route
                path="随机/:id"
                element={<Question subject="毛概" mode="随机" />}
              />
              <Route
                path="测验/:id"
                element={<Question subject="毛概" mode="测验" />}
              />
            </Route>

            <Route path="/settings" element={<Settings />}></Route>

            <Route path="/search/" element={<Search />}>
              <Route path="/search/:q" element={<Search />} />
            </Route>

            <Route
              path="*"
              element={
                <div>
                  <Empty description="404 Not Found" />
                </div>
              }
            />
          </Routes>
        </Space>
      </Flex>
    </div>
  );
}

export default Router;
