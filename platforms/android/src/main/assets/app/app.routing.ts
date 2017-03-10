// import { NgModule } from "@angular/core";
// import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LinksComponent } from "./components/links/links.component";
import { ShrinkComponent } from "./components/shrink/shrink.component";
// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

export const AppRoutes = [
    { path: "", component: LinksComponent },
    { path: "shrink", component: ShrinkComponent },
];

export const AppComponents = [
	LinksComponent,
	ShrinkComponent
];

// @NgModule({
//     imports: [NativeScriptRouterModule.forRoot(routes)],
//     exports: [NativeScriptRouterModule]
// })
// export class AppRoutingModule { }