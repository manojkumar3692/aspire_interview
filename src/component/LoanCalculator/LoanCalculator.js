import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGlobalValue, setNavigationMenu } from '../../redux/actions/index';
import { Link } from 'react-router-dom'
import Headers from '../../common/homeHeader';
import Footer from '../../common/homeFooter';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
class LoanCalculator extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			loanAmount:'',
			loanTime:'',
			labelWidth:0,
			companyName:'',
			icNumber:'',
			email:'',
			mobile:'',
			country:'',
			loan:[]
		}
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
		});
	}

	setLoanAmount(amount) {
		this.setState({loanAmount:amount})
	}

	setLoanTime(event) {
		this.setState({loanTime:event.target.value})
	}

	setCompanyName(event) {
		this.setState({companyName:event.target.value})
	}

	setIcNumber(event) {
		this.setState({icNumber:event.target.value})
	}
	setEmail(event) {
		this.setState({email:event.target.value})
	}
	setMobileNumber(event) {
		this.setState({mobile:event.target.value})
	}
	setCountry(event) {
		this.setState({country:event.target.value})
	}

	submitForm() {
		let arr = [];
		let loanDetails = {
			loanAmount:this.state.loanAmount,
			loanTime:this.state.loanTime,
			companyName:this.state.companyName,
			icNumber:this.state.icNumber,
			email:this.state.email,
			mobile:this.state.mobile,
			country:this.state.country
		}
		arr.push(loanDetails)
		localStorage.setItem("loan",JSON.stringify(arr))
		console.log('arr',arr)
		setTimeout(() => {
			this.props.history.push('/dashboard')
		}, 3000);

	}
	render() {
		const styles = require('./loancalculator.scss')
		console.log('Props',this.props)
		return (
			<div className={styles.loanCalculator}>
				<Headers/>
					<div className={styles.heading}>
						<h1>How much can Aspire provide you with?</h1>
						<p>Simply enter an amount you want to draw to find out.</p>
					</div>
				<div className={styles.formModule}>
					<div className={styles.formInput}>
					<TextField
						id="outlined-name"
						label="Loan Amount"
						onChange={this.setLoanAmount('name')}
						margin="normal"
						variant="outlined"
					/>
					</div>
					<div className={styles.formInput}>
						<FormControl variant="outlined" style={{marginTop:'15px'}}>
							<InputLabel
								ref={ref => {
									this.InputLabelRef = ref;
								}}
								htmlFor="outlined-age-simple"
							>
								Tenture
							</InputLabel>
							<Select
								style={{width:'200px',height:'58px'}}
								value={this.state.loanTime}
								onChange={this.setLoanTime.bind(this)}
								input={
									<OutlinedInput
										labelWidth={this.state.labelWidth}
										name="Months"
										id="outlined-age-simple"
									/>
								}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={1}>One Months</MenuItem>
								<MenuItem value={2}>Two Months</MenuItem>
								<MenuItem value={3}>Three Months</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className={styles.formInput}>
						<TextField
							id="outlined-name"
							label="Company Name"
							onChange={this.setCompanyName.bind(this)}
							margin="normal"
							variant="outlined"
						/>
					</div>

					<div className={styles.formInput}>
						<TextField
							id="outlined-name"
							label="IC Number"
							onChange={this.setIcNumber.bind(this)}
							margin="normal"
							variant="outlined"
						/>
					</div>
					<div className={styles.formInput}>
						<TextField
							id="outlined-name"
							label="Email"
							onChange={this.setEmail.bind(this)}
							margin="normal"
							variant="outlined"
						/>
					</div>
					<div className={styles.formInput}>
						<TextField
							id="outlined-name"
							label="Mobile Number"
							onChange={this.setMobileNumber.bind(this)}
							margin="normal"
							variant="outlined"
						/>
					</div>
					<div className={styles.formInput}>
						<TextField
							id="outlined-name"
							label="Country"
							onChange={this.setCountry.bind(this)}
							margin="normal"
							variant="outlined"
						/>
					</div>
				</div>
				<div className={styles.action}>

						<Button onClick={this.submitForm.bind(this)} classes={{root:styles.actionButton,label:styles.labelColor}}>
							Apply
						</Button>
				</div>
				<div className={styles.footerSpace}>

				</div>

				<Footer/>
			</div>
		)
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
)(LoanCalculator);