import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  CompassCalibrationOutlined,
  MoneyOutlined,
  SettingsOutlined,
  StoreOutlined,
  PowerSettingsNewOutlined,
  AccountCircleOutlined,
	AddShoppingCartOutlined
} from '@material-ui/icons';
class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showAdminMenu: false
    };
    // console.log('Constructor Props in Navigation',props)
  }

  showAdminMenu() {
    this.setState({ showAdminMenu: !this.state.showAdminMenu });
  }
  pushUser() {}
  navigateTo = path => {
    // this.props.history.push(path);
  };
  render() {
    // console.log('render Props in Navigation',this.props)
    const styles = require('./navigation.scss');
    return (
      <div>
        {this.props.isVisible ? (
          <div className={styles.navigation}>
            <div className={styles.navigationContainer}>
              <div className={styles.logo}>
	              <img src="https://aspire-cap.com/static/images/logo.png"/>
              </div>
              <div className={styles.menuList}>
                <ul>
                  <li>
                    <CompassCalibrationOutlined
                      className={styles.iconColor}
                      fontSize="large"
                    />
                    <h1>Payment</h1>
                  </li>
                  {/*<li>*/}
                    {/*<MoneyOutlined*/}
                      {/*className={styles.iconColor}*/}
                      {/*fontSize="large"*/}
                    {/*/>*/}
                    {/*<h1>Stock</h1>*/}
                  {/*</li>*/}
                  <li onClick={this.showAdminMenu.bind(this)}>
                    <AccountCircleOutlined
                      className={styles.iconColor}
                      fontSize="large"
                    />
                    <h1>Loan</h1>
                  </li>
                  {this.state.showAdminMenu && (
                    <li className={styles.subList}>
                      <Link to="/dashboard">
                        <h1>Statement</h1>
                      </Link>
                    </li>
                  )}
                  <li>
                    <StoreOutlined
                      className={styles.iconColor}
                      fontSize="large"
                    />
                    <Link to="/dashboard">
                      <h1>Profile</h1>
                    </Link>
                  </li>
	                <li>
		                <AddShoppingCartOutlined
			                className={styles.iconColor}
			                fontSize="large"
		                />
		                <Link to="/dashboard">
			                <h1>Support</h1>
		                </Link>
	                </li>
                </ul>
              </div>
              <div className={styles.menuListBottom}>
                <ul>
                  <li>
                    <SettingsOutlined
                      className={styles.iconColor}
                      fontSize="large"
                    />
                    <h1>Settings</h1>
                  </li>
                  <li>
                    <PowerSettingsNewOutlined
                      className={styles.iconColor}
                      fontSize="large"
                    />
                    <Link to="/">
                      <h1>Logout</h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Navigation;
