"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var ShrinkComponent = (function () {
    function ShrinkComponent(http, location, database) {
        this.http = http;
        this.location = location;
        this.database = database;
        this.longUrl = "";
    }
    ShrinkComponent.prototype.shrink = function () {
        var _this = this;
        if (this.longUrl) {
            this.http.get("https://tinyurl.com/api-create.php?url=" + this.longUrl)
                .map(function (result) { return String(result.text()); })
                .do(function (result) { return console.log("Result: ", result); })
                .subscribe(function (result) {
                _this.database.getDatabase().createDocument({
                    "type": "url",
                    "long": _this.longUrl,
                    "short": result
                });
                _this.location.back();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log("There needs to be a value");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxzQ0FBcUM7QUFDckMsbUJBQWlCO0FBQ2pCLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFPN0QsSUFBYSxlQUFlO0lBRzNCLHlCQUEyQixJQUFVLEVBQzVCLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRkEsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFBQSxpQkFrQkM7UUFqQkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMseUNBQXlDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDckUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFyQixDQUFxQixDQUFDO2lCQUNwQyxFQUFFLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztpQkFDN0MsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDaEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzFDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTztvQkFDcEIsT0FBTyxFQUFFLE1BQU07aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwyQ0FBMkM7S0FDeEQsQ0FBQztxQ0FJZ0MsV0FBSTtRQUNsQixpQkFBUTtRQUNSLG1CQUFRO0dBTGYsZUFBZSxDQTZCM0I7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwic2hyaW5rXCIsXG5cdHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9zaHJpbmsvc2hyaW5rLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2hyaW5rQ29tcG9uZW50IHtcblx0cHVibGljIGxvbmdVcmw6IHN0cmluZztcblxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgXG5cdFx0cHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2UpIHtcblxuXHRcdHRoaXMubG9uZ1VybCA9IFwiXCI7XG5cdH1cblxuXHRwdWJsaWMgc2hyaW5rKCkge1xuXHRcdGlmICh0aGlzLmxvbmdVcmwpIHtcblx0XHRcdHRoaXMuaHR0cC5nZXQoXCJodHRwczovL3Rpbnl1cmwuY29tL2FwaS1jcmVhdGUucGhwP3VybD1cIiArIHRoaXMubG9uZ1VybClcblx0XHRcdFx0Lm1hcChyZXN1bHQgPT4gU3RyaW5nKHJlc3VsdC50ZXh0KCkpKVxuXHRcdFx0XHQuZG8ocmVzdWx0ID0+IGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgcmVzdWx0KSlcblx0XHRcdFx0LnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5jcmVhdGVEb2N1bWVudCh7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJ1cmxcIixcblx0XHRcdFx0XHRcdFwibG9uZ1wiOiB0aGlzLmxvbmdVcmwsXG5cdFx0XHRcdFx0XHRcInNob3J0XCI6IHJlc3VsdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xuXHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXCJUaGVyZSBuZWVkcyB0byBiZSBhIHZhbHVlXCIpO1xuXHRcdH1cblx0fVxufSJdfQ==