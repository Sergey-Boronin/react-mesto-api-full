(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),o=n.n(c),i=(n(30),n(24)),r=n(2),l=n(3),u=n(8),p=n(0);var d=function(e){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"header__wrapper",children:[Object(p.jsx)("div",{className:"header__logo"}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"header__container",children:[Object(p.jsx)("p",{className:"header__email",children:e.email}),Object(p.jsx)(u.b,{to:"sign-in",className:"header__link",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(u.b,{to:"sign-up",className:"header__link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(u.b,{to:"sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})})},j=s.a.createContext();var h=function(e){var t=s.a.useContext(j),n=e.card.owner===t._id,a="element__delete ".concat(n?"element__delete_visible":"element__delete_hidden"),c=e.card.likes.some((function(e){return e===t._id})),o="element__image-like ".concat(c&&"element__image-like_active");return Object(p.jsxs)("div",{className:"element",children:[Object(p.jsx)("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(p.jsxs)("div",{className:"element__item",children:[Object(p.jsx)("h2",{className:"element__title",children:e.card.name}),Object(p.jsxs)("div",{className:"element__wrapper",children:[Object(p.jsx)("button",{className:o,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(p.jsx)("p",{className:"element__image-like-number",children:e.card.likes.length})]})]})]})};var m=function(e){var t=s.a.useContext(j);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__items",children:[Object(p.jsxs)("div",{className:"profile__wrapper",children:[Object(p.jsx)("img",{className:"profile__image",src:t.avatar,alt:t.name}),Object(p.jsx)("button",{className:"profile__cursor",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__title",children:t.name}),Object(p.jsx)("p",{className:"profile__subtitle",children:t.about}),Object(p.jsx)("button",{className:"profile__button-edit",type:"button",onClick:e.onEditProfile})]})]}),Object(p.jsx)("button",{className:"profile__button-add",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(p.jsx)(h,{onCardClick:e.onCardClick,card:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var _=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){return Object(p.jsx)("section",{onClick:e.onOverlayClose,className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("h2",{className:"popup__".concat(e.title),children:e.title}),Object(p.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{className:"popup__save popup__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(p.jsx)("button",{onClick:e.onClose,className:"popup__close popup__close_".concat(e.name),type:"button"})]})]})})};var O=function(e){return Object(p.jsx)("section",{onClick:e.onOverlayClose,className:"popup popup_type_image ".concat(e.isOpen&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__wrapper",children:[Object(p.jsx)("button",{className:"popup__close popup__close_image",onClick:e.onClose,type:"button"}),Object(p.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(p.jsx)("h2",{className:"popup__subtitle",children:e.card.name})]})})},f=n(22),g=n(23),x=new(function(){function e(t){Object(f.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(g.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430:".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"getUserInfoMe",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._getResponseData)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData):fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"delCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"updateHeaders",value:function(){this._headers={"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}}]),e}())({url:"http://localhost:3005",headers:{"Content-type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}});var v=function(e){var t=s.a.useContext(j),n=s.a.useState(t.name),a=Object(r.a)(n,2),c=a[0],o=a[1],i=s.a.useState(t.about),l=Object(r.a)(i,2),u=l[0],d=l[1];return s.a.useEffect((function(){o(t.name),d(t.about)}),[t]),Object(p.jsx)(b,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onOverlayClose:e.onOverlayClose,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{value:c||"",type:"text",className:"popup__input popup__input_type_name",id:"user-name",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)}}),Object(p.jsx)("span",{id:"user-name-error",className:"error"}),Object(p.jsx)("input",{value:u||"",type:"text",className:"popup__input popup__input_type_job",id:"user-about",name:"about",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("span",{id:"about-error",className:"error"})]})})};var C=function(e){var t=s.a.useRef();return s.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(p.jsx)(b,{name:"profile",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onOverlayClose:e.onOverlayClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({link:t.current.value})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{className:"popup__input popup__input_type_link",type:"url",id:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,ref:t}),Object(p.jsx)("span",{id:"avatar-link-error",className:"error"})]})})};var N=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return s.a.useEffect((function(){c(""),u("")}),[e.isOpen]),Object(p.jsx)(b,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onOverlayClose:e.onOverlayClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:l})},children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{value:a,onChange:function(e){c(e.target.value)},className:"popup__input popup__input_type_title",id:"name-card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0}),Object(p.jsx)("span",{id:"name-card-error",className:"error"}),Object(p.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},className:"popup__input popup__input_type_link",type:"url",id:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),Object(p.jsx)("span",{id:"link-error",className:"error"})]})})},k=n(11),y=n(9);var S=function(e){var t=s.a.useState({password:"",email:""}),n=Object(r.a)(t,2),a=n[0],c=n[1];function o(e){var t=e.target,n=t.name,s=t.value;c(Object(y.a)(Object(y.a)({},a),{},Object(k.a)({},n,s)))}return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("p",{className:"login__enter",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=a.password,s=a.email;n&&s&&e.onLogin(n,s)},className:"login__form",children:[Object(p.jsx)("input",{className:"login__input login__input_type_username",placeholder:"Email",required:!0,id:"email",name:"email",type:"text",value:a.email,onChange:o}),Object(p.jsx)("input",{className:"login__input login__input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password",name:"password",type:"password",value:a.password,onChange:o}),Object(p.jsx)("button",{type:"submit",className:"login__link login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},w=n.p+"static/media/UnionNeOK.1b6082f8.svg",E=n.p+"static/media/UnionOk.df8eddf6.svg";var D=function(e){return Object(p.jsx)("section",{onClick:e.onOverlayClose,className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(p.jsxs)("div",{className:"popup__container-response",children:[Object(p.jsx)("img",{className:"popup__sign-image",src:"".concat(e.onResponse?w:E),alt:"".concat(e.onResponse?e.regSuccess:e.regUnsaccess)}),Object(p.jsx)("h2",{className:"popup__title popup__title_type_response",children:"".concat(e.onResponse?e.regSuccess:e.regUnsaccess)}),Object(p.jsx)("p",{children:e.onMessage}),Object(p.jsx)("button",{onClick:e.onClose,className:"popup__close",type:"button"})]})})};var L=function(e){var t=s.a.useState({password:"",email:""}),n=Object(r.a)(t,2),a=n[0],c=n[1];function o(e){var t=e.target,n=t.name,s=t.value;c(Object(y.a)(Object(y.a)({},a),{},Object(k.a)({},n,s)))}return Object(p.jsxs)("div",{className:"register",children:[Object(p.jsx)("p",{className:"register__enter",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=a.password,s=a.email;e.onRegister(n,s)},className:"register__form",children:[Object(p.jsx)("input",{className:"register__input register__input_type_username",placeholder:"Email",required:!0,id:"email",name:"email",type:"email",value:a.email||"",onChange:o}),Object(p.jsx)("input",{className:"register__input register__input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password",name:"password",type:"password",value:a.password||"",onChange:o}),Object(p.jsx)("button",{type:"submit",className:"register__link register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("div",{className:"register__signin",children:[Object(p.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(p.jsx)(u.b,{to:"sign-in",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},R=n(25),T=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(p.jsx)(l.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(y.a)({},n)):Object(p.jsx)(l.a,{to:"./sign-in"})}})},I="http://localhost:3005",U=function(e){return e.ok?e.json():Promise.reject(e.status)};var P=function(){var e=s.a.useState([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=s.a.useState({}),o=Object(r.a)(c,2),u=o[0],h=o[1],f=s.a.useState(!1),g=Object(r.a)(f,2),k=g[0],y=g[1],w=s.a.useState(!1),E=Object(r.a)(w,2),R=E[0],P=E[1],A=s.a.useState(!1),q=Object(r.a)(A,2),F=q[0],J=q[1],M=s.a.useState({}),B=Object(r.a)(M,2),H=B[0],z=B[1],G=s.a.useState(!1),K=Object(r.a)(G,2),Q=K[0],V=K[1],W=s.a.useState(!1),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=s.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=s.a.useState(""),se=Object(r.a)(ae,2),ce=se[0],oe=se[1],ie=s.a.useState(!1),re=Object(r.a)(ie,2),le=re[0],ue=re[1],pe=s.a.useState(""),de=Object(r.a)(pe,2),je=de[0],he=de[1],me=Object(l.g)();function _e(){ne(!0)}function be(){J(!1),y(!1),P(!1),V(!1),Z(!1)}function Oe(e){e.target===e.currentTarget&&be()}return s.a.useEffect((function(){if(te){var e=localStorage.getItem("token");x.getUserInfoMe(e).then((function(e){e&&h(e)})).catch((function(e){return console.log(e)})),x.getInitialCards(e).then((function(e){a(e)})).catch((function(e){return console.log(e)}))}}),[te]),s.a.useEffect((function(){function e(e){"Escape"===e.key&&(be(),console.log("esc"))}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),s.a.useEffect((function(){!function(){var e=localStorage.getItem("token");e&&function(e){return fetch("".concat(I,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))}(e).then((function(e){e&&(oe(e.email),_e(),me.push("/"))})).catch((function(e){401===e&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442"),401===e&&console.log("*\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d")}))}()}),[te,me]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(j.Provider,{value:u,children:[Object(p.jsx)(d,{email:ce,onSignOut:function(){localStorage.removeItem("token"),me.push("/sign-in"),ne(!1)}}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(T,{exact:!0,path:"/",onEditProfile:function(){y(!0)},onAddPlace:function(){P(!0)},onEditAvatar:function(){J(!0)},onCardClick:function(e){V(!0),z(e)},cards:n,onCardLike:function(e){var t=e.likes.some((function(e){return e===u._id}));x.changeLikeCardStatus(e._id,!t).then((function(t){a((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){x.delCard(e._id).then((function(){a((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},loggedIn:te,component:m}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(L,{onRegister:function(e,t){(function(e,t){return fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U)})(e,t).then((function(e){e&&(me.push("/sign-in"),Z(!0),ue(!0),he(""))})).catch((function(e){Z(!0),ue(!1),400===e&&he("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")}))}})}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(S,{onLogin:function(e,t){return function(e,t){return fetch("".concat(I,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(U).then((function(e){if(e.token)return localStorage.setItem("token",e.token),x.updateHeaders(),e}))}(e,t).then((function(e){e.token&&(_e(),me.push("/"))})).catch((function(e){400===e&&console.log("\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}})}),Object(p.jsx)(l.b,{children:te?Object(p.jsx)(l.a,{to:"/"}):Object(p.jsx)(l.a,{to:"/sign-in"})})]}),Object(p.jsx)(_,{}),Object(p.jsx)(v,{isOpen:k,onClose:be,onOverlayClose:Oe,onUpdateUser:function(e){x.changeUserInfo(e).then((function(e){h(e),be()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(C,{isOpen:F,onClose:be,onOverlayClose:Oe,onUpdateAvatar:function(e){x.editAvatar(e).then((function(e){h(e),be()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(N,{isOpen:R,onClose:be,onOverlayClose:Oe,onAddCard:function(e){x.postNewCard(e).then((function(e){a([e].concat(Object(i.a)(n))),be()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(O,{card:H,isOpen:Q,onClose:be,onOverlayClose:Oe}),Object(p.jsx)(D,{isOpen:Y,onClose:be,onOverlayClose:Oe,onSign:function(){Z(!0)},onResponse:le,regSuccess:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!",regUnsaccess:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...",onMessage:je}),Object(p.jsx)(b,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(P,{})})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.93c8b89a.chunk.js.map