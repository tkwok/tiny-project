"use strict";
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var Database = (function () {
    function Database() {
        if (!this.isInstantiated) {
            this.storage = new nativescript_couchbase_1.Couchbase("tinyurl");
            this.storage.createView("urls", "1", function (document, emitter) {
                if (document.type === "url") {
                    emitter.emit(document._id, document);
                }
            });
            this.isInstantiated = true;
        }
    }
    Database.prototype.getDatabase = function () {
        return this.storage;
    };
    return Database;
}());
Database = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Database);
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUduRCxJQUFhLFFBQVE7SUFLcEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBQyxRQUFRLEVBQUUsT0FBTztnQkFDdEQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7SUFDRixDQUFDO0lBRU0sOEJBQVcsR0FBbEI7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksUUFBUTtJQURwQixpQkFBVSxFQUFFOztHQUNBLFFBQVEsQ0FvQnBCO0FBcEJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuXHQvLyB0cmVhdCBhcyBzaW5nbGV0b24gaWYgYW55IG9wZW4gaW5zdGFuY2Vcblx0cHJpdmF0ZSBpc0luc3RhbnRpYXRlZDogYm9vbGVhbjtcblx0cHJpdmF0ZSBzdG9yYWdlOiBhbnk7XG5cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmICghdGhpcy5pc0luc3RhbnRpYXRlZCkge1xuXHRcdFx0dGhpcy5zdG9yYWdlID0gbmV3IENvdWNoYmFzZShcInRpbnl1cmxcIik7XG5cdFx0XHR0aGlzLnN0b3JhZ2UuY3JlYXRlVmlldyhcInVybHNcIiwgXCIxXCIsIChkb2N1bWVudCwgZW1pdHRlcikgPT4ge1xuXHRcdFx0XHRpZiAoZG9jdW1lbnQudHlwZSA9PT0gXCJ1cmxcIikge1xuXHRcdFx0XHRcdGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmlzSW5zdGFudGlhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0RGF0YWJhc2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmFnZTtcblx0fVxufSJdfQ==