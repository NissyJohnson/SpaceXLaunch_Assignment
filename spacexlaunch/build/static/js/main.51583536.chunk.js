(this.webpackJsonpspacexlaunch=this.webpackJsonpspacexlaunch||[]).push([[0],{28:function(e,c,a){},30:function(e,c,a){},31:function(e,c,a){"use strict";a.r(c);var n=a(0),t=a(1),r=a(7),s=a.n(r),u=a(4),l=a(3),i=a(14),o=a(15),d=a(2),h="LAUNCH_YEARS",j="LOADING_INDICATOR",b="CARD_DETAILS",m="NO_RECORDS",f={loading:!0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,c=arguments.length>1?arguments[1]:void 0,a=c.type;switch(a){case h:return Object(d.a)(Object(d.a)({},e),{},{launchYears:c.launchYears});case j:return Object(d.a)(Object(d.a)({},e),{},{loading:c.loading});case b:return Object(d.a)(Object(d.a)({},e),{},{cardDetails:c.cardDetails});case m:return Object(d.a)(Object(d.a)({},e),{},{noRecords:!0});default:return e}},p=(a(28),Object(l.b)((function(e){return{loading:e.loading}}))((function(e){return e.loading?Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("div",{className:"loadingSpinner"})}):null}))),x=function(e){var c=e.heading;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("header",{"data-testid":"header",children:c})})},v=function(e){var c=e.footer;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("footer",{"data-testid":"footer",children:c})})},y=a(6),g=a(16),N=function(e){var c=e.classes,a=e.value,t=e.click,r=e.id,s=e.name;return Object(n.jsx)("button",{type:"button",name:s,id:r,className:c,value:a,onClick:function(e){return t(e)},"data-testid":"button",children:a})},_=a(5),S=a.n(_),A=a(8),w="https://api.spacexdata.com/v3/launches?limit=100",D=function(e){return{type:j,loading:e}},Y=function(e){return{missionName:e.mission_name,flightNumber:e.flight_number,missionId:e.mission_id,launchYear:e.launch_year,launchSuccess:e.launch_success,landSuccess:e.rocket.first_stage.cores[0].land_success,image:e.links.mission_patch_small}},L=Object(l.b)(null,(function(e){return{launchLandsuccess:function(c){return e(function(e){return function(){var c=Object(A.a)(S.a.mark((function c(a){var n,t,r,s;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,"launchSuccess"===e&&(n="".concat(w,"&launch_success=true")),"landSuccess"===e&&(n="".concat(w,"&launch_success=true&land_success=true")),"launchfail"===e&&(n="".concat(w,"&launch_success=true&land_success=fail")),c.next=6,fetch(n);case 6:return t=c.sent,c.next=9,t.json();case 9:void 0===(r=c.sent)&&0===r.length||(s=r&&Array.prototype.map.call(r,(function(e){return Y(e)})),a({type:b,cardDetails:s})),c.next=16;break;case 13:throw c.prev=13,c.t0=c.catch(0),new Error("API CALL Error");case 16:case"end":return c.stop()}}),c,null,[[0,13]])})));return function(e){return c.apply(this,arguments)}}()}(c))},launchYearSuccess:function(c,a){return e(function(e,c){return function(){var a=Object(A.a)(S.a.mark((function a(n){var t,r,s,u;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,"launchSuccess"===e?t="".concat(w,"&launch_success=true&launch_year=").concat(c):"landSuccess"===e?t="".concat(w,"&launch_success=true&land_success=true&launch_year=").concat(c):"launchfail"===e&&(t="".concat(w,"&launch_success=true&land_success=fail&launch_year=").concat(c)),a.next=4,fetch(t);case 4:return r=a.sent,a.next=7,r.json();case 7:void 0!==(s=a.sent)&&null!==s&&(u=s&&Array.prototype.map.call(s,(function(e){return Y(e)})),n({type:b,cardDetails:u})),a.next=14;break;case 11:throw a.prev=11,a.t0=a.catch(0),new Error("API CALL Error");case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(c,a))}}}))((function(e){var c=e.launchYears,a=e.launchLandsuccess,r=e.launchYearSuccess,s=Object(t.useState)({year:null,land:!1,launch:!1,touched:!1}),u=Object(g.a)(s,2),l=u[0],i=u[1],o=l.year,h=l.land,j=l.launch,b=l.touched;Object(t.useEffect)((function(){try{b&&(null===o&&(j||h)?j&&h?a("landSuccess"):j&&!h?a("launchfail"):j&&a("launchSuccess"):null!==o&&(j||h)&&(j&&h?r("landSuccess",o):j&&!h?r("launchfail",o):j&&r("launchSuccess",o)))}catch(e){throw new Error("Error in the API call")}}),[o,h,j,b]);var m=function(e){var c,a,n=e.target,t=n.name,r=n.value;document.querySelectorAll("[name='".concat(t,"'].active")).forEach((function(e){return e.classList.remove("active")})),e.currentTarget.className+=" active",a=isNaN(r)?"True"===r:parseInt(r,10),i(Object(d.a)(Object(d.a)({},l),{},(c={},Object(y.a)(c,t,a),Object(y.a)(c,"touched",!0),c)))},f=["True","False"],O=function(e,c){return c&&Array.prototype.map.call(c,(function(c,a){return Object(n.jsx)(N,{classes:"btn btn-primary btn-custom",id:"".concat(e).concat(a),value:c,click:m,name:e,"data-testid":"button"},a)}))};return Object(n.jsxs)("div",{className:"filters",children:[Object(n.jsx)("h2",{children:"Filters"}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("p",{className:"header-title",children:"Launch Year"}),Object(n.jsx)("hr",{"aria-hidden":"true"}),O("year",c)]}),Object(n.jsxs)("div",{className:"launch",children:[Object(n.jsx)("p",{className:"header-title",children:"Successful Launch"}),Object(n.jsx)("hr",{"aria-hidden":"true"}),O("launch",f)]}),Object(n.jsxs)("div",{className:"land",children:[Object(n.jsx)("p",{className:"header-title",children:"Successful Landing"}),Object(n.jsx)("hr",{"aria-hidden":"true"}),O("land",f)]})]})})),E=function(e){var c=e.cardDetail,a=c.missionName,t=c.flightNumber,r=c.missionId,s=c.launchYear,u=c.launchSuccess,l=c.image,i=c.landSuccess;return c?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"card-contentainer layout-columns__column m-card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{src:l,alt:a})}),Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("h3",{className:"card-heading","data-testid":"card-heading",children:"".concat(a,"#").concat(t)}),Object(n.jsxs)("p",{"data-testid":"missionid",children:["Mission Ids:",r]}),Object(n.jsxs)("p",{"data-testid":"launchYear",children:["Launch Year:",s]}),Object(n.jsxs)("p",{"data-testid":"launchSuccess",children:["Successful launch:",u?"True":"False"]}),Object(n.jsxs)("p",{"data-testid":"landSuccess",children:["Successful landing:",i?"True":"False"]})]})]})}):null},k=function(e){var c=e.cardDetails,a=c&&Array.prototype.map.call(c,(function(e,c){return Object(n.jsx)(E,{cardDetail:e},c)})),t=c?c.length>0:null;return Object(n.jsx)("div",{className:"layout-columns layout-columns--2-medium layout-columns--4-large",children:t?a:Object(n.jsx)("h2",{className:"no-records",children:" No records Found "})})},I=Object(l.b)((function(e){return{loading:e.loading,launchYears:e.launchYears,cardDetails:e.cardDetails}}),(function(e){return{launchedYear:function(){return e(function(){var e=Object(A.a)(S.a.mark((function e(c){var a,n,t,r,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(D(!0)),e.next=4,fetch(w);case 4:return a=e.sent,e.next=7,a.json();case 7:void 0!==(n=e.sent)&&null!==n&&(t=n&&Array.prototype.map.call(n,(function(e){return e.launch_year})),r=n&&Array.prototype.map.call(n,(function(e){return Y(e)})),s=Array.from(new Set(t)),c({type:h,launchYears:s}),c({type:b,cardDetails:r}),c(D(!1))),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error("API CALL Error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(c){return e.apply(this,arguments)}}())}}}))((function(e){var c=e.loading,a=e.launchYears,r=e.launchedYear,s=e.cardDetails;return Object(t.useEffect)((function(){r()}),[r]),c?Object(n.jsx)(p,{loading:!0}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("main",{className:"layout-content-container",children:[Object(n.jsx)(x,{heading:"SpaceX Launch Program"}),Object(n.jsxs)("div",{className:"layout-columns layout-columns--20-80-large layout-columns--2-medium",children:[Object(n.jsx)("div",{className:"layout-columns__column",children:Object(n.jsx)(L,{launchYears:a})}),Object(n.jsx)("div",{className:"layout-columns__column",children:Object(n.jsx)(k,{cardDetails:s})}),Object(n.jsx)(v,{footer:"Developed by: Nissy Johnson"})]})]})})})),F=(a(30),function(){return Object(n.jsx)("div",{children:Object(n.jsx)(I,{})})}),C=Object(u.createStore)(O,Object(u.compose)(Object(u.applyMiddleware)(i.a),Object(o.composeWithDevTools)()));s.a.render(Object(n.jsx)(l.a,{store:C,children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.51583536.chunk.js.map