"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var Utility = require("utils/utils");
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
    LinksComponent.prototype.launchUrl = function (url) {
        Utility.openUrl(url);
    };
    LinksComponent.prototype.loadData = function () {
        var _this = this;
        var rows = this.database.getDatabase().executeQuery("urls");
        rows.forEach(function (item) {
            _this.urls.push(item);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFDN0QscUNBQXVDO0FBT3ZDLElBQWEsY0FBYztJQUcxQix3QkFBMkIsTUFBYyxFQUNoQyxRQUFrQixFQUNsQixRQUFrQjtRQUZBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sMENBQWlCLEdBQXhCO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVPLGlDQUFRLEdBQWhCO1FBQUEsaUJBS0M7UUFKQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNqQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE9BQU87UUFDakIsV0FBVyxFQUFFLHlDQUF5QztLQUN0RCxDQUFDO3FDQUtrQyxlQUFNO1FBQ3RCLGlCQUFRO1FBQ1IsbUJBQVE7R0FMZixjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGFiYXNlL2RhdGFiYXNlXCI7XG5pbXBvcnQgKiBhcyBVdGlsaXR5IGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibGlua3NcIixcblx0dGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyB1cmxzOiBhbnk7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuXHRcdHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlKSB7XG5cdFx0dGhpcy51cmxzID0gW107XG5cdH1cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2NhdGlvbi5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy51cmxzID0gW107XG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xuXHR9XG5cblx0cHVibGljIGNyZWF0ZVNocnVua2VuVXJsKCkge1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNocmlua1wiXSk7XG5cdH1cblxuXHRwdWJsaWMgbGF1bmNoVXJsKHVybDogc3RyaW5nKSB7XG5cdFx0VXRpbGl0eS5vcGVuVXJsKHVybCk7XG5cdH1cblxuXHRwcml2YXRlIGxvYWREYXRhKCkge1xuXHRcdGxldCByb3dzID0gdGhpcy5kYXRhYmFzZS5nZXREYXRhYmFzZSgpLmV4ZWN1dGVRdWVyeShcInVybHNcIik7XG5cdFx0cm93cy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLnVybHMucHVzaChpdGVtKTtcblx0XHR9KTtcblx0fVxufVxuXG4iXX0=