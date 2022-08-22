import type { CreatableUiElement } from "../abstracts/creatable";
import { Navigation } from "../components/Navigation/Navigation";

type MainLayoutSlotsNames = "top" | "bottom" | "main";

class MainLayout {
	private slots: Record<MainLayoutSlotsNames, CreatableUiElement | undefined>;

	constructor() {
		this.slots = {
			top: undefined,
			main: undefined,
			bottom: undefined
		};
	}

	assignSlot = (
		slotName: MainLayoutSlotsNames,
		element: CreatableUiElement
	) => {
		this.slots = {
			...this.slots,
			[slotName]: element
		};
	};

	create = () => {
		for (const slot in this.slots) {
			console.log(slot);
		}
	};
}

const nav = new Navigation();
const mainLayout = new MainLayout();
mainLayout.assignSlot("main", nav);

export { MainLayout };
