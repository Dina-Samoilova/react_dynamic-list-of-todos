(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),r=c(5),a=c(2),o=c(3),i=c.n(o),l=c(1),u=(c(13),c(14),c(4)),d=c.n(u),j=(c(15),c(0)),b=function(e){var t=e.random,c=e.seachingValue,n=e.selectValue,s=e.randomize;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"Search-panel__form",children:[Object(j.jsx)("input",{type:"text",name:"query",className:"Search-panel__form__search",placeholder:"Type search todo",onChange:function(e){return c(e)}}),Object(j.jsxs)("select",{className:"Search-panel__form__select",onChange:function(e){return n(e)},children:[Object(j.jsx)("option",{value:"",className:"Search-panel__form__select__option",children:"Choose filter"}),Object(j.jsx)("option",{value:"all",children:"All ToDos"}),Object(j.jsx)("option",{value:"completed",children:"Completed Todos"}),Object(j.jsx)("option",{value:"not-complete",children:"Active ToDos"})]}),Object(j.jsx)("button",{type:"button",title:"Random todos sort",className:d()("Search-panel__form__button",{"Search-panel__form__button--on":t}),onClick:s,children:t?"Randomize On":"Randomize Off"})]})]})},m=(c(17),function(e){var t=e.todos,c=e.selectedUserId,n=e.selectUserId;return Object(j.jsx)("div",{className:"TodoList",children:t.length>0?Object(j.jsx)("div",{className:"TodoList__list-container",children:Object(j.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(j.jsxs)("li",{className:d()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(j.jsx)("p",{children:e.title})]}),Object(j.jsxs)("button",{className:d()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===c}),type:"button",onClick:function(){return n(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})}):Object(j.jsx)("div",{className:"error-message",children:Object(j.jsx)("p",{children:"No todos was found"})})})}),h=(c(18),"https://mate.academy/students-api");var f=function(e){var t=e.userId,c=e.clear,n=Object(l.useState)(),s=Object(a.a)(n,2),o=s[0],u=s[1],d=function(){var e=Object(r.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n="/users/".concat(t),fetch("".concat(h).concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.statusText)))}));case 2:c=e.sent,u(c);case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){d()}),[t]),Object(j.jsx)("div",{className:"CurrentUser",children:o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(o.id)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:o.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(j.jsx)("div",{className:"CurrentUser__clear",children:Object(j.jsx)("button",{type:"button",className:"CurrentUser__clear-button",onClick:c,children:"Clear"})})]})})},p=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)([]),o=Object(a.a)(s,2),u=o[0],d=o[1],p=Object(l.useState)(""),O=Object(a.a)(p,2),_=O[0],x=O[1],v=Object(l.useState)(""),N=Object(a.a)(v,2),C=N[0],k=N[1],T=Object(l.useState)(!1),y=Object(a.a)(T,2),w=y[0],S=y[1],U=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c="/todos",fetch("".concat(h).concat(c)).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.statusText)))}));case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){U()}),[]);var g=Object(l.useMemo)((function(){var e=u.filter((function(e){return e.title.toLowerCase().includes(_)})),t=e;if(""!==C&&"all"!==C)switch(C){case"all":case"":t=u.filter((function(e){return e.title.toLowerCase().includes(_)}));break;case"completed":t=e.filter((function(e){return e.completed}));break;case"not-complete":t=e.filter((function(e){return!e.completed}))}return e=t}),[u,_,C]),L=Object(l.useMemo)((function(){return w?g.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})):g}),[w,g]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__sidebar",children:[Object(j.jsx)(b,{random:w,seachingValue:function(e){x(e.target.value.toLowerCase())},selectValue:function(e){k(e.target.value)},randomize:function(){S((function(e){return!e}))}}),Object(j.jsx)(m,{todos:L,selectedUserId:c,selectUserId:function(e){n(e)}})]}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:c?Object(j.jsx)(f,{userId:c,clear:function(){n(0)}}):"No user selected"})})]})};s.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.94b46f97.chunk.js.map