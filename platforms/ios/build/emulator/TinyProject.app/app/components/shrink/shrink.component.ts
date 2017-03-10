import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";
import { Location } from "@angular/common";
import { Database } from "../../providers/database/database";
import * as Toast from "nativescript-toast";

@Component({
	selector: "shrink",
	templateUrl: "./components/shrink/shrink.component.html"
})
export class ShrinkComponent {
	public longUrl: string;

	public constructor(private http: Http, 
		private location: Location, 
		private database: Database) {

		this.longUrl = "";
	}

	public shrink() {
		if (this.longUrl) {
			this.http.get("https://tinyurl.com/api-create.php?url=" + this.longUrl)
				.map(result => String(result.text()))
				.do(result => console.log("Result: ", result))
				.subscribe(result => {
					this.database.getDatabase().createDocument({
						"type": "url",
						"long": this.longUrl,
						"short": result
					});
					this.location.back();
				}, error => {
					console.log(error);
				});
		} else {
			console.log("There needs to be a value");
		}
	}
}