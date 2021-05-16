import { ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";

const Layout = styled.div`
  display: flex;
  align-self: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 13vw;
  z-index: 2;
  overflow: hidden;
  background-color: rgba(255, 243, 213, 0.7);
`;

const Content = styled.main`
  width: max-content;
  height: max-content;
  padding: 0 2vw;
  z-index: 2;
`;

interface Routes {
  path: string;
  component: ReactNode;
}

const routes: Routes[] = [
  { path: "/", component: <Home /> },
  { path: "/gallery", component: <Gallery /> },
  { path: "/about", component: <About /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />

        {/* Route Animations */}
        <TransitionGroup component={null}>
          <CSSTransition
            classNames="routeAnim fade"
            timeout={{ enter: 500, exit: 500 }}
          >
            {/* Page Renders | Routing */}
            <Switch>
              <ErrorBoundary>
                {routes.map((route: Routes) => (
                  <Route exact path={route.path} key={route.path}>
                    <Content className="routeAnim fade">
                      {route.component}
                    </Content>
                  </Route>
                ))}
              </ErrorBoundary>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
