(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),s=a.n(r),c=a(36),l=a.n(c),i=a(22),o=a.n(i),j=a(25),b=a(10),d=a(12),h=a(13),u=a(15),m=a(14),O=(a(39),a(29));a(92),a(53);O.a.initializeApp({apiKey:"AIzaSyCACrfkcrGLmrfN7S5RPEcEqMmQ8VdUNGg",authDomain:"exam-2ff49.firebaseapp.com",databaseURL:"https://exam-2ff49-default-rtdb.firebaseio.com",projectId:"exam-2ff49",storageBucket:"exam-2ff49.appspot.com",messagingSenderId:"258477795880",appId:"1:258477795880:web:99e6ab1f7826caeb65e31d"});var x=O.a.auth(),p=O.a.firestore(),f=new O.a.auth.GoogleAuthProvider;f.setCustomParameters({prompt:"select_account"});var g=function(){return x.signInWithPopup(f)},A=function(){var e=Object(j.a)(o.a.mark((function e(t,a){var n,r,s,c,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=t.uid,r=p.doc("users/".concat(n)),e.next=6,r.get();case 6:if(e.sent.exists){e.next=18;break}return s=t.displayName,c=t.email,l=new Date,i=["user"],e.prev=11,e.next=14,r.set(Object(b.a)({displayName:s,email:c,createdDate:l,Roles:i},a));case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:return e.abrupt("return",r);case 19:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,a){return e.apply(this,arguments)}}(),v=a(8),k=a(7),N=(a(55),a(56),a(32)),C=a.n(N),y="user_3GkPtYG6hwLsqt0msFqm1",S="template",T=a(93),E=a(97),B=a(94),w=a(95),I=a(33),D=(a(59),function(e){var t=e.children,a=Object(I.a)(e,["children"]);return Object(n.jsx)("button",Object(b.a)(Object(b.a)({className:"button"},a),{},{children:t}))}),F=(a(60),function(e){var t=e.DiverseHandler,a=e.label,r=Object(I.a)(e,["DiverseHandler","label"]);return Object(n.jsxs)("div",{className:"Row",children:[a&&Object(n.jsx)("label",{children:a}),Object(n.jsx)("input",Object(b.a)({className:"input",onChange:t},r))]})}),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).nameChange=function(e){n.setState({name:e.target.value})},n.emailChange=function(e){n.setState({email:e.target.value})},n.telephoneChange=function(e){n.setState({telephone:e.target.value})},n.messageChange=function(e){n.setState({feedback:e.target.value})},n.sendFeedback=function(e){e.preventDefault(),C.a.sendForm("gmail",S,e.target,y).then((function(e){alert({error:"E-post skickad!"})})).catch((function(e){alert({title:"E-post misslyckades att skickas"}),console.error("Email error",e)})),document.querySelector(".form").addEventListener("submit",n.sendFeedback)},n.state={name:"",email:"",telephone:"",feedback:"",error:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(T.a,{fluid:!0,className:"containerWrapper",children:[Object(n.jsx)(E.a,{children:Object(n.jsx)(B.a,{children:Object(n.jsxs)(w.a,{className:"homeRow",children:[Object(n.jsx)(E.a.Title,{children:" Din Elektriker p\xe5 M\xe4lar\xf6arna"}),Object(n.jsx)(E.a.Text,{children:"Vi utf\xf6r allt fr\xe5n badrumsrenoveringar till enklare hush\xe5lls installationer."}),Object(n.jsx)(E.a.Text,{children:"H\xf6r av dig till oss f\xf6r att f\xe5 en offert."}),Object(n.jsx)(v.b,{to:"/about",children:Object(n.jsx)(D,{type:"submit",className:"navlinks",children:"Om oss "})}),Object(n.jsx)(v.b,{to:"/contact",children:Object(n.jsx)(D,{className:"navlinks",children:" Kontakt "})})]})})}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(w.a,{className:"middleRow",children:[Object(n.jsx)(E.a.Title,{children:" B\xe4sta valet av elektriker i "}),Object(n.jsx)(E.a.Text,{children:"Eker\xf6, F\xe4rings\xf6, Adels\xf6, Stenhamra och Sk\xe5"}),Object(n.jsx)(E.a.Text,{children:"Etablerat sedan tidigt 2000 \xe4r vi ett f\xf6retag som h\xe5llt fast i starka principer som alltid ska gynna kunden."}),Object(n.jsx)(E.a.Text,{children:"Huvudkontoret ligger i Eker\xf6, d\xe5 vi vill vara det sj\xe4lvklara valet av elekektriker i alla n\xe4rliggande omr\xe5den."})]})}),Object(n.jsx)(B.a,{children:Object(n.jsxs)(w.a,{className:"contact",children:[Object(n.jsx)(E.a.Title,{children:"Vill du bli kontaktad?"}),Object(n.jsx)(E.a.Text,{children:"Fyll i din information s\xe5 h\xf6r vi av oss s\xe5 fort vi kan"}),Object(n.jsxs)("form",{className:"form",onSubmit:this.sendFeedback,children:[Object(n.jsx)(F,{placeholder:"Namn",type:"text",name:"name",onChange:this.nameChange}),Object(n.jsx)(F,{placeholder:"E-post",type:"text",name:"email",onChange:this.emailChange}),Object(n.jsx)(F,{placeholder:"Telefon",type:"text",name:"telephone",onChange:this.telephoneChange}),Object(n.jsx)(F,{placeholder:"Beskriv ditt \xe4rende",type:"text",name:"message",onChange:this.messageChange}),Object(n.jsx)(D,{type:"submit",className:"navlinks",children:" Skicka "})]})]})})]})}}]),a}(s.a.Component),K=(a(68),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(T.a,{fluid:!0,className:"aboutWrapper",children:Object(n.jsx)(E.a,{children:Object(n.jsxs)(B.a,{className:"colWrapper",children:[Object(n.jsx)(w.a,{xs:12,md:12,lg:12,className:"firstCol",children:Object(n.jsxs)("div",{className:"backDrop",children:[Object(n.jsx)(E.a.Title,{className:"aboutTitle",children:"V\xe4lkommen till din elektriker p\xe5 M\xe4lar\xf6arna "}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"Vi \xe4r ett litet f\xf6retag bedrivet i Eker\xf6 sedan 20 \xe5r tillbaka"}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"Alla v\xe5ra arbeten har stort fokus p\xe5 kvalite och omtanke. Vi utf\xf6r allt fr\xe5n v\xe4rmegolv till solpanels installation."}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"Vi har ocks\xe5 n\xe4ra kontakt med andra yrkesbrancher som \xe4r relevanta s\xe5 om det \xe4r ett jobb som kr\xe4ver exempelvis en VVS-mont\xf6r s\xe5 \xe4r det enkelt f\xf6r oss att kontakta dem s\xe5 att ni som kunder slipper bekymmra er \xf6ver det."})]})}),Object(n.jsx)(w.a,{xs:12,md:12,lg:12,className:"secondCol",children:Object(n.jsxs)("div",{className:"backDrop",children:[Object(n.jsx)(E.a.Title,{className:"aboutTitle",children:"Expertis omr\xe5den"}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"  Hush\xe5llsmaskins installtioner (diskmaskin, tv\xe4ttmaskin etc) \u2022"}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"  Golvv\xe4rme samt lampor/fl\xe4ktar \u2022"}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"  Allt inom el, telefoni och data \u2022"}),Object(n.jsx)(E.a.Text,{className:"aboutText",children:"  Mindre renoveringar \u2022"})]})})]})})})}}]),a}(r.Component)),H=(a(69),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).nameChange=function(e){n.setState({name:e.target.value})},n.emailChange=function(e){n.setState({email:e.target.value})},n.telephoneChange=function(e){n.setState({telephone:e.target.value})},n.messageChange=function(e){n.setState({feedback:e.target.value})},n.sendFeedback=function(e){e.preventDefault(),C.a.sendForm("gmail",S,e.target,y).then((function(e){alert({error:"E-post skickad!"})})).catch((function(e){alert({title:"E-post misslyckades att skickas"}),console.error("Email error",e)})),document.querySelector(".contactForm").addEventListener("submit",n.sendFeedback)},n.state={name:"",email:"",telephone:"",feedback:"",error:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"contact",children:Object(n.jsxs)("div",{className:"formWrapper",children:[Object(n.jsx)("h1",{children:" Kontakta oss"}),Object(n.jsxs)("form",{className:"contactForm",onSubmit:this.sendFeedback,children:[Object(n.jsx)(F,{placeholder:"Namn",type:"text",name:"name",onChange:this.nameChange}),Object(n.jsx)(F,{placeholder:"E-post",type:"text",name:"email",onChange:this.emailChange}),Object(n.jsx)(F,{placeholder:"Telefon",type:"text",name:"telephone",onChange:this.telephoneChange}),Object(n.jsx)(F,{placeholder:"Beskriv ditt \xe4rende",type:"text",name:"message",onChange:this.messageChange}),Object(n.jsx)(D,{type:"submit",children:" Skicka "})]})]})})}}]),a}(s.a.Component)),G=(a(70),a(27)),P=a(28),M=(a(71),{email:"",password:""}),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).submitHandler=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,s=a.password,e.prev=2,e.next=5,x.signInWithEmailAndPassword(r,s);case 5:n.setState(Object(b.a)({},M)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.state=Object(b.a)({},M),n.changeHandler=n.changeHandler.bind(Object(P.a)(n)),n}return Object(h.a)(a,[{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(G.a)({},a,n))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(n.jsx)(T.a,{children:Object(n.jsx)("div",{className:"signin",children:Object(n.jsxs)("div",{className:"formWrapper",children:[Object(n.jsx)("h1",{children:"Inloggning"}),Object(n.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(n.jsx)(F,{type:"email",name:"email",value:t,placeholder:"E-post",onChange:this.changeHandler}),Object(n.jsx)(F,{type:"password",name:"password",value:a,placeholder:"L\xf6senord",onChange:this.changeHandler}),Object(n.jsx)(D,{type:"submit",children:"Logga in"}),Object(n.jsx)("div",{className:"googleSignin",children:Object(n.jsx)("div",{children:Object(n.jsx)(D,{onClick:g,children:"Logga in med Google"})})})]})]})})})}}]),a}(r.Component),L=function(e){return Object(n.jsx)(z,{})},V=(a(72),a(73),{displayName:"",email:"",password:"",confirmPass:"",error:""}),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).submitHandler=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,r,s,c,l,i,j,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,s=a.email,c=a.password,l=a.confirmPass,c===l){e.next=6;break}return i=["Password has to match"],n.setState({error:i}),e.abrupt("return");case 6:return e.prev=6,e.next=9,x.createUserWithEmailAndPassword(s,c);case 9:return j=e.sent,d=j.user,e.next=13,A(d,{displayName:r});case 13:n.setState(Object(b.a)({},V)),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(6);case 18:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}(),n.state=Object(b.a)({},V),n.changeHandler=n.changeHandler.bind(Object(P.a)(n)),n}return Object(h.a)(a,[{key:"changeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(G.a)({},a,n))}},{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,r=e.password,s=e.confirmPass,c=e.error;return Object(n.jsxs)("div",{className:"signup",children:[c.length>0&&Object(n.jsx)("ul",{className:"errorMsg",children:c.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))}),Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("div",{className:"formWrapper",children:[Object(n.jsx)("h1",{children:"Registrera dig"}),Object(n.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(n.jsx)(F,{placeholder:"Name",type:"text",name:"displayName",value:t,onChange:this.changeHandler}),Object(n.jsx)(F,{placeholder:"E-post",type:"text",name:"email",value:a,onChange:this.changeHandler}),Object(n.jsx)(F,{placeholder:"L\xf6senord",type:"password",name:"password",value:r,onChange:this.changeHandler}),Object(n.jsx)(F,{placeholder:"Upprepa l\xf6senord",type:"password",name:"confirmPass",value:s,onChange:this.changeHandler}),Object(n.jsx)(D,{type:"submit",children:"Skicka"})]})]})})]})}}]),a}(r.Component),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(J,{})}}]),a}(r.Component),Q=(a(40),a(96)),q=a(45),U=function(e){var t=e.loggedIn;return Object(n.jsx)(q.elastic,{right:!0,children:Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/about",children:"Om oss"})}),Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/contact",children:"Kontakta oss"})})]}),Object(n.jsx)("ul",{children:!t&&Object(n.jsx)("li",{onClick:function(){return x.signOut()},children:Object(n.jsx)(v.b,{to:"/",children:"Logga ut"})})}),!t&&Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/register",children:"Registrera"})}),Object(n.jsx)("li",{children:Object(n.jsx)(v.b,{to:"/login",children:"Logga in"})})]})]})})})};U.defaultProps={loggedIn:null};var Y=U,Z=function(e){return Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)(v.b,{to:"/",children:Object(n.jsx)(Q.a,{src:"data:image/png;base64,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"})})}),Object(n.jsx)(Y,{})]})})},X=(a(90),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(T.a,{fluid:!0,className:"footerContainer",children:Object(n.jsxs)(B.a,{className:"footerRow",children:[Object(n.jsx)(w.a,{xs:8,lg:4,children:Object(n.jsxs)("div",{className:"footerinfo",children:[Object(n.jsx)("div",{className:"footerTitles",children:"Information"}),Object(n.jsxs)("div",{className:"fText",children:["M\xe4lar\xf6 el AB ",Object(n.jsx)("br",{}),"Exempelv\xe4gen 208, 179 81 Eker\xf6",Object(n.jsx)("br",{}),"Tel: 073-999-99 99 ",Object(n.jsx)("br",{}),"E-post:  info@m\xe4lar\xf6el"]})]})}),Object(n.jsx)(w.a,{xs:4,lg:4,children:Object(n.jsxs)("div",{className:"footerlinks",children:[Object(n.jsx)("div",{className:"footerTitles",children:"Navigation"}),Object(n.jsx)(v.b,{to:"/",className:"fText",children:"Startsida"}),Object(n.jsx)("br",{}),Object(n.jsx)(v.b,{to:"/about",className:"fText",children:"Om oss"}),Object(n.jsx)("br",{}),Object(n.jsx)(v.b,{to:"/login",className:"fText",children:"Logga in"}),Object(n.jsx)("br",{}),Object(n.jsx)(v.b,{to:"/contact",className:"fText",children:"Kontakt"})]})}),Object(n.jsx)(w.a,{xs:12,lg:4,children:Object(n.jsxs)("div",{className:"footerSocial",children:[Object(n.jsx)("div",{className:"footerTitles",children:"Sociala medier"}),Object(n.jsx)("a",{href:"https://instagram.com",children:Object(n.jsx)(Q.a,{src:"data:image/png;base64,UklGRuwCAABXRUJQVlA4TN8CAAAvP8APEIAkSW7Ypv//7QAQwHXlHCFX27ZFjR6kzJBO1nfj7j7sxGttXTuoOIat4AisThtah34FuJi4u3sy10Y+B24jKVJyzND4BQBgF7DFIM9l2BKgokixSGJapACg+EuC+kMByuXgRbCTsOwCafhtpbHJSMMg/5BexLg5DNJ0atOkXrUKJQoVKlGhWr0mbTppBjm4xby8wJppuTgo17S18yM4WXGUldPLCZe68EBdLi+XaQAAVVx8wtJ0qzbtOHDi3LVr504c2LFplS4tzMelqh4OFzkAQJM4OSiuCQA411hhAWD0GIkMowBYrW4xDkDT5ehO0g4hDE0ATCzxnw3A5V6/5YPZL0LEAbB52SEKQBU54CcAZruEqAIgtoMbANcnzqWknDd8AgBJQrgA8OyfzffxQ5iRBwDyzIj+YQGAfPeE8O6fbBCA8ISsfgzqpxPi3oJPNL8JIUIADO2gAZAesETBKEWQdKUA6NqhEwB9OLIAAHzRpcsXAADLcJAFQN2hDYDV/uEoAJiNyxBCiIxxZgAU2R7dALTv0ATAZkM/ADmCw48gB4CBhg0AmneoB2BnCkFmQTIoyAxAtGIbgIYdqgE4qJgBYJyMGgNgtmIfgJodKgA4qcgDIDMjA0BexTEAlTuUAKhB7hyAL+RDnwG4KDgDoHSHQgCup9DaB6UrAArz5K/kH5J/oedxa+k7bvN5c89beslbYzVvjZW8pc95+65u+Eyj+byrGy/qluCxbr2pmwYmDNDJgBAAQ6/qttlat82KksFWt9/1DRfS0i7IbOsbl751tvWtS9+80vvmqW9fYWgEYCI/N/zq3EK86GpzE6+QlKwVG7btO3bmypUzx/Zt27AiKyXEO8xN8bntODeyZOdGQohVE2wX2ExYfTM383Aa0kXVrlmDGpVKFSpUqlKNBs3aqboMcfKIeSH/kIz4Mb835fc29jTU+N6a35t/YG8HAHb+xPrJsMlPBQAA",className:"socialImages"})}),Object(n.jsx)("a",{href:"https://facebook.com",children:Object(n.jsx)(Q.a,{src:"data:image/png;base64,UklGRi4BAABXRUJQVlA4TCEBAAAvP8APEHDkto0k8f/fnu40Jpp9LhFwbWs75jyj0qo85dyAjSQ3oMp2baefLpVts7Zts7IzficAAIBFi2t+tJ7ftRZmOMTVh7L6cAEA1w4K28YF0IfS+oAFxVm01DS7rrniXyTq2bFt195Fr/CjrTaUM+DALSYBLacMT4OtFnkwYG5zm2pMuLpNPFxfphZiljFrYiBmA6OmFGr0MzL5Wk2ZM2fOnK9F/rFHknyj/W5hSieCgjZHRlDR/ATDZ8LUhATVqD9qTvlOZU+I+M4NL9AF95Wc05gzlHNQw+Kv0aCauJySnKYNRslPSSbY5KcWNgxNTahR8g+Kv8bvuuZKS00zS40Z9LX0AeDaKdnGBQBcfR19uHDIotkV/z5+V5qZAQAAAA==",className:"socialImages"})}),Object(n.jsx)("a",{href:"https://linkedin.com",children:Object(n.jsx)(Q.a,{src:"data:image/png;base64,UklGRmoBAABXRUJQVlA4TF4BAAAvP8APEIDcNpIkif673RU5Mxlz7n4i4Ny2berZMT9WsV3btm3bSZfKKZPKtq2fYNu2bZ4JAABgrM6+T7Tep311jOCIoQPV6sAAAAwLqNg8BoAOVK0DGKNyxura1Npvs+ezzSf6KB3LYEGFnSxPPZqJwZWUqRbrROBM2VuJBMgaS+gPpJQwGEgrkTTQXGKPeKDlswTpxTlQs4RqXcrmRluwYl/oU3duIPu5GDUQzSOE/GnjRx0Xhxp7RfYfoQeyxwtziMIR0kkVIn7Rrhpk4YEpOcv7FMCNOA630cJ/CzDyt+yeOuro7MMWqEA2SzwDsLWNj1uEEFKBb6B2GTu/6ChnIGoXfjvo7IpQYreLOsosE91dHAdCEtVdwgcyE4UWOf9cjJDIni88SURpA4UkIp37vOs+23zab7Onrk0t4zZGoKNLBwCGhSbzGACAoaNHBwYcGau153OfT3tqGQEAAA==",className:"socialImages"})})]})})]})})}}]),a}(r.Component)),_=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Z,Object(b.a)({},e)),e.children,Object(n.jsx)(X,{})]})},$={loggedIn:null},ee=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).authListener=null,n.state=Object(b.a)({},$),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.authListener=x.onAuthStateChanged(function(){var t=Object(j.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,A(a);case 3:t.sent.onSnapshot((function(t){e.setState({loggedIn:Object(b.a)({id:t.id},t.data())})}));case 5:e.setState(Object(b.a)({},$));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.authListener()}},{key:"render",value:function(){var e=this.state.loggedIn;return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(k.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(_,{loggedIn:e,children:Object(n.jsx)(R,{})})}}),Object(n.jsx)(k.b,{exact:!0,path:"/about",render:function(){return Object(n.jsx)(_,{loggedIn:e,children:Object(n.jsx)(K,{})})}}),Object(n.jsx)(k.b,{exact:!0,path:"/contact",render:function(){return Object(n.jsx)(_,{loggedIn:e,children:Object(n.jsx)(H,{})})}}),Object(n.jsx)(k.b,{exact:!0,path:"/register",render:function(){return e?Object(n.jsx)(k.a,{to:"/"}):Object(n.jsx)(_,{loggedIn:e,children:Object(n.jsx)(W,{})})}}),Object(n.jsx)(k.b,{exact:!0,path:"/login",render:function(){return e?Object(n.jsx)(k.a,{to:"/"}):Object(n.jsx)(_,{loggedIn:e,children:Object(n.jsx)(L,{})})}})]})})})}}]),a}(r.Component),te=Object(n.jsx)(v.a,{children:Object(n.jsx)(ee,{})});l.a.render(te,document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.c7e7278e.chunk.js.map