webpackJsonp(["slack.module"],{

/***/ "../../../../../src/app/container/slack/slack.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/container/slack/swiper.min.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/slack/slack.component.html":
/***/ (function(module, exports) {

module.exports = "<p (click)=\"goSetting()\">\n  slack works!\n</p>\n<div class=\"swiper-container\">\n  <!-- Additional required wrapper -->\n  <div class=\"swiper-wrapper\">\n    <!-- Slides -->\n    <div class=\"swiper-slide\">Slide 1</div>\n    <div class=\"swiper-slide\">Slide 2</div>\n    <div class=\"swiper-slide\">Slide 3</div>\n  </div>\n  <!-- If we need pagination -->\n  <div class=\"swiper-pagination\"></div>\n\n  <!-- If we need navigation buttons -->\n  <div class=\"swiper-button-prev\"></div>\n  <div class=\"swiper-button-next\"></div>\n\n  <!-- If we need scrollbar -->\n  <div class=\"swiper-scrollbar\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/container/slack/slack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slack__ = __webpack_require__("../../../../slack/methods/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper_min_js__ = __webpack_require__("../../../../../src/app/container/slack/swiper.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swiper_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlackComponent = (function () {
    function SlackComponent(router) {
        this.router = router;
        this.TOKEN = 'xoxp-231235385382-229812384465-231439914343-0fe39d92f2913e8ff964d000570cf60f';
        this.bot = __WEBPACK_IMPORTED_MODULE_1_slack__["rtm"].client();
        this.bot.started(function (payload) {
            console.log('payload from rtm.start', payload);
        });
        console.log(this.bot);
        this.bot.listen({ token: this.TOKEN });
        console.log(__WEBPACK_IMPORTED_MODULE_2__swiper_min_js__);
    }
    SlackComponent.prototype.ngOnInit = function () {
    };
    SlackComponent.prototype.ngAfterViewInit = function () {
        var mySwiper = new __WEBPACK_IMPORTED_MODULE_2__swiper_min_js__('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
    };
    SlackComponent.prototype.goSetting = function () {
        this.router.navigate(['setting']);
    };
    return SlackComponent;
}());
SlackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-slack',
        template: __webpack_require__("../../../../../src/app/container/slack/slack.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/slack/slack.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SlackComponent);

var _a;
//# sourceMappingURL=slack.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/slack/slack.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackModule", function() { return SlackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slack_component__ = __webpack_require__("../../../../../src/app/container/slack/slack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slack_routes__ = __webpack_require__("../../../../../src/app/container/slack/slack.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SlackModule = (function () {
    function SlackModule() {
    }
    return SlackModule;
}());
SlackModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__slack_routes__["a" /* SlackRouter */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slack_component__["a" /* SlackComponent */]
        ]
    })
], SlackModule);

//# sourceMappingURL=slack.module.js.map

/***/ }),

/***/ "../../../../../src/app/container/slack/slack.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slack_component__ = __webpack_require__("../../../../../src/app/container/slack/slack.component.ts");


var SlackRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild([
    {
        path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__slack_component__["a" /* SlackComponent */] }
        ]
    },
]);
//# sourceMappingURL=slack.routes.js.map

/***/ }),

/***/ "../../../../../src/app/container/slack/swiper.min.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(s,i){function r(e){return Math.floor(e)}function n(){var e=T.params.autoplay,a=T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||T.params.autoplay),T.autoplayTimeoutId=setTimeout(function(){T.params.loop?(T.fixLoop(),T._slideNext(),T.emit("onAutoplay",T)):T.isEnd?i.autoplayStopOnLast?T.stopAutoplay():(T._slideTo(0),T.emit("onAutoplay",T)):(T._slideNext(),T.emit("onAutoplay",T))},e)}function o(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var i;return s.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==s.length)return s[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){T.onResize(!0),T.emit("onObserverUpdate",T,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),T.observers.push(s)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!T.params.allowSwipeToNext&&(T.isHorizontal()&&39===a||!T.isHorizontal()&&40===a))return!1;if(!T.params.allowSwipeToPrev&&(T.isHorizontal()&&37===a||!T.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(T.container.parents("."+T.params.slideClass).length>0&&0===T.container.parents("."+T.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,r=window.innerHeight,n=T.container.offset();T.rtl&&(n.left=n.left-T.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+T.width,n.top],[n.left,n.top+T.height],[n.left+T.width,n.top+T.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+i&&p[1]>=s.top&&p[1]<=s.top+r&&(t=!0)}if(!t)return}T.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!T.rtl||37===a&&T.rtl)&&T.slideNext(),(37===a&&!T.rtl||39===a&&T.rtl)&&T.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&T.slideNext(),38===a&&T.slidePrev()),T.emit("onKeyPress",T,a)}}function d(e){var a=0,t=0,s=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||i)&&e.deltaMode&&(1===e.deltaMode?(s*=40,i*=40):(s*=800,i*=800)),s&&!a&&(a=s<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:i}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=T.rtl?-1:1,s=d(e);if(T.params.mousewheelForceToAxis)if(T.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(T.params.mousewheelInvert&&(a=-a),T.params.freeMode){var i=T.getWrapperTranslate()+a*T.params.mousewheelSensitivity,r=T.isBeginning,n=T.isEnd;if(i>=T.minTranslate()&&(i=T.minTranslate()),i<=T.maxTranslate()&&(i=T.maxTranslate()),T.setWrapperTransition(0),T.setWrapperTranslate(i),T.updateProgress(),T.updateActiveIndex(),(!r&&T.isBeginning||!n&&T.isEnd)&&T.updateClasses(),T.params.freeModeSticky?(clearTimeout(T.mousewheel.timeout),T.mousewheel.timeout=setTimeout(function(){T.slideReset()},300)):T.params.lazyLoading&&T.lazy&&T.lazy.load(),T.emit("onScroll",T,e),T.params.autoplay&&T.params.autoplayDisableOnInteraction&&T.stopAutoplay(),0===i||i===T.maxTranslate())return}else{if((new window.Date).getTime()-T.mousewheel.lastScrollTime>60)if(a<0)if(T.isEnd&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slideNext(),T.emit("onScroll",T,e);else if(T.isBeginning&&!T.params.loop||T.animating){if(T.params.mousewheelReleaseOnEdges)return!0}else T.slidePrev(),T.emit("onScroll",T,e);T.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function c(a,t){a=e(a);var s,i,r,n=T.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",i=a.attr("data-swiper-parallax-x"),r=a.attr("data-swiper-parallax-y"),i||r?(i=i||"0",r=r||"0"):T.isHorizontal()?(i=s,r="0"):(r=s,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",r=r.indexOf("%")>=0?parseInt(r,10)*t+"%":r*t+"px",a.transform("translate3d("+i+", "+r+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(s,i);var h={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=i&&i.virtualTranslate;i=i||{};var f={};for(var v in i)if("object"!=typeof i[v]||null===i[v]||(i[v].nodeType||i[v]===window||i[v]===document||void 0!==t&&i[v]instanceof t||"undefined"!=typeof jQuery&&i[v]instanceof jQuery))f[v]=i[v];else{f[v]={};for(var w in i[v])f[v][w]=i[v][w]}for(var y in h)if(void 0===i[y])i[y]=h[y];else if("object"==typeof i[y])for(var x in h[y])void 0===i[y][x]&&(i[y][x]=h[y][x]);var T=this;if(T.params=i,T.originalParams=f,T.classNames=[],void 0!==e&&void 0!==t&&(e=t),(void 0!==e||(e=void 0===t?window.Dom7||window.Zepto||window.jQuery:t))&&(T.$=e,T.currentBreakpoint=void 0,T.getActiveBreakpoint=function(){if(!T.params.breakpoints)return!1;var e,a=!1,t=[];for(e in T.params.breakpoints)T.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},T.setBreakpoint=function(){var e=T.getActiveBreakpoint();if(e&&T.currentBreakpoint!==e){var a=e in T.params.breakpoints?T.params.breakpoints[e]:T.originalParams,t=T.params.loop&&a.slidesPerView!==T.params.slidesPerView;for(var s in a)T.params[s]=a[s];T.currentBreakpoint=e,t&&T.destroyLoop&&T.reLoop(!0)}},T.params.breakpoints&&T.setBreakpoint(),T.container=e(s),0!==T.container.length)){if(T.container.length>1){var b=[];return T.container.each(function(){b.push(new a(this,i))}),b}T.container[0].swiper=T,T.container.data("swiper",T),T.classNames.push(T.params.containerModifierClass+T.params.direction),T.params.freeMode&&T.classNames.push(T.params.containerModifierClass+"free-mode"),T.support.flexbox||(T.classNames.push(T.params.containerModifierClass+"no-flexbox"),T.params.slidesPerColumn=1),T.params.autoHeight&&T.classNames.push(T.params.containerModifierClass+"autoheight"),(T.params.parallax||T.params.watchSlidesVisibility)&&(T.params.watchSlidesProgress=!0),T.params.touchReleaseOnEdges&&(T.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(T.params.effect)>=0&&(T.support.transforms3d?(T.params.watchSlidesProgress=!0,T.classNames.push(T.params.containerModifierClass+"3d")):T.params.effect="slide"),"slide"!==T.params.effect&&T.classNames.push(T.params.containerModifierClass+T.params.effect),"cube"===T.params.effect&&(T.params.resistanceRatio=0,T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.centeredSlides=!1,T.params.spaceBetween=0,T.params.virtualTranslate=!0),"fade"!==T.params.effect&&"flip"!==T.params.effect||(T.params.slidesPerView=1,T.params.slidesPerColumn=1,T.params.slidesPerGroup=1,T.params.watchSlidesProgress=!0,T.params.spaceBetween=0,void 0===g&&(T.params.virtualTranslate=!0)),T.params.grabCursor&&T.support.touch&&(T.params.grabCursor=!1),T.wrapper=T.container.children("."+T.params.wrapperClass),T.params.pagination&&(T.paginationContainer=e(T.params.pagination),T.params.uniqueNavElements&&"string"==typeof T.params.pagination&&T.paginationContainer.length>1&&1===T.container.find(T.params.pagination).length&&(T.paginationContainer=T.container.find(T.params.pagination)),"bullets"===T.params.paginationType&&T.params.paginationClickable?T.paginationContainer.addClass(T.params.paginationModifierClass+"clickable"):T.params.paginationClickable=!1,T.paginationContainer.addClass(T.params.paginationModifierClass+T.params.paginationType)),(T.params.nextButton||T.params.prevButton)&&(T.params.nextButton&&(T.nextButton=e(T.params.nextButton),T.params.uniqueNavElements&&"string"==typeof T.params.nextButton&&T.nextButton.length>1&&1===T.container.find(T.params.nextButton).length&&(T.nextButton=T.container.find(T.params.nextButton))),T.params.prevButton&&(T.prevButton=e(T.params.prevButton),T.params.uniqueNavElements&&"string"==typeof T.params.prevButton&&T.prevButton.length>1&&1===T.container.find(T.params.prevButton).length&&(T.prevButton=T.container.find(T.params.prevButton)))),T.isHorizontal=function(){return"horizontal"===T.params.direction},T.rtl=T.isHorizontal()&&("rtl"===T.container[0].dir.toLowerCase()||"rtl"===T.container.css("direction")),T.rtl&&T.classNames.push(T.params.containerModifierClass+"rtl"),T.rtl&&(T.wrongRTL="-webkit-box"===T.wrapper.css("display")),T.params.slidesPerColumn>1&&T.classNames.push(T.params.containerModifierClass+"multirow"),T.device.android&&T.classNames.push(T.params.containerModifierClass+"android"),T.container.addClass(T.classNames.join(" ")),T.translate=0,T.progress=0,T.velocity=0,T.lockSwipeToNext=function(){T.params.allowSwipeToNext=!1,T.params.allowSwipeToPrev===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipeToPrev=function(){T.params.allowSwipeToPrev=!1,T.params.allowSwipeToNext===!1&&T.params.grabCursor&&T.unsetGrabCursor()},T.lockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!1,T.params.grabCursor&&T.unsetGrabCursor()},T.unlockSwipeToNext=function(){T.params.allowSwipeToNext=!0,T.params.allowSwipeToPrev===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipeToPrev=function(){T.params.allowSwipeToPrev=!0,T.params.allowSwipeToNext===!0&&T.params.grabCursor&&T.setGrabCursor()},T.unlockSwipes=function(){T.params.allowSwipeToNext=T.params.allowSwipeToPrev=!0,T.params.grabCursor&&T.setGrabCursor()},T.setGrabCursor=function(e){T.container[0].style.cursor="move",T.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",T.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",T.container[0].style.cursor=e?"grabbing":"grab"},T.unsetGrabCursor=function(){T.container[0].style.cursor=""},T.params.grabCursor&&T.setGrabCursor(),T.imagesToLoad=[],T.imagesLoaded=0,T.loadImage=function(e,a,t,s,i,r){function n(){r&&r()}var o;e.complete&&i?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},T.preloadImages=function(){function e(){void 0!==T&&null!==T&&T&&(void 0!==T.imagesLoaded&&T.imagesLoaded++,T.imagesLoaded===T.imagesToLoad.length&&(T.params.updateOnImagesReady&&T.update(),T.emit("onImagesReady",T)))}T.imagesToLoad=T.container.find("img");for(var a=0;a<T.imagesToLoad.length;a++)T.loadImage(T.imagesToLoad[a],T.imagesToLoad[a].currentSrc||T.imagesToLoad[a].getAttribute("src"),T.imagesToLoad[a].srcset||T.imagesToLoad[a].getAttribute("srcset"),T.imagesToLoad[a].sizes||T.imagesToLoad[a].getAttribute("sizes"),!0,e)},T.autoplayTimeoutId=void 0,T.autoplaying=!1,T.autoplayPaused=!1,T.startAutoplay=function(){return void 0===T.autoplayTimeoutId&&(!!T.params.autoplay&&(!T.autoplaying&&(T.autoplaying=!0,T.emit("onAutoplayStart",T),void n())))},T.stopAutoplay=function(e){T.autoplayTimeoutId&&(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplaying=!1,T.autoplayTimeoutId=void 0,T.emit("onAutoplayStop",T))},T.pauseAutoplay=function(e){T.autoplayPaused||(T.autoplayTimeoutId&&clearTimeout(T.autoplayTimeoutId),T.autoplayPaused=!0,0===e?(T.autoplayPaused=!1,n()):T.wrapper.transitionEnd(function(){T&&(T.autoplayPaused=!1,T.autoplaying?n():T.stopAutoplay())}))},T.minTranslate=function(){return-T.snapGrid[0]},T.maxTranslate=function(){return-T.snapGrid[T.snapGrid.length-1]},T.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==T.params.slidesPerView&&T.params.slidesPerView>1)for(e=0;e<Math.ceil(T.params.slidesPerView);e++){var s=T.activeIndex+e;if(s>T.slides.length)break;a.push(T.slides.eq(s)[0])}else a.push(T.slides.eq(T.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var i=a[e].offsetHeight;t=i>t?i:t}t&&T.wrapper.css("height",t+"px")},T.updateContainerSize=function(){var e,a;e=void 0!==T.params.width?T.params.width:T.container[0].clientWidth,a=void 0!==T.params.height?T.params.height:T.container[0].clientHeight,0===e&&T.isHorizontal()||0===a&&!T.isHorizontal()||(e=e-parseInt(T.container.css("padding-left"),10)-parseInt(T.container.css("padding-right"),10),a=a-parseInt(T.container.css("padding-top"),10)-parseInt(T.container.css("padding-bottom"),10),T.width=e,T.height=a,T.size=T.isHorizontal()?T.width:T.height)},T.updateSlidesSize=function(){T.slides=T.wrapper.children("."+T.params.slideClass),T.snapGrid=[],T.slidesGrid=[],T.slidesSizesGrid=[];var e,a=T.params.spaceBetween,t=-T.params.slidesOffsetBefore,s=0,i=0;if(void 0!==T.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*T.size),T.virtualSize=-a,T.rtl?T.slides.css({marginLeft:"",marginTop:""}):T.slides.css({marginRight:"",marginBottom:""});var n;T.params.slidesPerColumn>1&&(n=Math.floor(T.slides.length/T.params.slidesPerColumn)===T.slides.length/T.params.slidesPerColumn?T.slides.length:Math.ceil(T.slides.length/T.params.slidesPerColumn)*T.params.slidesPerColumn,"auto"!==T.params.slidesPerView&&"row"===T.params.slidesPerColumnFill&&(n=Math.max(n,T.params.slidesPerView*T.params.slidesPerColumn)));var o,l=T.params.slidesPerColumn,p=n/l,d=p-(T.params.slidesPerColumn*p-T.slides.length);for(e=0;e<T.slides.length;e++){o=0;var u=T.slides.eq(e);if(T.params.slidesPerColumn>1){var c,m,h;"column"===T.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css("margin-"+(T.isHorizontal()?"top":"left"),0!==h&&T.params.spaceBetween&&T.params.spaceBetween+"px").attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===T.params.slidesPerView?(o=T.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),T.params.roundLengths&&(o=r(o))):(o=(T.size-(T.params.slidesPerView-1)*a)/T.params.slidesPerView,T.params.roundLengths&&(o=r(o)),T.isHorizontal()?T.slides[e].style.width=o+"px":T.slides[e].style.height=o+"px"),T.slides[e].swiperSlideSize=o,T.slidesSizesGrid.push(o),T.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-T.size/2-a),0===e&&(t=t-T.size/2-a),Math.abs(t)<.001&&(t=0),i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t)):(i%T.params.slidesPerGroup==0&&T.snapGrid.push(t),T.slidesGrid.push(t),t=t+o+a),T.virtualSize+=o+a,s=o,i++)}T.virtualSize=Math.max(T.virtualSize,T.size)+T.params.slidesOffsetAfter;var g;if(T.rtl&&T.wrongRTL&&("slide"===T.params.effect||"coverflow"===T.params.effect)&&T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}),T.support.flexbox&&!T.params.setWrapperSize||(T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"})),T.params.slidesPerColumn>1&&(T.virtualSize=(o+T.params.spaceBetween)*n,T.virtualSize=Math.ceil(T.virtualSize/T.params.slidesPerColumn)-T.params.spaceBetween,T.isHorizontal()?T.wrapper.css({width:T.virtualSize+T.params.spaceBetween+"px"}):T.wrapper.css({height:T.virtualSize+T.params.spaceBetween+"px"}),T.params.centeredSlides)){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<T.virtualSize+T.snapGrid[0]&&g.push(T.snapGrid[e]);T.snapGrid=g}if(!T.params.centeredSlides){for(g=[],e=0;e<T.snapGrid.length;e++)T.snapGrid[e]<=T.virtualSize-T.size&&g.push(T.snapGrid[e]);T.snapGrid=g,Math.floor(T.virtualSize-T.size)-Math.floor(T.snapGrid[T.snapGrid.length-1])>1&&T.snapGrid.push(T.virtualSize-T.size)}0===T.snapGrid.length&&(T.snapGrid=[0]),0!==T.params.spaceBetween&&(T.isHorizontal()?T.rtl?T.slides.css({marginLeft:a+"px"}):T.slides.css({marginRight:a+"px"}):T.slides.css({marginBottom:a+"px"})),T.params.watchSlidesProgress&&T.updateSlidesOffset()}},T.updateSlidesOffset=function(){for(var e=0;e<T.slides.length;e++)T.slides[e].swiperSlideOffset=T.isHorizontal()?T.slides[e].offsetLeft:T.slides[e].offsetTop},T.currentSlidesPerView=function(){var e,a,t=1;if(T.params.centeredSlides){var s,i=T.slides[T.activeIndex].swiperSlideSize;for(e=T.activeIndex+1;e<T.slides.length;e++)T.slides[e]&&!s&&(i+=T.slides[e].swiperSlideSize,t++,i>T.size&&(s=!0));for(a=T.activeIndex-1;a>=0;a--)T.slides[a]&&!s&&(i+=T.slides[a].swiperSlideSize,t++,i>T.size&&(s=!0))}else for(e=T.activeIndex+1;e<T.slides.length;e++)T.slidesGrid[e]-T.slidesGrid[T.activeIndex]<T.size&&t++;return t},T.updateSlidesProgress=function(e){if(void 0===e&&(e=T.translate||0),0!==T.slides.length){void 0===T.slides[0].swiperSlideOffset&&T.updateSlidesOffset();var a=-e;T.rtl&&(a=e),T.slides.removeClass(T.params.slideVisibleClass);for(var t=0;t<T.slides.length;t++){var s=T.slides[t],i=(a+(T.params.centeredSlides?T.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+T.params.spaceBetween);if(T.params.watchSlidesVisibility){var r=-(a-s.swiperSlideOffset),n=r+T.slidesSizesGrid[t];(r>=0&&r<T.size||n>0&&n<=T.size||r<=0&&n>=T.size)&&T.slides.eq(t).addClass(T.params.slideVisibleClass)}s.progress=T.rtl?-i:i}}},T.updateProgress=function(e){void 0===e&&(e=T.translate||0);var a=T.maxTranslate()-T.minTranslate(),t=T.isBeginning,s=T.isEnd;0===a?(T.progress=0,T.isBeginning=T.isEnd=!0):(T.progress=(e-T.minTranslate())/a,T.isBeginning=T.progress<=0,T.isEnd=T.progress>=1),T.isBeginning&&!t&&T.emit("onReachBeginning",T),T.isEnd&&!s&&T.emit("onReachEnd",T),T.params.watchSlidesProgress&&T.updateSlidesProgress(e),T.emit("onProgress",T,T.progress)},T.updateActiveIndex=function(){var e,a,t,s=T.rtl?T.translate:-T.translate;for(a=0;a<T.slidesGrid.length;a++)void 0!==T.slidesGrid[a+1]?s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]-(T.slidesGrid[a+1]-T.slidesGrid[a])/2?e=a:s>=T.slidesGrid[a]&&s<T.slidesGrid[a+1]&&(e=a+1):s>=T.slidesGrid[a]&&(e=a);T.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/T.params.slidesPerGroup),t>=T.snapGrid.length&&(t=T.snapGrid.length-1),e!==T.activeIndex&&(T.snapIndex=t,T.previousIndex=T.activeIndex,T.activeIndex=e,T.updateClasses(),T.updateRealIndex())},T.updateRealIndex=function(){T.realIndex=parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index")||T.activeIndex,10)},T.updateClasses=function(){T.slides.removeClass(T.params.slideActiveClass+" "+T.params.slideNextClass+" "+T.params.slidePrevClass+" "+T.params.slideDuplicateActiveClass+" "+T.params.slideDuplicateNextClass+" "+T.params.slideDuplicatePrevClass);var a=T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass),i.loop&&(a.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+T.realIndex+'"]').addClass(T.params.slideDuplicateActiveClass));var t=a.next("."+T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop&&0===t.length&&(t=T.slides.eq(0),t.addClass(T.params.slideNextClass));var s=a.prev("."+T.params.slideClass).addClass(T.params.slidePrevClass);if(T.params.loop&&0===s.length&&(s=T.slides.eq(-1),s.addClass(T.params.slidePrevClass)),i.loop&&(t.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicateNextClass),s.hasClass(T.params.slideDuplicateClass)?T.wrapper.children("."+T.params.slideClass+":not(."+T.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass):T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.attr("data-swiper-slide-index")+'"]').addClass(T.params.slideDuplicatePrevClass)),T.paginationContainer&&T.paginationContainer.length>0){var r,n=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length;if(T.params.loop?(r=Math.ceil((T.activeIndex-T.loopedSlides)/T.params.slidesPerGroup),r>T.slides.length-1-2*T.loopedSlides&&(r-=T.slides.length-2*T.loopedSlides),r>n-1&&(r-=n),r<0&&"bullets"!==T.params.paginationType&&(r=n+r)):r=void 0!==T.snapIndex?T.snapIndex:T.activeIndex||0,"bullets"===T.params.paginationType&&T.bullets&&T.bullets.length>0&&(T.bullets.removeClass(T.params.bulletActiveClass),T.paginationContainer.length>1?T.bullets.each(function(){e(this).index()===r&&e(this).addClass(T.params.bulletActiveClass)}):T.bullets.eq(r).addClass(T.params.bulletActiveClass)),"fraction"===T.params.paginationType&&(T.paginationContainer.find("."+T.params.paginationCurrentClass).text(r+1),T.paginationContainer.find("."+T.params.paginationTotalClass).text(n)),"progress"===T.params.paginationType){var o=(r+1)/n,l=o,p=1;T.isHorizontal()||(p=o,l=1),T.paginationContainer.find("."+T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(T.params.speed)}"custom"===T.params.paginationType&&T.params.paginationCustomRender&&(T.paginationContainer.html(T.params.paginationCustomRender(T,r+1,n)),T.emit("onPaginationRendered",T,T.paginationContainer[0]))}T.params.loop||(T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.isBeginning?(T.prevButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.prevButton)):(T.prevButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.prevButton))),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.isEnd?(T.nextButton.addClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.disable(T.nextButton)):(T.nextButton.removeClass(T.params.buttonDisabledClass),T.params.a11y&&T.a11y&&T.a11y.enable(T.nextButton))))},T.updatePagination=function(){if(T.params.pagination&&T.paginationContainer&&T.paginationContainer.length>0){var e="";if("bullets"===T.params.paginationType){for(var a=T.params.loop?Math.ceil((T.slides.length-2*T.loopedSlides)/T.params.slidesPerGroup):T.snapGrid.length,t=0;t<a;t++)e+=T.params.paginationBulletRender?T.params.paginationBulletRender(T,t,T.params.bulletClass):"<"+T.params.paginationElement+' class="'+T.params.bulletClass+'"></'+T.params.paginationElement+">";T.paginationContainer.html(e),T.bullets=T.paginationContainer.find("."+T.params.bulletClass),T.params.paginationClickable&&T.params.a11y&&T.a11y&&T.a11y.initPagination()}"fraction"===T.params.paginationType&&(e=T.params.paginationFractionRender?T.params.paginationFractionRender(T,T.params.paginationCurrentClass,T.params.paginationTotalClass):'<span class="'+T.params.paginationCurrentClass+'"></span> / <span class="'+T.params.paginationTotalClass+'"></span>',T.paginationContainer.html(e)),"progress"===T.params.paginationType&&(e=T.params.paginationProgressRender?T.params.paginationProgressRender(T,T.params.paginationProgressbarClass):'<span class="'+T.params.paginationProgressbarClass+'"></span>',T.paginationContainer.html(e)),"custom"!==T.params.paginationType&&T.emit("onPaginationRendered",T,T.paginationContainer[0])}},T.update=function(e){function a(){T.rtl,T.translate;t=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate()),T.setWrapperTranslate(t),T.updateActiveIndex(),T.updateClasses()}if(T){T.updateContainerSize(),T.updateSlidesSize(),T.updateProgress(),T.updatePagination(),T.updateClasses(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set();var t;if(e){T.controller&&T.controller.spline&&(T.controller.spline=void 0),T.params.freeMode?(a(),T.params.autoHeight&&T.updateAutoHeight()):(("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0))||a()}else T.params.autoHeight&&T.updateAutoHeight()}},T.onResize=function(e){T.params.onBeforeResize&&T.params.onBeforeResize(T),T.params.breakpoints&&T.setBreakpoint();var a=T.params.allowSwipeToPrev,t=T.params.allowSwipeToNext;T.params.allowSwipeToPrev=T.params.allowSwipeToNext=!0,T.updateContainerSize(),T.updateSlidesSize(),("auto"===T.params.slidesPerView||T.params.freeMode||e)&&T.updatePagination(),T.params.scrollbar&&T.scrollbar&&T.scrollbar.set(),T.controller&&T.controller.spline&&(T.controller.spline=void 0);var s=!1;if(T.params.freeMode){var i=Math.min(Math.max(T.translate,T.maxTranslate()),T.minTranslate());T.setWrapperTranslate(i),T.updateActiveIndex(),T.updateClasses(),T.params.autoHeight&&T.updateAutoHeight()}else T.updateClasses(),s=("auto"===T.params.slidesPerView||T.params.slidesPerView>1)&&T.isEnd&&!T.params.centeredSlides?T.slideTo(T.slides.length-1,0,!1,!0):T.slideTo(T.activeIndex,0,!1,!0);T.params.lazyLoading&&!s&&T.lazy&&T.lazy.load(),T.params.allowSwipeToPrev=a,T.params.allowSwipeToNext=t,T.params.onAfterResize&&T.params.onAfterResize(T)},T.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?T.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(T.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),T.touchEvents={start:T.support.touch||!T.params.simulateTouch?"touchstart":T.touchEventsDesktop.start,move:T.support.touch||!T.params.simulateTouch?"touchmove":T.touchEventsDesktop.move,end:T.support.touch||!T.params.simulateTouch?"touchend":T.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===T.params.touchEventsTarget?T.container:T.wrapper).addClass("swiper-wp8-"+T.params.direction),T.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",s="container"===T.params.touchEventsTarget?T.container[0]:T.wrapper[0],r=T.support.touch?s:document,n=!!T.params.nested;if(T.browser.ie)s[t](T.touchEvents.start,T.onTouchStart,!1),r[t](T.touchEvents.move,T.onTouchMove,n),r[t](T.touchEvents.end,T.onTouchEnd,!1);else{if(T.support.touch){var o=!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1};s[t](T.touchEvents.start,T.onTouchStart,o),s[t](T.touchEvents.move,T.onTouchMove,n),s[t](T.touchEvents.end,T.onTouchEnd,o)}(i.simulateTouch&&!T.device.ios&&!T.device.android||i.simulateTouch&&!T.support.touch&&T.device.ios)&&(s[t]("mousedown",T.onTouchStart,!1),document[t]("mousemove",T.onTouchMove,n),document[t]("mouseup",T.onTouchEnd,!1))}window[t]("resize",T.onResize),T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.nextButton[a]("click",T.onClickNext),T.params.a11y&&T.a11y&&T.nextButton[a]("keydown",T.a11y.onEnterKey)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.prevButton[a]("click",T.onClickPrev),T.params.a11y&&T.a11y&&T.prevButton[a]("keydown",T.a11y.onEnterKey)),T.params.pagination&&T.params.paginationClickable&&(T.paginationContainer[a]("click","."+T.params.bulletClass,T.onClickIndex),T.params.a11y&&T.a11y&&T.paginationContainer[a]("keydown","."+T.params.bulletClass,T.a11y.onEnterKey)),(T.params.preventClicks||T.params.preventClicksPropagation)&&s[t]("click",T.preventClicks,!0)},T.attachEvents=function(){T.initEvents()},T.detachEvents=function(){T.initEvents(!0)},T.allowClick=!0,T.preventClicks=function(e){T.allowClick||(T.params.preventClicks&&e.preventDefault(),T.params.preventClicksPropagation&&T.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},T.onClickNext=function(e){e.preventDefault(),T.isEnd&&!T.params.loop||T.slideNext()},T.onClickPrev=function(e){e.preventDefault(),T.isBeginning&&!T.params.loop||T.slidePrev()},T.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*T.params.slidesPerGroup;T.params.loop&&(t+=T.loopedSlides),T.slideTo(t)},
T.updateClickedSlide=function(a){var t=o(a,"."+T.params.slideClass),s=!1;if(t)for(var i=0;i<T.slides.length;i++)T.slides[i]===t&&(s=!0);if(!t||!s)return T.clickedSlide=void 0,void(T.clickedIndex=void 0);if(T.clickedSlide=t,T.clickedIndex=e(t).index(),T.params.slideToClickedSlide&&void 0!==T.clickedIndex&&T.clickedIndex!==T.activeIndex){var r,n=T.clickedIndex,l="auto"===T.params.slidesPerView?T.currentSlidesPerView():T.params.slidesPerView;if(T.params.loop){if(T.animating)return;r=parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"),10),T.params.centeredSlides?n<T.loopedSlides-l/2||n>T.slides.length-T.loopedSlides+l/2?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n):n>T.slides.length-l?(T.fixLoop(),n=T.wrapper.children("."+T.params.slideClass+'[data-swiper-slide-index="'+r+'"]:not(.'+T.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){T.slideTo(n)},0)):T.slideTo(n)}else T.slideTo(n)}};var S,C,z,M,E,P,I,k,L,D,B="input, select, textarea, button, video",H=Date.now(),G=[];T.animating=!1,T.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var X,A;T.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(X="touchstart"===a.type)||!("which"in a)||3!==a.which){if(T.params.noSwiping&&o(a,"."+T.params.noSwipingClass))return void(T.allowClick=!0);if(!T.params.swipeHandler||o(a,T.params.swipeHandler)){var t=T.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=T.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(T.device.ios&&T.params.iOSEdgeSwipeDetection&&t<=T.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,A=void 0,T.touches.startX=t,T.touches.startY=s,M=Date.now(),T.allowClick=!0,T.updateContainerSize(),T.swipeDirection=void 0,T.params.threshold>0&&(k=!1),"touchstart"!==a.type){var i=!0;e(a.target).is(B)&&(i=!1),document.activeElement&&e(document.activeElement).is(B)&&document.activeElement.blur(),i&&a.preventDefault()}T.emit("onTouchStart",T,a)}}}},T.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!X||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return T.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(T.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(T.params.onlyExternal)return T.allowClick=!1,void(S&&(T.touches.startX=T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.startY=T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,M=Date.now()));if(X&&T.params.touchReleaseOnEdges&&!T.params.loop)if(T.isHorizontal()){if(T.touches.currentX<T.touches.startX&&T.translate<=T.maxTranslate()||T.touches.currentX>T.touches.startX&&T.translate>=T.minTranslate())return}else if(T.touches.currentY<T.touches.startY&&T.translate<=T.maxTranslate()||T.touches.currentY>T.touches.startY&&T.translate>=T.minTranslate())return;if(X&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(B))return C=!0,void(T.allowClick=!1);if(z&&T.emit("onTouchMove",T,a),!(a.targetTouches&&a.targetTouches.length>1)){if(T.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,T.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===E){var t;T.isHorizontal()&&T.touches.currentY===T.touches.startY||!T.isHorizontal()&&T.touches.currentX===T.touches.startX?E=!1:(t=180*Math.atan2(Math.abs(T.touches.currentY-T.touches.startY),Math.abs(T.touches.currentX-T.touches.startX))/Math.PI,E=T.isHorizontal()?t>T.params.touchAngle:90-t>T.params.touchAngle)}if(E&&T.emit("onTouchMoveOpposite",T,a),void 0===A&&(T.touches.currentX===T.touches.startX&&T.touches.currentY===T.touches.startY||(A=!0)),S){if(E)return void(S=!1);if(A){T.allowClick=!1,T.emit("onSliderMove",T,a),a.preventDefault(),T.params.touchMoveStopPropagation&&!T.params.nested&&a.stopPropagation(),C||(i.loop&&T.fixLoop(),I=T.getWrapperTranslate(),T.setWrapperTransition(0),T.animating&&T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),T.params.autoplay&&T.autoplaying&&(T.params.autoplayDisableOnInteraction?T.stopAutoplay():T.pauseAutoplay()),D=!1,!T.params.grabCursor||T.params.allowSwipeToNext!==!0&&T.params.allowSwipeToPrev!==!0||T.setGrabCursor(!0)),C=!0;var s=T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY;s*=T.params.touchRatio,T.rtl&&(s=-s),T.swipeDirection=s>0?"prev":"next",P=s+I;var r=!0;if(s>0&&P>T.minTranslate()?(r=!1,T.params.resistance&&(P=T.minTranslate()-1+Math.pow(-T.minTranslate()+I+s,T.params.resistanceRatio))):s<0&&P<T.maxTranslate()&&(r=!1,T.params.resistance&&(P=T.maxTranslate()+1-Math.pow(T.maxTranslate()-I-s,T.params.resistanceRatio))),r&&(a.preventedByNestedSwiper=!0),!T.params.allowSwipeToNext&&"next"===T.swipeDirection&&P<I&&(P=I),!T.params.allowSwipeToPrev&&"prev"===T.swipeDirection&&P>I&&(P=I),T.params.threshold>0){if(!(Math.abs(s)>T.params.threshold||k))return void(P=I);if(!k)return k=!0,T.touches.startX=T.touches.currentX,T.touches.startY=T.touches.currentY,P=I,void(T.touches.diff=T.isHorizontal()?T.touches.currentX-T.touches.startX:T.touches.currentY-T.touches.startY)}T.params.followFinger&&((T.params.freeMode||T.params.watchSlidesProgress)&&T.updateActiveIndex(),T.params.freeMode&&(0===G.length&&G.push({position:T.touches[T.isHorizontal()?"startX":"startY"],time:M}),G.push({position:T.touches[T.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),T.updateProgress(P),T.setWrapperTranslate(P))}}}}},T.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),z&&T.emit("onTouchEnd",T,a),z=!1,S){T.params.grabCursor&&C&&S&&(T.params.allowSwipeToNext===!0||T.params.allowSwipeToPrev===!0)&&T.setGrabCursor(!1);var t=Date.now(),s=t-M;if(T.allowClick&&(T.updateClickedSlide(a),T.emit("onTap",T,a),s<300&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){T&&(T.params.paginationHide&&T.paginationContainer.length>0&&!e(a.target).hasClass(T.params.bulletClass)&&T.paginationContainer.toggleClass(T.params.paginationHiddenClass),T.emit("onClick",T,a))},300)),s<300&&t-H<300&&(L&&clearTimeout(L),T.emit("onDoubleTap",T,a))),H=Date.now(),setTimeout(function(){T&&(T.allowClick=!0)},0),!S||!C||!T.swipeDirection||0===T.touches.diff||P===I)return void(S=C=!1);S=C=!1;var i;if(i=T.params.followFinger?T.rtl?T.translate:-T.translate:-P,T.params.freeMode){if(i<-T.minTranslate())return void T.slideTo(T.activeIndex);if(i>-T.maxTranslate())return void(T.slides.length<T.snapGrid.length?T.slideTo(T.snapGrid.length-1):T.slideTo(T.slides.length-1));if(T.params.freeModeMomentum){if(G.length>1){var r=G.pop(),n=G.pop(),o=r.position-n.position,l=r.time-n.time;T.velocity=o/l,T.velocity=T.velocity/2,Math.abs(T.velocity)<T.params.freeModeMinimumVelocity&&(T.velocity=0),(l>150||(new window.Date).getTime()-r.time>300)&&(T.velocity=0)}else T.velocity=0;T.velocity=T.velocity*T.params.freeModeMomentumVelocityRatio,G.length=0;var p=1e3*T.params.freeModeMomentumRatio,d=T.velocity*p,u=T.translate+d;T.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(T.velocity)*T.params.freeModeMomentumBounceRatio;if(u<T.maxTranslate())T.params.freeModeMomentumBounce?(u+T.maxTranslate()<-h&&(u=T.maxTranslate()-h),c=T.maxTranslate(),m=!0,D=!0):u=T.maxTranslate();else if(u>T.minTranslate())T.params.freeModeMomentumBounce?(u-T.minTranslate()>h&&(u=T.minTranslate()+h),c=T.minTranslate(),m=!0,D=!0):u=T.minTranslate();else if(T.params.freeModeSticky){var g,f=0;for(f=0;f<T.snapGrid.length;f+=1)if(T.snapGrid[f]>-u){g=f;break}u=Math.abs(T.snapGrid[g]-u)<Math.abs(T.snapGrid[g-1]-u)||"next"===T.swipeDirection?T.snapGrid[g]:T.snapGrid[g-1],T.rtl||(u=-u)}if(0!==T.velocity)p=T.rtl?Math.abs((-u-T.translate)/T.velocity):Math.abs((u-T.translate)/T.velocity);else if(T.params.freeModeSticky)return void T.slideReset();T.params.freeModeMomentumBounce&&m?(T.updateProgress(c),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating=!0,T.wrapper.transitionEnd(function(){T&&D&&(T.emit("onMomentumBounce",T),T.setWrapperTransition(T.params.speed),T.setWrapperTranslate(c),T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))})):T.velocity?(T.updateProgress(u),T.setWrapperTransition(p),T.setWrapperTranslate(u),T.onTransitionStart(),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd()}))):T.updateProgress(u),T.updateActiveIndex()}return void((!T.params.freeModeMomentum||s>=T.params.longSwipesMs)&&(T.updateProgress(),T.updateActiveIndex()))}var v,w=0,y=T.slidesSizesGrid[0];for(v=0;v<T.slidesGrid.length;v+=T.params.slidesPerGroup)void 0!==T.slidesGrid[v+T.params.slidesPerGroup]?i>=T.slidesGrid[v]&&i<T.slidesGrid[v+T.params.slidesPerGroup]&&(w=v,y=T.slidesGrid[v+T.params.slidesPerGroup]-T.slidesGrid[v]):i>=T.slidesGrid[v]&&(w=v,y=T.slidesGrid[T.slidesGrid.length-1]-T.slidesGrid[T.slidesGrid.length-2]);var x=(i-T.slidesGrid[w])/y;if(s>T.params.longSwipesMs){if(!T.params.longSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&(x>=T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w)),"prev"===T.swipeDirection&&(x>1-T.params.longSwipesRatio?T.slideTo(w+T.params.slidesPerGroup):T.slideTo(w))}else{if(!T.params.shortSwipes)return void T.slideTo(T.activeIndex);"next"===T.swipeDirection&&T.slideTo(w+T.params.slidesPerGroup),"prev"===T.swipeDirection&&T.slideTo(w)}}},T._slideTo=function(e,a){return T.slideTo(e,a,!0,!0)},T.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),T.snapIndex=Math.floor(e/T.params.slidesPerGroup),T.snapIndex>=T.snapGrid.length&&(T.snapIndex=T.snapGrid.length-1);var i=-T.snapGrid[T.snapIndex];if(T.params.autoplay&&T.autoplaying&&(s||!T.params.autoplayDisableOnInteraction?T.pauseAutoplay(a):T.stopAutoplay()),T.updateProgress(i),T.params.normalizeSlideIndex)for(var r=0;r<T.slidesGrid.length;r++)-Math.floor(100*i)>=Math.floor(100*T.slidesGrid[r])&&(e=r);return!(!T.params.allowSwipeToNext&&i<T.translate&&i<T.minTranslate())&&(!(!T.params.allowSwipeToPrev&&i>T.translate&&i>T.maxTranslate()&&(T.activeIndex||0)!==e)&&(void 0===a&&(a=T.params.speed),T.previousIndex=T.activeIndex||0,T.activeIndex=e,T.updateRealIndex(),T.rtl&&-i===T.translate||!T.rtl&&i===T.translate?(T.params.autoHeight&&T.updateAutoHeight(),T.updateClasses(),"slide"!==T.params.effect&&T.setWrapperTranslate(i),!1):(T.updateClasses(),T.onTransitionStart(t),0===a||T.browser.lteIE9?(T.setWrapperTranslate(i),T.setWrapperTransition(0),T.onTransitionEnd(t)):(T.setWrapperTranslate(i),T.setWrapperTransition(a),T.animating||(T.animating=!0,T.wrapper.transitionEnd(function(){T&&T.onTransitionEnd(t)}))),!0)))},T.onTransitionStart=function(e){void 0===e&&(e=!0),T.params.autoHeight&&T.updateAutoHeight(),T.lazy&&T.lazy.onTransitionStart(),e&&(T.emit("onTransitionStart",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeStart",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextStart",T):T.emit("onSlidePrevStart",T)))},T.onTransitionEnd=function(e){T.animating=!1,T.setWrapperTransition(0),void 0===e&&(e=!0),T.lazy&&T.lazy.onTransitionEnd(),e&&(T.emit("onTransitionEnd",T),T.activeIndex!==T.previousIndex&&(T.emit("onSlideChangeEnd",T),T.activeIndex>T.previousIndex?T.emit("onSlideNextEnd",T):T.emit("onSlidePrevEnd",T))),T.params.history&&T.history&&T.history.setHistory(T.params.history,T.activeIndex),T.params.hashnav&&T.hashnav&&T.hashnav.setHash()},T.slideNext=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)}return T.slideTo(T.activeIndex+T.params.slidesPerGroup,a,e,t)},T._slideNext=function(e){return T.slideNext(!0,e,!0)},T.slidePrev=function(e,a,t){if(T.params.loop){if(T.animating)return!1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex-1,a,e,t)}return T.slideTo(T.activeIndex-1,a,e,t)},T._slidePrev=function(e){return T.slidePrev(!0,e,!0)},T.slideReset=function(e,a,t){return T.slideTo(T.activeIndex,a,e)},T.disableTouchControl=function(){return T.params.onlyExternal=!0,!0},T.enableTouchControl=function(){return T.params.onlyExternal=!1,!0},T.setWrapperTransition=function(e,a){T.wrapper.transition(e),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTransition(e),T.params.parallax&&T.parallax&&T.parallax.setTransition(e),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTransition(e),T.params.control&&T.controller&&T.controller.setTransition(e,a),T.emit("onSetTransition",T,e)},T.setWrapperTranslate=function(e,a,t){var s=0,i=0;T.isHorizontal()?s=T.rtl?-e:e:i=e,T.params.roundLengths&&(s=r(s),i=r(i)),T.params.virtualTranslate||(T.support.transforms3d?T.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):T.wrapper.transform("translate("+s+"px, "+i+"px)")),T.translate=T.isHorizontal()?s:i;var n,o=T.maxTranslate()-T.minTranslate();n=0===o?0:(e-T.minTranslate())/o,n!==T.progress&&T.updateProgress(e),a&&T.updateActiveIndex(),"slide"!==T.params.effect&&T.effects[T.params.effect]&&T.effects[T.params.effect].setTranslate(T.translate),T.params.parallax&&T.parallax&&T.parallax.setTranslate(T.translate),T.params.scrollbar&&T.scrollbar&&T.scrollbar.setTranslate(T.translate),T.params.control&&T.controller&&T.controller.setTranslate(T.translate,t),T.emit("onSetTranslate",T,T.translate)},T.getTranslate=function(e,a){var t,s,i,r;return void 0===a&&(a="x"),T.params.virtualTranslate?T.rtl?-T.translate:T.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new window.WebKitCSSMatrix("none"===s?"":s)):(r=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=r.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?r.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?r.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),T.rtl&&s&&(s=-s),s||0)},T.getWrapperTranslate=function(e){return void 0===e&&(e=T.isHorizontal()?"x":"y"),T.getTranslate(T.wrapper[0],e)},T.observers=[],T.initObservers=function(){if(T.params.observeParents)for(var e=T.container.parents(),a=0;a<e.length;a++)l(e[a]);l(T.container[0],{childList:!1}),l(T.wrapper[0],{attributes:!1})},T.disconnectObservers=function(){for(var e=0;e<T.observers.length;e++)T.observers[e].disconnect();T.observers=[]},T.createLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove();var a=T.wrapper.children("."+T.params.slideClass);"auto"!==T.params.slidesPerView||T.params.loopedSlides||(T.params.loopedSlides=a.length),T.loopedSlides=parseInt(T.params.loopedSlides||T.params.slidesPerView,10),T.loopedSlides=T.loopedSlides+T.params.loopAdditionalSlides,T.loopedSlides>a.length&&(T.loopedSlides=a.length);var t,s=[],i=[];for(a.each(function(t,r){var n=e(this);t<T.loopedSlides&&i.push(r),t<a.length&&t>=a.length-T.loopedSlides&&s.push(r),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))},T.destroyLoop=function(){T.wrapper.children("."+T.params.slideClass+"."+T.params.slideDuplicateClass).remove(),T.slides.removeAttr("data-swiper-slide-index")},T.reLoop=function(e){var a=T.activeIndex-T.loopedSlides;T.destroyLoop(),T.createLoop(),T.updateSlidesSize(),e&&T.slideTo(a+T.loopedSlides,0,!1)},T.fixLoop=function(){var e;T.activeIndex<T.loopedSlides?(e=T.slides.length-3*T.loopedSlides+T.activeIndex,e+=T.loopedSlides,T.slideTo(e,0,!1,!0)):("auto"===T.params.slidesPerView&&T.activeIndex>=2*T.loopedSlides||T.activeIndex>T.slides.length-2*T.params.slidesPerView)&&(e=-T.slides.length+T.activeIndex+T.loopedSlides,e+=T.loopedSlides,T.slideTo(e,0,!1,!0))},T.appendSlide=function(e){if(T.params.loop&&T.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&T.wrapper.append(e[a]);else T.wrapper.append(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0)},T.prependSlide=function(e){T.params.loop&&T.destroyLoop();var a=T.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&T.wrapper.prepend(e[t]);a=T.activeIndex+e.length}else T.wrapper.prepend(e);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.slideTo(a,0,!1)},T.removeSlide=function(e){T.params.loop&&(T.destroyLoop(),T.slides=T.wrapper.children("."+T.params.slideClass));var a,t=T.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,T.slides[a]&&T.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);T.params.loop&&T.createLoop(),T.params.observer&&T.support.observer||T.update(!0),T.params.loop?T.slideTo(t+T.loopedSlides,0,!1):T.slideTo(t,0,!1)},T.removeAllSlides=function(){for(var e=[],a=0;a<T.slides.length;a++)e.push(a);T.removeSlide(e)},T.effects={fade:{setTranslate:function(){for(var e=0;e<T.slides.length;e++){var a=T.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;T.params.virtualTranslate||(s-=T.translate);var i=0;T.isHorizontal()||(i=s,s=0);var r=T.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:r}).transform("translate3d("+s+"px, "+i+"px, 0px)")}},setTransition:function(e){if(T.slides.transition(e),T.params.virtualTranslate&&0!==e){var a=!1;T.slides.transitionEnd(function(){if(!a&&T){a=!0,T.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)T.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<T.slides.length;a++){var t=T.slides.eq(a),s=t[0].progress;T.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,r=-180*s,n=r,o=0,l=-i,p=0;if(T.isHorizontal()?T.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+T.slides.length,T.params.flip.slideShadows){var d=T.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=T.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),T.params.virtualTranslate&&0!==a){var t=!1;T.slides.eq(T.activeIndex).transitionEnd(function(){if(!t&&T&&e(this).hasClass(T.params.slideActiveClass)){t=!0,T.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)T.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;T.params.cube.shadow&&(T.isHorizontal()?(a=T.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.wrapper.append(a)),a.css({height:T.width+"px"})):(a=T.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),T.container.append(a))));for(var s=0;s<T.slides.length;s++){var i=T.slides.eq(s),r=90*s,n=Math.floor(r/360);T.rtl&&(r=-r,n=Math.floor(-r/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*T.size,d=0):(s-1)%4==0?(l=0,d=4*-n*T.size):(s-2)%4==0?(l=T.size+4*n*T.size,d=T.size):(s-3)%4==0&&(l=-T.size,d=3*T.size+4*T.size*n),T.rtl&&(l=-l),T.isHorizontal()||(p=l,l=0);var u="rotateX("+(T.isHorizontal()?0:-r)+"deg) rotateY("+(T.isHorizontal()?r:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,T.rtl&&(t=90*-s-90*o)),i.transform(u),T.params.cube.slideShadows){var c=T.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=T.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(T.wrapper.css({"-webkit-transform-origin":"50% 50% -"+T.size/2+"px","-moz-transform-origin":"50% 50% -"+T.size/2+"px","-ms-transform-origin":"50% 50% -"+T.size/2+"px","transform-origin":"50% 50% -"+T.size/2+"px"}),T.params.cube.shadow)if(T.isHorizontal())a.transform("translate3d(0px, "+(T.width/2+T.params.cube.shadowOffset)+"px, "+-T.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+T.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=T.params.cube.shadowScale,v=T.params.cube.shadowScale/g,w=T.params.cube.shadowOffset;a.transform("scale3d("+f+", 1, "+v+") translate3d(0px, "+(T.height/2+w)+"px, "+-T.height/2/v+"px) rotateX(-90deg)")}var y=T.isSafari||T.isUiWebView?-T.size/2:0;T.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(T.isHorizontal()?0:t)+"deg) rotateY("+(T.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),T.params.cube.shadow&&!T.isHorizontal()&&T.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=T.translate,t=T.isHorizontal()?-a+T.width/2:-a+T.height/2,s=T.isHorizontal()?T.params.coverflow.rotate:-T.params.coverflow.rotate,i=T.params.coverflow.depth,r=0,n=T.slides.length;r<n;r++){var o=T.slides.eq(r),l=T.slidesSizesGrid[r],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*T.params.coverflow.modifier,u=T.isHorizontal()?s*d:0,c=T.isHorizontal()?0:s*d,m=-i*Math.abs(d),h=T.isHorizontal()?0:T.params.coverflow.stretch*d,g=T.isHorizontal()?T.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var f="translate3d("+g+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(f),o[0].style.zIndex=1-Math.abs(Math.round(d)),T.params.coverflow.slideShadows){var v=T.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=T.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(T.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(T.browser.ie){T.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},T.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==T.slides.length)){var s=T.slides.eq(a),i=s.find("."+T.params.lazyLoadingClass+":not(."+T.params.lazyStatusLoadedClass+"):not(."+T.params.lazyStatusLoadingClass+")");!s.hasClass(T.params.lazyLoadingClass)||s.hasClass(T.params.lazyStatusLoadedClass)||s.hasClass(T.params.lazyStatusLoadingClass)||(i=i.add(s[0])),0!==i.length&&i.each(function(){var a=e(this);a.addClass(T.params.lazyStatusLoadingClass);var i=a.attr("data-background"),r=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");T.loadImage(a[0],r||i,n,o,!1,function(){if(void 0!==T&&null!==T&&T){if(i?(a.css("background-image",'url("'+i+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),r&&(a.attr("src",r),a.removeAttr("data-src"))),a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),s.find("."+T.params.lazyPreloaderClass+", ."+T.params.preloaderClass).remove(),T.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(T.params.slideDuplicateClass)){var l=T.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+T.params.slideDuplicateClass+")");T.lazy.loadImageInSlide(l.index(),!1)}else{var p=T.wrapper.children("."+T.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');T.lazy.loadImageInSlide(p.index(),!1)}}T.emit("onLazyImageReady",T,s[0],a[0])}}),T.emit("onLazyImageLoad",T,s[0],a[0])})}},load:function(){var a,t=T.params.slidesPerView;if("auto"===t&&(t=0),T.lazy.initialImageLoaded||(T.lazy.initialImageLoaded=!0),T.params.watchSlidesVisibility)T.wrapper.children("."+T.params.slideVisibleClass).each(function(){T.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=T.activeIndex;a<T.activeIndex+t;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);else T.lazy.loadImageInSlide(T.activeIndex);if(T.params.lazyLoadingInPrevNext)if(t>1||T.params.lazyLoadingInPrevNextAmount&&T.params.lazyLoadingInPrevNextAmount>1){var s=T.params.lazyLoadingInPrevNextAmount,i=t,r=Math.min(T.activeIndex+i+Math.max(s,i),T.slides.length),n=Math.max(T.activeIndex-Math.max(i,s),0);for(a=T.activeIndex+t;a<r;a++)T.slides[a]&&T.lazy.loadImageInSlide(a);for(a=n;a<T.activeIndex;a++)T.slides[a]&&T.lazy.loadImageInSlide(a)}else{var o=T.wrapper.children("."+T.params.slideNextClass);o.length>0&&T.lazy.loadImageInSlide(o.index());var l=T.wrapper.children("."+T.params.slidePrevClass);l.length>0&&T.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){T.params.lazyLoading&&(T.params.lazyLoadingOnTransitionStart||!T.params.lazyLoadingOnTransitionStart&&!T.lazy.initialImageLoaded)&&T.lazy.load()},onTransitionEnd:function(){T.params.lazyLoading&&!T.params.lazyLoadingOnTransitionStart&&T.lazy.load()}},T.scrollbar={isTouched:!1,setDragPosition:function(e){var a=T.scrollbar,t=T.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[T.isHorizontal()?"left":"top"]-a.dragSize/2,i=-T.minTranslate()*a.moveDivider,r=-T.maxTranslate()*a.moveDivider;s<i?s=i:s>r&&(s=r),s=-s/a.moveDivider,T.updateProgress(s),T.setWrapperTranslate(s,!0)},dragStart:function(e){var a=T.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),T.params.scrollbarHide&&a.track.css("opacity",1),T.wrapper.transition(100),a.drag.transition(100),T.emit("onScrollbarDragStart",T)},dragMove:function(e){var a=T.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),T.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),T.emit("onScrollbarDragMove",T))},dragEnd:function(e){var a=T.scrollbar;a.isTouched&&(a.isTouched=!1,T.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),T.emit("onScrollbarDragEnd",T),T.params.scrollbarSnapOnRelease&&T.slideReset())},draggableEvents:function(){return T.params.simulateTouch!==!1||T.support.touch?T.touchEvents:T.touchEventsDesktop}(),enableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=T.scrollbar,t=T.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(T.params.scrollbar){var a=T.scrollbar;a.track=e(T.params.scrollbar),T.params.uniqueNavElements&&"string"==typeof T.params.scrollbar&&a.track.length>1&&1===T.container.find(T.params.scrollbar).length&&(a.track=T.container.find(T.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=T.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=T.size/T.virtualSize,a.moveDivider=a.divider*(a.trackSize/T.size),a.dragSize=a.trackSize*a.divider,T.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",T.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(T.params.scrollbar){var e,a=T.scrollbar,t=(T.translate,a.dragSize);e=(a.trackSize-a.dragSize)*T.progress,T.rtl&&T.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),T.isHorizontal()?(T.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(T.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),T.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){T.params.scrollbar&&T.scrollbar.drag.transition(e)}},T.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,i){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=i?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,i;this.x.length;this.interpolate=function(e){return e?(i=t(this.x,e),s=i-1,(e-this.x[s])*(this.y[i]-this.y[s])/(this.x[i]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){T.controller.spline||(T.controller.spline=T.params.loop?new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid):new T.controller.LinearSpline(T.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-T.translate:T.translate,"slide"===T.params.controlBy&&(T.controller.getInterpolateFunction(a),r=-T.controller.spline.interpolate(-e)),r&&"container"!==T.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(T.maxTranslate()-T.minTranslate()),r=(e-T.minTranslate())*i+a.minTranslate()),T.params.controlInverse&&(r=a.maxTranslate()-r),a.updateProgress(r),a.setWrapperTranslate(r,!1,T),a.updateActiveIndex()}var i,r,n=T.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,T),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){r&&(a.params.loop&&"slide"===T.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,r=T.params.control;if(Array.isArray(r))for(i=0;i<r.length;i++)r[i]!==t&&r[i]instanceof a&&s(r[i]);else r instanceof a&&t!==r&&s(r)}},T.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==T.slides.eq(T.activeIndex).attr("data-hash")&&T.slideTo(T.wrapper.children("."+T.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",T.hashnav.onHashCange)},setHash:function(){
if(T.hashnav.initialized&&T.params.hashnav)if(T.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+T.slides.eq(T.activeIndex).attr("data-hash")||"");else{var e=T.slides.eq(T.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(T.params.hashnav&&!T.params.history){T.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=T.slides.length;a<t;a++){var s=T.slides.eq(a),i=s.attr("data-hash")||s.attr("data-history");if(i===e&&!s.hasClass(T.params.slideDuplicateClass)){var r=s.index();T.slideTo(r,0,T.params.runCallbacksOnInit,!0)}}T.params.hashnavWatchState&&T.hashnav.attachEvents()}},destroy:function(){T.params.hashnavWatchState&&T.hashnav.attachEvents(!0)}},T.history={init:function(){if(T.params.history){if(!window.history||!window.history.pushState)return T.params.history=!1,void(T.params.hashnav=!0);T.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,T.params.runCallbacksOnInit),T.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){T.history.paths=T.history.getPathValues(),T.history.scrollToSlide(T.params.speed,T.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(T.history.initialized&&T.params.history){var t=T.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),T.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,i=T.slides.length;s<i;s++){var r=T.slides.eq(s),n=this.slugify(r.attr("data-history"));if(n===a&&!r.hasClass(T.params.slideDuplicateClass)){var o=r.index();T.slideTo(o,e,t)}}else T.slideTo(0,e,t)}},T.disableKeyboardControl=function(){T.params.keyboardControl=!1,e(document).off("keydown",p)},T.enableKeyboardControl=function(){T.params.keyboardControl=!0,e(document).on("keydown",p)},T.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},T.params.mousewheelControl&&(T.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),T.disableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.off(T.mousewheel.event,u),T.params.mousewheelControl=!1,!0},T.enableMousewheelControl=function(){if(!T.mousewheel.event)return!1;var a=T.container;return"container"!==T.params.mousewheelEventsTarged&&(a=e(T.params.mousewheelEventsTarged)),a.on(T.mousewheel.event,u),T.params.mousewheelControl=!0,!0},T.parallax={setTranslate:function(){T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,T.progress)}),T.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=T.params.speed),T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},T.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:T.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(i-t,2))},onGestureStart:function(a){var t=T.zoom;if(!T.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=T.slides.eq(T.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+T.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||T.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=T.zoom;if(!T.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(T.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<T.params.zoomMin&&(a.scale=T.params.zoomMin+1-Math.pow(T.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=T.zoom;!T.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),T.params.zoomMin),a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=T.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(T.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=T.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=T.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),T.rtl&&(a.image.startX=-a.image.startX),T.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(T.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!T.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,i=300,r=t.velocity.x*s,n=t.image.currentX+r,o=t.velocity.y*i,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(i=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,i);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,u=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-u/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var i,r,n,o,l,p,d,u,c,m,h,g,f,v,w,y,x,T;void 0===s.image.touchesStart.x&&t?(i="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,r="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(i=s.image.touchesStart.x,r=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-i,p=o+T/2-r,c=s.gesture.image[0].offsetWidth,m=s.gesture.image[0].offsetHeight,h=c*s.scale,g=m*s.scale,f=Math.min(x/2-h/2,0),v=Math.min(T/2-g/2,0),w=-f,y=-v,d=l*s.scale,u=p*s.scale,d<f&&(d=f),d>w&&(d=w),u<v&&(u=v),u>y&&(u=y)):(d=0,u=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+u+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(T.params.zoom){var s=(T.slides,!("touchstart"!==T.touchEvents.start||!T.support.passiveListener||!T.params.passiveListeners)&&{passive:!0,capture:!1});T.support.gestures?(T.slides[t]("gesturestart",T.zoom.onGestureStart,s),T.slides[t]("gesturechange",T.zoom.onGestureChange,s),T.slides[t]("gestureend",T.zoom.onGestureEnd,s)):"touchstart"===T.touchEvents.start&&(T.slides[t](T.touchEvents.start,T.zoom.onGestureStart,s),T.slides[t](T.touchEvents.move,T.zoom.onGestureChange,s),T.slides[t](T.touchEvents.end,T.zoom.onGestureEnd,s)),T[t]("touchStart",T.zoom.onTouchStart),T.slides.each(function(a,s){e(s).find("."+T.params.zoomContainerClass).length>0&&e(s)[t](T.touchEvents.move,T.zoom.onTouchMove)}),T[t]("touchEnd",T.zoom.onTouchEnd),T[t]("transitionEnd",T.zoom.onTransitionEnd),T.params.zoomToggle&&T.on("doubleTap",T.zoom.toggleZoom)}},init:function(){T.zoom.attachEvents()},destroy:function(){T.zoom.attachEvents(!0)}},T._plugins=[];for(var Y in T.plugins){var O=T.plugins[Y](T,T.params[Y]);O&&T._plugins.push(O)}return T.callPlugins=function(e){for(var a=0;a<T._plugins.length;a++)e in T._plugins[a]&&T._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.emitterEventListeners={},T.emit=function(e){T.params[e]&&T.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(T.emitterEventListeners[e])for(a=0;a<T.emitterEventListeners[e].length;a++)T.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);T.callPlugins&&T.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},T.on=function(e,a){return e=m(e),T.emitterEventListeners[e]||(T.emitterEventListeners[e]=[]),T.emitterEventListeners[e].push(a),T},T.off=function(e,a){var t;if(e=m(e),void 0===a)return T.emitterEventListeners[e]=[],T;if(T.emitterEventListeners[e]&&0!==T.emitterEventListeners[e].length){for(t=0;t<T.emitterEventListeners[e].length;t++)T.emitterEventListeners[e][t]===a&&T.emitterEventListeners[e].splice(t,1);return T}},T.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),T.off(e,t)};return T.on(e,t),T},T.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(T.params.nextButton)?(T.onClickNext(a),T.isEnd?T.a11y.notify(T.params.lastSlideMessage):T.a11y.notify(T.params.nextSlideMessage)):e(a.target).is(T.params.prevButton)&&(T.onClickPrev(a),T.isBeginning?T.a11y.notify(T.params.firstSlideMessage):T.a11y.notify(T.params.prevSlideMessage)),e(a.target).is("."+T.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+T.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=T.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){T.params.nextButton&&T.nextButton&&T.nextButton.length>0&&(T.a11y.makeFocusable(T.nextButton),T.a11y.addRole(T.nextButton,"button"),T.a11y.addLabel(T.nextButton,T.params.nextSlideMessage)),T.params.prevButton&&T.prevButton&&T.prevButton.length>0&&(T.a11y.makeFocusable(T.prevButton),T.a11y.addRole(T.prevButton,"button"),T.a11y.addLabel(T.prevButton,T.params.prevSlideMessage)),e(T.container).append(T.a11y.liveRegion)},initPagination:function(){T.params.pagination&&T.params.paginationClickable&&T.bullets&&T.bullets.length&&T.bullets.each(function(){var a=e(this);T.a11y.makeFocusable(a),T.a11y.addRole(a,"button"),T.a11y.addLabel(a,T.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){T.a11y.liveRegion&&T.a11y.liveRegion.length>0&&T.a11y.liveRegion.remove()}},T.init=function(){T.params.loop&&T.createLoop(),T.updateContainerSize(),T.updateSlidesSize(),T.updatePagination(),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.set(),T.params.scrollbarDraggable&&T.scrollbar.enableDraggable()),"slide"!==T.params.effect&&T.effects[T.params.effect]&&(T.params.loop||T.updateProgress(),T.effects[T.params.effect].setTranslate()),T.params.loop?T.slideTo(T.params.initialSlide+T.loopedSlides,0,T.params.runCallbacksOnInit):(T.slideTo(T.params.initialSlide,0,T.params.runCallbacksOnInit),0===T.params.initialSlide&&(T.parallax&&T.params.parallax&&T.parallax.setTranslate(),T.lazy&&T.params.lazyLoading&&(T.lazy.load(),T.lazy.initialImageLoaded=!0))),T.attachEvents(),T.params.observer&&T.support.observer&&T.initObservers(),T.params.preloadImages&&!T.params.lazyLoading&&T.preloadImages(),T.params.zoom&&T.zoom&&T.zoom.init(),T.params.autoplay&&T.startAutoplay(),T.params.keyboardControl&&T.enableKeyboardControl&&T.enableKeyboardControl(),T.params.mousewheelControl&&T.enableMousewheelControl&&T.enableMousewheelControl(),T.params.hashnavReplaceState&&(T.params.replaceState=T.params.hashnavReplaceState),T.params.history&&T.history&&T.history.init(),T.params.hashnav&&T.hashnav&&T.hashnav.init(),T.params.a11y&&T.a11y&&T.a11y.init(),T.emit("onInit",T)},T.cleanupStyles=function(){T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),T.wrapper.removeAttr("style"),T.slides&&T.slides.length&&T.slides.removeClass([T.params.slideVisibleClass,T.params.slideActiveClass,T.params.slideNextClass,T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),T.paginationContainer&&T.paginationContainer.length&&T.paginationContainer.removeClass(T.params.paginationHiddenClass),T.bullets&&T.bullets.length&&T.bullets.removeClass(T.params.bulletActiveClass),T.params.prevButton&&e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),T.params.nextButton&&e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),T.params.scrollbar&&T.scrollbar&&(T.scrollbar.track&&T.scrollbar.track.length&&T.scrollbar.track.removeAttr("style"),T.scrollbar.drag&&T.scrollbar.drag.length&&T.scrollbar.drag.removeAttr("style"))},T.destroy=function(e,a){T.detachEvents(),T.stopAutoplay(),T.params.scrollbar&&T.scrollbar&&T.params.scrollbarDraggable&&T.scrollbar.disableDraggable(),T.params.loop&&T.destroyLoop(),a&&T.cleanupStyles(),T.disconnectObservers(),T.params.zoom&&T.zoom&&T.zoom.destroy(),T.params.keyboardControl&&T.disableKeyboardControl&&T.disableKeyboardControl(),T.params.mousewheelControl&&T.disableMousewheelControl&&T.disableMousewheelControl(),T.params.a11y&&T.a11y&&T.a11y.destroy(),T.params.history&&!T.params.replaceState&&window.removeEventListener("popstate",T.history.setHistoryPopState),T.params.hashnav&&T.hashnav&&T.hashnav.destroy(),T.emit("onDestroy"),e!==!1&&(T=null)},T.init(),T}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||i||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var s=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var r,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)s.push(n.childNodes[i])}else for(r=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<r.length;i++)r[i]&&s.push(r[i])}else if(a.nodeType||a===window||a===document)s.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)s.push(a[i]);return new e(s)};return e.prototype={addClass:function(e){if(void 0===e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.remove(a[t]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var s=0;s<this.length;s++)this[s].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var s in e)this[t][s]=e[s],this[t].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if(void 0!==a){for(var t=0;t<this.length;t++){var s=this[t];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,s,i){function r(e){var i=e.target;if(a(i).is(t))s.call(i,e);else for(var r=a(i).parents(),n=0;n<r.length;n++)a(r[n]).is(t)&&s.call(r[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(s=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],s,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:s,liveListener:r}),this[n].addEventListener(l[o],r,i);return this},off:function(e,a,t,s){for(var i=e.split(" "),r=0;r<i.length;r++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],s=arguments[2]||!1),this[n].removeEventListener(i[r],t,s);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[r],this[n].dom7LiveListeners[o].liveListener,s);return this},once:function(e,a,t,s){function i(n){t(n),r.off(e,a,i,s)}var r=this;"function"==typeof a&&(a=!1,t=arguments[1],s=arguments[2]),r.on(e,a,i,s)},trigger:function(e,a){for(var t=0;t<this.length;t++){var s;try{s=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(t){s=document.createEvent("Event"),s.initEvent(e,!0,!0),s.detail=a}this[t].dispatchEvent(s)}return this},transitionEnd:function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,s=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,r=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+r-s,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var s in e)this[t].style[s]=e[s];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var s,i;if("string"==typeof t){var r=this[0];if(r===document)return t===document;if(r===window)return t===window;if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector)return r.mozMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(s=a(t),i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(s=t.nodeType?[t]:t,i=0;i<s.length;i++)if(s[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if(void 0===a)return this;var t,s=this.length;return a>s-1?new e([]):a<0?(t=s+a,new e(t<0?[]:[this[t]])):new e([this[a]])},append:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].appendChild(a[s]);else this[t].appendChild(a);return this},prepend:function(a){var t,s;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,s=i.childNodes.length-1;s>=0;s--)this[t].insertBefore(i.childNodes[s],this[t].childNodes[0])}else if(a instanceof e)for(s=0;s<a.length;s++)this[t].insertBefore(a[s],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),s=0;s<this.length;s++)if(1===t.length)t[0].parentNode.insertBefore(this[s],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[s].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var r=i.nextElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var s=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var r=i.previousElementSibling;t?a(r).is(t)&&s.push(r):s.push(r),i=r}return new e(s)},parent:function(e){for(var t=[],s=0;s<this.length;s++)e?a(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],s=0;s<this.length;s++)for(var i=this[s].querySelectorAll(a),r=0;r<i.length;r++)t.push(i[r]);return new e(t)},children:function(t){for(var s=[],i=0;i<this.length;i++)for(var r=this[i].childNodes,n=0;n<r.length;n++)t?1===r[n].nodeType&&a(r[n]).is(t)&&s.push(r[n]):1===r[n].nodeType&&s.push(r[n]);return new e(a.unique(s))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,s=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)s[s.length]=i[t],s.length++}return s}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)a.indexOf(e[t])===-1&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[s[i]]);var r;r=void 0===t?window.Dom7||window.Zepto||window.jQuery:t,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(r){if(r.target===this)for(e.call(this,r),t=0;t<s.length;t++)i.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<s.length;t++)i.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){
return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(), true?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});


/***/ }),

/***/ "../../../../builtin-status-codes/browser.js":
/***/ (function(module, exports) {

module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}


/***/ }),

/***/ "../../../../core-util-is/lib/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/container/slack/swiper.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Swiper 3.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2017, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: March 10, 2017\n */\n.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-pagination{position:absolute;text-align:center;transition:.3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ""]);

// exports


/***/ }),

/***/ "../../../../events/events.js":
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "../../../../https-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__("../../../../stream-http/index.js");

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    params.protocol = 'https:';
    return http.request.call(this, params, cb);
}


/***/ }),

/***/ "../../../../inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../../../node-libs-browser/node_modules/string_decoder/index.js":
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__("../../../../buffer/index.js").Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),

/***/ "../../../../process-nextick-args/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../../punycode/punycode.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/module.js")(module), __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../querystring-es3/decode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../../../querystring-es3/encode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../../../querystring-es3/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("../../../../querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__("../../../../querystring-es3/encode.js");


/***/ }),

/***/ "../../../../readable-stream/lib/_stream_duplex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var processNextTick = __webpack_require__("../../../../process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__("../../../../core-util-is/lib/util.js");
util.inherits = __webpack_require__("../../../../inherits/inherits_browser.js");
/*</replacement>*/

var Readable = __webpack_require__("../../../../readable-stream/lib/_stream_readable.js");
var Writable = __webpack_require__("../../../../readable-stream/lib/_stream_writable.js");

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  processNextTick(cb, err);
};

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),

/***/ "../../../../readable-stream/lib/_stream_passthrough.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__("../../../../readable-stream/lib/_stream_transform.js");

/*<replacement>*/
var util = __webpack_require__("../../../../core-util-is/lib/util.js");
util.inherits = __webpack_require__("../../../../inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "../../../../readable-stream/lib/_stream_readable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var processNextTick = __webpack_require__("../../../../process-nextick-args/index.js");
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__("../../../../isarray/index.js");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__("../../../../events/events.js").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("../../../../readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

// TODO(bmeurer): Change this back to const once hole checks are
// properly optimized away early in Ignition+TurboFan.
/*<replacement>*/
var Buffer = __webpack_require__("../../../../safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__("../../../../core-util-is/lib/util.js");
util.inherits = __webpack_require__("../../../../inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(3);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__("../../../../readable-stream/lib/internal/streams/BufferList.js");
var destroyImpl = __webpack_require__("../../../../readable-stream/lib/internal/streams/destroy.js");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__("../../../../node-libs-browser/node_modules/string_decoder/index.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__("../../../../node-libs-browser/node_modules/string_decoder/index.js").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../readable-stream/lib/_stream_transform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");

/*<replacement>*/
var util = __webpack_require__("../../../../core-util-is/lib/util.js");
util.inherits = __webpack_require__("../../../../inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return stream.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "../../../../readable-stream/lib/_stream_writable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var processNextTick = __webpack_require__("../../../../process-nextick-args/index.js");
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__("../../../../core-util-is/lib/util.js");
util.inherits = __webpack_require__("../../../../inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__("../../../../util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__("../../../../readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/
var Buffer = __webpack_require__("../../../../safe-buffer/index.js").Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

var destroyImpl = __webpack_require__("../../../../readable-stream/lib/internal/streams/destroy.js");

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = _isUint8Array(chunk) && !state.objectMode;

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    processNextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    processNextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      processNextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../process/browser.js"), __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../readable-stream/lib/internal/streams/BufferList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__("../../../../safe-buffer/index.js").Buffer;
/*</replacement>*/

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

/***/ }),

/***/ "../../../../readable-stream/lib/internal/streams/destroy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var processNextTick = __webpack_require__("../../../../process-nextick-args/index.js");
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      processNextTick(emitErrorNT, this, err);
    }
    return;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      processNextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),

/***/ "../../../../readable-stream/lib/internal/streams/stream-browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../events/events.js").EventEmitter;


/***/ }),

/***/ "../../../../readable-stream/readable-browser.js":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__("../../../../readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__("../../../../readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__("../../../../readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__("../../../../readable-stream/lib/_stream_passthrough.js");


/***/ }),

/***/ "../../../../safe-buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("../../../../buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "../../../../slack/methods/_exec.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = exec;

var _tinyJsonHttp = __webpack_require__("../../../../tiny-json-http/index.js");

var _tinyJsonHttp2 = _interopRequireDefault(_tinyJsonHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exec(url, form, callback) {

  // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
  Object.keys(form).forEach(function (key) {
    if (_typeof(form[key]) === 'object') {
      form[key] = JSON.stringify(form[key]);
    }
  });

  // always post
  _tinyJsonHttp2.default.post({
    url: 'https://slack.com/api/' + url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: form
  }, function _res(err, res) {
    // var rateLimit = 'You are sending too many requests. Please relax.'
    if (err) {
      // if request failed bubble the error
      callback(err);
    } else if (res.body && res.body.error) {
      callback(Error(res.body.error));
    } else {
      callback(null, res.body);
    }
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/_validate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _api = __webpack_require__("../../../../slack/methods/api.json");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(method, params) {
  // get all the requried params for this method
  var required = _api2.default[method].filter(function (param) {
    return param.required === 'Required';
  });
  // collect any missing params
  var missing = required.filter(function (param) {
    return typeof params[param.name] === 'undefined';
  });
  // optimisitcally assume the best
  var err = false;
  // but have a plan for the worst
  if (missing.length) {
    var bullets = missing.map(function (param) {
      return '- ' + param.name + ' ... ' + param.description;
    });
    var msg = method + ' missing params:\n' + bullets.join('\n');
    err = Error(msg);
  }
  return err;
} //
// validate returns an error object if any required params are missing
//
// example usage:
// 
//   // token and id are required params
//   function apiCall(params, callback) { 
//     let err = validate('api.signature', params)
//     if (err) {
//       callback(err)
//     }
//     else {
//       // do api call
//     }
//   }
//
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/api.client.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = client;

// generated by ./scripts/generate-stateful-client
function client(token) {
  var applied = {
    auth: {
      test: {}
    },
    bots: {
      info: {}
    },
    channels: {
      archive: {},
      create: {},
      history: {},
      info: {},
      invite: {},
      join: {},
      kick: {},
      leave: {},
      list: {},
      mark: {},
      rename: {},
      replies: {},
      setPurpose: {},
      setTopic: {},
      unarchive: {}
    },
    chat: {
      delete: {},
      meMessage: {},
      postMessage: {},
      unfurl: {},
      update: {}
    },
    dnd: {
      endDnd: {},
      endSnooze: {},
      info: {},
      setSnooze: {},
      teamInfo: {}
    },
    emoji: {
      list: {}
    },
    files: {
      comments: {
        add: {},
        delete: {},
        edit: {}
      },
      delete: {},
      info: {},
      list: {},
      revokePublicURL: {},
      sharedPublicURL: {},
      upload: {}
    },
    groups: {
      archive: {},
      close: {},
      create: {},
      createChild: {},
      history: {},
      info: {},
      invite: {},
      kick: {},
      leave: {},
      list: {},
      mark: {},
      open: {},
      rename: {},
      replies: {},
      setPurpose: {},
      setTopic: {},
      unarchive: {}
    },
    im: {
      close: {},
      history: {},
      list: {},
      mark: {},
      open: {},
      replies: {}
    },
    mpim: {
      close: {},
      history: {},
      list: {},
      mark: {},
      open: {},
      replies: {}
    },
    pins: {
      add: {},
      list: {},
      remove: {}
    },
    reactions: {
      add: {},
      get: {},
      list: {},
      remove: {}
    },
    reminders: {
      add: {},
      complete: {},
      delete: {},
      info: {},
      list: {}
    },
    rtm: {
      connect: {},
      start: {}
    },
    search: {
      all: {},
      files: {},
      messages: {}
    },
    stars: {
      add: {},
      list: {},
      remove: {}
    },
    team: {
      accessLogs: {},
      billableInfo: {},
      info: {},
      integrationLogs: {},
      profile: {
        get: {}
      }
    },
    usergroups: {
      create: {},
      disable: {},
      enable: {},
      list: {},
      update: {},
      users: {
        list: {},
        update: {}
      }
    },
    users: {
      deletePhoto: {},
      getPresence: {},
      identity: {},
      info: {},
      list: {},
      profile: {
        get: {},
        set: {}
      },
      setActive: {},
      setPhoto: {},
      setPresence: {}
    }
  };

  applied.auth.test = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/auth.test.js").call({}, params, callback);
  };
  applied.bots.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/bots.info.js").call({}, params, callback);
  };
  applied.channels.archive = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.archive.js").call({}, params, callback);
  };
  applied.channels.create = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.create.js").call({}, params, callback);
  };
  applied.channels.history = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.history.js").call({}, params, callback);
  };
  applied.channels.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.info.js").call({}, params, callback);
  };
  applied.channels.invite = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.invite.js").call({}, params, callback);
  };
  applied.channels.join = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.join.js").call({}, params, callback);
  };
  applied.channels.kick = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.kick.js").call({}, params, callback);
  };
  applied.channels.leave = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.leave.js").call({}, params, callback);
  };
  applied.channels.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.list.js").call({}, params, callback);
  };
  applied.channels.mark = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.mark.js").call({}, params, callback);
  };
  applied.channels.rename = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.rename.js").call({}, params, callback);
  };
  applied.channels.replies = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.replies.js").call({}, params, callback);
  };
  applied.channels.setPurpose = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.setPurpose.js").call({}, params, callback);
  };
  applied.channels.setTopic = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.setTopic.js").call({}, params, callback);
  };
  applied.channels.unarchive = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/channels.unarchive.js").call({}, params, callback);
  };
  applied.chat.delete = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/chat.delete.js").call({}, params, callback);
  };
  applied.chat.meMessage = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/chat.meMessage.js").call({}, params, callback);
  };
  applied.chat.postMessage = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/chat.postMessage.js").call({}, params, callback);
  };
  applied.chat.unfurl = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/chat.unfurl.js").call({}, params, callback);
  };
  applied.chat.update = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/chat.update.js").call({}, params, callback);
  };
  applied.dnd.endDnd = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/dnd.endDnd.js").call({}, params, callback);
  };
  applied.dnd.endSnooze = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/dnd.endSnooze.js").call({}, params, callback);
  };
  applied.dnd.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/dnd.info.js").call({}, params, callback);
  };
  applied.dnd.setSnooze = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/dnd.setSnooze.js").call({}, params, callback);
  };
  applied.dnd.teamInfo = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/dnd.teamInfo.js").call({}, params, callback);
  };
  applied.emoji.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/emoji.list.js").call({}, params, callback);
  };
  applied.files.comments.add = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.comments.add.js").call({}, params, callback);
  };
  applied.files.comments.delete = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.comments.delete.js").call({}, params, callback);
  };
  applied.files.comments.edit = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.comments.edit.js").call({}, params, callback);
  };
  applied.files.delete = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.delete.js").call({}, params, callback);
  };
  applied.files.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.info.js").call({}, params, callback);
  };
  applied.files.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.list.js").call({}, params, callback);
  };
  applied.files.revokePublicURL = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.revokePublicURL.js").call({}, params, callback);
  };
  applied.files.sharedPublicURL = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.sharedPublicURL.js").call({}, params, callback);
  };
  applied.files.upload = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/files.upload.js").call({}, params, callback);
  };
  applied.groups.archive = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.archive.js").call({}, params, callback);
  };
  applied.groups.close = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.close.js").call({}, params, callback);
  };
  applied.groups.create = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.create.js").call({}, params, callback);
  };
  applied.groups.createChild = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.createChild.js").call({}, params, callback);
  };
  applied.groups.history = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.history.js").call({}, params, callback);
  };
  applied.groups.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.info.js").call({}, params, callback);
  };
  applied.groups.invite = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.invite.js").call({}, params, callback);
  };
  applied.groups.kick = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.kick.js").call({}, params, callback);
  };
  applied.groups.leave = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.leave.js").call({}, params, callback);
  };
  applied.groups.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.list.js").call({}, params, callback);
  };
  applied.groups.mark = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.mark.js").call({}, params, callback);
  };
  applied.groups.open = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.open.js").call({}, params, callback);
  };
  applied.groups.rename = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.rename.js").call({}, params, callback);
  };
  applied.groups.replies = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.replies.js").call({}, params, callback);
  };
  applied.groups.setPurpose = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.setPurpose.js").call({}, params, callback);
  };
  applied.groups.setTopic = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.setTopic.js").call({}, params, callback);
  };
  applied.groups.unarchive = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/groups.unarchive.js").call({}, params, callback);
  };
  applied.im.close = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.close.js").call({}, params, callback);
  };
  applied.im.history = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.history.js").call({}, params, callback);
  };
  applied.im.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.list.js").call({}, params, callback);
  };
  applied.im.mark = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.mark.js").call({}, params, callback);
  };
  applied.im.open = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.open.js").call({}, params, callback);
  };
  applied.im.replies = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/im.replies.js").call({}, params, callback);
  };
  applied.mpim.close = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.close.js").call({}, params, callback);
  };
  applied.mpim.history = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.history.js").call({}, params, callback);
  };
  applied.mpim.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.list.js").call({}, params, callback);
  };
  applied.mpim.mark = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.mark.js").call({}, params, callback);
  };
  applied.mpim.open = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.open.js").call({}, params, callback);
  };
  applied.mpim.replies = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/mpim.replies.js").call({}, params, callback);
  };
  applied.pins.add = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/pins.add.js").call({}, params, callback);
  };
  applied.pins.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/pins.list.js").call({}, params, callback);
  };
  applied.pins.remove = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/pins.remove.js").call({}, params, callback);
  };
  applied.reactions.add = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reactions.add.js").call({}, params, callback);
  };
  applied.reactions.get = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reactions.get.js").call({}, params, callback);
  };
  applied.reactions.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reactions.list.js").call({}, params, callback);
  };
  applied.reactions.remove = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reactions.remove.js").call({}, params, callback);
  };
  applied.reminders.add = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reminders.add.js").call({}, params, callback);
  };
  applied.reminders.complete = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reminders.complete.js").call({}, params, callback);
  };
  applied.reminders.delete = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reminders.delete.js").call({}, params, callback);
  };
  applied.reminders.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reminders.info.js").call({}, params, callback);
  };
  applied.reminders.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/reminders.list.js").call({}, params, callback);
  };
  applied.rtm.connect = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/rtm.connect.js").call({}, params, callback);
  };
  applied.rtm.start = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/rtm.start.js").call({}, params, callback);
  };
  applied.search.all = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/search.all.js").call({}, params, callback);
  };
  applied.search.files = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/search.files.js").call({}, params, callback);
  };
  applied.search.messages = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/search.messages.js").call({}, params, callback);
  };
  applied.stars.add = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/stars.add.js").call({}, params, callback);
  };
  applied.stars.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/stars.list.js").call({}, params, callback);
  };
  applied.stars.remove = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/stars.remove.js").call({}, params, callback);
  };
  applied.team.accessLogs = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/team.accessLogs.js").call({}, params, callback);
  };
  applied.team.billableInfo = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/team.billableInfo.js").call({}, params, callback);
  };
  applied.team.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/team.info.js").call({}, params, callback);
  };
  applied.team.integrationLogs = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/team.integrationLogs.js").call({}, params, callback);
  };
  applied.team.profile.get = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/team.profile.get.js").call({}, params, callback);
  };
  applied.usergroups.create = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.create.js").call({}, params, callback);
  };
  applied.usergroups.disable = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.disable.js").call({}, params, callback);
  };
  applied.usergroups.enable = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.enable.js").call({}, params, callback);
  };
  applied.usergroups.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.list.js").call({}, params, callback);
  };
  applied.usergroups.update = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.update.js").call({}, params, callback);
  };
  applied.usergroups.users.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.users.list.js").call({}, params, callback);
  };
  applied.usergroups.users.update = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/usergroups.users.update.js").call({}, params, callback);
  };
  applied.users.deletePhoto = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.deletePhoto.js").call({}, params, callback);
  };
  applied.users.getPresence = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.getPresence.js").call({}, params, callback);
  };
  applied.users.identity = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.identity.js").call({}, params, callback);
  };
  applied.users.info = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.info.js").call({}, params, callback);
  };
  applied.users.list = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.list.js").call({}, params, callback);
  };
  applied.users.profile.get = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.profile.get.js").call({}, params, callback);
  };
  applied.users.profile.set = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.profile.set.js").call({}, params, callback);
  };
  applied.users.setActive = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.setActive.js").call({}, params, callback);
  };
  applied.users.setPhoto = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.setPhoto.js").call({}, params, callback);
  };
  applied.users.setPresence = function (params, callback) {
    params.token = token;
    __webpack_require__("../../../../slack/methods/users.setPresence.js").call({}, params, callback);
  };

  return applied;
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/api.json":
/***/ (function(module, exports) {

module.exports = {"api.test":[{"name":"error","example":"my_error","required":"Optional","description":"Error response to return\n"},{"name":"foo","example":"bar","required":"Optional","description":"example property to return\n"}],"auth.revoke":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Optional","description":"Authentication token.\n"},{"name":"test","example":"true","required":"Optional","description":"Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.\n"}],"auth.test":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: identify\n"}],"bots.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"bot","example":"B12345678","required":"Optional","description":"Bot user to get info on\n"}],"channels.archive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to archive\n"}],"channels.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"name","example":"mychannel","required":"Required","description":"Name of channel to create\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"channels.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:read\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to get info on\n"}],"channels.invite":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to invite user to.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to invite to channel.\n"}],"channels.join":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"name","example":"C1234567890","required":"Required","description":"Name of channel to join\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.kick":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to remove user from.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to remove from channel.\n"}],"channels.leave":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to leave\n"}],"channels.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:read\n"},{"name":"exclude_archived","example":"true","required":"Optional, default=false","description":"Exclude archived channels from the list\n"},{"name":"exclude_members","example":"true","required":"Optional, default=false","description":"Exclude the members collection from each channel\n"}],"channels.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"channels.rename":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to rename\n"},{"name":"name","example":" ","required":"Required","description":"New name for channel.\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"channels.setPurpose":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set the purpose of\n"},{"name":"purpose","example":"My Purpose","required":"Required","description":"The new purpose\n"}],"channels.setTopic":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set the topic of\n"},{"name":"topic","example":"My Topic","required":"Required","description":"The new topic\n"}],"channels.unarchive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to unarchive\n"}],"chat.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"ts","example":"1405894322.002768","required":"Required","description":"Timestamp of the message to be deleted.\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel containing the message to be deleted.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to delete the message as the authed user. Bot users in this context are considered authed users.\n"}],"chat.meMessage":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:user\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.\n"},{"name":"text","example":"Hello world","required":"Required","description":"Text of the message to send.\n"}],"chat.postMessage":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.\n"},{"name":"text","example":"Hello world","required":"Required","description":"Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.\n"},{"name":"parse","example":"full","required":"Optional","description":"Change how messages are treated. Defaults to none. See below.\n"},{"name":"link_names","example":"true","required":"Optional","description":"Find and link channel names and usernames.\n"},{"name":"attachments","example":"[{\"pretext\": \"pre-hello\", \"text\": \"text-world\"}]","required":"Optional","description":"Structured message attachments.\n"},{"name":"unfurl_links","example":"true","required":"Optional","description":"Pass true to enable unfurling of primarily text-based content.\n"},{"name":"unfurl_media","example":"false","required":"Optional","description":"Pass false to disable unfurling of media content.\n"},{"name":"username","example":"My Bot","required":"Optional","description":"Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.\n"},{"name":"icon_url","example":"http://lorempixel.com/48/48","required":"Optional","description":"URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"icon_emoji","example":":chart_with_upwards_trend:","required":"Optional","description":"Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Optional","description":"Provide another message's ts value to make this message a reply. Avoid using a reply's ts value; use its parent instead.\n"},{"name":"reply_broadcast","example":"true","required":"Optional","description":"Used in conjunction with thread_ts and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to false.\n"}],"chat.unfurl":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: links:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel ID of the message\n"},{"name":"ts","example":" ","required":"Required","description":"Timestamp of the message to add unfurl behavior to\n"},{"name":"unfurls","example":" ","required":"Required","description":"JSON mapping a set of URLs from the message to their unfurl attachments\n"},{"name":"user_auth_required","example":"true","required":"Optional, default=0","description":"Set to true or 1 to indicate the user must install your Slack app to trigger unfurls for this domain\n"}],"chat.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"ts","example":"1405894322.002768","required":"Required","description":"Timestamp of the message to be updated.\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel containing the message to be updated.\n"},{"name":"text","example":"Hello world","required":"Required","description":"New text for the message, using the default formatting rules.\n"},{"name":"attachments","example":"[{\"pretext\": \"pre-hello\", \"text\": \"text-world\"}]","required":"Optional","description":"Structured message attachments.\n"},{"name":"parse","example":"none","required":"Optional","description":"Change how messages are treated. Defaults to client, unlike chat.postMessage. See below.\n"},{"name":"link_names","example":"true","required":"Optional","description":"Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to update the message as the authed user. Bot users in this context are considered authed users.\n"}],"dnd.endDnd":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"}],"dnd.endSnooze":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"}],"dnd.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:read\n"},{"name":"user","example":"U1234","required":"Optional","description":"User to fetch status for (defaults to current user)\n"}],"dnd.setSnooze":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"},{"name":"num_minutes","example":"60","required":"Required","description":"Number of minutes, from now, to snooze until.\n"}],"dnd.teamInfo":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:read\n"},{"name":"users","example":"U1234,U4567","required":"Optional","description":"Comma-separated list of users to fetch Do Not Disturb status for\n"}],"emoji.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: emoji:read\n"}],"files.comments.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234467890","required":"Required","description":"File to add a comment to.\n"},{"name":"comment","example":"Everyone should take a moment to read this file.","required":"Required","description":"Text of the comment to add.\n"}],"files.comments.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to delete a comment from.\n"},{"name":"id","example":"Fc1234567890","required":"Required","description":"The comment to delete.\n"}],"files.comments.edit":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File containing the comment to edit.\n"},{"name":"id","example":"Fc1234567890","required":"Required","description":"The comment to edit.\n"},{"name":"comment","example":"Everyone should take a moment to read this file, seriously.","required":"Required","description":"Text of the comment to edit.\n"}],"files.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"ID of file to delete.\n"}],"files.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:read\n"},{"name":"file","example":"F2147483862","required":"Required","description":"Specify a file by providing its ID.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"files.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Filter files created by a single user.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Filter files appearing in a specific channel, indicated by its ID.\n"},{"name":"ts_from","example":"123456789","required":"Optional, default=0","description":"Filter files created after this timestamp (inclusive).\n"},{"name":"ts_to","example":"123456789","required":"Optional, default=now","description":"Filter files created before this timestamp (inclusive).\n"},{"name":"types","example":"images","required":"Optional, default=all","description":"Filter files by type:\n\n\nall - All files\nspaces - Posts\nsnippets - Snippets\nimages - Image files\ngdocs - Google docs\nzips - Zip files\npdfs - PDF files\n\n\nYou can pass multiple values in the types argument, like types=spaces,snippets.The default value is all, which does not filter the list.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"files.revokePublicURL":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to revoke\n"}],"files.sharedPublicURL":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to share\n"}],"files.upload":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"...","required":"Optional","description":"File contents via multipart/form-data. If omitting this parameter, you must submit content.\n"},{"name":"content","example":"...","required":"Optional","description":"File contents via a POST variable. If omitting this parameter, you must provide a file.\n"},{"name":"filetype","example":"php","required":"Optional","description":"A file type identifier.\n"},{"name":"filename","example":"foo.txt","required":"Optional","description":"Filename of file.\n"},{"name":"title","example":"My File","required":"Optional","description":"Title of file.\n"},{"name":"initial_comment","example":"Best!","required":"Optional","description":"Initial comment to add to file.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"Comma-separated list of channel names or IDs where the file will be shared.\n"}],"groups.archive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to archive\n"}],"groups.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to close.\n"}],"groups.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"name","example":" ","required":"Required","description":"Name of private channel to create\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"groups.createChild":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to clone and archive.\n"}],"groups.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:history\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"groups.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:read\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to get info on\n"}],"groups.invite":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to invite user to.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to invite.\n"}],"groups.kick":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to remove user from.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to remove from private channel.\n"}],"groups.leave":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to leave\n"}],"groups.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:read\n"},{"name":"exclude_archived","example":"true","required":"Optional, default=0","description":"Don't return archived private channels.\n"}],"groups.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"groups.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to open.\n"}],"groups.rename":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to rename\n"},{"name":"name","example":" ","required":"Required","description":"New name for private channel.\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"groups.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Private channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"groups.setPurpose":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set the purpose of\n"},{"name":"purpose","example":"My Purpose","required":"Required","description":"The new purpose\n"}],"groups.setTopic":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set the topic of\n"},{"name":"topic","example":"My Topic","required":"Required","description":"The new topic\n"}],"groups.unarchive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to unarchive\n"}],"im.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to close.\n"}],"im.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:history\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"im.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:read\n"}],"im.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"im.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to open a direct message channel with.\n"},{"name":"return_im","example":"true","required":"Optional","description":"Boolean, indicates you want the full IM channel definition in the response.\n"}],"im.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Direct message channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"mpim.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"MPIM to close.\n"}],"mpim.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:history\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Multiparty direct message to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"mpim.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:read\n"}],"mpim.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"multiparty direct message channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"mpim.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"users","example":"U1234567890,U2345678901,U3456789012","required":"Required","description":"Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.\n"}],"mpim.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Multiparty direct message channel to fetch thread from.\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message.\n"}],"oauth.access":[{"name":"client_id","example":"4b39e9-752c4","required":"Required","description":"Issued when you created your application.\n"},{"name":"client_secret","example":"33fea0113f5b1","required":"Required","description":"Issued when you created your application.\n"},{"name":"code","example":"ccdaa72ad","required":"Required","description":"The code param returned via the OAuth callback.\n"},{"name":"redirect_uri","example":"http://example.com","required":"Optional","description":"This must match the originally submitted URI (if one was sent).\n"}],"pins.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to pin the item in.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to pin.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to pin.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to pin.\n"}],"pins.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:read\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to get pinned items for.\n"}],"pins.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel where the item is pinned to.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to un-pin.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to un-pin.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to un-pin.\n"}],"reactions.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:write\n"},{"name":"name","example":"thumbsup","required":"Required","description":"Reaction (emoji) name.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to add reaction to.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to add reaction to.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to add reaction to was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to add reaction to.\n"}],"reactions.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:read\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to get reactions for.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to get reactions for.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to get reactions for was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to get reactions for.\n"},{"name":"full","example":"true","required":"Optional","description":"If true always return the complete reaction list.\n"}],"reactions.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Show reactions made by this user. Defaults to the authed user.\n"},{"name":"full","example":"true","required":"Optional","description":"If true always return the complete reaction list.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"reactions.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:write\n"},{"name":"name","example":"thumbsup","required":"Required","description":"Reaction (emoji) name.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to remove reaction from.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to remove reaction from.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to remove reaction from was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to remove reaction from.\n"}],"reminders.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"text","example":"eat a banana","required":"Required","description":"The content of the reminder\n"},{"name":"time","example":"1602288000","required":"Required","description":"When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \"in 15 minutes,\" or \"every Thursday\")\n"},{"name":"user","example":"U18888888","required":"Optional","description":"The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.\n"}],"reminders.complete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"reminder","example":"Rm12345678","required":"Required","description":"The ID of the reminder to be marked as complete\n"}],"reminders.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"reminder","example":"Rm12345678","required":"Required","description":"The ID of the reminder\n"}],"reminders.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:read\n"},{"name":"reminder","example":"Rm23456789","required":"Required","description":"The ID of the reminder\n"}],"reminders.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:read\n"}],"rtm.connect":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires token type: session or oauth or bot or app\nRequires scope: client\n"}],"rtm.start":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: client\n"},{"name":"simple_latest","example":"true","required":"Optional","description":"Return timestamp only for latest message object of each channel (improves performance).\n"},{"name":"no_unreads","example":"true","required":"Optional","description":"Skip unread counts for each channel (improves performance).\n"},{"name":"mpim_aware","example":"true","required":"Optional","description":"Returns MPIMs to the client in the API response.\n"},{"name":"no_latest","example":"1","required":"Optional, default=0","description":"Exclude latest timestamps for channels, groups, mpims, and ims. Automatically sets no_unreads to 1\n"}],"search.all":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contains booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"search.files":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contain booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"search.messages":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contains booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"stars.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:write\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to add star to.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to add star to.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel to add star to, or channel where the message to add star to was posted (used with timestamp).\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to add star to.\n"}],"stars.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:read\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"stars.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:write\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to remove star from.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to remove star from.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to remove star from.\n"}],"team.accessLogs":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"},{"name":"before","example":"1457989166","required":"Optional, default=now","description":"End of time range of logs to include in results (inclusive).\n"}],"team.billableInfo":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"A user to retrieve the billable information for. Defaults to all users.\n"}],"team.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: team:read\n"}],"team.integrationLogs":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"service_id","example":" ","required":"Optional","description":"Filter logs to this service. Defaults to all logs.\n"},{"name":"app_id","example":" ","required":"Optional","description":"Filter logs to this Slack app. Defaults to all logs.\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Filter logs generated by this user’s actions. Defaults to all logs.\n"},{"name":"change_type","example":"added","required":"Optional","description":"Filter logs with this change type. Defaults to all logs.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"team.profile.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:read\n"},{"name":"visibility","example":"all","required":"Optional","description":"Filter by visibility.\n"}],"usergroups.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"name","example":"My Test Team","required":"Required","description":"A name for the User Group. Must be unique among User Groups.\n"},{"name":"handle","example":"marketing","required":"Optional","description":"A mention handle. Must be unique among channels, users and User Groups.\n"},{"name":"description","example":" ","required":"Optional","description":"A short description of the User Group.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"A comma separated string of encoded channel IDs for which the User Group uses as a default.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in each User Group.\n"}],"usergroups.disable":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to disable.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.enable":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to enable.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:read\n"},{"name":"include_disabled","example":"true","required":"Optional","description":"Include disabled User Groups.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in each User Group.\n"},{"name":"include_users","example":"true","required":"Optional","description":"Include the list of users for each User Group.\n"}],"usergroups.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"name","example":"My Test Team","required":"Optional","description":"A name for the User Group. Must be unique among User Groups.\n"},{"name":"handle","example":"marketing","required":"Optional","description":"A mention handle. Must be unique among channels, users and User Groups.\n"},{"name":"description","example":" ","required":"Optional","description":"A short description of the User Group.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"A comma separated string of encoded channel IDs for which the User Group uses as a default.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.users.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:read\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"include_disabled","example":"true","required":"Optional","description":"Allow results that involve disabled User Groups.\n"}],"usergroups.users.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"users","example":"U060R4BJ4,U060RNRCZ","required":"Required","description":"A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"users.deletePhoto":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"}],"users.getPresence":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to get presence info on. Defaults to the authed user.\n"}],"users.identity":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: identity.basic\n"}],"users.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to get info on\n"}],"users.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"presence","example":"true","required":"Optional","description":"Whether to include presence data in the output\n"}],"users.setActive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:write\n"}],"users.setPhoto":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"},{"name":"image","example":"...","required":"Required","description":"File contents via multipart/form-data.\n"},{"name":"crop_x","example":"10","required":"Optional","description":"X coordinate of top-left corner of crop box\n"},{"name":"crop_y","example":"15","required":"Optional","description":"Y coordinate of top-left corner of crop box\n"},{"name":"crop_w","example":"100","required":"Optional","description":"Width/height of crop box (always square)\n"}],"users.setPresence":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:write\n"},{"name":"presence","example":"away","required":"Required","description":"Either auto or away\n"}],"users.profile.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"User to retrieve profile info for\n"},{"name":"include_labels","example":"true","required":"Optional, default=false","description":"Include labels for each ID in custom profile fields\n"}],"users.profile.set":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"ID of user to change. This argument may only be specified by team admins on paid teams.\n"},{"name":"profile","example":"{ first_name: \"John\", ... }","required":"Optional","description":"Collection of key:value pairs presented as a URL-encoded JSON hash.\n"},{"name":"name","example":"first_name","required":"Optional","description":"Name of a single key to set. Usable only if profile is not passed.\n"},{"name":"value","example":"John","required":"Optional","description":"Value to set a single key to. Usable only if profile is not passed.\n"}]}

/***/ }),

/***/ "../../../../slack/methods/api.test.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apitest;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function apitest(params, callback) {
  var ns = 'api.test';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/auth.revoke.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authrevoke;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function authrevoke(params, callback) {
  var ns = 'auth.revoke';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/auth.test.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authtest;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function authtest(params, callback) {
  var ns = 'auth.test';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/bots.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = botsinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function botsinfo(params, callback) {
  var ns = 'bots.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/bots.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bots = __webpack_require__("../../../../slack/methods/bots.info.js");

var _bots2 = _interopRequireDefault(_bots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  info: _bots2.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.archive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsarchive;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsarchive(params, callback) {
  var ns = 'channels.archive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelscreate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelscreate(params, callback) {
  var ns = 'channels.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.history.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelshistory;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelshistory(params, callback) {
  var ns = 'channels.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsinfo(params, callback) {
  var ns = 'channels.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.invite.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsinvite;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsinvite(params, callback) {
  var ns = 'channels.invite';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.join.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsjoin;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsjoin(params, callback) {
  var ns = 'channels.join';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _channels = __webpack_require__("../../../../slack/methods/channels.archive.js");

var _channels2 = _interopRequireDefault(_channels);

var _channels3 = __webpack_require__("../../../../slack/methods/channels.create.js");

var _channels4 = _interopRequireDefault(_channels3);

var _channels5 = __webpack_require__("../../../../slack/methods/channels.history.js");

var _channels6 = _interopRequireDefault(_channels5);

var _channels7 = __webpack_require__("../../../../slack/methods/channels.info.js");

var _channels8 = _interopRequireDefault(_channels7);

var _channels9 = __webpack_require__("../../../../slack/methods/channels.invite.js");

var _channels10 = _interopRequireDefault(_channels9);

var _channels11 = __webpack_require__("../../../../slack/methods/channels.join.js");

var _channels12 = _interopRequireDefault(_channels11);

var _channels13 = __webpack_require__("../../../../slack/methods/channels.kick.js");

var _channels14 = _interopRequireDefault(_channels13);

var _channels15 = __webpack_require__("../../../../slack/methods/channels.leave.js");

var _channels16 = _interopRequireDefault(_channels15);

var _channels17 = __webpack_require__("../../../../slack/methods/channels.list.js");

var _channels18 = _interopRequireDefault(_channels17);

var _channels19 = __webpack_require__("../../../../slack/methods/channels.mark.js");

var _channels20 = _interopRequireDefault(_channels19);

var _channels21 = __webpack_require__("../../../../slack/methods/channels.rename.js");

var _channels22 = _interopRequireDefault(_channels21);

var _channels23 = __webpack_require__("../../../../slack/methods/channels.replies.js");

var _channels24 = _interopRequireDefault(_channels23);

var _channels25 = __webpack_require__("../../../../slack/methods/channels.setPurpose.js");

var _channels26 = _interopRequireDefault(_channels25);

var _channels27 = __webpack_require__("../../../../slack/methods/channels.setTopic.js");

var _channels28 = _interopRequireDefault(_channels27);

var _channels29 = __webpack_require__("../../../../slack/methods/channels.unarchive.js");

var _channels30 = _interopRequireDefault(_channels29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _channels2.default,
  create: _channels4.default,
  history: _channels6.default,
  info: _channels8.default,
  invite: _channels10.default,
  join: _channels12.default,
  kick: _channels14.default,
  leave: _channels16.default,
  list: _channels18.default,
  mark: _channels20.default,
  rename: _channels22.default,
  replies: _channels24.default,
  setPurpose: _channels26.default,
  setTopic: _channels28.default,
  unarchive: _channels30.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.kick.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelskick;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelskick(params, callback) {
  var ns = 'channels.kick';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.leave.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsleave;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsleave(params, callback) {
  var ns = 'channels.leave';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelslist(params, callback) {
  var ns = 'channels.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.mark.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsmark;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsmark(params, callback) {
  var ns = 'channels.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.rename.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsrename;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsrename(params, callback) {
  var ns = 'channels.rename';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.replies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsreplies;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsreplies(params, callback) {
  var ns = 'channels.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.setPurpose.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelssetPurpose;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelssetPurpose(params, callback) {
  var ns = 'channels.setPurpose';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.setTopic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelssetTopic;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelssetTopic(params, callback) {
  var ns = 'channels.setTopic';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/channels.unarchive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsunarchive;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsunarchive(params, callback) {
  var ns = 'channels.unarchive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.delete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatdelete;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatdelete(params, callback) {
  var ns = 'chat.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chat = __webpack_require__("../../../../slack/methods/chat.delete.js");

var _chat2 = _interopRequireDefault(_chat);

var _chat3 = __webpack_require__("../../../../slack/methods/chat.meMessage.js");

var _chat4 = _interopRequireDefault(_chat3);

var _chat5 = __webpack_require__("../../../../slack/methods/chat.postMessage.js");

var _chat6 = _interopRequireDefault(_chat5);

var _chat7 = __webpack_require__("../../../../slack/methods/chat.unfurl.js");

var _chat8 = _interopRequireDefault(_chat7);

var _chat9 = __webpack_require__("../../../../slack/methods/chat.update.js");

var _chat10 = _interopRequireDefault(_chat9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  delete: _chat2.default,
  meMessage: _chat4.default,
  postMessage: _chat6.default,
  unfurl: _chat8.default,
  update: _chat10.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.meMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatmeMessage;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatmeMessage(params, callback) {
  var ns = 'chat.meMessage';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.postMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatpostMessage;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatpostMessage(params, callback) {
  var ns = 'chat.postMessage';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.unfurl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatunfurl;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatunfurl(params, callback) {
  var ns = 'chat.unfurl';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/chat.update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatupdate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatupdate(params, callback) {
  var ns = 'chat.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.endDnd.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndendDnd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndendDnd(params, callback) {
  var ns = 'dnd.endDnd';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.endSnooze.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndendSnooze;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndendSnooze(params, callback) {
  var ns = 'dnd.endSnooze';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndinfo(params, callback) {
  var ns = 'dnd.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dnd = __webpack_require__("../../../../slack/methods/dnd.info.js");

var _dnd2 = _interopRequireDefault(_dnd);

var _dnd3 = __webpack_require__("../../../../slack/methods/dnd.endDnd.js");

var _dnd4 = _interopRequireDefault(_dnd3);

var _dnd5 = __webpack_require__("../../../../slack/methods/dnd.endSnooze.js");

var _dnd6 = _interopRequireDefault(_dnd5);

var _dnd7 = __webpack_require__("../../../../slack/methods/dnd.setSnooze.js");

var _dnd8 = _interopRequireDefault(_dnd7);

var _dnd9 = __webpack_require__("../../../../slack/methods/dnd.teamInfo.js");

var _dnd10 = _interopRequireDefault(_dnd9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  info: _dnd2.default, endDnd: _dnd4.default, endSnooze: _dnd6.default, setSnooze: _dnd8.default, teamInfo: _dnd10.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.setSnooze.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndsetSnooze;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndsetSnooze(params, callback) {
  var ns = 'dnd.setSnooze';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/dnd.teamInfo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndteamInfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndteamInfo(params, callback) {
  var ns = 'dnd.teamInfo';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/emoji.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emojilist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function emojilist(params, callback) {
  var ns = 'emoji.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.comments.add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsadd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsadd(params, callback) {
  var ns = 'files.comments.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.comments.delete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsdelete;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsdelete(params, callback) {
  var ns = 'files.comments.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.comments.edit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsedit;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsedit(params, callback) {
  var ns = 'files.comments.edit';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.delete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesdelete;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesdelete(params, callback) {
  var ns = 'files.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesinfo(params, callback) {
  var ns = 'files.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _files = __webpack_require__("../../../../slack/methods/files.delete.js");

var _files2 = _interopRequireDefault(_files);

var _files3 = __webpack_require__("../../../../slack/methods/files.info.js");

var _files4 = _interopRequireDefault(_files3);

var _files5 = __webpack_require__("../../../../slack/methods/files.list.js");

var _files6 = _interopRequireDefault(_files5);

var _files7 = __webpack_require__("../../../../slack/methods/files.upload.js");

var _files8 = _interopRequireDefault(_files7);

var _filesComments = __webpack_require__("../../../../slack/methods/files.comments.add.js");

var _filesComments2 = _interopRequireDefault(_filesComments);

var _filesComments3 = __webpack_require__("../../../../slack/methods/files.comments.delete.js");

var _filesComments4 = _interopRequireDefault(_filesComments3);

var _filesComments5 = __webpack_require__("../../../../slack/methods/files.comments.edit.js");

var _filesComments6 = _interopRequireDefault(_filesComments5);

var _files9 = __webpack_require__("../../../../slack/methods/files.revokePublicURL.js");

var _files10 = _interopRequireDefault(_files9);

var _files11 = __webpack_require__("../../../../slack/methods/files.sharedPublicURL.js");

var _files12 = _interopRequireDefault(_files11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  delete: _files2.default,
  info: _files4.default,
  list: _files6.default,
  upload: _files8.default,
  comments: {
    add: _filesComments2.default,
    delete: _filesComments4.default,
    edit: _filesComments6.default
  },
  revokePublicURL: _files10.default,
  sharedPublicURL: _files12.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fileslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function fileslist(params, callback) {
  var ns = 'files.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.revokePublicURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesrevokePublicURL;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesrevokePublicURL(params, callback) {
  var ns = 'files.revokePublicURL';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.sharedPublicURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filessharedPublicURL;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filessharedPublicURL(params, callback) {
  var ns = 'files.sharedPublicURL';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/files.upload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesupload;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesupload(params, callback) {
  var ns = 'files.upload';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.archive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsarchive;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsarchive(params, callback) {
  var ns = 'groups.archive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsclose;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsclose(params, callback) {
  var ns = 'groups.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupscreate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupscreate(params, callback) {
  var ns = 'groups.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.createChild.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupscreateChild;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupscreateChild(params, callback) {
  var ns = 'groups.createChild';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.history.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupshistory;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupshistory(params, callback) {
  var ns = 'groups.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsinfo(params, callback) {
  var ns = 'groups.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.invite.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsinvite;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsinvite(params, callback) {
  var ns = 'groups.invite';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groups = __webpack_require__("../../../../slack/methods/groups.archive.js");

var _groups2 = _interopRequireDefault(_groups);

var _groups3 = __webpack_require__("../../../../slack/methods/groups.close.js");

var _groups4 = _interopRequireDefault(_groups3);

var _groups5 = __webpack_require__("../../../../slack/methods/groups.create.js");

var _groups6 = _interopRequireDefault(_groups5);

var _groups7 = __webpack_require__("../../../../slack/methods/groups.createChild.js");

var _groups8 = _interopRequireDefault(_groups7);

var _groups9 = __webpack_require__("../../../../slack/methods/groups.history.js");

var _groups10 = _interopRequireDefault(_groups9);

var _groups11 = __webpack_require__("../../../../slack/methods/groups.info.js");

var _groups12 = _interopRequireDefault(_groups11);

var _groups13 = __webpack_require__("../../../../slack/methods/groups.invite.js");

var _groups14 = _interopRequireDefault(_groups13);

var _groups15 = __webpack_require__("../../../../slack/methods/groups.kick.js");

var _groups16 = _interopRequireDefault(_groups15);

var _groups17 = __webpack_require__("../../../../slack/methods/groups.leave.js");

var _groups18 = _interopRequireDefault(_groups17);

var _groups19 = __webpack_require__("../../../../slack/methods/groups.list.js");

var _groups20 = _interopRequireDefault(_groups19);

var _groups21 = __webpack_require__("../../../../slack/methods/groups.mark.js");

var _groups22 = _interopRequireDefault(_groups21);

var _groups23 = __webpack_require__("../../../../slack/methods/groups.open.js");

var _groups24 = _interopRequireDefault(_groups23);

var _groups25 = __webpack_require__("../../../../slack/methods/groups.rename.js");

var _groups26 = _interopRequireDefault(_groups25);

var _groups27 = __webpack_require__("../../../../slack/methods/groups.setPurpose.js");

var _groups28 = _interopRequireDefault(_groups27);

var _groups29 = __webpack_require__("../../../../slack/methods/groups.setTopic.js");

var _groups30 = _interopRequireDefault(_groups29);

var _groups31 = __webpack_require__("../../../../slack/methods/groups.unarchive.js");

var _groups32 = _interopRequireDefault(_groups31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _groups2.default,
  close: _groups4.default,
  create: _groups6.default,
  createChild: _groups8.default,
  history: _groups10.default,
  info: _groups12.default,
  invite: _groups14.default,
  kick: _groups16.default,
  leave: _groups18.default,
  list: _groups20.default,
  mark: _groups22.default,
  open: _groups24.default,
  rename: _groups26.default,
  setPurpose: _groups28.default,
  setTopic: _groups30.default,
  unarchive: _groups32.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.kick.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupskick;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupskick(params, callback) {
  var ns = 'groups.kick';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.leave.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsleave;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsleave(params, callback) {
  var ns = 'groups.leave';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupslist(params, callback) {
  var ns = 'groups.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.mark.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsmark;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsmark(params, callback) {
  var ns = 'groups.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.open.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsopen;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsopen(params, callback) {
  var ns = 'groups.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.rename.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsrename;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsrename(params, callback) {
  var ns = 'groups.rename';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.replies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsreplies;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsreplies(params, callback) {
  var ns = 'groups.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.setPurpose.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupssetPurpose;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupssetPurpose(params, callback) {
  var ns = 'groups.setPurpose';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.setTopic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupssetTopic;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupssetTopic(params, callback) {
  var ns = 'groups.setTopic';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/groups.unarchive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsunarchive;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsunarchive(params, callback) {
  var ns = 'groups.unarchive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imclose;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imclose(params, callback) {
  var ns = 'im.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.history.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imhistory;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imhistory(params, callback) {
  var ns = 'im.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _im = __webpack_require__("../../../../slack/methods/im.close.js");

var _im2 = _interopRequireDefault(_im);

var _im3 = __webpack_require__("../../../../slack/methods/im.history.js");

var _im4 = _interopRequireDefault(_im3);

var _im5 = __webpack_require__("../../../../slack/methods/im.list.js");

var _im6 = _interopRequireDefault(_im5);

var _im7 = __webpack_require__("../../../../slack/methods/im.mark.js");

var _im8 = _interopRequireDefault(_im7);

var _im9 = __webpack_require__("../../../../slack/methods/im.open.js");

var _im10 = _interopRequireDefault(_im9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  close: _im2.default, history: _im4.default, list: _im6.default, mark: _im8.default, open: _im10.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imlist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imlist(params, callback) {
  var ns = 'im.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.mark.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immark;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function immark(params, callback) {
  var ns = 'im.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.open.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imopen;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imopen(params, callback) {
  var ns = 'im.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/im.replies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imreplies;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imreplies(params, callback) {
  var ns = 'im.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__("../../../../slack/methods/api.test.js");

var _api2 = _interopRequireDefault(_api);

var _api3 = __webpack_require__("../../../../slack/methods/api.client.js");

var _api4 = _interopRequireDefault(_api3);

var _bots = __webpack_require__("../../../../slack/methods/bots.js");

var _bots2 = _interopRequireDefault(_bots);

var _auth = __webpack_require__("../../../../slack/methods/auth.test.js");

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = __webpack_require__("../../../../slack/methods/auth.revoke.js");

var _auth4 = _interopRequireDefault(_auth3);

var _channels = __webpack_require__("../../../../slack/methods/channels.js");

var _channels2 = _interopRequireDefault(_channels);

var _chat = __webpack_require__("../../../../slack/methods/chat.js");

var _chat2 = _interopRequireDefault(_chat);

var _dnd = __webpack_require__("../../../../slack/methods/dnd.js");

var _dnd2 = _interopRequireDefault(_dnd);

var _emoji = __webpack_require__("../../../../slack/methods/emoji.list.js");

var _emoji2 = _interopRequireDefault(_emoji);

var _files = __webpack_require__("../../../../slack/methods/files.js");

var _files2 = _interopRequireDefault(_files);

var _groups = __webpack_require__("../../../../slack/methods/groups.js");

var _groups2 = _interopRequireDefault(_groups);

var _im = __webpack_require__("../../../../slack/methods/im.js");

var _im2 = _interopRequireDefault(_im);

var _mpim = __webpack_require__("../../../../slack/methods/mpim.js");

var _mpim2 = _interopRequireDefault(_mpim);

var _oauth = __webpack_require__("../../../../slack/methods/oauth.access.js");

var _oauth2 = _interopRequireDefault(_oauth);

var _reactions = __webpack_require__("../../../../slack/methods/reactions.js");

var _reactions2 = _interopRequireDefault(_reactions);

var _reminders = __webpack_require__("../../../../slack/methods/reminders.js");

var _reminders2 = _interopRequireDefault(_reminders);

var _pins = __webpack_require__("../../../../slack/methods/pins.js");

var _pins2 = _interopRequireDefault(_pins);

var _rtm = __webpack_require__("../../../../slack/methods/rtm.client-browser.js");

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = __webpack_require__("../../../../slack/methods/rtm.start.js");

var _rtm4 = _interopRequireDefault(_rtm3);

var _rtm5 = __webpack_require__("../../../../slack/methods/rtm.connect.js");

var _rtm6 = _interopRequireDefault(_rtm5);

var _search = __webpack_require__("../../../../slack/methods/search.js");

var _search2 = _interopRequireDefault(_search);

var _stars = __webpack_require__("../../../../slack/methods/stars.js");

var _stars2 = _interopRequireDefault(_stars);

var _team = __webpack_require__("../../../../slack/methods/team.js");

var _team2 = _interopRequireDefault(_team);

var _usergroups = __webpack_require__("../../../../slack/methods/usergroups.js");

var _usergroups2 = _interopRequireDefault(_usergroups);

var _users = __webpack_require__("../../../../slack/methods/users.js");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  api: { test: _api2.default, client: _api4.default },
  auth: { test: _auth2.default, revoke: _auth4.default },
  bots: _bots2.default,
  channels: _channels2.default,
  chat: _chat2.default,
  dnd: _dnd2.default,
  emoji: { list: _emoji2.default },
  files: _files2.default,
  groups: _groups2.default,
  im: _im2.default,
  mpim: _mpim2.default,
  oauth: { access: _oauth2.default },
  reactions: _reactions2.default,
  reminders: _reminders2.default,
  pins: _pins2.default,
  rtm: { client: _rtm2.default, start: _rtm4.default, connect: _rtm6.default },
  search: _search2.default,
  stars: _stars2.default,
  team: _team2.default,
  usergroups: _usergroups2.default,
  users: _users2.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimclose;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimclose(params, callback) {
  var ns = 'mpim.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.history.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimhistory;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimhistory(params, callback) {
  var ns = 'mpim.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mpim = __webpack_require__("../../../../slack/methods/mpim.close.js");

var _mpim2 = _interopRequireDefault(_mpim);

var _mpim3 = __webpack_require__("../../../../slack/methods/mpim.history.js");

var _mpim4 = _interopRequireDefault(_mpim3);

var _mpim5 = __webpack_require__("../../../../slack/methods/mpim.list.js");

var _mpim6 = _interopRequireDefault(_mpim5);

var _mpim7 = __webpack_require__("../../../../slack/methods/mpim.mark.js");

var _mpim8 = _interopRequireDefault(_mpim7);

var _mpim9 = __webpack_require__("../../../../slack/methods/mpim.open.js");

var _mpim10 = _interopRequireDefault(_mpim9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  close: _mpim2.default,
  history: _mpim4.default,
  list: _mpim6.default,
  mark: _mpim8.default,
  open: _mpim10.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimlist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimlist(params, callback) {
  var ns = 'mpim.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.mark.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimmark;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimmark(params, callback) {
  var ns = 'mpim.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.open.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimopen;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimopen(params, callback) {
  var ns = 'mpim.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/mpim.replies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimreplies;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimreplies(params, callback) {
  var ns = 'mpim.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/oauth.access.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = oauthaccess;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function oauthaccess(params, callback) {
  var ns = 'oauth.access';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/pins.add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinsadd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinsadd(params, callback) {
  var ns = 'pins.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/pins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pins = __webpack_require__("../../../../slack/methods/pins.add.js");

var _pins2 = _interopRequireDefault(_pins);

var _pins3 = __webpack_require__("../../../../slack/methods/pins.list.js");

var _pins4 = _interopRequireDefault(_pins3);

var _pins5 = __webpack_require__("../../../../slack/methods/pins.remove.js");

var _pins6 = _interopRequireDefault(_pins5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _pins2.default, list: _pins4.default, remove: _pins6.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/pins.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinslist(params, callback) {
  var ns = 'pins.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/pins.remove.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinsremove;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinsremove(params, callback) {
  var ns = 'pins.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reactions.add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsadd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsadd(params, callback) {
  var ns = 'reactions.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reactions.get.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsget;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsget(params, callback) {
  var ns = 'reactions.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reactions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactions = __webpack_require__("../../../../slack/methods/reactions.add.js");

var _reactions2 = _interopRequireDefault(_reactions);

var _reactions3 = __webpack_require__("../../../../slack/methods/reactions.get.js");

var _reactions4 = _interopRequireDefault(_reactions3);

var _reactions5 = __webpack_require__("../../../../slack/methods/reactions.list.js");

var _reactions6 = _interopRequireDefault(_reactions5);

var _reactions7 = __webpack_require__("../../../../slack/methods/reactions.remove.js");

var _reactions8 = _interopRequireDefault(_reactions7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _reactions2.default, get: _reactions4.default, list: _reactions6.default, remove: _reactions8.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reactions.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionslist(params, callback) {
  var ns = 'reactions.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reactions.remove.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsremove;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsremove(params, callback) {
  var ns = 'reactions.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersadd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersadd(params, callback) {
  var ns = 'reminders.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.complete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reminderscomplete;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reminderscomplete(params, callback) {
  var ns = 'reminders.complete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.delete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersdelete;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersdelete(params, callback) {
  var ns = 'reminders.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersinfo(params, callback) {
  var ns = 'reminders.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reminders = __webpack_require__("../../../../slack/methods/reminders.add.js");

var _reminders2 = _interopRequireDefault(_reminders);

var _reminders3 = __webpack_require__("../../../../slack/methods/reminders.complete.js");

var _reminders4 = _interopRequireDefault(_reminders3);

var _reminders5 = __webpack_require__("../../../../slack/methods/reminders.delete.js");

var _reminders6 = _interopRequireDefault(_reminders5);

var _reminders7 = __webpack_require__("../../../../slack/methods/reminders.info.js");

var _reminders8 = _interopRequireDefault(_reminders7);

var _reminders9 = __webpack_require__("../../../../slack/methods/reminders.list.js");

var _reminders10 = _interopRequireDefault(_reminders9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _reminders2.default, complete: _reminders4.default, delete: _reminders6.default, info: _reminders8.default, list: _reminders10.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/reminders.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reminderslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reminderslist(params, callback) {
  var ns = 'reminders.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/rtm.client-browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = client;

var _rtm = __webpack_require__("../../../../slack/methods/rtm.start.js");

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = __webpack_require__("../../../../slack/methods/rtm.events.js");

var _rtm4 = _interopRequireDefault(_rtm3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// socket factory
function client() {

  // build a new bot every time
  var bot = {
    handlers: {
      started: []
    }
  };

  // add undocumented ping event
  _rtm4.default.push('pong');

  // generate event handler registration methods
  _rtm4.default.forEach(function (e) {
    bot.handlers[e] = [];
    bot[e] = function (handler) {
      bot.handlers[e].push(handler);
    };
  });

  bot.started = function (handler) {
    bot.handlers['started'].push(handler);
  };

  // kicks up a web socket connection
  bot.listen = function botListen(params, callback) {
    (0, _rtm2.default)(params, function (err, data) {
      if (err) {
        if (callback) callback(err);else throw err;
      } else {
        // grab a handle on the socket
        bot.ws = new WebSocket(data.url);
        // delegate everything
        bot.ws.onmessage = function message(e) {
          var json = JSON.parse(e.data);
          // Call all registered handlers for this event, if any
          if (bot.handlers[json.type]) bot.handlers[json.type].forEach(function (m) {
            return m.call({}, json);
          });
        };
        // call started callbacks
        bot.handlers['started'].forEach(function (m) {
          return m.call({}, data);
        });
        if (callback) callback(null, data);
      }
    });
  };

  // closes the socket
  bot.close = function botClose() {
    bot.ws.close();
  };

  //////////
  return bot;
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/rtm.connect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtmconnect;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function rtmconnect(params, callback) {
  var ns = 'rtm.connect';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/rtm.events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// generated using ./scripts/generate-all
var events = ['accounts_changed', 'bot_added', 'bot_changed', 'channel_archive', 'channel_created', 'channel_deleted', 'channel_history_changed', 'channel_joined', 'channel_left', 'channel_marked', 'channel_rename', 'channel_unarchive', 'commands_changed', 'dnd_updated', 'dnd_updated_user', 'email_domain_changed', 'emoji_changed', 'file_change', 'file_comment_added', 'file_comment_deleted', 'file_comment_edited', 'file_created', 'file_deleted', 'file_public', 'file_shared', 'file_unshared', 'goodbye', 'group_archive', 'group_close', 'group_history_changed', 'group_joined', 'group_left', 'group_marked', 'group_open', 'group_rename', 'group_unarchive', 'hello', 'im_close', 'im_created', 'im_history_changed', 'im_marked', 'im_open', 'link_shared', 'manual_presence_change', 'member_joined_channel', 'member_left_channel', 'message', 'message.channels', 'message.groups', 'message.im', 'message.mpim', 'pin_added', 'pin_removed', 'pong', 'pref_change', 'presence_change', 'reaction_added', 'reaction_removed', 'reconnect_url', 'star_added', 'star_removed', 'subteam_created', 'subteam_self_added', 'subteam_self_removed', 'subteam_updated', 'team_domain_change', 'team_join', 'team_migration_started', 'team_plan_change', 'team_pref_change', 'team_profile_change', 'team_profile_delete', 'team_profile_reorder', 'team_rename', 'url_verification', 'user_change', 'user_typing'];

exports.default = events;
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/rtm.start.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtmstart;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function rtmstart(params, callback) {
  var ns = 'rtm.start';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/search.all.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchall;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchall(params, callback) {
  var ns = 'search.all';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/search.files.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchfiles;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchfiles(params, callback) {
  var ns = 'search.files';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/search.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = __webpack_require__("../../../../slack/methods/search.all.js");

var _search2 = _interopRequireDefault(_search);

var _search3 = __webpack_require__("../../../../slack/methods/search.files.js");

var _search4 = _interopRequireDefault(_search3);

var _search5 = __webpack_require__("../../../../slack/methods/search.messages.js");

var _search6 = _interopRequireDefault(_search5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  all: _search2.default, files: _search4.default, messages: _search6.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/search.messages.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchmessages;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchmessages(params, callback) {
  var ns = 'search.messages';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/stars.add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starsadd;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starsadd(params, callback) {
  var ns = 'stars.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/stars.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stars = __webpack_require__("../../../../slack/methods/stars.add.js");

var _stars2 = _interopRequireDefault(_stars);

var _stars3 = __webpack_require__("../../../../slack/methods/stars.list.js");

var _stars4 = _interopRequireDefault(_stars3);

var _stars5 = __webpack_require__("../../../../slack/methods/stars.remove.js");

var _stars6 = _interopRequireDefault(_stars5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _stars2.default, list: _stars4.default, remove: _stars6.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/stars.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starslist(params, callback) {
  var ns = 'stars.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/stars.remove.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starsremove;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starsremove(params, callback) {
  var ns = 'stars.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.accessLogs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamaccessLogs;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamaccessLogs(params, callback) {
  var ns = 'team.accessLogs';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.billableInfo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teambillableInfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teambillableInfo(params, callback) {
  var ns = 'team.billableInfo';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teaminfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teaminfo(params, callback) {
  var ns = 'team.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.integrationLogs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamintegrationLogs;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamintegrationLogs(params, callback) {
  var ns = 'team.integrationLogs';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _team = __webpack_require__("../../../../slack/methods/team.accessLogs.js");

var _team2 = _interopRequireDefault(_team);

var _team3 = __webpack_require__("../../../../slack/methods/team.billableInfo.js");

var _team4 = _interopRequireDefault(_team3);

var _team5 = __webpack_require__("../../../../slack/methods/team.info.js");

var _team6 = _interopRequireDefault(_team5);

var _team7 = __webpack_require__("../../../../slack/methods/team.integrationLogs.js");

var _team8 = _interopRequireDefault(_team7);

var _teamProfile = __webpack_require__("../../../../slack/methods/team.profile.get.js");

var _teamProfile2 = _interopRequireDefault(_teamProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  accessLogs: _team2.default,
  billableInfo: _team4.default,
  info: _team6.default,
  integrationLogs: _team8.default,
  profile: {
    get: _teamProfile2.default
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/team.profile.get.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamprofileget;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamprofileget(params, callback) {
  var ns = 'team.profile.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupscreate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupscreate(params, callback) {
  var ns = 'usergroups.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.disable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsdisable;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsdisable(params, callback) {
  var ns = 'usergroups.disable';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.enable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsenable;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsenable(params, callback) {
  var ns = 'usergroups.enable';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usergroups = __webpack_require__("../../../../slack/methods/usergroups.create.js");

var _usergroups2 = _interopRequireDefault(_usergroups);

var _usergroups3 = __webpack_require__("../../../../slack/methods/usergroups.disable.js");

var _usergroups4 = _interopRequireDefault(_usergroups3);

var _usergroups5 = __webpack_require__("../../../../slack/methods/usergroups.enable.js");

var _usergroups6 = _interopRequireDefault(_usergroups5);

var _usergroups7 = __webpack_require__("../../../../slack/methods/usergroups.list.js");

var _usergroups8 = _interopRequireDefault(_usergroups7);

var _usergroups9 = __webpack_require__("../../../../slack/methods/usergroups.update.js");

var _usergroups10 = _interopRequireDefault(_usergroups9);

var _usergroupsUsers = __webpack_require__("../../../../slack/methods/usergroups.users.list.js");

var _usergroupsUsers2 = _interopRequireDefault(_usergroupsUsers);

var _usergroupsUsers3 = __webpack_require__("../../../../slack/methods/usergroups.users.update.js");

var _usergroupsUsers4 = _interopRequireDefault(_usergroupsUsers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: _usergroups2.default,
  disable: _usergroups4.default,
  enable: _usergroups6.default,
  list: _usergroups8.default,
  update: _usergroups10.default,
  users: {
    list: _usergroupsUsers2.default,
    update: _usergroupsUsers4.default
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupslist(params, callback) {
  var ns = 'usergroups.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsupdate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsupdate(params, callback) {
  var ns = 'usergroups.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.users.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsuserslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsuserslist(params, callback) {
  var ns = 'usergroups.users.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/usergroups.users.update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsusersupdate;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsusersupdate(params, callback) {
  var ns = 'usergroups.users.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.deletePhoto.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersdeletePhoto;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersdeletePhoto(params, callback) {
  var ns = 'users.deletePhoto';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.getPresence.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersgetPresence;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersgetPresence(params, callback) {
  var ns = 'users.getPresence';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.identity.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersidentity;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersidentity(params, callback) {
  var ns = 'users.identity';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersinfo;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersinfo(params, callback) {
  var ns = 'users.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = __webpack_require__("../../../../slack/methods/users.getPresence.js");

var _users2 = _interopRequireDefault(_users);

var _usersProfile = __webpack_require__("../../../../slack/methods/users.profile.get.js");

var _usersProfile2 = _interopRequireDefault(_usersProfile);

var _users3 = __webpack_require__("../../../../slack/methods/users.identity.js");

var _users4 = _interopRequireDefault(_users3);

var _users5 = __webpack_require__("../../../../slack/methods/users.info.js");

var _users6 = _interopRequireDefault(_users5);

var _users7 = __webpack_require__("../../../../slack/methods/users.list.js");

var _users8 = _interopRequireDefault(_users7);

var _users9 = __webpack_require__("../../../../slack/methods/users.setActive.js");

var _users10 = _interopRequireDefault(_users9);

var _users11 = __webpack_require__("../../../../slack/methods/users.setPresence.js");

var _users12 = _interopRequireDefault(_users11);

var _usersProfile3 = __webpack_require__("../../../../slack/methods/users.profile.set.js");

var _usersProfile4 = _interopRequireDefault(_usersProfile3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getPresence: _users2.default,
  identity: _users4.default,
  info: _users6.default,
  list: _users8.default,
  profile: {
    get: _usersProfile2.default,
    set: _usersProfile4.default
  },
  setActive: _users10.default,
  setPresence: _users12.default
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userslist;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userslist(params, callback) {
  var ns = 'users.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.profile.get.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersprofileget;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersprofileget(params, callback) {
  var ns = 'users.profile.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.profile.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersprofileset;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersprofileset(params, callback) {
  var ns = 'users.profile.set';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.setActive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetActive;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetActive(params, callback) {
  var ns = 'users.setActive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.setPhoto.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetPhoto;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetPhoto(params, callback) {
  var ns = 'users.setPhoto';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../slack/methods/users.setPresence.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetPresence;

var _exec = __webpack_require__("../../../../slack/methods/_exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__("../../../../slack/methods/_validate.js");

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetPresence(params, callback) {
  var ns = 'users.setPresence';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "../../../../stream-http/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var ClientRequest = __webpack_require__("../../../../stream-http/lib/request.js")
var extend = __webpack_require__("../../../../xtend/immutable.js")
var statusCodes = __webpack_require__("../../../../builtin-status-codes/browser.js")
var url = __webpack_require__("../../../../url/url.js")

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../stream-http/lib/capability.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

exports.blobConstructor = false
try {
	new Blob([new ArrayBuffer(1)])
	exports.blobConstructor = true
} catch (e) {}

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (global.XMLHttpRequest) {
		xhr = new global.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || (haveArrayBuffer && checkTypeSupport('arraybuffer'))

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer &&
	checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

exports.vbArray = isFunction(global.VBArray)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../stream-http/lib/request.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, process) {var capability = __webpack_require__("../../../../stream-http/lib/capability.js")
var inherits = __webpack_require__("../../../../inherits/inherits_browser.js")
var response = __webpack_require__("../../../../stream-http/lib/response.js")
var stream = __webpack_require__("../../../../readable-stream/readable-browser.js")
var toArrayBuffer = __webpack_require__("../../../../to-arraybuffer/index.js")

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else if (capability.vbArray && preferBinary) {
		return 'text:vbarray'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || 'timeout' in opts) {
		// If the use of XHR should be preferred and includes preserving the 'content-type' header.
		// Force XHR to be used since the Fetch API does not yet support timeouts.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
		if (capability.blobConstructor) {
			body = new global.Blob(self._body.map(function (buffer) {
				return toArrayBuffer(buffer)
			}), {
				type: (headersObj['content-type'] || {}).value || ''
			})
		} else {
			// get utf8 string
			body = Buffer.concat(self._body).toString()
		}
	}

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin'
		}).then(function (response) {
			self._fetchResponse = response
			self._connect()
		}, function (reason) {
			self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode.split(':')[0]

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('timeout' in opts) {
			xhr.timeout = opts.timeout
			xhr.ontimeout = function () {
				self.emit('timeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress()
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode)
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
	var self = this
	self._destroyed = true
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	// Currently, there isn't a way to truly abort a fetch.
	// If you like bikeshedding, see https://github.com/whatwg/fetch/issues/27
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setTimeout = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'user-agent',
	'via'
]

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../buffer/index.js").Buffer, __webpack_require__("../../../../webpack/buildin/global.js"), __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../stream-http/lib/response.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer, global) {var capability = __webpack_require__("../../../../stream-http/lib/capability.js")
var inherits = __webpack_require__("../../../../inherits/inherits_browser.js")
var stream = __webpack_require__("../../../../readable-stream/readable-browser.js")

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function(header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})


		// TODO: this doesn't respect backpressure. Once WritableStream is available, this can be fixed
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				if (result.done) {
					self.push(null)
					return
				}
				self.push(new Buffer(result.value))
				read()
			}).catch(function(err) {
				self.emit('error', err)
			})
		}
		read()

	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {}

IncomingMessage.prototype._onXHRProgress = function () {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text:vbarray': // For IE9
			if (xhr.readyState !== rStates.DONE)
				break
			try {
				// This fails in IE8
				response = new global.VBArray(xhr.responseBody).toArray()
			} catch (e) {}
			if (response !== null) {
				self.push(new Buffer(response))
				break
			}
			// Falls through in IE8	
		case 'text':
			try { // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
				response = xhr.responseText
			} catch (e) {
				self._mode = 'text:vbarray'
				break
			}
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = new Buffer(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		self.push(null)
	}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../process/browser.js"), __webpack_require__("../../../../buffer/index.js").Buffer, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../tiny-json-http/_read.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var http = __webpack_require__("../../../../stream-http/index.js")
var https = __webpack_require__("../../../../https-browserify/index.js")
var url = __webpack_require__("../../../../url/url.js")
var qs = __webpack_require__("../../../../querystring-es3/index.js")

module.exports = function _read(options, callback) {

  // require options.url or fail noisily 
  if (!options.url) {
    throw Error('options.url required')
  }

  // parse out the options from options.url
  var opts = url.parse(options.url)

  // check for additional query params
  if (options.data) {
    var isSearch = !!opts.search
    options.url += (isSearch? '&' : '?') + qs.stringify(options.data)
    opts = url.parse(options.url)
  }

  var method = opts.protocol === 'https:'? https.get : http.get

  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = opts.headers['User-Agent'] || 'tiny-http'
  opts.headers['Content-Type'] = opts.headers['Content-Type'] || 'application/json'
  
  // make a request
  var req = method(opts, function __res(res) {
   
    var raw = []

    var ok = res.statusCode >= 200 && res.statusCode < 300
    if (!ok) {
      callback(Error('GET failed with: ' + res.statusCode))
      res.resume()
      return
    }
 
    res.on('data', function __data(chunk) {
      raw.push(chunk)
    })

    res.on('end', function __end() {
      var err = null
      var result = null
      try {
        var isJSON = res.headers['content-type'].startsWith('application/json')
        var rawData = Buffer.concat(raw).toString()
        result = isJSON? JSON.parse(rawData) : rawData
      } 
      catch (e) {
        err = e
      }
      callback(err, {body:result, headers:res.headers})
    })
  })
  
  req.on('error', callback)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../tiny-json-http/_write.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var qs = __webpack_require__("../../../../querystring-es3/index.js")
var http = __webpack_require__("../../../../stream-http/index.js")
var https = __webpack_require__("../../../../https-browserify/index.js")
var url = __webpack_require__("../../../../url/url.js")

module.exports = function _write(httpMethod, options, callback) {

  // require options.url or fail noisily 
  if (!options.url) {
    throw Error('options.url required')
  }

  // parse out the options from options.url
  var opts = url.parse(options.url)
  var method = opts.protocol === 'https:'? https.request : http.request
  var defaultContentType = 'application/json; charset=utf-8'

  // put the params on the query as well as the body?
  if (httpMethod === 'DELETE' && options.data) {
    var isSearch = !!opts.search
    options.url += (isSearch? '&' : '?') + qs.stringify(options.data)
    opts = url.parse(options.url)
  }

  opts.method = httpMethod
  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = opts.headers['User-Agent'] || 'tiny-http'
  opts.headers['Content-Type'] = opts.headers['Content-Type'] || defaultContentType
  var reqJSON = opts.headers['Content-Type'].startsWith('application/json')
  var postData = reqJSON? JSON.stringify(options.data || {}) : qs.stringify(options.data || {})

  // make a POST request
  var req = method(opts, function(res) {
   
    var raw = [] // keep our buffers here
    var ok = res.statusCode >= 200 && res.statusCode < 300

    if (!ok) {
      callback(Error(httpMethod + ' failed with: ' + res.statusCode))
      res.resume()
      return
    }
 
    res.on('data', function __data(chunk) { 
      raw.push(chunk) 
    })

    res.on('end', function __end() {
      var err = null
      var result = null
      try {
        var isJSON = res.headers['content-type'].startsWith('application/json')
        var rawData = Buffer.concat(raw).toString()
        result = isJSON? JSON.parse(rawData) : rawData
      } 
      catch (e) {
        err = e
      }
      callback(err, {body:result, headers:res.headers})
    })
  })

  req.on('error', callback)

  req.write(postData)
 
  req.end()
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../tiny-json-http/index.js":
/***/ (function(module, exports, __webpack_require__) {

var _read = __webpack_require__("../../../../tiny-json-http/_read.js")
var _write = __webpack_require__("../../../../tiny-json-http/_write.js")

module.exports = {
  get: _read,
  post: _write.bind({}, 'POST'),
  put: _write.bind({}, 'PUT'),
  del: _write.bind({}, 'DELETE'),
}


/***/ }),

/***/ "../../../../to-arraybuffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__("../../../../buffer/index.js").Buffer

module.exports = function (buf) {
	// If the buffer is backed by a Uint8Array, a faster version will work
	if (buf instanceof Uint8Array) {
		// If the buffer isn't a subarray, return the underlying ArrayBuffer
		if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
			return buf.buffer
		} else if (typeof buf.buffer.slice === 'function') {
			// Otherwise we need to get a proper copy
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
		}
	}

	if (Buffer.isBuffer(buf)) {
		// This is the slow version that will work with any Buffer
		// implementation (even in old browsers)
		var arrayCopy = new Uint8Array(buf.length)
		var len = buf.length
		for (var i = 0; i < len; i++) {
			arrayCopy[i] = buf[i]
		}
		return arrayCopy.buffer
	} else {
		throw new Error('Argument must be a Buffer')
	}
}


/***/ }),

/***/ "../../../../url/url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__("../../../../punycode/punycode.js");
var util = __webpack_require__("../../../../url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__("../../../../querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../../../url/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../../../util-deprecate/browser.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../../../../xtend/immutable.js":
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

});
//# sourceMappingURL=slack.module.chunk.js.map