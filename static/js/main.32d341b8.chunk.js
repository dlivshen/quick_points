(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(33),i=t.n(l),u=t(126),c=t(125),o=(t(64),t(53)),s=t.n(o),f=t(9),d=t(119),m=t(120),p=t(127),v=function(e){var a=e.fieldText,t=e.fieldId,n=e.fieldValue,l=e.fieldOnChange;return r.a.createElement(d.a,{componentClass:m.a,xs:6},r.a.createElement(m.a,null,a," (gr)"),r.a.createElement(p.a,{type:"number",name:t,value:n,placeholder:"Enter value",onChange:l,bsSize:"large"}))},b=t(121),E=t(122),h=function(e){var a=e.fields,t=e.onChange;return r.a.createElement(b.a,{className:"main-grid"},r.a.createElement(E.a,{className:"show-grid"},r.a.createElement(v,{fieldText:a.fat.text,fieldId:a.fat.id,fieldValue:a.fat.value,fieldOnChange:function(e){t(a.fat.id,e.target.value)}}),r.a.createElement(v,{fieldText:a.carb.text,fieldId:a.carb.id,fieldValue:a.carb.value,fieldOnChange:function(e){t(a.carb.id,e.target.value)}})),r.a.createElement(E.a,{className:"show-grid"},r.a.createElement(v,{fieldText:a.prot.text,fieldId:a.prot.id,fieldValue:a.prot.value,fieldOnChange:function(e){t(a.prot.id,e.target.value)}}),r.a.createElement(v,{fieldText:a.fiber.text,fieldId:a.fiber.id,fieldValue:a.fiber.value,fieldOnChange:function(e){t(a.fiber.id,e.target.value)}})))},g=Object(f.b)(function(e){return{fields:e.fields}},function(e){return{onChange:function(a,t){return e(function(e,a){return{type:"VALUE_CHANGE",id:e,value:a}}(a,t))}}})(h),V=t(123);var x=function(e){var a=e.resultValue;if(isNaN(parseFloat(a)))return null;var t=a,n=1===t?"point":"points",l="success";return t>5&&(l="warning"),t>10&&(l="danger"),r.a.createElement(d.a,{xsOffset:4,className:"popper"},r.a.createElement("h1",null,r.a.createElement(V.a,{bsStyle:l},t," ",n)))},N=function(e,a,t,n){var r=.2571429*parseFloat(e)+.1085714*parseFloat(a)+.0914286*parseFloat(t)-.08*parseFloat(n);return r=Math.max(r,0),r=Math.min(r,100),Math.round(r)},w=Object(f.b)(function(e){return{resultValue:(a=e.fields,N(a.fat.value,a.carb.value,a.prot.value,a.fiber.value))};var a})(x),O=t(124),y=Object(f.b)(function(e){return{fatValue:e.fields.fat.value,carbValue:e.fields.carb.value,protValue:e.fields.prot.value,fiberValue:e.fields.fiber.value}},function(e){return{onSubmission:function(a,t,n,r,l){return e(function(e,a,t,n,r){return{type:"ADD_SAVED_ITEM",id:e,fatValue:a,carbValue:t,protValue:n,fiberValue:r}}(a,t,n,r,l))}}})(function(e){var a,t=e.onSubmission,n=e.fatValue,l=e.carbValue,i=e.protValue,u=e.fiberValue;return isNaN(n)||isNaN(l)||isNaN(i)||isNaN(u)||""===n||""===l||""===i||""===u?null:r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.value.trim()&&(t(a.value,n,l,i,u),a.value="")}},r.a.createElement(b.a,null,r.a.createElement(E.a,{className:"show-grid space-up popper"},r.a.createElement(d.a,{xs:9},r.a.createElement(p.a,{type:"text",name:"new_item",inputRef:function(e){a=e},placeholder:"Enter name to save"})),r.a.createElement(d.a,{xs:2},r.a.createElement(O.a,{type:"submit",bsStyle:"success"},"+")))))}),C=t(128),I=t(101),A=function(e){var a=e.itemName,t=e.points;return r.a.createElement(I.a,{header:a},t," points")},S=Object(f.b)(function(e){return{savedItems:e.savedItems}})(function(e){var a=e.savedItems;return void 0===a||0===a.length?null:r.a.createElement(b.a,{className:"space-up"},r.a.createElement("h4",null,"Saved items:"),r.a.createElement(C.a,null,a.map(function(e){return r.a.createElement(A,{key:e.id,itemName:e.text,points:e.points})})))}),T=function(){return r.a.createElement(u.a,{bsStyle:"info",className:"app-global"},r.a.createElement(u.a.Heading,{className:"main-header"},r.a.createElement(u.a.Title,{componentClass:"h1"},r.a.createElement(c.a,{src:s.a,responsive:!0,className:"main-logo"}))),r.a.createElement(g,null),r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(17),D={fat:{id:"fat",text:"FAT",value:""},carb:{id:"carb",text:"CARB",value:""},prot:{id:"prot",text:"PROT",value:""},fiber:{id:"fiber",text:"FIBER",value:""}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"VALUE_CHANGE":for(var t={},n=["fat","carb","prot","fiber"],r=0;r<n.length;r++){var l=n[r];t[l]=e[l],a.id===l&&(t[l].value=a.value)}return t;default:return e}},_=t(58),k=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_SAVED_ITEM":return[].concat(Object(_.a)(e),[{id:a.id,text:a.id,fatValue:a.fatValue,carbValue:a.carbValue,protValue:a.protValue,fiberValue:a.fiberValue,points:N(a.fatValue,a.carbValue,a.protValue,a.fiberValue)}]);default:return e}},B=Object(j.b)({fields:F,savedItems:M}),R=Object(j.c)(B);i.a.render(r.a.createElement(f.a,{store:R},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,a,t){e.exports=t.p+"static/media/logo.1962f440.png"},59:function(e,a,t){e.exports=t(118)},64:function(e,a,t){}},[[59,2,1]]]);
//# sourceMappingURL=main.32d341b8.chunk.js.map