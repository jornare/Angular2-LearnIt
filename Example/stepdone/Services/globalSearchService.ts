var instance = null;
export class GlobalSearchService {
	public value: string =  "asfd"
	constructor() {

	}
	static getInstance() {
		return instance || (instance = new GlobalSearchService());
	}
}
