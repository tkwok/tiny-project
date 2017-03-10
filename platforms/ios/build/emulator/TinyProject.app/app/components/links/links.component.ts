import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Database } from "../../providers/database/database";

@Component({
	selector: "links",
	templateUrl: "./components/links/links.component.html"
})


export class LinksComponent implements OnInit {
	public urls: any;

	public constructor(private router: Router, 
		private location: Location,
		private database: Database) {
		this.urls = [];
	}

	public ngOnInit() {
		this.location.subscribe(() => {
			this.urls = [];
			this.loadData();
		});
		this.loadData();
	}

	public createShrunkenUrl() {
		this.router.navigate(["shrink"]);
	}

	private loadData() {
		let rows = this.database.getDatabase().executeQuery("urls");
		for (let i=0; i<rows.length;i++) {
			this.urls.push(rows[i]);
		}
	}
}

