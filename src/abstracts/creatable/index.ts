export abstract class CreatableUiElement {
	tagWrapper!: keyof HTMLElementTagNameMap;
	classes: string[];
	children: CreatableUiElement[];

	constructor() {
		this.children = [];
		this.classes = [];
	}

	addChild = (child: CreatableUiElement) => {
		this.children.push(child);
		return this;
	};

	setClasses = (classes: string[]) => {
		this.classes = [...this.classes, ...classes];
	};

	create = (): HTMLElement => {
		const element = document.createElement(this.tagWrapper);
		this.classes?.forEach((cssClass) => {
			element.classList.add(cssClass);
		});
		if (this.children.length) {
			this.children.forEach((child) => {
				const childElement = child.create();
				element.appendChild(childElement);
			});
		}
		return element;
	};
}
