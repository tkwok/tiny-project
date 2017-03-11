// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { AppComponents, AppRoutes } from "./app.routing";
import { Database } from "./providers/database/database";
import { Constants } from "./providers/common/constants"

@NgModule({
	declarations: [AppComponent, ...AppComponents],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(AppRoutes)
	],
	providers: [Database, Constants]
})

class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
