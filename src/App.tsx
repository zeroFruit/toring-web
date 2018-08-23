import * as React from "react";
import "./App.css";
import { Home } from "scenes/Home";
import { Viewer } from "scenes/Viewer";
import { Route, Switch } from "react-router-dom";
import styled, { injectGlobal } from "services/styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { History } from "history";

injectGlobal`
  body {
      margin: 0;
      box-sizing: border-box;
  }
    
  * {
      box-sizing: inherit;
  }
`;

interface IWrapperProps {
    transitionDuration: number;
}
const Wrapper = styled<IWrapperProps, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity ${props => props.transitionDuration}ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity ${props => props.transitionDuration}ms ease-in;
    }
`;

interface IAppProps {
    history: History;
}

class App extends React.Component<IAppProps> {
    public render() {
        const { history } = this.props;
        return (
            <Wrapper>
                <TransitionGroup>
                    <CSSTransition key={history.location.key} classNames={"fade"} timeout={{ enter: 300, exit: 300 }}>
                        <Switch>
                            <Route path="/" exact={true} component={Home} />
                            <Route path={"/viewer"} component={Viewer} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Wrapper>
        );
    }
}

export default App;
