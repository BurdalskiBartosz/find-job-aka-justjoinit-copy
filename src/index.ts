import "./scss/index.scss";
import { MainPage } from "./page/Main";

class App {
	public root: HTMLDivElement;
	public Page: any;

	constructor() {
		this.root = document.querySelector("#app")!;
	}

	setPage = (Page: any) => {
		this.Page = Page;
		return this;
	};

	loadPage = () => {
		const page = new this.Page();
		this.root.appendChild(page.create());
	};
}
const app = new App();

app.setPage(MainPage).loadPage();
