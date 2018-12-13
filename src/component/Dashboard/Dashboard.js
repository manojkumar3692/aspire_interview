import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGlobalValue, setNavigationMenu } from '../../redux/actions/index';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import paymentAPI from '../../Networking/payments';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			paymentDetails:[],
			open: false,
		};
	}

	componentDidMount() {
		this.loader();
	}

	loader() {
		this.props.setNavigationMenu(true);
		this.getPaymentDetails()

	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	getPaymentDetails() {
		paymentAPI.getPaymentDetails().then((response) => {
			this.setState({paymentDetails:response})
		}).catch((error) => {
			alert('Err',error)
		})
	}


	render() {

		const styles = require('./dashboard.scss');
		return (
			<div className={styles.dashboard}>
				<Dialog
					onClose={this.handleClose}
					aria-labelledby="customized-dialog-title"
					open={this.state.open}
				>
					<DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
						Please confirm payment
					</DialogTitle>
					<DialogContent>
						<Typography gutterBottom>
							Sum of SGD1000 will be deducted from the bank account
						</Typography>
						<Typography gutterBottom>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
							lacus vel augue laoreet rutrum faucibus dolor auctor.
						</Typography>
						<Typography gutterBottom>
							Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
							scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
							auctor fringilla.
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Pay
						</Button>
					</DialogActions>
				</Dialog>
				<div className={styles.dashboardBreadNav}>
					<h1>Payment</h1>
				</div>
				<div>
					<Paper >
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>S.NO</TableCell>
									<TableCell>Loan Amount</TableCell>
									<TableCell>Loan Tenture</TableCell>
									<TableCell>Company</TableCell>
									<TableCell >Email</TableCell>
									<TableCell >Phone</TableCell>
									<TableCell >Country</TableCell>
									<TableCell >Action</TableCell>

								</TableRow>
							</TableHead>
							<TableBody>
								{
									this.state.paymentDetails.map((row,index) => {
										return (
											<TableRow key={row.index}>
												<TableCell component="th" scope="row">
													{index}
												</TableCell>
												<TableCell component="th" scope="row">
													{row.loanAmount}
												</TableCell>
												<TableCell >{row.loanTime}</TableCell>
												<TableCell >{row.companyName}</TableCell>
												<TableCell >{row.email}</TableCell>
												<TableCell >{row.mobile}</TableCell>
												<TableCell >{row.country}</TableCell>
												<TableCell >
													<Button onClick={this.handleClickOpen} classes={{root:styles.selectorButton}} >
														Pay
													</Button>
												</TableCell>
											</TableRow>
										)
									})
								}
							</TableBody>
						</Table>
					</Paper>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getGlobalValue, setNavigationMenu }, dispatch);
}

function mapStateToProps(state) {
	return {
		globalValueProps: state,
		setNavigationMenu: state
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
