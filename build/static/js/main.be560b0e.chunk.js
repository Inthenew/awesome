(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var o,r=n(0),c=n(25),a=n.n(c),s=n(8),i=n(9),l=n(11),d=n(10),u=n(17),h=n(5),j=n(21),b=n(93),m=n(95),p=n(94),g=n(18),f=n(26),O=n.n(f),v=n(1),x=g.a.div(o||(o=Object(j.a)(["\n  .navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  #c {\n      margin-left: 5%;\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  #form-center {\n    position: absolute !important;\n    left: 25%;\n    top: 15px;\n    right: 25%;\n  }\n"])));window.innerWidth;function y(e){if(13===e.keyCode){var t=document.getElementById("search").value;window.location="".concat(location.protocol,"/#/search/?q=").concat(t)}}setTimeout((function(){document.getElementById("basic-navbar-nav").style.marginLeft="5%",document.getElementById("navbr").style.backgroundColor="gray",document.getElementById("navbr").style.textAlign="center",O()(".co").css({whiteSpace:"norap",overflowY:"hidden",marginLeft:"-6%"}),O()(".coC").css({display:"inline-block",width:"50px",height:"100%"})}),400);var w,k,S,C,L,I,B,N,E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)(x,{children:Object(v.jsxs)(b.a,{id:"navbr",expand:"exlg",children:[Object(v.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)("div",{id:"form-center",children:Object(v.jsx)(m.a,{type:"text",placeholder:"Search",className:"",id:"search",onKeyDown:y})}),Object(v.jsxs)(b.a.Collapse,{id:"basic-navbar-nav",children:[Object(v.jsx)("hr",{}),Object(v.jsx)(p.a,{id:"nav",className:"ml-auto",children:Object(v.jsx)(p.a.Item,{children:Object(v.jsxs)("div",{className:"co",children:[Object(v.jsx)(p.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"1",href:"/#",children:"Home"}),Object(v.jsx)(p.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"2",href:"/#/signup",children:"Signup"}),Object(v.jsx)(p.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"4",href:"/#/login",children:"Login"}),Object(v.jsx)(p.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"5",href:"/#/logout",children:"Logout"}),Object(v.jsx)(p.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"6",href:"/#/main",children:"Main"})]})})})]})]})})}}]),n}(r.Component),z=n(92),T=n(14),U=n.n(T),F=g.a.div(w||(w=Object(j.a)(["\n    .form-center {\n        position: absolute !important;\n        left: 25%;\n        right: 25%;\n    }\n"]))),A=function(e){document.getElementById("errContanier").innerHTML=String(e)},D=function(e,t,n){U.a.get("/api/users").then((function(n){for(var o=0;o<n.data.length;o++)if(n.data[o].username===e)return void A("username exists");console.log(e),U.a.post("/api/users",{username:e,password:t,sS:!1,fS:!0}).then((function(n){U.a.post("/api/sessions",{username:e,password:t}).then((function(n){console.log("Success!"),A("Your signed in"),console.log(k),k.dispatch({type:"Login",username:e,password:t}),window.location="".concat(location.protocol,"/#/main")})).catch((function(e){console.error(e)}))})).catch((function(e){console.error("Theres an err with checking if you are already loged in: ".concat(e))}))})).catch((function(e){console.error(e)}))},M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={username:"stranger",password:"unknown"},k=o.props.store,o}return Object(i.a)(n,[{key:"onKeyDown",value:function(e){13===e.keyCode&&D(document.getElementById("username").value,document.getElementById("password").value)}},{key:"handleClick",value:function(e){D(document.getElementById("username").value,document.getElementById("password").value)}},{key:"render",value:function(){return Object(v.jsx)(F,{children:Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h1",{children:"Signup:"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"form-center",children:[Object(v.jsx)(m.a,{type:"text",placeholder:"username",className:"username",id:"username"}),Object(v.jsx)(m.a,{type:"password",placeholder:"password",className:"password",id:"password",onKeyDown:this.onKeyDown}),Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"lg",onClick:this.handleClick,onTouchStart:this.handleClick,block:!0,type:"sumbit",children:"Signup"}),Object(v.jsx)("p",{id:"errContanier"})]})]})})})}}]),n}(r.Component),H=n(20),K=g.a.div(S||(S=Object(j.a)(["\n    .form-center {\n        position: absolute !important;\n        left: 25%;\n        right: 25%;\n    }\n"]))),Y=function(e){document.getElementById("errContanier").innerHTML=String(e)},J=function(e,t,n){U.a.get("/api/users").then((function(n){for(var o=0,r=!1;o<n.data.length;){if(n.data[o].username===e&&n.data[o].password===t){r=!0;break}o++}r?U.a.get("/api/sessions").then((function(n){var o=0;for(console.log(n.data);o<n.data.length;){if(n.data[o].username===e&&n.data[o].password===t)return Y("Your already logged in!"),void C.dispatch({type:"Login",username:e,password:t});o++}U.a.post("/api/sessions",{username:e,password:t}).then((function(n){console.log("Success!"),Y("Your logged in"),console.log(C),C.dispatch({type:"Login",username:e,password:t}),window.location="".concat(location.protocol,"/#/main")})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)})):Y("Incorrect username or password")})).catch((function(e){console.error(e)}))},R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={username:"stranger",password:"unknown"},C=o.props.store,Object(H.a)(o),o}return Object(i.a)(n,[{key:"onKeyDown",value:function(e){13===e.keyCode&&J(document.getElementById("username").value,document.getElementById("password").value)}},{key:"handleClick",value:function(e){J(document.getElementById("username").value,document.getElementById("password").value)}},{key:"render",value:function(){return Object(v.jsx)(K,{children:Object(v.jsx)("div",{children:Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h1",{children:"Login:"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"form-center",children:[Object(v.jsx)(m.a,{type:"text",placeholder:"username",className:"username",id:"username"}),Object(v.jsx)(m.a,{type:"password",placeholder:"password",className:"password",id:"password",onKeyDown:this.onKeyDown}),Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"lg",onClick:this.handleClick,onTouchStart:this.handleClick,block:!0,type:"sumbit",children:"Login"}),Object(v.jsx)("p",{id:"errContanier"})]})]})})})}}]),n}(r.Component),_=g.a.div(L||(L=Object(j.a)(["\n .modal {\n                display: none; /* Hidden by default */\n                position: fixed; /* Stay in place */\n                z-index: 1; /* Sit on top */\n                padding-top: 10rem; /* Location of the box */\n                left: 0;\n                top: 0;\n                width: 100%; /* Full width */\n                height: 100%; /* Full height */\n                overflow: auto; /* Enable scroll if needed */\n                background-color: rgb(0,0,0); /* Fallback color */\n                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n              }\n\n              /* Modal Content */\n              .modal-content {\n                background-color: #fefefe;\n                margin: auto;\n                padding: 4rem;\n                border: 0.1rem solid #888;\n                width: 80%;\n                height: 40%;\n                text-align: center;\n              }\n\n              /* The Close Button */\n              .close {\n                color: #aaaaaa;\n                float: right;\n                font-size: 2.8rem;\n                font-weight: bold;\n              }\n\n              .close:hover,\n              .close:focus {\n                color: #000;\n                text-decoration: none;\n                cursor: pointer;\n              }\n              #content {\n                color: darkred;\n              }\n"]))),P=function(){var e={};return document.cookie.split(";").map((function(e){return e.trim().split("=").map(decodeURIComponent)})).reduce((function(t,n){try{t[n[0]]=JSON.parse(n[1])}catch(o){t[n[0]]=n[1]}return e=t,t}),{}),e},W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),o=t.call(this,e),I=Object(H.a)(o),B=o.props.store,o}return Object(i.a)(n,[{key:"handleText",value:function(e){O()("#content").text(String(e))}},{key:"getUsername",value:function(){if(void 0!==B.getState())return B.getState().username;if(document.cookie.length>0){var e=P(),t=e.username;e.password;return t}}},{key:"getPassword",value:function(){if(void 0!==B.getState())return B.getState().username;if(document.cookie.length>0){var e=P(),t=(e.username,e.password);return console.log(t),t}}},{key:"parseDocumentCookie",value:function(){var e={};return document.cookie.split(";").map((function(e){return e.trim().split("=").map(decodeURIComponent)})).reduce((function(t,n){try{t[n[0]]=JSON.parse(n[1])}catch(o){t[n[0]]=n[1]}return e=t,t}),{}),e}},{key:"logOut",value:function(){void 0!==I.getUsername()&&U.a.delete("/api/sessions",{username:I.getUsername(),password:I.getPassword()}).then((function(e){B.dispatch({type:"Logout"}),I.handleText("Logged out successfully")})).catch((function(e){I.handleText("There has been an error"),console.error(e)}))}},{key:"f",value:function(e){var t=document.getElementById("myModal");window.onclick=function(e){e.target==t&&(t.style.display="none")},window.ontouchstart=function(e){e.target==t&&(t.style.display="none")},document.getElementById("myModal").style.display="block"}},{key:"render",value:function(){return Object(v.jsx)(_,{children:Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h2",{children:"Logout"}),Object(v.jsx)("hr",{}),Object(v.jsx)(z.a,{bsStyle:"success",id:"delete",bsSize:"large",onClick:this.f,onTouchStart:this.f,href:"",target:"_blank",children:"Logout"}),Object(v.jsx)("div",{id:"prompt",children:Object(v.jsx)("div",{id:"myModal",className:"modal",children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"small",href:"",onClick:this.logOut,onTouchStart:this.logOut,target:"_blank",id:"sure",className:"send",children:"are you sure you want to logout?"}),Object(v.jsx)("p",{id:"content"})]})})})]})})}}]),n}(r.Component),q=function(){var e={};return document.cookie.split(";").map((function(e){return e.trim().split("=").map(decodeURIComponent)})).reduce((function(t,n){try{t[n[0]]=JSON.parse(n[1])}catch(o){t[n[0]]=n[1]}return e=t,t}),{}),e},G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),o=t.call(this,e),Object(H.a)(o),N=o.props.store,o}return Object(i.a)(n,[{key:"logedIn",value:function(e){return void 0!==e}},{key:"getUsername",value:function(){if(void 0!==N.getState()){if("Stranger"===N.getState().username)return;return N.getState().username}if(document.cookie.length>0){var e=q(),t=e.username;e.password;return t}}},{key:"getPassword",value:function(){if(void 0!==N.getState()){if("Stranger"===N.getState().username)return;return N.getState().username}if(document.cookie.length>0){var e=q();e.username;return e.password}}},{key:"render",value:function(){return this.logedIn(this.getUsername())?(window.username=this.getUsername(),window.password=this.getPassword(),Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h2",{children:"Main"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("h3",{children:["Hello ",window.username]})]})):Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h2",{children:"Your not logged in!"}),Object(v.jsx)("hr",{}),Object(v.jsx)("a",{href:"/#/login",children:Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(r.Component),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h2",{children:"Home"}),Object(v.jsx)("hr",{}),Object(v.jsx)("h4",{children:"Welcome to my app"}),Object(v.jsx)("p",{style:{fontSize:"1rem"},children:"Hello"}),Object(v.jsx)("a",{href:"/#/signup",children:Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Signup"})}),"        ",Object(v.jsx)("a",{href:"/#/login",children:Object(v.jsx)(z.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(r.Component);function V(e){for(var t=e,n=0;n<e.length;)"%"===t[n]&&"2"===t[n+1]&&"0"===t[n+2]&&(t=t.slice(0,n)+" "+t.slice(n+3,t.length)),n++;return t}var X=V(document.URL.slice(location.protocol.length+29,location.length)),Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={search:X},setInterval((function(){X=V(document.URL.slice(location.protocol.length+29,location.length)),o.state.search!==X&&o.setState((function(e){return{search:X}}))}),100),o}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("h2",{children:"Search"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("h4",{children:["You searched: ",X]})]})}}]),n}(r.Component),$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(u.a,{children:[" ",Object(v.jsxs)("div",{children:[Object(v.jsx)(E,{}),Object(v.jsx)(h.a,{path:"/signup",children:Object(v.jsx)(M,{store:this.props.store})}),Object(v.jsx)(h.a,{path:"/main",children:Object(v.jsx)(G,{store:this.props.store})}),Object(v.jsx)(h.a,{path:"/login",children:Object(v.jsx)(R,{store:this.props.store})}),Object(v.jsx)(h.a,{path:"/logout",children:Object(v.jsx)(W,{store:this.props.store})}),Object(v.jsx)(h.a,{path:"/search",children:Object(v.jsx)(Z,{store:this.props.store})}),Object(v.jsx)(h.a,{exact:!0,path:"/",children:Object(v.jsx)(Q,{})})]})," "]})}}]),n}(r.Component),ee=n(54),te=(n(87),n(88),n(89),Object(ee.a)((function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"Login":return{username:e.username,password:e.password};case"Logout":return{username:void 0,password:void 0}}})));a.a.render(Object(v.jsx)($,{store:te}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.be560b0e.chunk.js.map