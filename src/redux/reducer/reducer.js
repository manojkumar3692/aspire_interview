import {GETGLOBALVALUE,SETNAVIGATIONMENU} from "../actions/action_constants";

const defaultGlobalValue = (state,action) => {
	let value = null ;
	let obj = {
		type:action.type,
		text : action.text,
		id:Math.random()
	}
	value = obj
	return value
}

const setNavigationMenu = (state,action) => {
	let value = null;
	let obj = {
		type:action.type,
		status:action.status,
		id:Math.random()
	}
	value = obj
	return value
}

const rootReducer = (state = [],action) => {
	switch (action.type) {
		case GETGLOBALVALUE :
			return defaultGlobalValue(state,action)
		case SETNAVIGATIONMENU:
			return setNavigationMenu(state,action)
		default :
			return state
	}
}


export default rootReducer