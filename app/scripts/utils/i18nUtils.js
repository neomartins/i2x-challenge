
export function translate(i18next, key, args) {
	var argList = [];
	var message = i18next(key);
	if(args != null && args != undefined){
		if(args.constructor == Array){
			argList = args;
		}else{
			argList[0] = args;
		}
		message = i18next(key, argList);
	}
	return message.unescapeHtml();
}

