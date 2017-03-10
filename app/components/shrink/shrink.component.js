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
        this.googleApiKey = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hyaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNocmluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxzQ0FBOEQ7QUFDOUQsbUJBQWlCO0FBQ2pCLDBDQUEyQztBQUMzQyw4REFBNkQ7QUFDN0QsMENBQTRDO0FBTTVDLElBQWEsZUFBZTtJQUkzQix5QkFBMkIsSUFBVSxFQUM1QixRQUFrQixFQUNsQixRQUFrQjtRQUZBLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSm5CLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBTWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxREFBcUQsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsT0FBTyxDQUFDO2lCQUN6SSxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2lCQUM1QixFQUFFLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUM7aUJBQzdELFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMxQyxNQUFNLEVBQUUsS0FBSztvQkFDYixNQUFNLEVBQUUsS0FBSSxDQUFDLE9BQU87b0JBQ3BCLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELENBQUM7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwyQ0FBMkM7S0FDeEQsQ0FBQztxQ0FLZ0MsV0FBSTtRQUNsQixpQkFBUTtRQUNSLG1CQUFRO0dBTmYsZUFBZSxDQWlDM0I7QUFqQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvZGF0YWJhc2UvZGF0YWJhc2VcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInNocmlua1wiLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvc2hyaW5rL3Nocmluay5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNocmlua0NvbXBvbmVudCB7XG5cdHB1YmxpYyBsb25nVXJsOiBzdHJpbmc7XG5cdHByaXZhdGUgZ29vZ2xlQXBpS2V5OiBzdHJpbmcgPSBcIlwiO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBcblx0XHRwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZSkge1xuXG5cdFx0dGhpcy5sb25nVXJsID0gXCJcIjtcblx0fVxuXG5cdHB1YmxpYyBzaHJpbmsoKSB7XG5cdFx0aWYgKHRoaXMubG9uZ1VybCkge1xuXHRcdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcblx0XHRcdGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVyc30pO1xuXG5cdFx0XHR0aGlzLmh0dHAucG9zdChcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3VybHNob3J0ZW5lci92MS91cmw/a2V5PVwiICsgdGhpcy5nb29nbGVBcGlLZXksIEpTT04uc3RyaW5naWZ5KHtsb25nVXJsOiB0aGlzLmxvbmdVcmx9KSwgb3B0aW9ucylcblx0XHRcdFx0Lm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcblx0XHRcdFx0LmRvKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhYmFzZS5nZXREYXRhYmFzZSgpLmNyZWF0ZURvY3VtZW50KHtcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcInVybFwiLFxuXHRcdFx0XHRcdFx0XCJsb25nXCI6IHRoaXMubG9uZ1VybCxcblx0XHRcdFx0XHRcdFwic2hvcnRcIjogcmVzdWx0LmlkXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5sb2NhdGlvbi5iYWNrKCk7XG5cdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRUb2FzdC5tYWtlVGV4dChcIkEgdmFsaWQgbG9uZyBVUkwgaXMgcmVxdWlyZWRcIikuc2hvdygpO1xuXHRcdH1cblx0fVxufSJdfQ==