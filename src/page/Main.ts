import { Navigation } from "../components/Navigation/Navigation";

abstract class Page {}

const navigation = new Navigation();
const element = navigation.create();

export class MainPage {
	create = () => {
		return element;
	};
}
