import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import store from '../../redux/store/store';
import Navigation from '../../common/Navigation/Navigation';
import TopHeader from '../../common/topHeader/TopHeader';
import Home from "../Home/Home";
import LoanCalculator from "../LoanCalculator/LoanCalculator";
import Dashboard from "../Dashboard/Dashboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldNavBeVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state.shouldNavBeVisible = nextProps.setNavigationMenu.status;
  }

  render() {
    const styles = require('./App.scss');
    return (
      <BrowserRouter>
        <div
          className={
            this.state.shouldNavBeVisible
              ? styles.appContainer
              : { paddingLeft: '0rem' }
          }
        >
          <Navigation isVisible={this.state.shouldNavBeVisible} />
          <TopHeader isVisible={this.state.shouldNavBeVisible} />
          <Provider store={store}>
            <Switch>
              {/*<Route exact path="/" component={Landing}/>*/}
              <Route exact path="/" component={Home} />
	            <Route  path="/dashboard" component={Dashboard} />
                <Route  path="/loan-calculator" component={LoanCalculator} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    setNavigationMenu: state
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
