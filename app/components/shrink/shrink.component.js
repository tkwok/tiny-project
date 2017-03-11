"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var common_1 = require("@angular/common");
var database_1 = require("../../providers/database/database");
var Toast = require("nativescript-toast");
var constants_1 = require("../../providers/common/constants");
var ShrinkComponent = (function () {
    function ShrinkComponent(http, location, database, constants) {
        this.http = http;
        this.location = location;
        this.database = database;
        this.constants = constants;
        this.longUrl = "";
    }
    ShrinkComponent.prototype.shrink = function () {
        var _this = this;
        if (this.longUrl) {
            var headers = new http_1.Headers({ "Content-Type": "application/json" });
            var options = new http_1.RequestOptions({ headers: headers });
            this.http.post("https://www.googleapis.com/urlshortener/v1/url?key=" + this.constants.GOOGLE_API_KEY, JSON.stringify({ longUrl: this.longUrl }), options)
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
        database_1.Database,
        constants_1.Constants])
], ShrinkComponent);
exports.ShrinkComponent = ShrinkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxzQ0FBOEQ7QUFDOUQsbUJBQWlCO0FBQ2pCLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFDN0QsMENBQTRDO0FBQzVDLDhEQUE2RDtBQU03RCxJQUFhLGVBQWU7SUFHM0IseUJBQTJCLElBQVUsRUFDNUIsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsU0FBb0I7UUFIRixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxREFBcUQsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQztpQkFDckosR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQztpQkFDNUIsRUFBRSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDO2lCQUM3RCxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDMUMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPO29CQUNwQixPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7aUJBQ2xCLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0lBQ0YsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxlQUFlO0lBSjNCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsMkNBQTJDO0tBQ3hELENBQUM7cUNBSWdDLFdBQUk7UUFDbEIsaUJBQVE7UUFDUixtQkFBUTtRQUNQLHFCQUFTO0dBTmpCLGVBQWUsQ0FpQzNCO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2RhdGFiYXNlL2RhdGFiYXNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2NvbW1vbi9jb25zdGFudHNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInNocmlua1wiLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvc2hyaW5rL3Nocmluay5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNocmlua0NvbXBvbmVudCB7XG5cdHB1YmxpYyBsb25nVXJsOiBzdHJpbmc7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgXG5cdFx0cHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIFxuXHRcdHByaXZhdGUgZGF0YWJhc2U6IERhdGFiYXNlLFxuXHRcdHByaXZhdGUgY29uc3RhbnRzOiBDb25zdGFudHMpIHtcblxuXHRcdHRoaXMubG9uZ1VybCA9IFwiXCI7XG5cdH1cblxuXHRwdWJsaWMgc2hyaW5rKCkge1xuXHRcdGlmICh0aGlzLmxvbmdVcmwpIHtcblx0XHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSk7XG5cdFx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnN9KTtcblxuXHRcdFx0dGhpcy5odHRwLnBvc3QoXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS91cmxzaG9ydGVuZXIvdjEvdXJsP2tleT1cIiArIHRoaXMuY29uc3RhbnRzLkdPT0dMRV9BUElfS0VZLCBKU09OLnN0cmluZ2lmeSh7bG9uZ1VybDogdGhpcy5sb25nVXJsfSksIG9wdGlvbnMpXG5cdFx0XHRcdC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG5cdFx0XHRcdC5kbyhyZXN1bHQgPT4gY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcblx0XHRcdFx0LnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5jcmVhdGVEb2N1bWVudCh7XG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJ1cmxcIixcblx0XHRcdFx0XHRcdFwibG9uZ1wiOiB0aGlzLmxvbmdVcmwsXG5cdFx0XHRcdFx0XHRcInNob3J0XCI6IHJlc3VsdC5pZFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMubG9jYXRpb24uYmFjaygpO1xuXHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0VG9hc3QubWFrZVRleHQoXCJBIHZhbGlkIGxvbmcgVVJMIGlzIHJlcXVpcmVkXCIpLnNob3coKTtcblx0XHR9XG5cdH1cbn0iXX0=