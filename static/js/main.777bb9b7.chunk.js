(window.webpackJsonpvideos=window.webpackJsonpvideos||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n.n(r),c=n(9),s=n.n(c),l=n(16),m=n(3),u=n(4),d=n(6),p=n(5),v=n(7),h=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},n.onInputChange=function(e){n.setState({term:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),n.props.onFormSubmit(n.state.term)},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(i.a.Component),f=(n(25),function(e){var t=e.video,n=e.onVideoSelect,a=t.id.videoId;return i.a.createElement("div",{className:"item"},a&&i.a.createElement("article",{onClick:function(){return n(t)},className:"video-item"},i.a.createElement("img",{alt:t.snippet.title,src:t.snippet.thumbnails.medium.url,className:"ui image"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title))))}),w=function(e){var t=e.videos,n=e.onVideoSelect,a=t.map(function(e){return i.a.createElement(f,{key:e.id.videoId,video:e,onVideoSelect:n})});return i.a.createElement("section",{className:"ui relaxed divided list"},a)},b=n(17),E=function(e){var t=e.video,n=e.isDesktop;if(!t)return"Loading...";var a="https:www.youtube.com/embed/".concat(t.id.videoId),r=n?0:"20px";return i.a.createElement("section",{className:"ui segment",style:{marginBottom:"".concat(r)}},i.a.createElement("article",{className:"ui embed"},i.a.createElement(b.a,{title:"video player",url:a})),i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description))},S=n(18),y=n.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",key:"AIzaSyCfS3uno4_qN0gIiauJfJZxgydwRnbxAkA"}}),g=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null,viewport:window.innerWidth},n.handleResize=function(){n.setState({viewport:window.innerWidth})},n.onFormSubmit=function(){var e=Object(l.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/search",{params:{q:t}});case 2:a=e.sent,n.setState({videos:a.data.items,selectedVideo:a.data.items[2]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onVideoSelect=function(e){n.setState({selectedVideo:e})},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onFormSubmit("nature"),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setDimension)}},{key:"render",value:function(){var e=this.state.viewport>1e3;return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onFormSubmit:this.onFormSubmit}),i.a.createElement("main",{className:e?"ui grid":null},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(E,{video:this.state.selectedVideo,isDesktop:e})),i.a.createElement("aside",{className:"five wide column"},i.a.createElement(w,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),t}(i.a.Component);o.a.render(i.a.createElement(g,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.777bb9b7.chunk.js.map