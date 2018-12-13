import React,{PureComponent} from 'react';
import {NotificationImportantOutlined} from '@material-ui/icons';


class TopHeader extends PureComponent {
	render() {
		const styles = require('./topHeader.scss');
		return (
			<div>
			{
				this.props.isVisible ? <div className={styles.header}>
				<header className={styles.headerContainer}>
					<h1>Welcome Manoj Kumar S</h1>
				</header>
				<NotificationImportantOutlined className={styles.iconColor} />
			</div>:<div></div>
			}
			</div>

		)
	}
}

export default TopHeader;