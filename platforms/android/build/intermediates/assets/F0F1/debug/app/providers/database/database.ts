import { Injectable } from "@angular/core";
import { Couchbase } from "nativescript-couchbase";

@Injectable()
export class Database {
	// treat as singleton if any open instance
	private isInstantiated: boolean;
	private storage: any;

	public constructor() {
		if (!this.isInstantiated) {
			this.storage = new Couchbase("tinyurl");
			this.storage.createView("urls", "1", (document, emitter) => {
				if (document.type === "url") {
					emitter.emit(document._id, document);
				}
			});
			this.isInstantiated = true;
		}
	}

	public getDatabase() {
		return this.storage;
	}
}