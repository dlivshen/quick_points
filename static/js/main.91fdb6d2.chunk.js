(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),i=t.n(l),u=t(128),c=t(127),o=(t(67),t(56)),f=t.n(o),s=t(9),d=t(18),m=t(121),E=t(122),v=t(129),p=function(e){var a=e.fieldText,t=e.fieldId,n=e.fieldValue,l=e.fieldOnChange;return r.a.createElement(m.a,{componentClass:E.a,xs:6},r.a.createElement(E.a,null,a," (gr)"),r.a.createElement(v.a,{type:"number",name:t,value:n,placeholder:"Enter value",onChange:l,bsSize:"large"}))},b=t(123),V=t(124),h=function(e){var a=e.fields,t=e.onChange;return r.a.createElement(b.a,{className:"main-grid"},r.a.createElement(V.a,{className:"show-grid"},r.a.createElement(p,{fieldText:a.fat.text,fieldId:a.fat.id,fieldValue:a.fat.value,fieldOnChange:function(e){t(a.fat.id,e.target.value)}}),r.a.createElement(p,{fieldText:a.carb.text,fieldId:a.carb.id,fieldValue:a.carb.value,fieldOnChange:function(e){t(a.carb.id,e.target.value)}})),r.a.createElement(V.a,{className:"show-grid"},r.a.createElement(p,{fieldText:a.prot.text,fieldId:a.prot.id,fieldValue:a.prot.value,fieldOnChange:function(e){t(a.prot.id,e.target.value)}}),r.a.createElement(p,{fieldText:a.fiber.text,fieldId:a.fiber.id,fieldValue:a.fiber.value,fieldOnChange:function(e){t(a.fiber.id,e.target.value)}})))},g=function(e){return{type:"SET_SELECTED_ITEM",name:e}},S=Object(s.b)(function(e){return{fields:e.fields}},function(e){return{onChange:function(a,t){return e(Object(d.chain)(function(e,a){return{type:"VALUE_CHANGE",id:e,value:a}}(a,t),g(null)))}}})(h),x=t(125);var N=function(e){var a=e.resultValue;if(isNaN(parseFloat(a)))return null;var t=a,n=1===t?"point":"points",l="success";return t>5&&(l="warning"),t>10&&(l="danger"),r.a.createElement(m.a,{xsOffset:4,className:"popper"},r.a.createElement("h1",null,r.a.createElement(x.a,{bsStyle:l},t," ",n)))},O=function(e,a,t,n){var r=.2571429*parseFloat(e)+.1085714*parseFloat(a)+.0914286*parseFloat(t)-.08*parseFloat(n);return r=Math.max(r,0),r=Math.min(r,100),Math.round(r)},w=Object(s.b)(function(e){return{resultValue:(a=e.fields,O(a.fat.value,a.carb.value,a.prot.value,a.fiber.value))};var a})(N),T=t(126),y=Object(s.b)(function(e){return{fatValue:e.fields.fat.value,carbValue:e.fields.carb.value,protValue:e.fields.prot.value,fiberValue:e.fields.fiber.value}},function(e){return{onSubmission:function(a,t,n,r,l){return e(function(e,a,t,n,r){return{type:"ADD_SAVED_ITEM",id:e,fatValue:a,carbValue:t,protValue:n,fiberValue:r}}(a,t,n,r,l))}}})(function(e){var a,t=e.onSubmission,n=e.fatValue,l=e.carbValue,i=e.protValue,u=e.fiberValue;return isNaN(n)||isNaN(l)||isNaN(i)||isNaN(u)||""===n||""===l||""===i||""===u?null:r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.value.trim()&&(t(a.value,n,l,i,u),a.value="")}},r.a.createElement(b.a,null,r.a.createElement(V.a,{className:"show-grid space-up popper"},r.a.createElement(m.a,{xs:9},r.a.createElement(v.a,{type:"text",name:"new_item",inputRef:function(e){a=e},placeholder:"Enter name to save"})),r.a.createElement(m.a,{xs:2},r.a.createElement(T.a,{type:"submit",bsStyle:"success"},"+")))))}),C=t(130),I=t(38),_=function(e){var a=e.onSelect,t=e.onRemove,n=e.item;e.points;return r.a.createElement(I.a,{header:n.text,onClick:function(){return a(n)},active:n.isSelected},r.a.createElement(b.a,null,r.a.createElement(m.a,{xs:9},n.points," points"),r.a.createElement(m.a,{xs:3,xsPull:0},r.a.createElement(T.a,{onClick:function(e){return t(n.text)},bsStyle:"danger"},"-"))))},A=Object(s.b)(function(e){return{savedItems:e.savedItems}},function(e){return{onRemove:function(a){return e({type:"REMOVE_SAVE_ITEM",name:a})},onSelect:function(a){return e(Object(d.chain)((t=a.fatValue,n=a.carbValue,r=a.protValue,l=a.fiberValue,{type:"SET_VALUES",fat:t,carb:n,prot:r,fiber:l}),g(a.id)));var t,n,r,l}}})(function(e){var a=e.onSelect,t=e.onRemove,n=e.savedItems;return void 0===n||0===n.length?null:r.a.createElement(b.a,{className:"space-up"},r.a.createElement("h4",null,"Saved items:"),r.a.createElement(C.a,null,n.map(function(e){return r.a.createElement(_,{key:e.id,item:e,onRemove:function(e){return t(e)},onSelect:function(e){return a(e)}})})))}),j=function(){return r.a.createElement(u.a,{bsStyle:"info",className:"app-global"},r.a.createElement(u.a.Heading,{className:"main-header"},r.a.createElement(u.a.Title,{componentClass:"h1"},r.a.createElement(c.a,{src:f.a,responsive:!0,className:"main-logo"}))),r.a.createElement(S,null),r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(16),R={fat:{id:"fat",text:"FAT",value:""},carb:{id:"carb",text:"CARB",value:""},prot:{id:"prot",text:"PROT",value:""},fiber:{id:"fiber",text:"FIBER",value:""}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0,t={};switch(a.type){case"VALUE_CHANGE":console.log("fuckme");for(var n=["fat","carb","prot","fiber"],r=0;r<n.length;r++){var l=n[r];t[l]=e[l],a.id===l&&(t[l].value=a.value)}return t;case"SET_VALUES":for(var i=["fat","carb","prot","fiber"],u=0;u<i.length;u++){var c=i[u];t[c]=e[c],t[c].value=a[c]}return t;default:return e}},k=t(41),F=t(61),L=[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_SAVED_ITEM":return[].concat(Object(F.a)(e),[{id:a.id,text:a.id,fatValue:a.fatValue,carbValue:a.carbValue,protValue:a.protValue,fiberValue:a.fiberValue,points:O(a.fatValue,a.carbValue,a.protValue,a.fiberValue),isSelected:!0}]);case"REMOVE_SAVE_ITEM":return e.filter(function(e){return e.id!==a.name});case"SET_SELECTED_ITEM":return console.log("curr selected is: "+a.name),e.map(function(e){return e.id===a.name?Object(k.a)({},e,{isSelected:!0}):Object(k.a)({},e,{isSelected:!1})});default:return e}},U=Object(M.c)({fields:D,savedItems:B}),H=Object(M.d)(U,Object(M.a)(d.chainMiddleware));i.a.render(r.a.createElement(s.a,{store:H},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,a,t){e.exports=t.p+"static/media/logo.1962f440.png"},62:function(e,a,t){e.exports=t(120)},67:function(e,a,t){}},[[62,2,1]]]);
//# sourceMappingURL=main.91fdb6d2.chunk.js.map