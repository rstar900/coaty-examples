!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var o=[],n=!0,i=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(l){i=!0,r=l}finally{try{n||null==c.return||c.return()}finally{if(i)throw r}}return o}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}function c(t,e,o){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(o):i.value}})(t,e,o||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=b(t);if(e){var i=b(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return u(this,o)}}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dgxB:function(o,n,r){"use strict";r.r(n),r.d(n,"ControlModule",(function(){return pt}));var u,g,h=r("PCNd"),m=r("tyNb"),p=r("fXoL"),d=r("XNiG"),f=r("lJxs"),v=r("pLZG"),y=r("GtPT"),w=r("2Vo4"),C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,t);var e=s(o);function o(){return i(this,o),e.apply(this,arguments)}return a(o,[{key:"onInit",value:function(){c(b(o.prototype),"onInit",this).call(this),this._eventLog=[],this._eventLogSubject=new w.a(this._eventLog),this._eventLog$=this._eventLogSubject.asObservable(),this._activeAgentsInfo={activeLights:0,activeControls:0},this._activeAgentsInfoSubject=new d.a,this._activeAgentsInfo$=this._activeAgentsInfoSubject.asObservable()}},{key:"onCommunicationManagerStarting",value:function(){var t=this;this.observeObjectLifecycleInfoByCoreType("Identity",(function(t){return"LightAgent"===t.name||"LightControlAgent"===t.name||"LightAgent & LightControlAgent"===t.name})).subscribe((function(e){void 0!==e.added&&e.added.forEach((function(e){return t._updateActiveAgentsInfo(e.name.startsWith("LightAgent"),e.name.endsWith("LightControlAgent"),!0)})),void 0!==e.removed&&e.removed.forEach((function(e){return t._updateActiveAgentsInfo(e.name.startsWith("LightAgent"),e.name.endsWith("LightControlAgent"),!1)}))}))}},{key:"clearEventLog",value:function(){this._eventLog=[],this._eventLogSubject.next(this._eventLog)}},{key:"switchLights",value:function(t,e,o,n,i){var r=this,a=y.CallEvent.with(this.runtime.commonOptions.extra.lightControlOperation,{on:e,color:n,luminosity:o,switchTime:i},t),c=this.addCallToEventLog(a);this.communicationManager.publishCall(a).subscribe((function(t){r.addReturnToEventLog(t,c)}))}},{key:"_updateActiveAgentsInfo",value:function(t,e,o){o?(t&&this._activeAgentsInfo.activeLights++,e&&this._activeAgentsInfo.activeControls++):(t&&this._activeAgentsInfo.activeLights--,e&&this._activeAgentsInfo.activeControls--),this._activeAgentsInfoSubject.next(Object.assign({},this._activeAgentsInfo))}},{key:"addCallToEventLog",value:function(t){var e=this.runtime.newUuid();return this._eventLog.unshift({correlationId:e,callEvent:t,callEventTime:Date.now(),returnEvents:[]}),this._eventLogSubject.next(this._eventLog),e}},{key:"addReturnToEventLog",value:function(t,e){var o=this._eventLog.find((function(t){return t.correlationId===e}));o&&(o.returnEvents.push({event:t,eventTime:Date.now()}),this._eventLogSubject.next(this._eventLog))}},{key:"eventLog$",get:function(){return this._eventLog$}},{key:"activeAgentsInfo$",get:function(){return this._activeAgentsInfo$}}]),o}(y.ObjectLifecycleController),P=r("2ChS"),L=r("/t3+"),k=r("bTqV"),x=r("Qu3c"),Q=r("NFeN"),I=((u=function(){function t(e,o){i(this,t),this.data=e,this.bottomSheetRef=o}return a(t,[{key:"close",value:function(t){this.bottomSheetRef.dismiss(),t.preventDefault()}}]),t}()).\u0275fac=function(t){return new(t||u)(p.Lb(P.a),p.Lb(P.d))},u.\u0275cmp=p.Fb({type:u,selectors:[["app-code-viewer-bottom-sheet"]],decls:32,vars:3,consts:[[1,"code-toolbar"],[1,"code-header"],[1,"code-key"],[1,"app-space-filler"],["mat-icon-button","","matTooltip","Close",1,"code-toolbar-button",3,"click"],["aria-hidden","false","aria-label","Close"],[1,"code-value"]],template:function(t,e){1&t&&(p.Qb(0,"mat-toolbar",0),p.Qb(1,"span",1),p.Qb(2,"code"),p.wc(3,"CallEvent.withData("),p.Pb(),p.Qb(4,"code",2),p.wc(5,"operation"),p.Pb(),p.Qb(6,"code"),p.wc(7,", "),p.Pb(),p.Qb(8,"code",2),p.wc(9,"parameters"),p.Pb(),p.Qb(10,"code"),p.wc(11,", "),p.Pb(),p.Qb(12,"code",2),p.wc(13,"contextFilter"),p.Pb(),p.Qb(14,"code"),p.wc(15,")"),p.Pb(),p.Pb(),p.Mb(16,"span",3),p.Qb(17,"button",4),p.Xb("click",(function(t){return e.close(t)})),p.Qb(18,"mat-icon",5),p.wc(19,"close "),p.Pb(),p.Pb(),p.Pb(),p.Qb(20,"pre",2),p.wc(21,"operation"),p.Pb(),p.Qb(22,"pre",6),p.wc(23),p.Pb(),p.Qb(24,"pre",2),p.wc(25,"parameters"),p.Pb(),p.Qb(26,"pre",6),p.wc(27),p.Pb(),p.Qb(28,"pre",2),p.wc(29,"contextFilter"),p.Pb(),p.Qb(30,"pre",6),p.wc(31),p.Pb()),2&t&&(p.zb(23),p.xc(e.data.operation),p.zb(4),p.xc(e.data.operationParameters),p.zb(4),p.xc(e.data.contextFilter))},directives:[L.a,k.b,x.a,Q.a],styles:[".code-toolbar[_ngcontent-%COMP%]{font-size:17px;height:60px;padding-right:0;margin-top:-8px;margin-left:-16px;margin-right:-16px;width:calc(100% + 32px)}.code-toolbar-button[_ngcontent-%COMP%]{margin:0 16px}.code-key[_ngcontent-%COMP%]{color:#673ab7}.code-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}"]}),u),O=r("/Uk7"),T=r("tXAj"),S=r("Wp6s"),E=r("ofXK"),z=r("f0Cb"),M=r("kmnG"),A=r("d3UM"),R=r("3Pt+"),_=r("1G5W"),j=r("FKr1"),F=((g=function(){function t(e){i(this,t),this.matSelect=e,this.state="checked",this.options=[],this.value=[],this.destroyed=new d.a}return a(t,[{key:"ngAfterViewInit",value:function(){var t=this;this.options=this.matSelect.options.map((function(t){return t.value})),this.matSelect.options.changes.pipe(Object(_.a)(this.destroyed)).subscribe((function(e){t.options=t.matSelect.options.map((function(t){return t.value})),t.updateState()})),this.value=this.matSelect.ngControl.control.value,this.matSelect.ngControl.valueChanges.pipe(Object(_.a)(this.destroyed)).subscribe((function(e){t.value=e,t.updateState()})),setTimeout((function(){t.updateState()}))}},{key:"ngOnDestroy",value:function(){this.destroyed.next(),this.destroyed.complete()}},{key:"onSelectAllClick",value:function(t){this.matSelect.ngControl.control.setValue("checked"===this.state?[]:this.options)}},{key:"updateState",value:function(){var t=this.areArraysEqual(this.value,this.options);this.state=t?"checked":this.value.length>0?"indeterminate":"unchecked"}},{key:"areArraysEqual",value:function(t,o){return e(t).sort().join(",")===e(o).sort().join(",")}}]),t}()).\u0275fac=function(t){return new(t||g)(p.Lb(A.a,1))},g.\u0275cmp=p.Fb({type:g,selectors:[["app-mat-option-select-all"]],decls:4,vars:1,consts:[[1,"mat-option",3,"click"],[1,"mat-option-pseudo-checkbox",3,"state"],[1,"mat-option-text"]],template:function(t,e){1&t&&(p.Qb(0,"div",0),p.Xb("click",(function(t){return e.onSelectAllClick(t)})),p.Mb(1,"mat-pseudo-checkbox",1),p.Qb(2,"span",2),p.wc(3,"Select all"),p.Pb(),p.Pb()),2&t&&(p.zb(1),p.hc("state",e.state))},directives:[j.l],styles:[".mat-option[_ngcontent-%COMP%] {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      height: 3.5em;\n      line-height: 3.5em;\n  }"]}),g),D=r("0hV+"),B=r("1jcm"),W=r("5RNC"),$=r("jaxi"),q=r("bSwM"),H=r("7EHt"),N=r("MutI"),X=["controlCard"];function U(t,e){if(1&t&&(p.Qb(0,"mat-icon",12),p.wc(1),p.Pb()),2&t){var o=e.ngIf;p.hc("matTooltip",o.isOnline?"Connected to "+o.brokerHost:"Not connected to "+o.brokerHost),p.zb(1),p.yc(" ",o.isOnline?"wifi":"wifi_off"," ")}}function V(t,e){1&t&&(p.Qb(0,"mat-card-content"),p.wc(1,"Initializing..."),p.Pb())}function G(t,e){if(1&t&&(p.Qb(0,"mat-option",37),p.wc(1),p.Pb()),2&t){var o=e.$implicit;p.hc("value",o),p.zb(1),p.yc(" ",o," ")}}function J(t,e){if(1&t&&(p.Qb(0,"mat-option",37),p.wc(1),p.Pb()),2&t){var o=e.$implicit;p.hc("value",o),p.zb(1),p.yc(" ",o," ")}}function K(t,e){if(1&t&&(p.Qb(0,"mat-option",37),p.wc(1),p.Pb()),2&t){var o=e.$implicit;p.hc("value",o),p.zb(1),p.yc(" ",o," ")}}function Y(t,e){if(1&t){var o=p.Rb();p.Qb(0,"a",44),p.Xb("click",(function(t){return p.mc(o),p.bc(2).onQrCodeClear(t)})),p.Qb(1,"mat-icon",45),p.wc(2," highlight_off "),p.Pb(),p.Pb()}}function Z(t,e){if(1&t&&p.Mb(0,"mat-button-toggle",46),2&t){var o=e.$implicit,n=p.bc(2);p.rc("background-color",n.colorRgbaToCssRgba(o.rgba))("border-color",n.selectedCustomColor===o?"#ffd740":"rgba(0, 0, 0, 0.12)"),p.hc("value",o)("matTooltip",o.name)}}function tt(t,e){if(1&t&&(p.Qb(0,"code",61),p.Qb(1,"span"),p.wc(2),p.Pb(),p.Qb(3,"span"),p.wc(4),p.cc(5,"json"),p.Pb(),p.Qb(6,"span"),p.wc(7),p.Pb(),p.Pb()),2&t){var o=p.bc().$implicit;p.zb(2),p.yc("light #",o.event.data.executionInfo.lightId," "),p.zb(2),p.yc("error message: ",p.dc(5,3,o.event.data.error.message)," , "),p.zb(3),p.yc("error code: ",o.event.data.error.code,"")}}function et(t,e){if(1&t&&(p.Qb(0,"code",53),p.Qb(1,"span"),p.wc(2),p.Pb(),p.Qb(3,"span"),p.wc(4),p.cc(5,"json"),p.Pb(),p.Qb(6,"span"),p.wc(7),p.cc(8,"date"),p.Pb(),p.Pb()),2&t){var o=p.bc().$implicit;p.zb(2),p.yc("light #",o.event.data.executionInfo.lightId," "),p.zb(2),p.yc("result: ",p.dc(5,3,o.event.data.result),", "),p.zb(3),p.yc("triggerTime: ",p.ec(8,5,o.event.data.executionInfo.triggerTime,"HH:mm:ss.SSS"),"")}}function ot(t,e){if(1&t&&(p.Qb(0,"mat-list-item",56),p.Qb(1,"mat-icon",57),p.wc(2," arrow_forward"),p.Pb(),p.Qb(3,"h4",58),p.wc(4),p.cc(5,"date"),p.Pb(),p.uc(6,tt,8,5,"code",59),p.uc(7,et,9,8,"code",60),p.Pb()),2&t){var o=e.$implicit;p.zb(1),p.hc("color",o.event.data.isError?"warn":""),p.zb(2),p.Db("control-event-log-warn",o.event.data.isError),p.zb(1),p.yc(" ReturnEvent @ ",p.ec(5,6,o.eventTime,"HH:mm:ss.SSS")," "),p.zb(2),p.hc("ngIf",o.event.data.isError),p.zb(1),p.hc("ngIf",!o.event.data.isError)}}function nt(t,e){if(1&t){var o=p.Rb();p.Qb(0,"mat-list-item",50),p.Qb(1,"mat-icon",51),p.wc(2," arrow_back"),p.Pb(),p.Qb(3,"div",52),p.wc(4),p.cc(5,"date"),p.Qb(6,"code",53),p.Qb(7,"span"),p.wc(8),p.Pb(),p.Qb(9,"span"),p.wc(10),p.Pb(),p.Qb(11,"span"),p.wc(12),p.Pb(),p.Qb(13,"span"),p.wc(14),p.Pb(),p.Pb(),p.Qb(15,"a",54),p.Xb("click",(function(){p.mc(o);var t=e.$implicit;return p.bc(3).viewCallEventData(t.callEvent.data)})),p.Qb(16,"mat-icon",45),p.wc(17," code "),p.Pb(),p.Pb(),p.Pb(),p.uc(18,ot,8,9,"mat-list-item",55),p.Pb()}if(2&t){var n=e.$implicit;p.Db("control-event-log-list-item-alternate",e.even),p.zb(4),p.yc(" CallEvent @ ",p.ec(5,8,n.callEventTime,"HH:mm:ss.SSS")," "),p.zb(4),p.yc("on: ",n.callEvent.data.getParameterByName("on"),", "),p.zb(2),p.yc("luminosity: ",n.callEvent.data.getParameterByName("luminosity"),", "),p.zb(2),p.yc("color: ",n.callEvent.data.getParameterByName("color"),", "),p.zb(2),p.yc("switchTime: ",n.callEvent.data.getParameterByName("switchTime")," "),p.zb(4),p.hc("ngForOf",n.returnEvents)}}function it(t,e){if(1&t){var o=p.Rb();p.Qb(0,"mat-expansion-panel"),p.Qb(1,"mat-expansion-panel-header"),p.Qb(2,"mat-panel-title"),p.wc(3," Event Log "),p.Pb(),p.Qb(4,"mat-panel-description"),p.wc(5),p.Pb(),p.Pb(),p.Qb(6,"mat-list",47),p.uc(7,nt,19,11,"mat-list-item",48),p.Pb(),p.Qb(8,"mat-action-row"),p.Qb(9,"button",49),p.Xb("click",(function(){return p.mc(o),p.bc(2).clearEventLog()})),p.wc(10,"CLEAR"),p.Pb(),p.Pb(),p.Pb()}if(2&t){var n=e.ngIf,i=p.bc(2);p.zb(5),p.zc(" Call (",n.length,") \u22c5 Return (",i.getReturnEventsCount(n),") "),p.zb(2),p.hc("ngForOf",n)("ngForTrackBy",i.trackByEventLogEntries),p.zb(2),p.hc("disabled",!i.controlContainer)}}function rt(t,e){if(1&t){var o=p.Rb();p.Qb(0,"mat-card-content"),p.Qb(1,"h1",13),p.wc(2),p.cc(3,"async"),p.Pb(),p.Qb(4,"h1",14),p.wc(5),p.cc(6,"async"),p.Pb(),p.Qb(7,"h4",15),p.wc(8,"SELECT CONTEXT FILTER"),p.Pb(),p.Qb(9,"mat-form-field",16),p.Qb(10,"mat-label"),p.wc(11,"Buildings"),p.Pb(),p.Qb(12,"mat-select",17),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().selectedBuildings=t})),p.Mb(13,"app-mat-option-select-all"),p.uc(14,G,2,2,"mat-option",18),p.Pb(),p.Pb(),p.Qb(15,"mat-form-field",16),p.Qb(16,"mat-label"),p.wc(17,"Floors"),p.Pb(),p.Qb(18,"mat-select",17),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().selectedFloors=t})),p.Mb(19,"app-mat-option-select-all"),p.uc(20,J,2,2,"mat-option",18),p.Pb(),p.Pb(),p.Qb(21,"mat-form-field",16),p.Qb(22,"mat-label"),p.wc(23,"Rooms"),p.Pb(),p.Qb(24,"mat-select",17),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().selectedRooms=t})),p.Mb(25,"app-mat-option-select-all"),p.uc(26,K,2,2,"mat-option",18),p.Pb(),p.Pb(),p.Qb(27,"div",19),p.Qb(28,"mat-label",20),p.wc(29,"Light"),p.Pb(),p.Qb(30,"qrcode",21),p.Xb("dragover",(function(t){return p.mc(o),p.bc().onQrCodeDragOver(t)}))("drop",(function(t){return p.mc(o),p.bc().onQrCodeDrop(t)})),p.Pb(),p.uc(31,Y,3,0,"a",22),p.Pb(),p.Qb(32,"h4"),p.wc(33,"SELECT OPERATION PARAMETERS"),p.Pb(),p.Qb(34,"div",23),p.Qb(35,"div",24),p.Qb(36,"div",25),p.Qb(37,"mat-icon",26),p.wc(38," wb_incandescent "),p.Pb(),p.wc(39," On/Off "),p.Pb(),p.Qb(40,"mat-slide-toggle",27),p.Xb("change",(function(t){return p.mc(o),p.bc().onOnOffToggle(t)}))("ngModelChange",(function(t){return p.mc(o),p.bc().onOff=t})),p.Pb(),p.Pb(),p.Qb(41,"div",28),p.Qb(42,"div",25),p.Qb(43,"mat-icon",29),p.wc(44," wb_sunny "),p.Pb(),p.wc(45," Luminosity "),p.Pb(),p.Qb(46,"mat-slider",30),p.Xb("change",(function(t){return p.mc(o),p.bc().onLuminosityChange(t)}))("ngModelChange",(function(t){return p.mc(o),p.bc().luminosityPercent=t})),p.Pb(),p.Pb(),p.Qb(47,"div",31),p.Qb(48,"div",25),p.Qb(49,"mat-icon",29),p.wc(50," color_lens "),p.Pb(),p.wc(51," Color "),p.Pb(),p.Qb(52,"mat-slider",32),p.Xb("input",(function(t){return p.mc(o),p.bc().onPrimaryColorDrag(t)}))("change",(function(t){return p.mc(o),p.bc().onPrimaryColorChange(t)}))("ngModelChange",(function(t){return p.mc(o),p.bc().primaryColorPosition=t})),p.Pb(),p.Qb(53,"mat-button-toggle-group",33),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().selectedCustomColor=t}))("change",(function(t){return p.mc(o),p.bc().onCustomColorChange(t)})),p.uc(54,Z,1,6,"mat-button-toggle",34),p.Pb(),p.Pb(),p.Qb(55,"div",28),p.Qb(56,"div",25),p.Qb(57,"mat-icon",35),p.wc(58," timer "),p.Pb(),p.wc(59," Switch time "),p.Pb(),p.Qb(60,"mat-button-toggle-group",36),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().switchTime=t}))("change",(function(t){return p.mc(o),p.bc().onSwitchTimeChange(t)})),p.Qb(61,"mat-button-toggle",37),p.wc(62,"Immediate"),p.Pb(),p.Qb(63,"mat-button-toggle",37),p.wc(64,"5sec"),p.Pb(),p.Qb(65,"mat-button-toggle",37),p.wc(66,"10sec"),p.Pb(),p.Qb(67,"mat-button-toggle",37),p.wc(68,"20sec"),p.Pb(),p.Qb(69,"mat-button-toggle",37),p.wc(70,"30sec"),p.Pb(),p.Qb(71,"mat-button-toggle",37),p.wc(72,"60sec"),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(73,"div",38),p.Qb(74,"button",39),p.Xb("click",(function(){return p.mc(o),p.bc().switchLights()})),p.wc(75,"Switch lights "),p.Pb(),p.Qb(76,"mat-checkbox",40),p.Xb("ngModelChange",(function(t){return p.mc(o),p.bc().autoSwitch=t})),p.wc(77," Auto switch on parameter changes "),p.Pb(),p.Mb(78,"div",41),p.Qb(79,"button",42),p.Xb("click",(function(){return p.mc(o),p.bc().openCodeViewer()})),p.Qb(80,"mat-icon",43),p.wc(81,"code "),p.Pb(),p.Pb(),p.Pb(),p.uc(82,it,11,5,"mat-expansion-panel",9),p.cc(83,"async"),p.Pb()}if(2&t){var n,i,r=p.bc();p.zb(2),p.yc("# Lights: ",null==(n=p.dc(3,47,r.activeAgentsInfo$))?null:n.activeLights,""),p.zb(3),p.yc("# Controls: ",null==(i=p.dc(6,49,r.activeAgentsInfo$))?null:i.activeControls,""),p.zb(7),p.hc("ngModel",r.selectedBuildings)("disabled",!!r.selectedLightId),p.zb(2),p.hc("ngForOf",r.availableBuildings),p.zb(4),p.hc("ngModel",r.selectedFloors)("disabled",!!r.selectedLightId),p.zb(2),p.hc("ngForOf",r.availableFloors),p.zb(4),p.hc("ngModel",r.selectedRooms)("disabled",!!r.selectedLightId),p.zb(2),p.hc("ngForOf",r.availableRooms),p.zb(4),p.rc("opacity",r.selectedLightId?1:.3),p.hc("matTooltip",r.selectedLightId?r.selectedLightUrl:"Drop QR Code of a light here to switch this light only")("title","")("qrdata",r.selectedLightUrl||"coaty.io")("elementType","svg")("errorCorrectionLevel","M")("width",80)("margin",0),p.zb(1),p.hc("ngIf",r.selectedLightId),p.zb(9),p.hc("color","accent")("labelPosition","before")("ngModel",r.onOff),p.zb(6),p.hc("min",0)("max",100)("tickInterval",10)("step",1)("thumbLabel",!0)("ngModel",r.luminosityPercent),p.zb(6),p.hc("min",0)("max",r.primaryColorPositionMax)("step",1)("thumbLabel",!0)("displayWith",r.primaryColorThumbDisplayer)("ngModel",r.primaryColorPosition),p.zb(1),p.hc("ngModel",r.selectedCustomColor),p.zb(1),p.hc("ngForOf",r.customColors),p.zb(6),p.hc("ngModel",r.switchTime),p.zb(1),p.hc("value",0),p.zb(2),p.hc("value",5e3),p.zb(2),p.hc("value",1e4),p.zb(2),p.hc("value",2e4),p.zb(2),p.hc("value",3e4),p.zb(2),p.hc("value",6e4),p.zb(5),p.hc("ngModel",r.autoSwitch),p.zb(6),p.hc("ngIf",p.dc(83,51,r.eventLog$))}}function at(t,e){if(1&t){var o=p.Rb();p.Qb(0,"mat-card-actions"),p.Qb(1,"button",62),p.Xb("click",(function(){return p.mc(o),p.bc().openLightApp()})),p.wc(2,"NEW LIGHT "),p.Pb(),p.Qb(3,"a",63),p.wc(4,"NEW LIGHT IN TAB "),p.Pb(),p.Qb(5,"a",64),p.wc(6,"NEW LIGHT CONTROL "),p.Pb(),p.Pb()}}function ct(t,e){if(1&t&&(p.Qb(0,"div"),p.wc(1),p.cc(2,"date"),p.Pb()),2&t){var o=e.ngIf;p.zb(1),p.yc("Last switch operation: ",p.ec(2,1,null==o[0]?null:o[0].callEventTime,"HH:mm:ss.SSS"),"")}}function lt(t,e){1&t&&(p.Qb(0,"div"),p.wc(1,"Last switch operation:"),p.Pb())}function st(t,e){if(1&t&&(p.Qb(0,"div",65),p.Qb(1,"a",66),p.Mb(2,"img",67),p.Pb(),p.Qb(3,"a",68),p.Mb(4,"img",69),p.Pb(),p.Pb()),2&t){var o=e.ngIf;p.zb(1),p.hc("matTooltip",(null==o?null:o.packageInfo.name)+"@"+(null==o?null:o.packageInfo.version)+" on GitHub")}}var ut,bt,gt,ht=[{path:"",component:(ut=function(){function e(t,o,n,r,a){i(this,e),this.appContext=t,this.bottomSheet=o,this.changeRef=n,this.route=r,this.autoSwitch=!1,this.primaryColorPositionMax=1e3,this.currentClock$=new d.a,this.appContext.setContext("Light Control"),this.startClock(),this.connectControlController(a)}return a(e,[{key:"ngOnInit",value:function(){var t=this;this.route.queryParamMap.pipe(Object(f.a)((function(t){return t.get("light_id")})),Object(v.a)((function(t){return!!t}))).subscribe((function(e){setTimeout((function(){t.selectedLightId=e,t.selectedLightUrl=window.location.href}))}))}},{key:"ngAfterContentInit",value:function(){var t=this;setTimeout((function(){t.updateColorSliderThumb(t.primaryColorPosition)}))}},{key:"ngOnDestroy",value:function(){this.stopClock(),this.controlContainer&&this.controlContainer.shutdown()}},{key:"onOnOffToggle",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onLuminosityChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"primaryColorThumbDisplayer",value:function(t){return""}},{key:"onPrimaryColorDrag",value:function(t){this.updateColorSliderThumb(t.value),this.selectedCustomColor=void 0}},{key:"onPrimaryColorChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onCustomColorChange",value:function(t){t.source.checked&&(this.updateColorSliderThumb(-1),this.autoSwitch&&this.switchLights())}},{key:"onSwitchTimeChange",value:function(t){this.autoSwitch&&this.switchLights()}},{key:"onQrCodeDragOver",value:function(t){t.dataTransfer.types.includes("text/qrcode")&&t.preventDefault()}},{key:"onQrCodeDrop",value:function(t){var e=t.dataTransfer.getData("text/qrcode"),o=e.lastIndexOf("?light_id=");-1!==o&&(this.selectedLightId=e.substr(o+10),this.selectedLightUrl=e),t.preventDefault()}},{key:"onQrCodeClear",value:function(t){this.selectedLightId=void 0,this.selectedLightUrl=void 0}},{key:"switchLights",value:function(){this.controlContainer.getController("ControlController").switchLights(this.createContextFilter(),this.onOff,this.luminosity,this.effectiveColor,this.switchTime)}},{key:"openCodeViewer",value:function(){this.bottomSheet.open(I,{data:this.getFormattedEventData(this.onOff,this.luminosity,this.effectiveColor,this.switchTime,this.createContextFilter())})}},{key:"openLightApp",value:function(){this.openLightAppInPopup()}},{key:"viewCallEventData",value:function(t){console.log(t.filter),this.bottomSheet.open(I,{data:this.getFormattedEventData(t.getParameterByName("on"),t.getParameterByName("luminosity"),t.getParameterByName("color"),t.getParameterByName("switchTime"),t.filter)})}},{key:"clearEventLog",value:function(){this.controlContainer.getController("ControlController").clearEventLog()}},{key:"colorRgbaToCssRgba",value:function(t){return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}},{key:"getReturnEventsCount",value:function(t){return t.reduce((function(t,e){return t+e.returnEvents.length}),0)}},{key:"trackByEventLogEntries",value:function(t,e){return e.correlationId}},{key:"startClock",value:function(){var t=this,e=Date.now();this.currentClock$.next(e),this.isClockStopped=!1,function o(){t.isClockStopped||requestAnimationFrame((function(){var n=Date.now();n-e>=1e3&&t.currentClock$.next(e=n),o()}))}()}},{key:"stopClock",value:function(){this.isClockStopped=!0}},{key:"initContextFilterBindings",value:function(t,e){var o=function(t,e){return Array.from({length:e-t+1},(function(e,o){return o+t}))};this.availableBuildings=o(t.building.min,t.building.max),this.availableFloors=o(t.floor.min,t.floor.max),this.availableRooms=o(t.room.min,t.room.max),this.selectedBuildings=e.initialContextFilterBuildings,this.selectedFloors=e.initialContextFilterFloors,this.selectedRooms=e.initialContextFilterRooms}},{key:"createContextFilter",value:function(){return this.selectedLightId?{conditions:["lightId",y.filterOp.equals(this.selectedLightId)]}:{conditions:{and:[["building",y.filterOp.in(this.selectedBuildings)],["floor",y.filterOp.in(this.selectedFloors)],["room",y.filterOp.in(this.selectedRooms)]]}}}},{key:"initOperationParams",value:function(t){this.onOff=t.initialOpParamOnOff,this.luminosityPercent=100*t.initialOpParamLuminosity,this.primaryColorPosition=this.rgbaToColorPosition(t.initialOpParamPrimaryColor),this.customColors=t.customColors,this.switchTime=t.initialSwitchTime}},{key:"connectControlController",value:function(t){var e=this;t.resolveContainer("LightControlAgent","ControlController",C).then((function(t){e.controlContainer=t;var o=t.getController("ControlController");e.initBrokerConnectionInfo(o.options),e.initContextFilterBindings(t.runtime.commonOptions.extra.lightContextRanges,o.options),e.initOperationParams(o.options),e.eventLog$=o.eventLog$,e.activeAgentsInfo$=o.activeAgentsInfo$,e.changeRef.detectChanges(),e.appContext.setContext("Light Control #"+t.identity.objectId)})).catch((function(t){throw new Error("Agent container for ControlComponent couldn't be resolved: "+t)}))}},{key:"initBrokerConnectionInfo",value:function(t){var e=this;this.brokerConnectionInfo$=this.controlContainer.communicationManager.observeCommunicationState().pipe(Object(f.a)((function(t){return{state:t,isOnline:t===y.CommunicationState.Online,brokerHost:e.controlContainer.communicationManager.options.brokerUrl}})))}},{key:"openLightAppInPopup",value:function(){var t,e,o=this.controlContainer.getController("ControlController").options,n=window.open("./light","_blank","toolbar=no,resizable=no,status=no,location=no,menubar=no,titlebar=no,width=".concat(o.lightWindowWidth,",height=").concat(o.lightWindowHeight)),i={screenLeft:n.screenLeft,screenTop:n.screenTop,outerWidth:n.outerWidth,outerHeight:n.outerHeight,availTop:n.screen.availTop||0,availLeft:n.screen.availLeft||0,availWidth:n.screen.availWidth,availHeight:n.screen.availHeight};if(this.currentLightWindowLayout){var r=this.currentLightWindowLayout.outerWidth,a=this.currentLightWindowLayout.outerHeight,c=this.currentLightWindowLayout.availTop,l=this.currentLightWindowLayout.availLeft,s=this.currentLightWindowLayout.availWidth;t=this.currentLightWindowLayout.screenLeft,(e=this.currentLightWindowLayout.screenTop+a)+a>=c+this.currentLightWindowLayout.availHeight&&(e=c,(t+=r)+r>=l+s&&(t=l,e=c))}else t=i.availLeft,e=i.availTop;n.moveTo(t,e),i.screenLeft=n.screenLeft,i.screenTop=n.screenTop,this.currentLightWindowLayout=i}},{key:"updateColorSliderThumb",value:function(t){var e=this.colorPositionToRgba(t)||[255,255,255,0],o=this.cardElementRef.nativeElement.querySelector(".control-color-slider .mat-slider-thumb-label");o&&(o.style.backgroundColor=this.colorRgbaToCssRgba(e))}},{key:"rgbaToColorPosition",value:function(e){var o,n=t(e,4),i=n[0],r=n[1],a=n[2],c=(n[3],1/6);if(255===i&&0===a)o=c*r/255;else if(255===r&&0===a)o=c+(255-c*i)/255;else if(0===i&&255===r)o=2*c+c*a/255;else if(0===i&&255===a)o=.5+(255-c*r)/255;else if(0===r&&255===a)o=4*c+c*i/255;else{if(255!==i||0!==r)return-1;o=5*c+(255-c*a)/255}return o*this.primaryColorPositionMax}},{key:"colorPositionToRgba",value:function(t){if(-1!==t){var e=0,o=0,n=0,i=t/this.primaryColorPositionMax,r=1/6;return i<=r?(e=255,o=255*i/r,n=0):i<=2*r?(e=255-255*(i-r)/r,o=255,n=0):i<=.5?(e=0,o=255,n=255*(i-2*r)/r):i<=4*r?(e=0,o=255-255*(i-.5)/r,n=255):i<=5*r?(e=255*(i-4*r)/r,o=0,n=255):(e=255,o=0,n=255-255*(i-5*r)/r),[Math.round(e),Math.round(o),Math.round(n),1]}}},{key:"getFormattedEventData",value:function(t,e,o,n,i){var r,a=function(t){return JSON.stringify(t).replace(/,/g,", ")},c=function(t,e){return Array.isArray(e)&&e.every((function(t){return!Array.isArray(t)}))?a(e):e},l=function(t){return function(t){return t.replace(/\\/g,"").replace(/\"\[/g,"[").replace(/\]\"/g,"]").replace(/\"\{/g,"{").replace(/\}\"/g,"}")}(JSON.stringify(t,c,2))};return{operation:l(this.controlContainer.runtime.commonOptions.extra.lightControlOperation),operationParameters:l({on:t,luminosity:e,color:o,switchTime:n}),contextFilter:(r=l(function(t){if(Array.isArray(t.conditions)){var e=t.conditions;return e[1]="filterOp.".concat(y.ObjectFilterOperator[e[1][0]],"(").concat(JSON.stringify(e[1][1]),")"),t}return t.conditions.and.forEach((function(t){return t[1]="filterOp.".concat(y.ObjectFilterOperator[t[1][0]],"(").concat(a(t[1][1]),")")})),t}(i)),r.replace(/\"filterOp/g,"filterOp").replace(/\)\"/g,")"))}}},{key:"luminosity",get:function(){return this.luminosityPercent/100}},{key:"effectiveColor",get:function(){if(this.selectedCustomColor)return this.selectedCustomColor.rgba;var t=this.colorPositionToRgba(this.primaryColorPosition);return t[3]=.75,t}}]),e}(),ut.\u0275fac=function(t){return new(t||ut)(p.Lb(O.a),p.Lb(P.b),p.Lb(p.h),p.Lb(m.a),p.Lb(T.a))},ut.\u0275cmp=p.Fb({type:ut,selectors:[["app-control"]],viewQuery:function(t,e){var o;1&t&&p.qc(X,!0,p.l),2&t&&p.jc(o=p.Yb())&&(e.cardElementRef=o.first)},decls:27,vars:18,consts:[[1,"app-card"],["controlCard",""],["mat-card-avatar","",1,"control-card-header-avatar"],[1,"app-text-with-ellipsis"],["class","control-card-title-icon",3,"matTooltip",4,"ngIf"],[1,"control-time-overlay"],["mat-card-image","","src","./assets/images/light-control-image.jpg","alt","Key visual with a light bulb",1,"app-map-card-image-centered","app-keyvisual-layout"],["initializing",""],[4,"ngIf","ngIfElse"],[4,"ngIf"],["nolog",""],["class","app-card-footer-link-group",4,"ngIf"],[1,"control-card-title-icon",3,"matTooltip"],[1,"control-light-agents-info-overlay"],[1,"control-control-agents-info-overlay"],[1,"app-heading-no-top-margin"],[1,"control-form-field"],["multiple","",3,"ngModel","disabled","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"control-context-qrcode-field"],[1,"control-context-qrcode-label"],[1,"control-context-qrcode",3,"matTooltip","title","qrdata","elementType","errorCorrectionLevel","width","margin","dragover","drop"],["class","control-context-qrcode-button","matTooltip","Remove light from context filter","aria-label","icon button to remove QR Code from context filter",3,"click",4,"ngIf"],[1,"control-operation-params"],[1,"control-operation-param","control-operation-param-no-grow"],[1,"control-operation-param-label"],["aria-label","light bulb icon",1,"app-mat-icon-flipped"],["aria-label","on/off switch",3,"color","labelPosition","ngModel","change","ngModelChange"],[1,"control-operation-param"],["aria-label","light bulb icon"],[3,"min","max","tickInterval","step","thumbLabel","ngModel","change","ngModelChange"],[1,"control-operation-param","control-operation-param-color"],[1,"control-color-slider",3,"min","max","step","thumbLabel","displayWith","ngModel","input","change","ngModelChange"],[3,"ngModel","ngModelChange","change"],[3,"value","matTooltip","background-color","border-color",4,"ngFor","ngForOf"],["aria-label","timer icon"],["aria-label","Switch time",1,"control-operation-param-time-switch-group",3,"ngModel","ngModelChange","change"],[3,"value"],[1,"control-operation-request"],["mat-flat-button","","color","primary",3,"click"],[3,"ngModel","ngModelChange"],[1,"app-space-filler"],["mat-mini-fab","","color","primary","matTooltip","View CallEvent data",3,"click"],["aria-label","View code of currently selected filter and parameters"],["matTooltip","Remove light from context filter","aria-label","icon button to remove QR Code from context filter",1,"control-context-qrcode-button",3,"click"],["color","primary"],[3,"value","matTooltip"],[1,"control-event-log-list"],["class","control-event-log-list-item",3,"control-event-log-list-item-alternate",4,"ngFor","ngForOf","ngForTrackBy"],["mat-button","","color","primary",3,"disabled","click"],[1,"control-event-log-list-item"],["matListIcon","",1,"control-event-log-call-icon"],["matLine","",1,"control-event-log-heading"],[1,"control-event-log-code"],["matTooltip","View CallEvent data","aria-label","icon button for viewing CallEvent data in bottom sheet",1,"control-code-icon",3,"click"],["matLine","","class","control-event-log-return-list-item",4,"ngFor","ngForOf"],["matLine","",1,"control-event-log-return-list-item"],["matListIcon","",3,"color"],[1,"control-event-log-heading"],["class","control-event-log-code control-event-log-warn",4,"ngIf"],["class","control-event-log-code",4,"ngIf"],[1,"control-event-log-code","control-event-log-warn"],["mat-button","","color","primary","matTooltip","Open new light in popup","aria-label","Button that opens a new light in a popup window",3,"click"],["mat-button","","color","primary","matTooltip","Open new light in new tab","aria-label","Button that opens a new light in a new tab","routerLink","/light","target","_blank"],["mat-button","","color","primary","matTooltip","Open new light control in new tab","aria-label","Button that opens a new light control in a new tab","routerLink","/control","target","_blank"],[1,"app-card-footer-link-group"],["mat-button","","href","https://github.com/coatyio/coaty-examples/tree/master/remote-operations/js","target","_blank",3,"matTooltip"],["src","./assets/images/github-icon.svg","alt","github-logo"],["mat-button","","href","https://coaty.io","target","_blank"],["src","./assets/images/coaty-logo-accent.svg","alt","coaty-logo"]],template:function(t,e){if(1&t&&(p.Qb(0,"mat-card",0,1),p.Qb(2,"mat-card-header"),p.Mb(3,"a",2),p.Qb(4,"mat-card-title",3),p.wc(5," Light Control "),p.Pb(),p.Qb(6,"mat-card-subtitle",3),p.wc(7),p.Pb(),p.uc(8,U,2,2,"mat-icon",4),p.cc(9,"async"),p.Pb(),p.Qb(10,"h1",5),p.wc(11),p.cc(12,"date"),p.cc(13,"async"),p.Pb(),p.Mb(14,"img",6),p.uc(15,V,2,0,"ng-template",null,7,p.vc),p.uc(17,rt,84,53,"mat-card-content",8),p.Mb(18,"mat-divider"),p.uc(19,at,7,0,"mat-card-actions",9),p.Mb(20,"mat-divider"),p.Qb(21,"mat-card-footer"),p.uc(22,ct,3,4,"div",8),p.cc(23,"async"),p.uc(24,lt,2,0,"ng-template",null,10,p.vc),p.uc(26,st,5,1,"div",11),p.Pb(),p.Pb()),2&t){var o=p.kc(16),n=p.kc(25);p.zb(7),p.yc(" #",null==e.controlContainer?null:e.controlContainer.identity.objectId," "),p.zb(1),p.hc("ngIf",p.dc(9,9,e.brokerConnectionInfo$)),p.zb(3),p.xc(p.ec(12,11,p.dc(13,14,e.currentClock$),"HH:mm:ss")),p.zb(6),p.hc("ngIf",e.controlContainer)("ngIfElse",o),p.zb(2),p.hc("ngIf",e.controlContainer),p.zb(3),p.hc("ngIf",p.dc(23,16,e.eventLog$))("ngIfElse",n),p.zb(4),p.hc("ngIf",null==e.controlContainer?null:e.controlContainer.runtime.commonOptions.agentInfo)}},directives:[S.a,S.f,S.c,S.j,S.i,E.m,S.g,z.a,S.e,Q.a,x.a,S.d,M.b,M.e,A.a,R.g,R.i,F,E.l,D.a,B.a,W.a,$.b,$.a,k.b,q.a,j.j,H.b,H.e,H.f,H.d,N.a,H.c,N.c,N.b,j.h,S.b,k.a,m.b],pipes:[E.b,E.e,E.g],styles:[".control-card-header-avatar{background-image:url(light-switch-avatar.jpg);background-size:cover}.control-card-title-icon{margin-left:auto;margin-right:32px}.control-light-agents-info-overlay{margin-top:-100px!important}.control-control-agents-info-overlay,.control-light-agents-info-overlay{color:#ff8c00;background-color:rgba(0,0,0,.5);position:absolute;left:16px;padding:4px}.control-control-agents-info-overlay{margin-top:-62px!important}.control-time-overlay{color:#fff;background-color:rgba(0,0,0,.5);position:absolute;margin-top:0!important;left:16px;padding:4px}.control-form-field{margin-right:16px}.control-context-qrcode-field{display:inline-block;position:relative}.control-context-qrcode-label{margin-right:12px;color:rgba(0,0,0,.54);font-size:14px;font-weight:400;display:inline-block;transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px)}.control-context-qrcode{display:inline-block;vertical-align:middle}.control-context-qrcode-button{cursor:pointer;position:absolute!important;left:10px;bottom:-4px}.control-operation-params{display:flex;align-items:center;flex-wrap:wrap}.control-operation-param{display:flex;align-items:center;flex:1 0 auto;margin-right:48px;margin-top:16px}.control-operation-param.control-operation-param-no-grow{flex:0 0 auto}.control-operation-param-label{align-self:center;display:flex;align-items:center}.control-operation-param-label>:first-child{margin-right:6px}.control-color-slider{background-origin:content-box;background-clip:content-box;background-position-y:center;background-size:100% 40%;background-repeat:no-repeat;background-image:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.control-color-slider .mat-slider-thumb-label{background-color:transparent;transition:none!important}.control-color-slider .mat-slider-track-wrapper{display:none}.control-operation-param-color .mat-button-toggle-group{overflow:visible!important;height:20px}.control-operation-param-color .mat-button-toggle{overflow:hidden!important;width:20px;height:20px;border:2px solid rgba(0,0,0,.12)}.control-operation-param-time-switch-group{margin-left:8px}.control-operation-request{display:flex;flex-wrap:wrap;align-items:center;margin-top:24px;margin-bottom:32px}.control-operation-request>*{margin-right:16px!important}.control-event-log-list{padding-top:0!important;overflow-y:auto;max-height:250px}.control-event-log-list-item{height:auto!important}.control-event-log-list-item-alternate{background-color:#eceff1}.control-event-log-call-icon{align-self:flex-start}.control-event-log-warn{color:#f44336}.control-event-log-heading{font-size:16px!important;font-weight:400;margin:0!important}.control-event-log-heading.mat-line{margin-top:2px!important;margin-bottom:2px!important}.control-event-log-code{margin-left:16px;font-size:12px;vertical-align:middle}.control-event-log-return-list-item{height:32px!important}.control-event-log-return-list-item .mat-list-item-content{padding:2px 0!important}.control-code-icon{cursor:pointer}.control-code-icon mat-icon{vertical-align:bottom}"],encapsulation:2,changeDetection:0}),ut)}],mt=((gt=function t(){i(this,t)}).\u0275mod=p.Jb({type:gt}),gt.\u0275inj=p.Ib({factory:function(t){return new(t||gt)},imports:[[m.c.forChild(ht)],m.c]}),gt),pt=((bt=function t(){i(this,t)}).\u0275mod=p.Jb({type:bt}),bt.\u0275inj=p.Ib({factory:function(t){return new(t||bt)},imports:[[h.a,mt]]}),bt)}}])}();