import {GETGLOBALVALUE, SETNAVIGATIONMENU} from './action_constants';


export const getGlobalValue = (text) => {
	const action = {
		type:GETGLOBALVALUE,
		text
	}
	return action;
}

export const setNavigationMenu = (text) => {
	const action = {
		type:SETNAVIGATIONMENU,
		status:text
	}
	return action
}