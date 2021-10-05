(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var o,a,r,c,i,b,s,d,l,u,p,x,j,g,h=t(1),m=t.n(h),O=t(8),f=t.n(O),w=(t(17),t(11)),v=t(4),C=t(2),y=t(3),k=y.a.h1(o||(o=Object(C.a)(["\n  font-size: 64px;\n  margin: 24px 24px;\n  color: rgb(93 203 152);\n"]))),S=y.a.h2(a||(a=Object(C.a)(["\n  color: rgb(75, 75, 75);\n  margin: 0;\n"]))),z=y.a.div(r||(r=Object(C.a)(["\n  display: flex;\n"]))),A=y.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgba(165, 230, 250, 0.3);\n  width: 65%;\n"]))),F=t(26),J=t(10),D=t.n(J),L=y.a.button(i||(i=Object(C.a)(["\n  height: 50px;\n  padding: 12px 24px;\n  font-size: 18px;\n  color: white;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152);\n  outline: none;\n  cursor: pointer;\n  border: none;\n"]))),N=t(0),E=function(n){var e=n.children,t=n.onClick;return Object(N.jsx)(L,{onClick:t,children:e})},I=y.a.form(b||(b=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  padding: 24px 32px;\n  background-color: rgba(67, 67, 67, 0.3);\n\n  & > button {\n    margin-top: 40px;\n  }\n"]))),Z=y.a.label(s||(s=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 24px;\n"]))),q=y.a.span(d||(d=Object(C.a)(["\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),B=y.a.input(l||(l=Object(C.a)(["\n  height: 40px;\n  padding: 8px 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n  outline: none;\n  border: none;\n"]))),M=function(n){var e=n.onSubmit,t=Object(h.useState)(""),o=Object(v.a)(t,2),a=o[0],r=o[1],c=Object(h.useState)(""),i=Object(v.a)(c,2),b=i[0],s=i[1],d=Object(h.useState)(""),l=Object(v.a)(d,2),u=l[0],p=l[1],x={name:a,number:b,id:u},j=function(n){var e=n.currentTarget,t=e.name,o=e.value;p(Object(F.a)()),"name"===t&&r(o),"number"===t&&s(o)},g=function(){r(""),s("")};return Object(N.jsxs)(I,{onSubmit:function(n){n.preventDefault(),e(x),g()},children:[Object(N.jsxs)(Z,{children:[Object(N.jsx)(q,{children:"Name"}),Object(N.jsx)(B,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:j})]}),Object(N.jsxs)(Z,{children:[Object(N.jsx)(q,{children:"Number"}),Object(N.jsx)(B,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:j})]}),Object(N.jsx)(E,{type:"submit",children:"Add Contact"})]})};I.propTypes={onSubmit:D.a.func};var T,H,K=y.a.ul(u||(u=Object(C.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 600px;\n"]))),P=y.a.li(p||(p=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152 / 20%);\n"]))),R=y.a.span(x||(x=Object(C.a)(["\n  width: 40%;\n  margin-right: 12px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),$=y.a.span(j||(j=Object(C.a)(["\n  margin-right: 12px;\n  font-weight: 500;\n  font-size: 20px;\n  color: rgb(75 75 75);\n"]))),G=y.a.p(g||(g=Object(C.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),Q=function(n){var e=n.contacts,t=n.handleDeleteContact;return e.length>0?Object(N.jsx)(K,{children:e.map((function(n){var e=n.name,o=n.number,a=n.id;return Object(N.jsxs)(P,{children:[Object(N.jsx)(R,{children:e}),Object(N.jsx)($,{children:o}),Object(N.jsx)(E,{type:"button",onClick:function(){return t(a)},children:"Delete"})]},a)}))}):Object(N.jsx)(G,{children:"Contact not found"})},U=y.a.h3(T||(T=Object(C.a)(["\n  color: rgb(93 203 152);\n  font-weight: 600;\n"]))),V=y.a.input(H||(H=Object(C.a)(["\n  width: 400px;\n  /* height: 40px; */\n  padding: 8px 24px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  /* background-color: rgba(228, 228, 228, 0.5); */\n  outline: none;\n  border: none;\n"]))),W=function(n){var e=n.value,t=n.changeFilter;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(U,{children:"Find contact by name"}),Object(N.jsx)(V,{type:"text",name:"filter",value:e,onChange:t})]})},X=function(){var n=Object(h.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==n?n:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(v.a)(n,2),t=e[0],o=e[1],a=Object(h.useState)(""),r=Object(v.a)(a,2),c=r[0],i=r[1];Object(h.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(t))}),[t]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(k,{children:"Phonebook"}),Object(N.jsxs)(z,{children:[Object(N.jsx)(M,{onSubmit:function(n){t.some((function(e){return e.name.toLowerCase().trim()===n.name.toLowerCase()}))?alert(" ".concat(n.name," is alredy in the contacts list")):o((function(e){return[].concat(Object(w.a)(e),[n])}))}}),Object(N.jsxs)(A,{children:[Object(N.jsx)(S,{children:"Contacts"}),Object(N.jsx)(W,{value:c,changeFilter:function(n){i(n.target.value.trim())}}),Object(N.jsx)(Q,{contacts:function(){var n=c.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(),handleDeleteContact:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})]})]})};f.a.render(Object(N.jsx)(m.a.StrictMode,{children:Object(N.jsx)(X,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.175d16a8.chunk.js.map