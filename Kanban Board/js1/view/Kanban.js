import Column from "./Column.js";

export default class Kanban {
	constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
			const columnView = new Column(column.id, column.title);

			this.root.appendChild(columnView.elements.root);
		});
	}

	static columns() {
		return [
			{
				id: 1,
				title: "Not completed"
			},
			{
				id: 2,
				title: "Working"
			},
			{
				id: 3,
				title: "Work done"
			}
		];
	}
}