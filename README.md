# tiny-project

## Google URL shortener iOS/Android App
- [x] NativeScript/TypeScript/Angular 2
- [x] Couchbase
- [x] Using Google URL shortener REST API
- [x] RxJS Observable

**Ideas For This Project**
- Continual development (better UI, more secure REST)
- Serve as base project for future projects

**Requirements Before Building**
- Fork this project (of course)
- Latest NodeJS installed
- Latest NativeScript/tns CLI installed
- Create constants.ts in app/providers/common folder. Use this template:
```
import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
	public GOOGLE_API_KEY: string;

	constructor() {
		this.GOOGLE_API_KEY = "YOUR GOOGLE API KEY HERE"
	}
}
```
- Add Couchbase by 
``` 
  tns plugin install nativescriot-couchbase
```

**To Initialize Project**
```
tns install
tns plugin add nativescript-couchbase (app uses Couchbase)
```

**To Setup Platforms**
```
tns platform add ios
tns platform add android
```

**To Run Project In Emulator**
```
tns run ios
tns run android
```

**To Build Project (Each Time New Plugin Added Require Build Before Run**
```
tns build ios
tns build android
```
