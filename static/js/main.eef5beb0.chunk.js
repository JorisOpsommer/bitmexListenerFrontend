(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,a){e.exports=a(510)},256:function(e,t,a){},257:function(e,t,a){},510:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(58),c=a.n(l),o=(a(256),a(20)),i=a(21),u=a(23),s=a(22),m=a(24),d=(a(257),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heightcontainer1"},r.a.createElement("div",{className:"backgroundcolorcontainer1"},r.a.createElement("div",{className:"homeTitle"})),r.a.createElement("div",{className:"backgroundcolorcontainer2"})))}}]),t}(n.Component)),h=a(514),E=a(512),p=a(61),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:window.location.pathname.split("/")[1]},a.handleItemClick=function(e,t){var n=t.name;a.setState({activeItem:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(h.a,{inverted:!0},r.a.createElement(E.a,{inverted:!0,pointing:!0,secondary:!0},r.a.createElement(p.a,{to:"/"},r.a.createElement(E.a.Item,{name:"Home",active:"home"===e.toLowerCase(),onClick:this.handleItemClick})),r.a.createElement(p.a,{to:"/xbt"},r.a.createElement(E.a.Item,{name:"XBT",active:"xbt"===e.toLowerCase(),onClick:this.handleItemClick})),r.a.createElement(p.a,{to:"/oi"},r.a.createElement(E.a.Item,{name:"OI",active:"oi"===e.toLowerCase(),onClick:this.handleItemClick})),r.a.createElement(p.a,{to:"/funding"},r.a.createElement(E.a.Item,{name:"Funding",active:"funding"===e.toLowerCase(),onClick:this.handleItemClick}))))}}]),t}(n.Component),g=a(515),T=a(513),y=a(62),b=a.n(y),f={START_TRADES:"START_TRADES",DONE_TRADES:"DONE_TRADES",ERROR_TRADES:"ERROR_TRADES"};function S(){return{type:f.START_TRADES}}function O(e){return{type:f.DONE_TRADES,payload:e}}function w(){return{type:f.ERROR_TRADES}}var R={loadAllTrades:function(){return function(e){return e(S()),b.a.get('http://168.63.17.245:5984/bitmex/_all_docs?startkey="trade_symbol_XBTUSD_timestamp_"&endkey="trade_symbol_XBTUSD_timestamp_\uffff"&include_docs=true',{headers:{Authorization:"Basic ".concat("TOKEN")}}).then(function(e){return e.data}).then(function(t){return e(O(t))}).catch(function(){return e(w())})}},loadTradesBetweenDate:function(e,t){return function(a){return a(S()),b.a.get("http://168.63.17.245:8085/tradesBetweenDate?startdate="+e+"&enddate="+t).then(function(e){return e.data}).then(function(e){return a(O(e))}).catch(function(){return a(w())})}},startTrades:S,doneTrades:O,errorTrades:w},j=a(98),C=a(207),k=function(){return r.a.createElement("div",{className:"spinnercenter"},r.a.createElement(C.ClimbingBoxLoader,{sizeUnit:"px",size:30,color:"#2185d0"}))},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={trades:[{}],hourlyBuys:[{}],hourlySells:[{}],dailyBuys:[{}],dailySells:[{}],hourlyBuysTotal:0,hourlySellsTotal:0,dailyBuysTotal:0,dailySellsTotal:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n=this,r=[{}],l=[{}],c=[{}],o=[{}],i=0,u=0,s=0,m=0,d=new Date;a=d.getUTCDate()<10?"0"+d.getUTCDate():d.getUTCDate(),t=d.getUTCMonth()<10?"0"+(d.getUTCMonth()+1):d.getUTCMonth()+1,e=d.getFullYear()+"-"+t+"-"+a,this.props.startLoadingTrades(e,e).then(function(e){for(var t in e.payload.rows){var a=e.payload.rows[t].doc,h=new Date(a.timestamp);if("Buy"===a.side&&a.size>5e5&&(c.push(a),s+=a.size),"Sell"===a.side&&a.size>5e5&&(o.push(a),m+=a.size),n.checkBetween60Minutes(d.toUTCString(),h))switch(a.side){case"Buy":r.push(a),i+=a.size;break;case"Sell":l.push(a),u+=a.size;break;default:console.log("side == ??")}}c.shift(),o.shift(),r.shift(),l.shift(),c.reverse(),o.reverse(),r.reverse(),l.reverse(),n.setState({dailyBuys:c,dailySells:o,hourlyBuys:r,hourlySells:l,dailyBuysTotal:s,dailySellsTotal:m,hourlyBuysTotal:i,hourlySellsTotal:u})})}},{key:"showDateToHumanInHoursAndMinutes",value:function(e){var t,a,n=new Date(e);return(t=n.getHours())<10&&(t="0"+t),(a=n.getMinutes())<10&&(a="0"+a),t+":"+a}},{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},{key:"checkBetween60Minutes",value:function(e,t){var a=!1,n=new Date(e),r=new Date(t),l=n.getTime()-r.getTime();return Math.round(l/6e4)<=60&&(a=!0),a}},{key:"render",value:function(){var e=this,t=function(t,a){return r.a.createElement(h.a.Group,null,"Buy"===t.object.side?r.a.createElement(h.a,{inverted:!0,color:"green"}," ",r.a.createElement("div",{className:"divSameHeight"},r.a.createElement("p",null,r.a.createElement(g.a,{name:"caret up"}),t.object.price,"$")," ",r.a.createElement("p",null,e.numberWithCommas(t.object.size))," ")):r.a.createElement(h.a,{inverted:!0,color:"red"}," ",r.a.createElement("div",{className:"divSameHeight"},r.a.createElement("p",null,r.a.createElement(g.a,{name:"caret down"})," ",t.object.price,"$")," ",r.a.createElement("p",null,e.numberWithCommas(t.object.size))," ")),r.a.createElement(h.a,null,r.a.createElement(g.a,{name:"clock"}),e.showDateToHumanInHoursAndMinutes(t.object.timestamp)))},a=this.state,n=a.dailyBuys,l=a.dailySells,c=a.hourlyBuys,o=a.hourlySells,i=a.dailyBuysTotal,u=a.dailySellsTotal,s=a.hourlyBuysTotal,m=a.hourlySellsTotal;return this.props.isTradingLoading||1===n.length?r.a.createElement(k,null):(console.log(c),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(T.a,{columns:4,divided:!0,padded:!0},r.a.createElement(T.a.Row,null,r.a.createElement(T.a.Column,null,r.a.createElement("div",{className:"whitebackground"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{color:"green"},r.a.createElement("h4",null,"Daily buys \xa0\xa0\xa0>500.000"),r.a.createElement("div",{className:"divSameHeightTitle"},r.a.createElement("p",null,this.numberWithCommas(n.length),"\xa0rows"),r.a.createElement("p",null," Total\xa0",this.numberWithCommas(i),"$"))),r.a.createElement(h.a.Group,null,n.map(function(e,a){return r.a.createElement(t,{object:e,key:a})}))))),r.a.createElement(T.a.Column,null,r.a.createElement("div",{className:"whitebackground"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{color:"red"},r.a.createElement("h4",null,"Daily Sells \xa0\xa0\xa0>500.000"),r.a.createElement("div",{className:"divSameHeightTitle"},r.a.createElement("p",null,this.numberWithCommas(l.length),"\xa0rows"),r.a.createElement("p",null," Total\xa0",this.numberWithCommas(u),"$"))),r.a.createElement(h.a.Group,null,l.map(function(e,a){return r.a.createElement(t,{object:e,key:a})}))))),r.a.createElement(T.a.Column,null,r.a.createElement("div",{className:"whitebackground"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{color:"green"},r.a.createElement("h4",null,"Hourly buys \xa0\xa0\xa0>50.000"),r.a.createElement("div",{className:"divSameHeightTitle"},r.a.createElement("p",null,this.numberWithCommas(c.length),"\xa0rows"),r.a.createElement("p",null," Total\xa0",this.numberWithCommas(s),"$"))),r.a.createElement(h.a.Group,null,c.map(function(e,a){return r.a.createElement(t,{object:e,key:a})}))))),r.a.createElement(T.a.Column,null,r.a.createElement("div",{className:"whitebackground"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{color:"red"},r.a.createElement("h4",null,"Hourly sells\xa0\xa0\xa0>50.000"),r.a.createElement("div",{className:"divSameHeightTitle"},r.a.createElement("p",null,this.numberWithCommas(o.length),"\xa0rows"),r.a.createElement("p",null," Total\xa0",this.numberWithCommas(m),"$"))),r.a.createElement(h.a.Group,null,o.map(function(e,a){return r.a.createElement(t,{object:e,key:a})}))))))))))}}]),t}(n.Component),_=Object(j.b)(function(e){return{trading:e.tradeReducer.trades,isTradingLoading:e.tradeReducer.isloading}},function(e){return{startLoadingTrades:function(t,a){return e(R.loadTradesBetweenDate(t,a))}}})(D),A=a(45),B=a(53),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"whitebackground"},r.a.createElement(B.b,{width:500,height:400,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(B.c,{strokeDasharray:"3 3"}),r.a.createElement(B.e,{dataKey:"name"}),r.a.createElement(B.f,null),r.a.createElement(B.d,null),r.a.createElement(B.a,{type:"monotone",dataKey:"uv",stroke:"#f48181",fill:"#f48181"})))))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(A.Switch,null,r.a.createElement(A.Route,{path:"/home",exact:!0,component:d}),r.a.createElement(A.Route,{path:"/",exact:!0,component:d}),r.a.createElement(A.Route,{path:"/xbt",exact:!0,component:_}),r.a.createElement(A.Route,{path:"/oi",exact:!0,component:N}),r.a.createElement(A.Route,{path:"/funding",exact:!0,component:d}))))}}]),t}(n.Component),H=(a(509),a(214)),W=a(52),x=a(213),z={START_STATS:"START_STATS",DONE_STATS:"DONE_STATS",ERROR_STATS:"ERROR_STATS"};var M={stats:[],isloading:!0};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.START_STATS:return Object.assign({},e,{stats:e.stats.concat(t.payload),isloading:!0});case z.DONE_STATS:return Object.assign({},e,{isloading:!1,stats:t.payload});case z.ERROR_STATS:return Object.assign({},e,{isloading:!1});default:return e}},G={trades:[],isloading:!0};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.START_TRADES:return Object.assign({},e,{trades:t.payload,isloading:!0});case f.DONE_TRADES:return Object.assign({},e,{isloading:!1,trades:t.payload});case f.ERROR_TRADES:return Object.assign({},e,{isloading:!1});default:return e}},F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,P=Object(W.c)({statsReducer:U,tradeReducer:L}),$=Object(W.e)(P,F(Object(W.a)(x.a))),X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{store:$},r.a.createElement(H.BrowserRouter,null,r.a.createElement(I,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,1,2]]]);
//# sourceMappingURL=main.eef5beb0.chunk.js.map