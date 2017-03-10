import { Component } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
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
	private googleApiKey: string = "";

	public constructor(private http: Http, 
		private location: Location, 
		private database: Database) {

		this.longUrl = "";
	}

	public shrink() {
		if (this.longUrl) {
			let headers = new Headers({"Content-Type": "application/json"});
			let options = new RequestOptions({ headers: headers});

			this.http.post("https://www.googleapis.com/urlshortener/v1/url?key=" + this.googleApiKey, JSON.stringify({longUrl: this.longUrl}), options)
				.map(result => result.json())
				.do(result => console.log("Result: ", JSON.stringify(result)))
				.subscribe(result => {
					this.database.getDatabase().createDocument({
						"type": "url",
						"long": this.longUrl,
						"short": result.id
					});
					this.location.back();
				}, error => {
					console.log(error);
				});
		} else {
			Toast.makeText("A valid long URL is required").show();
		}
	}
}