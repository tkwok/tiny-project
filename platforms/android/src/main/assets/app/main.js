"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var app_routing_1 = require("./app.routing");
var database_1 = require("./providers/database/database");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent].concat(app_routing_1.AppComponents),
        bootstrap: [app_component_1.AppComponent],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes)
        ],
        providers: [database_1.Database]
    })
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBZ0c7QUFDaEcsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxzREFBdUU7QUFDdkUsaURBQStDO0FBQy9DLHNDQUF5QztBQUN6Qyw2Q0FBeUQ7QUFDekQsMERBQXlEO0FBZXpELElBQU0sa0JBQWtCO0lBQXhCO0lBQTBCLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBckIsa0JBQWtCO0lBYnZCLGVBQVEsQ0FBQztRQUNULFlBQVksR0FBRyw0QkFBWSxTQUFLLDJCQUFhLENBQUM7UUFDOUMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUU7WUFDUiw2QkFBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7U0FDM0M7UUFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBUSxDQUFDO0tBQ3JCLENBQUM7R0FFSSxrQkFBa0IsQ0FBRztBQUUzQixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLCBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudHMsIEFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIC4uLkFwcENvbXBvbmVudHNdLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFwcFJvdXRlcylcblx0XSxcblx0cHJvdmlkZXJzOiBbRGF0YWJhc2VdXG59KVxuXG5jbGFzcyBBcHBDb21wb25lbnRNb2R1bGUge31cblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcENvbXBvbmVudE1vZHVsZSk7XG4iXX0=