(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{134:function(e,t,a){e.exports=a(261)},140:function(e,t,a){},141:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);a(135);var n=a(0),s=a.n(n),i=a(28),r=a.n(i),l=(a(140),a(141),a(33)),c=a(34),o=a(36),u=a(35),h=a(37),m=a(272),d=a(126),p=a(275),k=a(269),g=a(270),f=a(271),E=a(262),b=a(29),v=a(274);function y(e){return e.data.map((function(e,t){return s.a.createElement(v.a.Row,null,s.a.createElement(v.a.Cell,null,t+1),s.a.createElement(v.a.Cell,null,e.name),s.a.createElement(v.a.Cell,null,e.score),s.a.createElement(v.a.Cell,null,e.time))}))}s.a.Component;var w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={soal:1,quiz:0,percent:0,time:0,angka1:0,angka2:0,score:0,jawabSementara:0,pengecekan:"",nickname:"",highScore:[]},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"start",value:function(){var e=this;this.setState({quiz:1}),setInterval((function(){return e.detik()}),1e3),this.setState({percent:10,angka1:Math.floor(100*Math.random()),angka2:Math.floor(100*Math.random())})}},{key:"pause",value:function(){this.setState({quiz:2}),this.waktu=this.state.time}},{key:"resume",value:function(){document.getElementById("answerHere").focus(),this.setState({quiz:1,angka1:Math.floor(100*Math.random()),angka2:Math.floor(100*Math.random())})}},{key:"cek",value:function(e){e.preventDefault();var t=this.state.angka1+this.state.angka2;if(10==this.state.soal){parseInt(this.state.jawabSementara)===t&&this.setState({pengecekan:"Benar",score:this.state.score+10}),this.setState({highScore:this.state.highScore.concat([{name:this.state.nickname,score:this.state.score,time:this.state.time}])});this.state.highScore;this.setState({quiz:3,soal:1,percent:0,time:0,angka1:0,angka2:0,jawabSementara:0,pengecekan:""})}else this.setState({pengecekan:"Salah"}),parseInt(this.state.jawabSementara)===t&&this.setState({pengecekan:"Benar",score:this.state.score+10}),document.getElementById("f").reset(),this.setState({percent:this.state.percent+10,angka1:Math.floor(100*Math.random()),angka2:Math.floor(100*Math.random()),jawabSementara:0,soal:this.state.soal+1})}},{key:"componentWillUnmount",value:function(){clearInterval(this.waktu)}},{key:"detik",value:function(){1==this.state.quiz&&this.setState({time:this.state.time+1})}},{key:"inputNickname",value:function(e){this.setState({nickname:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d.a,{centered:!0,size:"small",src:"https://www.diecoding.com/wp-content/uploads/2019/05/square.diecoding.google.bgwhite.512.png"}),s.a.createElement("div",{style:{textAlign:"center",display:0==this.state.quiz||2==this.state.quiz?"none":""}},s.a.createElement("div",{style:{display:3==this.state.quiz?"none":""}},s.a.createElement(p.a,{as:"h1"},"Happy Counting: ",this.state.nickname),s.a.createElement(p.a,{as:"h2"},this.state.time),s.a.createElement(k.a,{percent:this.state.percent,indicating:!0},this.state.soal,"/10 "),s.a.createElement(p.a,{as:"h1"},this.state.angka1," + ",this.state.angka2),s.a.createElement("form",{id:"f",onSubmit:function(t){return e.cek(t)}},s.a.createElement(g.a,{id:"answerHere",autoComplete:"off",autoFocus:!0,action:{color:"teal",labelPosition:"right",icon:"send",content:"Press Enter to Check",disabled:0==this.state.jawabSementara?"disabled":null},placeholder:"Answer Here...",onKeyUp:function(t){return e.setState({jawabSementara:t.target.value})}})),s.a.createElement(p.a,{as:"h4"},"Answer: ",this.state.pengecekan)),s.a.createElement(p.a,{as:"h3"},"Score: ",this.state.score)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(f.a,null),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(g.a,{autoFocus:!0,icon:"user",onKeyPress:function(t){"Enter"===t.key&&e.start()},style:{display:0!=this.state.quiz?"none":""},iconPosition:"left",placeholder:"Input Nickname",onChange:function(t){return e.inputNickname(t)}}),"\xa0",s.a.createElement(E.a,{disabled:""==this.state.nickname?"disabled":null,icon:!0,primary:!0,labelPosition:"left",onClick:function(){return 0==e.state.quiz||3==e.state.quiz?e.start():1==e.state.quiz?e.pause():e.resume()}},s.a.createElement(b.a,{name:0===this.state.quiz||3==this.state.quiz?"play":1===this.state.quiz?"pause":2===this.state.quiz?"play":""}),0===this.state.quiz||3==this.state.quiz?"Play":1===this.state.quiz?"Pause":2===this.state.quiz?"Resume":"")),s.a.createElement("br",null),s.a.createElement("br",null))}}]),t}(s.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(w,null)))}}]),t}(s.a.Component);var q=function(){return s.a.createElement("div",null,s.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[134,1,2]]]);
//# sourceMappingURL=main.0b7198f4.chunk.js.map