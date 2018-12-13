import React,{PureComponent} from 'react';
import Button from '@material-ui/core/Button';
import {Delete,MonetizationOn,DonutSmall,Security,Stars,NoEncryption} from '@material-ui/icons';
class HomeFooter extends PureComponent {
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
								<li>
									© 2011–2018 Aspire co.
								</li>
								<li>Legal & Privacy</li>
								<li>Facebook</li>
								<li>LinkedIn</li>
								<li>About</li>
								<li>Team</li>
							</ul>
						</div>
					</div>
					<div className={styles.footerContent}>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
					</div>
				</header>
			</div>
		)
	}
}


export default HomeFooter