
export default  {


	getPaymentDetails () {
		let payment = JSON.parse(localStorage.getItem('loan'))
		return new Promise(function(resolve,reject) {
			if(payment != undefined) {
				resolve(payment)
			}else {
				let error = 'Failed to load payment details'
				reject(error)
			}
		})
	}

}