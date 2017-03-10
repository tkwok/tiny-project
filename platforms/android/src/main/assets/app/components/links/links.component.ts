import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Database } from "../../providers/database/database";
import * as Utility from "utils/utils";

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

	public launchUrl(url: string) {
		Utility.openUrl(url);
	}

	private loadData() {
		let rows = this.database.getDatabase().executeQuery("urls");
		rows.forEach((item) => {
			this.urls.push(item);
		});
	}
}

