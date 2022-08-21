// import { CreatableUiElement } from "../../js/types";

import { CreatableUiElement } from "../../abstracts/creatable";

class Navigation extends CreatableUiElement {
	tagWrapper: keyof HTMLElementTagNameMap;

	constructor() {
		super();
		this.tagWrapper = "nav";
	}
}

export { Navigation };
