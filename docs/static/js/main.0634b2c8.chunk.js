(this["webpackJsonptrenx-new"]=this["webpackJsonptrenx-new"]||[]).push([[0],{167:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c(39),a=c.n(s),i=c(18),r=c(12),l=c(48),j=c(16),o=(c(79),c(0)),d=c.n(o),b=c(1),h=c(17),O=c(67),u=(c(81),Object(O.a)({apiKey:"AIzaSyAVsaYgj0I6SVjVqUdMOrc7ikLeFYFLO8M",authDomain:"trenx-c0556.firebaseapp.com",projectId:"trenx-c0556",storageBucket:"trenx-c0556.appspot.com",messagingSenderId:"791245308073",appId:"1:791245308073:web:a1f0905ba462eb963b69b8",measurementId:"G-0YC8LYJC6R"}),new h.a),x="[Auth] login",m="[Auth] Logout",p="[UI] Set Error",g="[UI] Remove Error",v="[UI] Start loading",f="[UI] Finish loading",N=function(){return{type:v}},y=function(){return function(e){var t=Object(h.c)();Object(h.f)(t,u).then((function(t){h.a.credentialFromResult(t).accessToken;var c=t.user;e(C(c.uid,c.displayName)),e(N())})).catch((function(e){e.code,e.message,e.email,h.a.credentialFromError(e)}))}},C=function(e,t){return{type:x,payload:{uid:e,displayName:t}}},E=function(){return{type:m}},w=c(3),S=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).uid;console.log(t);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("nav",{className:"nav-bar",children:[Object(w.jsx)("div",{className:"logo",children:Object(w.jsx)("img",{className:"img",src:"./img/logo.png",alt:"img"})}),Object(w.jsxs)("ul",{className:"ul-1",children:[Object(w.jsxs)("li",{children:[" ",Object(w.jsx)("a",{href:"/service",children:" SERVICE  "})," "]}),Object(w.jsxs)("li",{children:[" ",Object(w.jsx)("a",{href:"/auth/products",children:" PRODUCTS "})," "]}),Object(w.jsxs)("li",{children:[" ",Object(w.jsx)("a",{href:"/contact",children:" CONTACT "})," "]}),Object(w.jsxs)("li",{children:[" ",Object(w.jsx)("a",{href:"/auth/career",children:" CAREER "})," "]}),t&&Object(w.jsxs)("li",{children:[" ",Object(w.jsx)("a",{onClick:function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=Object(h.c)(),Object(h.g)(c).then((function(){t(E())})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},href:"/auth/otros",children:"LOGOUT "})," "]})]}),Object(w.jsxs)("div",{className:"dropdown ul",children:[!t&&Object(w.jsx)("button",{className:"dropdown-btn",children:Object(w.jsx)("p",{id:"p-3",children:"ACCOUNT"})}),Object(w.jsxs)("div",{className:"dropdown-content",children:[Object(w.jsx)("a",{href:"/auth/login",children:"SING IN"}),Object(w.jsx)("a",{href:"/auth/register",children:"CREATE ACCOUNT"})]})]})]})})},R=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{id:"lol",className:"container-1 primero",children:Object(w.jsx)(S,{})}),Object(w.jsxs)("div",{className:"container-2",children:[Object(w.jsx)("div",{className:"parrafo",children:" Request A Service"}),Object(w.jsxs)("div",{className:"flecha",children:[Object(w.jsx)("div",{className:"flecha1",children:Object(w.jsxs)("div",{className:"flecha1-logo",children:[" ",Object(w.jsx)("h1",{children:"10 OFF"})]})}),Object(w.jsxs)("p",{className:"flecha2",children:["Sign up for free and receive a ",Object(w.jsx)("span",{children:"10%"})," discount on all of our services, including routine maintenance and any necessary installation"]}),Object(w.jsx)("div",{className:"flecha3",children:Object(w.jsx)("button",{className:"flecha3-btn",children:Object(w.jsx)("a",{href:"/auth/register",children:"REGISTER"})})})]}),Object(w.jsx)("div",{className:"caja-1",children:Object(w.jsx)("div",{className:"caja pra div"})}),Object(w.jsx)("footer",{className:"footer",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/auth/login",children:"CONTACT"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/auth/login",children:"TWITTER"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/auth/login",children:"YOUTUBE"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/auth/login",children:"LINKEDIN"})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{href:"/auth/login",children:"CAREERS"})})]})})]})]})},I=c(5),A=c(21),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(r.a)(t,2),s=c[0],a=c[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;a(t)},l=function(e){var t=e.target;a(Object(A.a)(Object(A.a)({},s),{},Object(I.a)({},t.name,t.value)))};return[s,l,i]},T=(c(84),function(){var e=Object(i.b)(),t=k({name:"",email:"",phone:"",message:"",street:"",city:"",region:"",postal:""}),c=Object(r.a)(t,2),n=c[0],s=c[1],a=n.name,l=n.email,j=n.phone,o=n.message,h=n.street,O=n.city,u=n.region,x=n.postal;return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"container-request",children:[Object(w.jsx)("div",{className:"mitad1",children:Object(w.jsx)("div",{className:"container-img",children:Object(w.jsx)("img",{className:"img2",src:"../img/logo.png",alt:"img"})})}),Object(w.jsxs)("div",{className:"mitad2",children:[Object(w.jsxs)("div",{className:"requestBox",children:[Object(w.jsx)("h3",{children:" Request A Service "}),Object(w.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(){var e=Object(b.a)(d.a.mark((function e(t,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c().auth.uid;case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),console.log(a,l,j,o,h,O,u,x)},children:[Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Name"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Name",name:"name",autoComplete:"off",value:a,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Email",name:"email",autoComplete:"off",value:l,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Phone"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Phone",name:"phone",autoComplete:"off",value:j,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Message"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Message",name:"message",autoComplete:"off",value:o,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Street Address"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Street Address",name:"street",autoComplete:"off",value:h,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"City"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"City",name:"city",autoComplete:"off",value:O,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Region/State/Province"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Region/State/Province",name:"region",autoComplete:"off",value:u,onChange:s})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Postal/Zip Code"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Postal/Zip Code",name:"postal",autoComplete:"off",value:x,onChange:s})})]}),Object(w.jsx)("button",{type:"submit",className:"btn-request btn-sumit",children:"Sumit"})]})]}),Object(w.jsx)("button",{className:"btn-request btn-home1",children:Object(w.jsx)("a",{href:"/",children:"HOME"})})]})]})})}),F=(c(85),function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{}),Object(w.jsxs)("div",{className:"containerService",children:[Object(w.jsxs)("div",{className:"primeraCaja",children:[Object(w.jsx)("h3",{children:"Heating"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Installation"}),Object(w.jsx)("li",{children:"Repair"}),Object(w.jsx)("li",{children:"Maintance"}),Object(w.jsx)("li",{children:"Furnaces"}),Object(w.jsx)("li",{children:"Heat Pump"}),Object(w.jsx)("li",{children:"Boilers"}),Object(w.jsx)("li",{children:"Ductless Systems"})]})]}),Object(w.jsxs)("div",{className:"segundaCaja",children:[Object(w.jsx)("h3",{children:"Air Conditioning"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Installation"}),Object(w.jsx)("li",{children:"Repair"}),Object(w.jsx)("li",{children:"Maintance"}),Object(w.jsx)("li",{children:"Heat Pump"}),Object(w.jsx)("li",{children:"Ductless Systems"})]})]}),Object(w.jsxs)("div",{className:"terceraCaja",children:[Object(w.jsx)("h3",{children:"Indoor Quality"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Air Cleaners"}),Object(w.jsx)("li",{children:"Air Filtration And Purifiers"}),Object(w.jsx)("li",{children:"Humidifiers And Dehumidifiers"}),Object(w.jsx)("li",{children:"Heat And Energy Recovery"}),Object(w.jsx)("li",{children:"Ventilators"}),Object(w.jsx)("li",{children:"Carbon And Smoke Detectors"})]})]}),Object(w.jsxs)("div",{className:"cuartaCaja",children:[Object(w.jsx)("h3",{children:"Water Heating"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Installation"}),Object(w.jsx)("li",{children:"Repair"})]})]}),Object(w.jsxs)("div",{className:"quintaCaja",children:[Object(w.jsx)("h3",{children:"Standy Generators"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Installation"}),Object(w.jsx)("li",{children:"Repair"}),Object(w.jsx)("li",{children:"Maintance"})]})]})]})]})}),_=(c(86),function(e){var t=e.history,c=Object(i.b)(),n=Object(i.c)((function(e){return e.auth})).uid,s=k({email:"",password:""}),a=Object(r.a)(s,2),l=a[0],j=a[1],o=l.email,d=l.password;return n&&t.push("/"),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"container-sing-in",children:[Object(w.jsx)("div",{className:"parte1",children:Object(w.jsx)("div",{className:"container-img",children:Object(w.jsx)("img",{className:"img2",src:"../img/logo.png",alt:"img"})})}),Object(w.jsxs)("div",{className:"parte2",children:[Object(w.jsx)("button",{className:"Btn-sing-in btn-home",children:Object(w.jsx)("a",{href:"/",children:"HOME"})}),Object(w.jsx)("div",{className:"caja-3",children:Object(w.jsxs)("p",{children:["Not a member? ",Object(w.jsx)("a",{href:"/auth/register",children:" Sign up now"})]})}),Object(w.jsxs)("div",{className:"caja-2",children:[Object(w.jsxs)("div",{className:"heading",children:[Object(w.jsx)("div",{onClick:function(){console.log("click"),c(y())},className:"Btn-sing-in",children:Object(w.jsxs)("div",{className:"google-btn",children:[Object(w.jsx)("div",{className:"google-icon-wrapper",children:Object(w.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(w.jsx)("p",{className:"btn-text",children:Object(w.jsx)("b",{children:"Sign in with google"})})]})}),Object(w.jsx)("button",{className:"Btn-sing-in"})]}),Object(w.jsx)("p",{className:"or",children:"OR"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(function(e,t){return function(c){var n=Object(h.c)();Object(h.e)(n,e,t).then((function(e){var t=e.user;c(C(t.uid,t.displayName)),c(N())})).catch((function(e){e.code,e.message}))}}(o,d)),console.log(o,d)},children:[Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Email",name:"email",autoComplete:"off",value:o,onChange:j})})]}),Object(w.jsxs)("div",{className:"box",children:[Object(w.jsx)("p",{children:"Password"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"password",placeholder:"Enter Your Password",name:"password",autoComplete:"off",value:d,onChange:j})})]}),Object(w.jsx)("button",{type:"submit",className:"Btn-sing-in btn-login",children:"Login"})]})]})]})]})})}),P=function(e){return{type:p,payload:e}},B=(c(87),c(68)),U=c.n(B),Y=function(e){var t=e.history,c=Object(i.c)((function(e){return e})),n=Object(i.b)(),s=k({name:"",email:"",password:""}),a=Object(r.a)(s,2),l=a[0],j=a[1],o=l.name,O=l.email,u=l.password,x=function(){return 0===o.trim().length?(n(P("name requerido")),!1):U.a.isEmail(O)?u.length<5?(n(P("Verifique password ")),!1):(n({type:g}),!0):(n(P("email requerido")),!1)};return c.auth.uid&&t.push("/"),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"container-sing-up",children:[Object(w.jsx)("div",{className:"parte1-1",children:Object(w.jsx)("div",{className:"container-img",children:Object(w.jsx)("img",{className:"img2",src:"../img/logo.png",alt:"img"})})}),Object(w.jsxs)("div",{className:"parte2-2",children:[Object(w.jsx)("button",{className:"Btn-sing-in btn-home-1",children:Object(w.jsx)("a",{href:"/",children:"HOME"})}),Object(w.jsx)("div",{className:"caja-3-3",children:Object(w.jsxs)("p",{children:["Already a member? ",Object(w.jsx)("a",{href:"/auth/login",children:"  Sign In "})]})}),Object(w.jsxs)("div",{className:"caja-2-2",children:[Object(w.jsxs)("div",{className:"heading-1",children:[Object(w.jsx)("div",{onClick:function(){n(y())},className:"Btn-sing-up",children:Object(w.jsxs)("div",{className:"google-btn-1",children:[Object(w.jsx)("div",{className:"google-icon-wrapper-1",children:Object(w.jsx)("img",{className:"google-icon-1",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(w.jsx)("p",{className:"btn-text-1",children:Object(w.jsx)("b",{children:"Sign in with google"})})]})}),Object(w.jsx)("button",{className:"Btn-sing-up"})]}),Object(w.jsx)("p",{className:"or",children:"OR"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x()&&n(function(e,t,c){return function(n){var s=Object(h.c)();Object(h.b)(s,e,t).then(function(){var e=Object(b.a)(d.a.mark((function e(t){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.user,a=Object(h.c)(),e.next=4,Object(h.h)(a.currentUser,{displayName:c});case 4:n(C(s.uid,s.displayName)),n(N());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.code,e.message}))}}(O,u,o))},children:[Object(w.jsxs)("div",{className:"box-1",children:[Object(w.jsx)("p",{children:"Name"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Name",name:"name",autoComplete:"off",value:o,onChange:j})})]}),Object(w.jsxs)("div",{className:"box-1",children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",placeholder:"Enter Your Email",name:"email",autoComplete:"off",value:O,onChange:j})})]}),Object(w.jsxs)("div",{className:"box-1",children:[Object(w.jsx)("p",{children:"Password"}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"password",placeholder:"Enter 6+ Characters",name:"password",autoComplete:"off",value:u,onChange:j})})]}),Object(w.jsx)("button",{type:"submit",className:"Btn-sing-up btn-login-1",children:"Register"})]})]})]})]})})},D=function(){return Object(w.jsx)("div",{className:"auth__main",children:Object(w.jsx)("div",{className:"auth__box-container",children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{exact:!0,path:"/auth/login",component:_}),Object(w.jsx)(j.b,{exact:!0,path:"/auth/register",component:Y}),Object(w.jsx)(j.a,{to:"/auth/login"})]})})})},q=function(e){var t=e.history,c=Object(i.b)();console.log(t);var s=Object(n.useState)(!1),a=Object(r.a)(s,2),o=(a[0],a[1]),d=Object(n.useState)(!0),b=Object(r.a)(d,2),O=b[0],u=b[1];return Object(n.useEffect)((function(){var e=Object(h.c)();Object(h.d)(e,(function(e){(null===e||void 0===e?void 0:e.uid)?(c(C(e.uid,e.displayName)),o(!0)):o(!1),u(!1)}))}),[]),O?Object(w.jsx)("h1",{children:"Loading"}):Object(w.jsx)(l.a,{children:Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{path:"/auth",component:D}),Object(w.jsx)(j.b,{exact:!0,path:"/",component:R}),Object(w.jsx)(j.b,{exact:!0,path:"/service",component:F}),Object(w.jsx)(j.b,{exact:!0,path:"/contact",component:T}),Object(w.jsx)(j.a,{to:"/"})]})})})},L=c(37),M=c(70),G={uid:"",name:""},H={data:[]},V={loading:!1,msgError:null},J=Object(L.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(A.a)(Object(A.a)({},e),{},{uid:t.payload.uid,name:t.payload.displayName});case m:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(A.a)(Object(A.a)({},e),{},{msgError:t.payload});case g:return Object(A.a)(Object(A.a)({},e),{},{msgError:null});case v:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case f:return Object(A.a)(Object(A.a)({},e),{},{loading:!1});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),K="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,W=Object(L.d)(J,K(Object(L.a)(M.a))),X=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(i.a,{store:W,children:Object(w.jsx)(q,{})})})};a.a.render(Object(w.jsx)(X,{}),document.getElementById("root"))},79:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){}},[[167,1,2]]]);
//# sourceMappingURL=main.0634b2c8.chunk.js.map