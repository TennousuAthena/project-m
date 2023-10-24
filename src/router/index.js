import { Routes, Route } from "react-router-dom"
import { Space, Flex } from "react-vant";

import Layout from "./layout"
import ReactComponent from "./myReact";
import Home from './home';

function Router() {
  return (
    <div>
        <Layout />
        <Flex
        className="container"
        align="center">    
          <Space
            className="main-space"
            direction="vertical"
            style={{
              padding: 30,
              width: "100%",
              backgroundColor: "#f2f2f2",
              boxSizing: "border-box",
            }}
          >

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/index" element={<Home />}></Route>
          <Route path="/react" element={<ReactComponent />}></Route>

          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
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
