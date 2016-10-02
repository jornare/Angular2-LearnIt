import {Control} from 'angular2/angular2';

export var CustomValidators = {
	atComputas(control:Control) {
		if(!control.value.match(/@computas.com$/)) {
			return {
				notAtComputas: true
			};
		}
		return null; // return null = valid
	}
}