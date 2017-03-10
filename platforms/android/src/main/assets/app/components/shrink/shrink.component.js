"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var Toast = require("nativescript-toast");
var ShrinkComponent = (function () {
    function ShrinkComponent(http, location, database) {
        this.http = http;
        this.location = location;
        this.database = database;
        this.googleApiKey = "AIzaSyBtP0VgvlxWu4wXflWfuRZwWhblVQpBLks";
        this.longUrl = "";
    }
    ShrinkComponent.prototype.shrink = function () {
        var _this = this;
        if (this.longUrl) {
            var headers = new http_1.Headers({ "Content-Type": "application/json" });
            var options = new http_1.RequestOptions({ headers: headers });
            this.http.post("https://www.googleapis.com/urlshortener/v1/url?key=" + this.googleApiKey, JSON.stringify({ longUrl: this.longUrl }), options)
                .map(function (result) { return result.json(); })
                .do(function (result) { return console.log("Result: ", JSON.stringify(result)); })
                .subscribe(function (result) {
                _this.database.getDatabase().createDocument({
                    "type": "url",
                    "long": _this.longUrl,
                    "short": result.id
                });
                _this.location.back();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            Toast.makeText("A valid long URL is required").show();
        }
    };
    return ShrinkComponent;
}());
ShrinkComponent = __decorate([
    core_1.Component({
        selector: "shrink",
        templateUrl: "./components/shrink/shrink.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http,
        common_1.Location,
        database_1.Database])
], ShrinkComponent);
exports.ShrinkComponent = ShrinkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxzQ0FBOEQ7QUFDOUQsbUJBQWlCO0FBQ2pCLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFDN0QsMENBQTRDO0FBTTVDLElBQWEsZUFBZTtJQUkzQix5QkFBMkIsSUFBVSxFQUM1QixRQUFrQixFQUNsQixRQUFrQjtRQUZBLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSm5CLGlCQUFZLEdBQVcseUNBQXlDLENBQUM7UUFNeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFBQSxpQkFxQkM7UUFwQkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7aUJBQ3pJLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBYixDQUFhLENBQUM7aUJBQzVCLEVBQUUsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQztpQkFDN0QsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzFDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTztvQkFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsQ0FBQztJQUNGLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksZUFBZTtJQUozQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDJDQUEyQztLQUN4RCxDQUFDO3FDQUtnQyxXQUFJO1FBQ2xCLGlCQUFRO1FBQ1IsbUJBQVE7R0FOZixlQUFlLENBaUMzQjtBQWpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwic2hyaW5rXCIsXG5cdHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9zaHJpbmsvc2hyaW5rLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2hyaW5rQ29tcG9uZW50IHtcblx0cHVibGljIGxvbmdVcmw6IHN0cmluZztcblx0cHJpdmF0ZSBnb29nbGVBcGlLZXk6IHN0cmluZyA9IFwiQUl6YVN5QnRQMFZndmx4V3U0d1hmbFdmdVJad1doYmxWUXBCTGtzXCI7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIFxuXHRcdHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlKSB7XG5cblx0XHR0aGlzLmxvbmdVcmwgPSBcIlwiO1xuXHR9XG5cblx0cHVibGljIHNocmluaygpIHtcblx0XHRpZiAodGhpcy5sb25nVXJsKSB7XG5cdFx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pO1xuXHRcdFx0bGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzfSk7XG5cblx0XHRcdHRoaXMuaHR0cC5wb3N0KFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXJsc2hvcnRlbmVyL3YxL3VybD9rZXk9XCIgKyB0aGlzLmdvb2dsZUFwaUtleSwgSlNPTi5zdHJpbmdpZnkoe2xvbmdVcmw6IHRoaXMubG9uZ1VybH0pLCBvcHRpb25zKVxuXHRcdFx0XHQubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuXHRcdFx0XHQuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG5cdFx0XHRcdC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblx0XHRcdFx0XHR0aGlzLmRhdGFiYXNlLmdldERhdGFiYXNlKCkuY3JlYXRlRG9jdW1lbnQoe1xuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwidXJsXCIsXG5cdFx0XHRcdFx0XHRcImxvbmdcIjogdGhpcy5sb25nVXJsLFxuXHRcdFx0XHRcdFx0XCJzaG9ydFwiOiByZXN1bHQuaWRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmxvY2F0aW9uLmJhY2soKTtcblx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiQSB2YWxpZCBsb25nIFVSTCBpcyByZXF1aXJlZFwiKS5zaG93KCk7XG5cdFx0fVxuXHR9XG59Il19