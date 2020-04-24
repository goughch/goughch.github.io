(function(t){function a(a){for(var r,s,l=a[0],c=a[1],o=a[2],p=0,d=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,l=1;l<e.length;l++){var c=e[l];0!==n[c]&&(r=!1)}r&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},n={app:0},i=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("85ec"),n=e.n(r);n.a},"20b0":function(t,a,e){},3474:function(t,a,e){},"43d1":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"search-button-box"}},[e("button",{attrs:{id:"search-button"},on:{click:t.toggleSearch}},[t._v("🔍")])]),e("PlayArea",{attrs:{playing:t.playing,playlist:t.playlist}}),e("SearchArea",{attrs:{tracks:t.searchResults}})],1)},i=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"play-area"}},[e("Playlist",{attrs:{tracks:t.playlist}}),t.playingTrackExists?e("PlayBar",{attrs:{playing:t.playing}}):t._e()],1)},l=[],c=(e("a434"),e("b0c0"),r["a"].observable({isSearchOpen:!1,trackTemplate:{id:null,title:"",album:"",artist:"",time:0,img:""},playing:{id:null,title:"",album:"",artist:"",time:0,img:""},playlist:[],searchResults:[],playTime:0,isPaused:!1})),o={toggleSearch:function(){c.isSearchOpen=!c.isSearchOpen},togglePlay:function(){c.isPaused=!c.isPaused},playNext:function(){c.playTime=0,0==c.playlist.length?c.playing=c.trackTemplate:c.playing=c.playlist.shift()},removeTrack:function(t){for(var a in c.playlist)if(c.playlist[a].id==t){c.playlist.splice(a,1);break}},incTimer:function(){null!=c.playing.id&&(c.playTime==c.playing.time&&this.playNext(),c.isPaused||(c.playTime+=10))},clearSearch:function(){c.searchResults=[]},translateResponse:function(t){console.log(t);for(var a=0;a<t.data.data.length;++a)this.addToSearch(t.data.data[a].id,t.data.data[a].title,t.data.data[a].album.title,t.data.data[a].artist.name,t.data.data[a].duration,t.data.data[a].album.cover_small)},addToSearch:function(t,a,e,r,n,i){var s={id:null,title:"",album:"",artist:"",time:0,img:""};s.id=t,s.title=a,s.album=e,s.artist=r,s.time=1e3*n,s.img=i,c.searchResults.push(s)},playThisTrack:function(t){for(var a in c.playlist)if(c.playlist[a].id==t)return c.playTime=0,c.playing=c.playlist[a],void c.playlist.splice(a,1);for(a in c.searchResults)if(c.searchResults[a].id==t)return c.playTime=0,c.playing=c.searchResults[a],void c.searchResults.splice(a,1)}},u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("draggable",{attrs:{list:t.tracks,group:"tracks"}},t._l(t.tracks,(function(t){return e("div",{key:t.id},[e("Track",{attrs:{track:t,inPlaylist:!0}})],1)})),0)],1)},p=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"playtrack",attrs:{id:"track"},on:{click:t.playThisTrack}},[e("img",{attrs:{width:"108px",height:"108px",src:t.track.img}}),e("h1",{staticClass:"title"},[t._v(t._s(t.track.title))]),e("h2",{staticClass:"album"},[t._v(t._s(t.track.album))]),e("h2",{staticClass:"artist"},[t._v(t._s(t.track.artist))]),t.inPlaylist?e("button",{attrs:{id:"remove-button"},on:{click:t.removeTrack}},[t._v(" X ")]):t._e(),e("h2",{staticClass:"time"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])])},f=[],y={name:"Track",props:["track","inPlaylist"],computed:{minutes:function(){return Math.floor(this.track.time/6e4)},seconds:function(){var t=this.track.time/1e3%60;return t<10&&(t="0"+t),t}},methods:{removeTrack:function(){o.removeTrack(this.track.id)},playThisTrack:function(){o.playThisTrack(this.track.id)}}},m=y,h=(e("9e5f"),e("2877")),g=Object(h["a"])(m,d,f,!1,null,"56208775",null),k=g.exports,v=e("310e"),b=e.n(v),_={name:"Playlist",components:{Track:k,draggable:b.a},props:["tracks"]},P=_,T=Object(h["a"])(P,u,p,!1,null,"3bb0db38",null),x=T.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"play-bar"}},[e("PlayingTrack",{attrs:{track:t.playing}})],1)},S=[],w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:t.progressBar,attrs:{id:"track"}},[e("img",{attrs:{width:"108px",height:"108px",src:t.track.img}}),e("h1",{staticClass:"title"},[t._v(t._s(t.track.title))]),e("h2",{staticClass:"album"},[t._v(t._s(t.track.album))]),e("h2",{staticClass:"artist"},[t._v(t._s(t.track.artist))]),e("button",{attrs:{id:"play-button"},on:{click:t.togglePlay}},[t.isPaused?e("span",{staticClass:"play-tri"}):t._e(),t.isPlaying?e("span",{staticClass:"play-rect",attrs:{id:"rect-left"}}):t._e(),t.isPlaying?e("span",{staticClass:"play-rect",attrs:{id:"rect-right"}}):t._e()]),e("button",{attrs:{id:"skip-button"},on:{click:t.playNext}},[e("span",{staticClass:"skip-tri",attrs:{id:"trione"}}),e("span",{staticClass:"skip-tri",attrs:{id:"tritwo"}})]),e("h2",{staticClass:"time"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])])},j=[],C={name:"PlayingTrack",props:["track"],data:function(){return{progressBar:{backgroundImage:null}}},computed:{minutes:function(){return Math.floor(this.track.time/6e4)},seconds:function(){return this.track.time/1e3%60},isPlaying:function(){return!c.isPaused},isPaused:function(){return c.isPaused}},methods:{togglePlay:function(){o.togglePlay()},playNext:function(){o.playNext()},updateProgBar:function(){this.progressBar.backgroundImage="linear-gradient(to right, #ab62a7 "+c.playTime/this.track.time*100+"%, #111111 "+c.playTime/this.track.time*100+"%)",c.playTime==this.track.time&&o.playNext(),window.requestAnimationFrame(this.updateProgBar)}},mounted:function(){setInterval((function(){o.incTimer()}),10)},created:function(){window.requestAnimationFrame(this.updateProgBar)}},R=C,E=(e("9ddd"),Object(h["a"])(R,w,j,!1,null,"54fccc9f",null)),q=E.exports,A={name:"PlayBar",components:{PlayingTrack:q},props:["playing"]},B=A,N=(e("7482"),Object(h["a"])(B,O,S,!1,null,"5b8a4130",null)),$=N.exports,M={name:"PlayArea",components:{Playlist:x,PlayBar:$},computed:{playingTrackExists:function(){return!(null==c.playing.id)}},props:["playing","playlist"]},z=M,I=(e("f87e"),Object(h["a"])(z,s,l,!1,null,"e9ed8916",null)),F=I.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-area"},[e("transition",{attrs:{name:"slide"}},[t.isOpen?e("div",{staticClass:"search-area-panel",on:{mouseleave:t.toggleSearch}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{placeholder:"search"},domProps:{value:t.query},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.runQuery(a)},input:function(a){a.target.composing||(t.query=a.target.value)}}}),e("draggable",{attrs:{list:t.tracks,group:"tracks"}},t._l(t.tracks,(function(t){return e("div",{key:t.id},[e("Track",{directives:[{name:"bing",rawName:"v-bing:inPlaylit",value:!1,expression:"false",arg:"inPlaylit"}],attrs:{track:t}})],1)})),0)],1):t._e()])],1)},Q=[],X=e("bc3a"),D=e.n(X),G={name:"SearchArea",props:["tracks"],data:function(){return{query:""}},methods:{toggleSearch:function(){o.toggleSearch()},runQuery:function(){o.clearSearch(),D()({method:"get",url:"https://deezerdevs-deezer.p.rapidapi.com/search",params:{q:this.query,limit:7},headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"076cf08d31msh22c0a26cee49a48p15d01ajsn67abbf44b329"}}).then((function(t){o.translateResponse(t)})).catch((function(t){console.log(t)}))}},computed:{isOpen:function(){return c.isSearchOpen}},components:{Track:k,draggable:b.a}},H=G,K=(e("b6ff"),Object(h["a"])(H,J,Q,!1,null,"6112b8ee",null)),L=K.exports,U={name:"App",components:{PlayArea:F,SearchArea:L},computed:{isSearchOpen:function(){return c.isSearchOpen},playing:function(){return c.playing},playlist:function(){return c.playlist},searchResults:function(){return c.searchResults}},methods:{toggleSearch:function(){o.toggleSearch()}}},V=U,W=(e("034f"),Object(h["a"])(V,n,i,!1,null,null,null)),Y=W.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Y)}}).$mount("#app")},"68df":function(t,a,e){},7482:function(t,a,e){"use strict";var r=e("caa6"),n=e.n(r);n.a},"85ec":function(t,a,e){},"9ddd":function(t,a,e){"use strict";var r=e("20b0"),n=e.n(r);n.a},"9e5f":function(t,a,e){"use strict";var r=e("3474"),n=e.n(r);n.a},b6ff:function(t,a,e){"use strict";var r=e("43d1"),n=e.n(r);n.a},caa6:function(t,a,e){},f87e:function(t,a,e){"use strict";var r=e("68df"),n=e.n(r);n.a}});
//# sourceMappingURL=app.606eaad0.js.map