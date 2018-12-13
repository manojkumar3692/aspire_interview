import React,{PureComponent} from 'react';
import { Link } from 'react-router-dom'
import Headers from '../../common/homeHeader';
import Footer from '../../common/homeFooter';
import Button from '@material-ui/core/Button';
import {Delete,MonetizationOn,DonutSmall,Security,Stars,NoEncryption} from '@material-ui/icons';

class Home extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		const styles = require('./home.scss')
		return (
			<div className={styles.home}>
				<Headers/>
				<div className={styles.homeHeader}>
					<div className={styles.landingContent}>
						<div>
							<h1>Finance your business the right way 100% Online. Same Day !</h1>
							<h2>Small business funding shouldn't be complicated or time-consuming , so we designed a better way</h2>
							<Link to="/loan-calculator">
							<Button classes={{root:styles.selectorButton}}>
								Apply Now
							</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.subHeader}>
					<h1>Aspire is the fastest and simplest way for small businesses to get funding</h1>
				</div>
				<div className={styles.modules}>
					<div className={styles.modulesText}>
						<div className={styles.separator}>

						</div>
						<div className={styles.separatorText}>
							<h1>Discover Intelligent Modules</h1>
						</div>
						<div className={styles.separator}>

						</div>
					</div>
					<div className={styles.moduleListContainer}>
						<div className={styles.modulesList}>
							<div>
								<div className={styles.topShadow}>
								</div>
								<MonetizationOn className={styles.iconColor} fontSize="large"/>
								<h2>Complete application</h2>
								<h1>100% online</h1>
							</div>
						</div>
						<div className={styles.modulesList}>
							<div>
								<div className={styles.topShadow}>
								</div>
								<DonutSmall className={styles.iconColor} fontSize="large"/>
								<h2>Unlock working capital</h2>
								<h1>$100,000</h1>
							</div>
						</div>
						<div className={styles.modulesList}>
							<div>
								<div className={styles.topShadow}>
								</div>
								<Security className={styles.iconColor} fontSize="large"/>
								<h2>Tell us about your business</h2>
								<h1>24 hours</h1>
							</div>
						</div>
						<div className={styles.modulesList}>
							<div>
								<div className={styles.topShadow}>
								</div>
								<Stars className={styles.iconColor} fontSize="large"/>
								<h2>Sign a contract</h2>
								<h1>Same Day</h1>
							</div>
						</div>
						<div className={styles.modulesList}>
							<div>
								<div className={styles.topShadow}>
								</div>
								<NoEncryption className={styles.iconColor} fontSize="large"/>
								<h2>Module of</h2>
								<h1>Transit Risk</h1>
							</div>
						</div>
					</div>
					<div className={styles.modulesDetails}>
						<h1>Small business funding shouldn't be complicated or time-consuming</h1>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
					</div>
				</div>
				<div className={styles.subHeading}>
					<div className={styles.landingContent}>
						<div>
							<h1>Ready To Begin ?</h1>
							<h2>Enroll in your program and build the best future,Today</h2>
							<Link to="/signup">
								<Button classes={{root:styles.selectorButton}} >
									SIGN UP NOW
								</Button>
							</Link>
							<Button classes={{root:styles.customerSupportButton}}>
								LET US CALL YOu
							</Button>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Home