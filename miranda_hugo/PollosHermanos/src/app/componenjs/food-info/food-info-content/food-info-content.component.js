"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;0<=s;s--)(r=t[s])&&(c=(i<3?r(c):3<i?r(e,o,c):r(e,o))||c);return 3<i&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),FoodInfoContentComponent=function(){function t(t){this.db=t,this.isImage=!1,this.isText=!1}return t.prototype.fooditem=function(t){return t.id==this.contentId},t.prototype.ngOnInit=function(){var e=this;this.foodItem=this.db.getFoodItems().find(function(t){return t.id===e.contentId}),console.log(this.contentId),"image"===this.typeOfContent&&(this.isImage=!0),"text"===this.typeOfContent&&(this.isText=!0)},__decorate([core_1.Input()],t.prototype,"contentId",void 0),__decorate([core_1.Input()],t.prototype,"typeOfContent",void 0),t=__decorate([core_1.Component({selector:"app-food-info-content",templateUrl:"./food-info-content.component.html",styleUrls:["./food-info-content.component.css"]})],t)}();exports.FoodInfoContentComponent=FoodInfoContentComponent;