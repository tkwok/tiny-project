"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var LinksComponent = (function () {
    function LinksComponent(router, location, database) {
        this.router = router;
        this.location = location;
        this.database = database;
        this.urls = [];
    }
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function () {
            _this.urls = [];
            _this.loadData();
        });
        this.loadData();
    };
    LinksComponent.prototype.createShrunkenUrl = function () {
        this.router.navigate(["shrink"]);
    };
    LinksComponent.prototype.loadData = function () {
        var rows = this.database.getDatabase().executeQuery("urls");
        for (var i = 0; i < rows.length; i++) {
            this.urls.push(rows[i]);
        }
    };
    return LinksComponent;
}());
LinksComponent = __decorate([
    core_1.Component({
        selector: "links",
        templateUrl: "./components/links/links.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        common_1.Location,
        database_1.Database])
], LinksComponent);
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFRN0QsSUFBYSxjQUFjO0lBRzFCLHdCQUEyQixNQUFjLEVBQ2hDLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRkEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlDQUFRLEdBQWY7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHlDQUF5QztLQUN0RCxDQUFDO3FDQU1rQyxlQUFNO1FBQ3RCLGlCQUFRO1FBQ1IsbUJBQVE7R0FMZixjQUFjLENBMkIxQjtBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGFiYXNlL2RhdGFiYXNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJsaW5rc1wiLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvbGlua3MvbGlua3MuY29tcG9uZW50Lmh0bWxcIlxufSlcblxuXG5leHBvcnQgY2xhc3MgTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRwdWJsaWMgdXJsczogYW55O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcblx0XHRwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZSkge1xuXHRcdHRoaXMudXJscyA9IFtdO1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMudXJscyA9IFtdO1xuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMubG9hZERhdGEoKTtcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVTaHJ1bmtlblVybCgpIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzaHJpbmtcIl0pO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkRGF0YSgpIHtcblx0XHRsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5leGVjdXRlUXVlcnkoXCJ1cmxzXCIpO1xuXHRcdGZvciAobGV0IGk9MDsgaTxyb3dzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMudXJscy5wdXNoKHJvd3NbaV0pO1xuXHRcdH1cblx0fVxufVxuXG4iXX0=