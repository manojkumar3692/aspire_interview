import React,{PureComponent} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
class HomeHeader extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		const styles = require('./homeheader.scss');
		return (
			<div className={styles.header}>
				<header>
					<div className={styles.headerContainer}>
						<div className={styles.headerLeft}>
							<img src="https://aspire-cap.com/static/images/logo.png"/>
						</div>
						<div className={styles.headerRight}>
							<ul>
								<li>Calculator</li>
								<li>About Us</li>
								<li>FAQ</li>
								<li>Partner</li>
								<li>|</li>
								<li><Link to="/login">Login</Link></li>
								<li>
									<Link to="/signup">
										<Button classes={{root:styles.actionButton,label:styles.labelColor}}>
											Sign Up
										</Button>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</div>
		)
	}
}


export default HomeHeader