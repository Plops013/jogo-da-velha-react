(this["webpackJsonpjogo-da-velha"]=this["webpackJsonpjogo-da-velha"]||[]).push([[0],{105:function(e,n,t){},106:function(e,n,t){},107:function(e,n,t){},108:function(e,n,t){},109:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(51),o=t.n(r),i=(t(59),t(60),t(13)),s=t(11),l=t(52),u=t(53),j=function e(){Object(u.a)(this,e),this.player1={id:"",name:"",isLocalPlayer:!1},this.player2={id:"",name:"",isLocalPlayer:!1},this.id="",this.board=[],this.turn="",this.status="",this.restartVote={player1:!1,player2:!1}},d=t(0),b=Object(a.createContext)(null),m="https://jogo-da-velha-api.herokuapp.com/".replace("http","ws"),p=Object(l.io)(m,{multiplex:!1}),O=function(e){var n=e.children,t=Object(a.useState)(new j),c=Object(s.a)(t,2),r=c[0],o=c[1],l=Object(a.useState)(),u=Object(s.a)(l,2),m=u[0],O=u[1];Object(a.useEffect)((function(){return p.connect(),p.on("connect",(function(){p.on("room",h),p.on("game-error",f)})),function(){console.log("disconnect"),p.disconnect()}}),[]),Object(a.useEffect)((function(){console.log("\ud83d\ude80 ~ file: game.provider.tsx ~ line 46 ~ GameProvider ~ game",r)}),[r]);var h=function(){for(var e,n,t,a,c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];o(Object(i.a)(Object(i.a)({},s[0]),{},{player1:Object(i.a)(Object(i.a)({},s[0].player1),{},{isLocalPlayer:!!(null===(e=s[0])||void 0===e||null===(n=e.player1)||void 0===n?void 0:n.id)&&s[0].player1.id===p.id}),player2:Object(i.a)(Object(i.a)({},s[0].player2),{},{isLocalPlayer:!!(null===(t=s[0])||void 0===t||null===(a=t.player2)||void 0===a?void 0:a.id)&&s[0].player2.id===p.id}),board:s[0].board.map((function(e){return e.map((function(e){return e?e===r.player1.id?"X":"O":""}))}))}))},f=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];O(n[0].error)};return Object(d.jsx)(b.Provider,{value:{game:r,setGame:o,join:function(e,n){p.emit("join",{username:e,room:n})},move:function(e,n){p.emit("move",{x:e,y:n})},restart:function(){p.emit("restart",{wantTo:!0})},leave:function(){p.emit("leave")},getLocalPlayer:function(){return r.player1.isLocalPlayer?r.player1:r.player2},getPlayerTurn:function(){return r.player1.id===r.turn?r.player1:r.player2},error:m},children:n})};var h=t(19),f=t(2);t(95);function v(e){var n=e.children;return Object(d.jsxs)("div",{className:"background-container",children:[Object(d.jsx)("div",{className:"background"}),Object(d.jsx)("h1",{className:"game-name",children:"Jogo da Velha"}),Object(d.jsx)("div",{className:"container",children:n&&n})]})}t(96);function x(e){var n=e.boardState,t=e.onClickSquare,a=function(e,t){return n?n[e][t]:""};return Object(d.jsx)("div",{className:"board-container",children:null===n||void 0===n?void 0:n.map((function(e,c){return Object(d.jsx)("div",{className:"board-row",children:e.map((function(e,r){return Object(d.jsx)("div",{onClick:function(){return t(c,r)},className:"board-square",children:Object(d.jsx)("p",{className:a(c,r),children:(o=c,i=r,!!n&&!!n[o][i]&&a(c,r))})},r);var o,i}))},c)}))})}t(97);function g(){return Object(d.jsx)("section",{className:"talign-center",children:Object(d.jsx)("div",{className:"spinner icon-spinner-2","aria-hidden":"true"})})}t(98);function y(e){var n=e.type,t=e.children,a=e.disabled,c=e.loading,r=e.onClick;return Object(d.jsxs)("button",{disabled:a||c,onClick:r,className:"button-container ".concat((!!a||!!c)&&"disabled"," ").concat("PRIMARY"===n&&"button-primary"),children:[!!c&&Object(d.jsx)("div",{className:"spinner-container",children:Object(d.jsx)(g,{})}),Object(d.jsx)("p",{className:"button-label",children:t})]})}var N={WAITING_FOR_OTHER_PLAYER:"Aguardando por jogador...",RUNNING:"Em andamento",FINISHED:"Finalizado",RESTART_VOTE:"Vota\xe7\xe3o para reiniciar"};t(99);function C(){var e=Object(f.h)().state,n=Object(f.g)(),t=function(){var e=Object(a.useContext)(b);if(!e)throw new Error("useGame deve ser usado dentro do GameProvider");return e}(),c=t.game,r=t.error,o=t.join,i=t.getPlayerTurn,s=t.move;Object(a.useEffect)((function(){if(e){var t=e,a=t.playerName,c=t.roomId;return o(a,c),function(){}}n.push("/")}),[e]);return Object(d.jsx)(v,{children:Object(d.jsxs)("div",{className:"game-container",children:[Object(d.jsx)(x,{onClickSquare:function(e,n){return function(e,n){s(e,n)}(e,n)},boardState:c.board}),Object(d.jsxs)("div",{className:"game-info",children:[!!r&&Object(d.jsx)("p",{className:"game-error",children:r}),Object(d.jsx)("p",{className:"game-status",children:!!c&&N[c.status]}),Object(d.jsxs)("p",{className:"player-turn",children:["Vez de ",Object(d.jsx)("span",{children:i().name})]}),Object(d.jsx)(y,{type:"PRIMARY",onClick:function(){navigator.clipboard.writeText("".concat(window.location.host,"/sala/").concat(c.id))},children:"COPIAR LINK"})]})]})})}var A=t(15),w=t.n(A),P=t(24),k=(t(105),t.p+"static/media/user.ef8063a8.svg");t(106);function R(e){var n=e.onChange,t=void 0===n?function(){}:n;return Object(d.jsx)("input",{onChange:function(e){t(e.target.value)},className:"input-name",placeholder:"Digite seu nick...",type:"text",maxLength:20,minLength:1})}function I(){var e=Object(f.g)(),n=Object(a.useState)(!1),t=Object(s.a)(n,2),c=t[0],r=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],j=function(){var n=Object(P.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r(!0),r(!1),e.push({pathname:"/jogo",state:{action:"CREATE",playerName:l}})}catch(t){r(!1),console.log(t)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(d.jsx)(v,{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("img",{className:"",src:k,alt:"Usu\xe1rio"}),Object(d.jsx)(R,{onChange:function(e){return u(e)}}),Object(d.jsx)(y,{loading:c,onClick:j,children:"CRIAR SALA"})]})})}t(107);function S(){var e=Object(f.g)(),n=Object(f.i)().code,t=Object(a.useState)(""),c=Object(s.a)(t,2),r=c[0],o=c[1],i=function(){var t=Object(P.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push({pathname:"/jogo",state:{action:"JOIN",roomId:n,playerName:r}});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(v,{children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("img",{src:k,alt:"Usu\xe1rio"}),Object(d.jsx)(R,{onChange:function(e){return o(e)}}),Object(d.jsx)(y,{onClick:i,children:"ENTRAR NA SALA"})]})})}var E=t.p+"static/media/404-not-found.e0ea9ddc.svg";t(108);function L(){return Object(d.jsx)(v,{children:Object(d.jsxs)("div",{className:"not-found-container",children:[Object(d.jsx)("img",{className:"not-found-image",src:E,alt:"Usu\xe1rio"}),Object(d.jsx)("p",{className:"not-found-message",children:"Opa! N\xe3o conseguimos encontar essa pagina por aqui"})]})})}function T(){return Object(d.jsx)(h.a,{basename:"/jogo-da-velha-react",children:Object(d.jsxs)(f.d,{children:[Object(d.jsx)(f.b,{exact:!0,path:"/",component:I}),Object(d.jsx)(f.b,{exact:!0,path:"/sala/:code",component:S}),Object(d.jsx)(f.b,{exact:!0,path:"/jogo",component:C}),Object(d.jsx)(f.b,{path:"/404",component:L}),Object(d.jsx)(f.a,{to:"/404"})]})})}var F=function(){return Object(d.jsx)(O,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(T,{})})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,110)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),G()},59:function(e,n,t){},60:function(e,n,t){},95:function(e,n,t){},96:function(e,n,t){},97:function(e,n,t){},98:function(e,n,t){},99:function(e,n,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.c68dbe21.chunk.js.map