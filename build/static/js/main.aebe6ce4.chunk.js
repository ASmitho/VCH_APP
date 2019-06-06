(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,n){},198:function(e,t,n){e.exports=n.p+"static/media/psych_logo.6956dbda.jpg"},201:function(e,t,n){e.exports=n(659)},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},654:function(e,t,n){},657:function(e,t,n){},658:function(e,t,n){},659:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(106),i=n.n(s),o=(n(208),n(35)),c=n(36),l=n(39),u=n(37),h=n(38),m=(n(209),n(43)),d=n(11),p=n(198),_=n.n(p);n(210),n(109);function f(e){return void 0===e||0==e.length}function g(e,t,a,r,s,i,o,c,l){var u=arguments.length,h=0;if(u>9||u<6)throw new Error("Incorrect number of arguments");if((u<7||f(o))&&(o=.01),u<8||f(c))h=500;else{if(c<=0)throw new Error("Range must be greater than 0");h=c/o,h=2*Math.ceil(h/2)}if((u<9||f(l))&&(l=0),!isFinite(e)||isNaN(e))throw new Error("tGuess must be real and finite");var m=function(e,t,n,a,r,s,i,o){return{updatePdf:1,warnPdf:1,normalizePdf:1,tGuess:e,tGuessSd:t,pThreshold:n,xThreshold:0,beta:a,delta:r,gamma:s,grain:i,dim:o,i:[],x:[],x2:[],p2:[],s2:[],intensity:[],response:[],trialCount:0,quantileOrder:0}}(e,t,a,r,s,i,o,h);return m=function(e,t){var a=n(66);if(arguments.length<1)throw new Error("Usage: QuestRecompute( q, plotIt = 0 )");if(!e.updatePdf)return;e.gamma>e.pThreshold&&(console.log("Reducing gamma from %.2f to 0.5"),e.gamma=.5);(arguments.length<2||f(t))&&(t=0);e.i=[],e.x=[],e.x2=[],e.p2=[],e.s2=[];for(var r=-e.dim/2;r<=e.dim/2;r++)e.i.push(r);e.x=e.i.map(function(t){return t*e.grain});var s=e.x.map(function(t){return t/e.tGuessSd}),i=s.map(function(e){return Math.pow(e,2)});e.pdf=i.map(function(e){return-.5*e}).map(function(e){return Math.exp(e)});var o=O(e.pdf);e.pdf=e.pdf.map(function(e){return e/o});var c=[];for(r=-e.dim;r<=e.dim;r++)c.push(r);e.x2=c.map(function(t){return a.eval(t+"*"+e.grain)}),s=e.x2.map(function(t){return a.eval(t+"*"+e.beta)}),e.p2=s.map(function(t){return a.eval(e.delta+"*"+e.gamma+"+ ( 1 -"+e.delta+" ) * ( 1 - ( 1-"+e.gamma+") *e^(-10 ^ "+t+"))")});if(Math.min(e.p2[0],e.p2[e.p2.length-1])>e.pThreshold||Math.max(e.p2[0],e.p2[e.p2.length-1])<e.pThreshold)throw new Error("psychometric function range ["+Math.min.apply(null,e.p2)+" "+Math.max.apply(null,e.p2)+" ] omits "+e.pThreshold+" threshold");var l=n(104).linear;e.xThreshold=l(e.pThreshold,e.p2,e.x2);for(var r=0;r<e.p2.length;r++)if(!isFinite(e.p2[r]))throw new Error("psychometric function p2 is not finite"+r);e.p2=e.x2.map(function(t){return a.eval(e.delta+"*"+e.gamma+"+ ( 1 -"+e.delta+" ) * ( 1 - ( 1-"+e.gamma+") *e^(-10 ^ ("+e.beta+"* ("+t+"+"+e.xThreshold+"))))")});var u=e.p2.slice(),h=(u=u.reverse()).map(function(e){return 1-e}),m=u;if(e.s2[0]=h,e.s2[1]=m,0==e.intensity.length||0==e.response.length){var d=new Array(1e4).fill(0);e.trialCount=0,e.intensity=d,e.response=d}for(var p=0;p<e.s2.length;p++)for(r=0;r<e.s2[p].length;r++)if(!isFinite(e.s2[p][r]))throw new Error("psychometric function s2 is not finite"+r);var _=e.p2[0],g=e.p2[e.p2.length-1],w=g*Math.log(g+Number.EPSILON)-_*Math.log(_+Number.EPSILON)+(1-g+Number.EPSILON)*Math.log(1-g+Number.EPSILON)-(1-_+Number.EPSILON)*Math.log(1-_+Number.EPSILON);w=1/(1+Math.exp(w/(_-g))),e.quantileOrder=(w-_)/(g-_);for(var y=0;y<e.pdf.length;y++)if(!isFinite(e.pdf[y]))throw new Error("prior pdf is not finite");for(p=0;p<e.trialCount;p++){var E=Math.max(-1e10,Math.min(1e10,e.intensity[p])),b=e.i.map(function(t){return e.pdf.length+t-Math.round((E-e.tGuess)/e.grain)});b[0]<1&&(b=b.map(function(e){return e+1-b[0]})),b[b.length-1]>e.s2[0].length&&(b=b.map(function(t){return t+e.s2.length-b[b.length-1]}));var v=b.map(function(t){return e.s2[e.response[p]][t]});for(r=0;r<v.length;r++)e.pdf[r]=e.pdf[r]*v[r];e.normalizePdf&&p%100==0&&function(){var t=O(e.pdf);e.pdf=e.pdf.map(function(e){return e/t})}()}if(e.normalizePdf){var k=O(e.pdf);e.pdf=e.pdf.map(function(e){return e/k})}for(r=0;r<e.pdf.length;r++)if(!isFinite(e.pdf[r]))throw new Error("pdf is not finite");return e}(m,l)}function w(e,t,n){if(3!=arguments.length)throw new Error("Incorrect number of parameters (3) ");if(void 0===e)throw new Error("q is undefined ");if(!isFinite(t)||isNaN(t))throw new Error("Intensity must be real, not complex");if(n<0||n>=e.s2.length)throw new Error("response "+n+" is out of range 0 to "+e.s2.length);if(1==e.updatePdf){var a=Math.max(-1e10,Math.min(1e10,t)),r=e.i.map(function(t){return e.pdf.length+t-Math.round((a-e.tGuess)/e.grain)});if(r[0]<1||r[r.length-1]>e.s2[0].length){if(1==e.warnPdf){var s=(1-e.pdf.length-e.i[0])*e.grain+e.tGuess,i=(e.s2[0].length-e.pdf.length-e.i[e.i.length-1])*e.grain+e.tGuess;alert("QuestUpdate: intensity "+a+" out of range "+s+" to "+i+'. Pdf will be inexact. Suggest that you increase "range" in call to QuestCreate.')}r=r[0]<1?r.map(function(e){return e+1-r[0]}):r.map(function(t){return t+e.s2[0].length-r[r.length-1]})}for(var o=0;o<r.length;o++)e.pdf[o]=e.pdf[o]*e.s2[n][r[o]-1];if(e.normalizePdf){var c=O(e.pdf);e.pdf=e.pdf.map(function(e){return e/c})}}if(e.trialCount+=1,e.trialCount>e.intensity.length)for(var l=0;l<1e4;l++)e.intensity.push(0),e.response.push(0);for(var u=0;u<e.trialCount;u++)e.intensity[u]=.5,e.response[u]=n;return e}function y(e){if(1!=arguments.length)throw new Error("Usage: t=QuestMean(q)");var t=O(e.pdf),n=O(k(e.pdf,e.x));return e.tGuess+n/t}function E(e){if(1!=arguments.length)throw new Error("Usage: sd=QuestSd(q)");var t=O(e.pdf),n=e.x.map(function(e){return Math.pow(e,2)}),a=O(k(e.pdf,e.x))/t;return Math.sqrt(O(k(e.pdf,n))/t-Math.pow(a,2))}function b(e,t){if(arguments.length>2)throw new Error("Usage: intensity=QuestQuantile(q,[quantileOrder])");if(arguments.length<2&&(t=e.quantileOrder),t>1||t<0)throw new Error("quantileOrder"+t+" is outside range 0 to 1.");var a=function(e){var t=[];return e.reduce(function(e,n,a){return t[a]=e+n},0),t}(e.pdf);if(!isFinite(a[a.length-1]))throw new Error("pdf is not finite");if(0==a[a.length-1])throw new Error("pdf is all zero");if(t<a[0])return e.tGuess+e.x[0];if(t>a[a.length-1])return e.tGuess+e.x[e.x.length-1];var r=a.slice();r.unshift(-1);var s=function(e){for(var t=[],n=0;n<e.length;n++)e[n]>0&&t.push(n);return t}(function(e){for(var t=[],n=0;n<e.length-1;n++)t.push(e[n+1]-e[n]);return t}(r));if(s.length<2)throw new Error("pdf has only "+s.length+" nonzero point(s)");var i=n(104).linear,o=v(a,s),c=v(e.x,s);return e.tGuess+i(t*a[a.length-1],o,c)[0]}function v(e,t){for(var n=[],a=0;a<t.length;a++)n.push(e[t[a]]);return n}function k(e,t){return e.map(function(e,n){return e*t[n]})}function O(e){return e.reduce(function(e,t){return e+t},0)}var S=n(29),x=function(e){return{type:"ADD_RESPONSE_1",payload:e}},C=function(e){return{type:"ADD_RESPONSE_TIME_1",payload:e}},j=function(e){return{type:"ADD_CONTRAST_1",payload:e}},N=function(e){return{type:"ADD_ARRAY",payload:e}},T=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keyFunction=n.keyFunction.bind(Object(d.a)(Object(d.a)(n))),n.state={continue:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"keyFunction",value:function(e){81===e.keyCode&&(alert("User has Requested to Continue"),this.setState(function(e,t){return{continue:!0}}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyFunction,!1)}},{key:"render",value:function(){return!0===this.state.continue?r.a.createElement(m.a,{to:"/Instructions"}):r.a.createElement("div",{className:"Welcome"},r.a.createElement("input",{type:"hidden"}),r.a.createElement("header",{className:"Welcome-header"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",{className:"Welcome-text"},r.a.createElement("span",{className:"bigger"},"Welcome to the study! "),r.a.createElement("br",null),r.a.createElement("br",null),"Please enter responses to the questions asked by pressing the:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null," 'Q' key for 'YES I SEE IT'")," or ",r.a.createElement("b",null," 'E' key for \"NO I DO NOT'"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)," Sometimes it may be difficult to answer, but if you do not know, please make your best guess.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)," PRESS the ",r.a.createElement("b",null," YES I SEE IT / 'Q' key")," to CONTINUE")),r.a.createElement("a",{href:"https://medicine.yale.edu/psychiatry/care/cmhc/",title:"Learn more about the Connecticut Mental Health Center",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:_.a,className:"Site-link",alt:"logo"}))))}}]),t}(a.Component),I=Object(S.c)(function(e){return{data:e.data}},function(e){return{add_response_1:function(t){return e(x(t))},add_array:function(t){return e(N(t))}}})(T),M=(n(654),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keyFunction=n.keyFunction.bind(Object(d.a)(Object(d.a)(n))),n.state={continue:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"keyFunction",value:function(e){81===e.keyCode&&(alert("User has Requested to Continue"),this.setState(function(e,t){return{continue:!0}}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyFunction,!1)}},{key:"render",value:function(){return!0===this.state.continue?r.a.createElement(m.a,{to:"/Trial"}):r.a.createElement("div",{className:"Instructions"},r.a.createElement("input",{type:"hidden"}),r.a.createElement("header",{className:"Instructions-header"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",{className:"Instructions-text"},"This is a vision test.",r.a.createElement("br",null),r.a.createElement("br",null)," A visual white noise will be shown throughout the experiment.",r.a.createElement("br",null),r.a.createElement("br",null)," A striped-texture will appear inside the white noise when a tone is played.",r.a.createElement("br",null),r.a.createElement("br",null)," Press ",r.a.createElement("b",null,' "Q"/YES ')," if you ",r.a.createElement("b",null," DO "),"see the stripes.",r.a.createElement("br",null),r.a.createElement("br",null)," Press ",r.a.createElement("b",null,' "E"/NO ')," if you ",r.a.createElement("b",null," DO NOT ")," see the stripes.",r.a.createElement("br",null),r.a.createElement("br",null)," Please respond as ",r.a.createElement("b",null," QUICKLY ")," and as ",r.a.createElement("b",null," ACCURATELY ")," as you ",r.a.createElement("b",null," POSSIBLY CAN "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),' PRESS "Q"/YES TO BEGIN A SHORT PRACTICE SESSION'))))}}]),t}(a.Component)),D=n(75),F=n.n(D),P=n(108);n(195);function R(){var e={background:127.5,angle:Math.floor(135*Math.random())+45,imsize:256,initcontrast:.5,threshold:.2,phases:[0,.25],phase:0,alpha:.5,ppd:160,frequency:0};return e.phase=e.phases[Math.round(Math.random())],e.frequency=2/e.ppd,e}function z(e,t){for(var n=[],a=[],r=1;r<e.imsize+1;r++)for(var s=1;s<e.imsize+1;s++)n[4*(r-1+(s-1)*e.imsize)+0]=r-(e.imsize+1)/2,n[4*(r-1+(s-1)*e.imsize)+1]=r-(e.imsize+1)/2,n[4*(r-1+(s-1)*e.imsize)+2]=r-(e.imsize+1)/2,n[4*(r-1+(s-1)*e.imsize)+3]=r-(e.imsize+1)/2,a[4*(r-1+(s-1)*e.imsize)+0]=s-(e.imsize+1)/2,a[4*(r-1+(s-1)*e.imsize)+1]=s-(e.imsize+1)/2,a[4*(r-1+(s-1)*e.imsize)+2]=s-(e.imsize+1)/2,a[4*(r-1+(s-1)*e.imsize)+3]=s-(e.imsize+1)/2;for(var i=[],o=0;o<n.length&&o<a.length;o++)i[o]=.5*Math.cos(2*Math.PI*(e.frequency*(Math.sin(Math.PI/180*e.angle)*n[o]+Math.cos(Math.PI/180*e.angle)*a[o])+e.phase))*t;return i.map(function(t){return e.background+t*e.background})}var A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keyFunction=n.keyFunction.bind(Object(d.a)(Object(d.a)(n))),n.create_noise=n.create_noise.bind(Object(d.a)(Object(d.a)(n))),n.state={continue:!1,counter:0,responses_1:[],contrast_array_1:[],response_time_1:[],ratings_1:[],responses_2:[],contrast_array_2:[],response_time_2:[],ratings_2:[],time_window:!1,time_window_start:0,time_window_rating:!1,limit:100,contrast_flag:1},n.canvasRef=r.a.createRef(),n.audioContext=new AudioContext,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"create_noise",value:function(e,t){var a,r=[.2,.5,.75],s=r.length,i=r,o=0,c=new(n(196)),l=document.getElementById("c"),u=l.getContext("2d"),h=u.getImageData(0,0,l.width,l.height),m=h.data,d=0,p=R(),_=z(p,0),f=Math.floor(20*Math.random()),g=100,w=0,y=void 0,E=this;function b(){return v.apply(this,arguments)}function v(){return(v=Object(P.a)(F.a.mark(function t(){var n,r,v,k,O,S,x,C,j,N;return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(d==g+f&&(o=E.state.counter,w=i[o++],console.log(w),n=(new Date).getTime()/1e3,console.log("time on ",n),E.setState({time_window:!0,time_window_rating:!0,time_window_start:n}),console.log(E.state.responses_1,E.state.ratings_1,E.state.response_time_1,E.state.contrast_array_1),a=z(p,w),q(50,830,300,e)),r=0;r<256;r++)for(v=0;v<256;v++)d==g+f||d==g+f+1||d==g+f+2||d==g+f+3||d==g+f+4||d==g+f+5||d==g+f+6||d==g+f+7||d==g+f+8||d==g+f+9||d==g+f+10||d==g+f+11||d==g+f+12||d==g+f+13||d==g+f+14||d==g+f+15||d==g+f+16||d==g+f+17||d==g+f+18||d==g+f+19||d==g+f+20||d==g+f+21||d==g+f+22||d==g+f+23||d==g+f+24||d==g+f+25||d==g+f+26||d==g+f+27||d==g+f+28||d==g+f+29||d==g+f+30?(d==g+f+30&&(d=0),k=.4*c.noise3D(r/8,v/8,d/8)+.35,m[4*(r+256*v)+0]=p.alpha*a[4*(r+256*v)+0]+(1-p.alpha)*k*250,m[4*(r+256*v)+1]=p.alpha*a[4*(r+256*v)+1]+(1-p.alpha)*k*250,m[4*(r+256*v)+2]=p.alpha*a[4*(r+256*v)+2]+(1-p.alpha)*k*250,m[4*(r+256*v)+3]=255):(n=(new Date).getTime()/1e3,E.state.time_window_start+2==n&&(E.setState({time_window:!1,time_window_rating:!1}),E.state.contrast_array_1.length<E.state.responses_1.length&&E.setState({contrast_array_1:E.state.contrast_array_1.concat([w])}),E.state.responses_1.length!=E.state.ratings_1.length&&(E.state.responses_1.length>E.state.ratings_1.length?(console.log("response and response time discarded",E.state.responses_1,E.state.response_time_1,E.state.ratings_1,E.state.contrast_array_1),E.setState({responses_1:E.state.responses_1.slice(0,E.state.ratings_1.length),response_time_1:E.state.response_time_1.slice(0,E.state.ratings_1.length),counter:E.state.counter-1,contrast_array_1:E.state.contrast_array_1.slice(0,E.state.ratings_1.length)})):(console.log("rating discarded",E.state.responses_1,E.state.ratings_1,E.state.contrast_array_1),E.setState({ratings_1:E.state.ratings_1.slice(0,E.state.responses_1.length)}))),console.log("time off ",n)),k=.4*c.noise3D(r/8,v/8,d/8)+.35,m[4*(r+256*v)+0]=p.alpha*_[4*(r+256*v)+0]+(1-p.alpha)*k*250,m[4*(r+256*v)+1]=p.alpha*_[4*(r+256*v)+1]+(1-p.alpha)*k*250,m[4*(r+256*v)+2]=p.alpha*_[4*(r+256*v)+2]+(1-p.alpha)*k*250,m[4*(r+256*v)+3]=255);if(d++,u.putImageData(h,0,0),O=l.width/8,S=l.height/8,x=l.width/2-O/2,C=l.height/2-S/2,(j=new Image).src="https://www.shareicon.net/data/256x256/2015/12/04/682310_cross_512x512.png",u.fillStyle="gray",u.fillRect(x,C,O,S),u.drawImage(j,x,C,O,S),o!=s){t.next=19;break}for(window.cancelAnimationFrame(y),N=0;N<s;N++)E.props.add_response_1(E.state.responses_1[N]),E.props.add_response_time_1(E.state.response_time_1[N]),E.props.add_contrast_1(E.state.contrast_array_1[N]);return E.audioContext.close(),E.setState({continue:!0}),t.abrupt("return");case 19:o<s&&(y=window.requestAnimationFrame(b));case 20:case"end":return t.stop()}},t)}))).apply(this,arguments)}b.call(E)}},{key:"keyFunction",value:function(e){var t=(new Date).getTime()/1e3;81===e.keyCode&&1==this.state.time_window&&(this.setState({counter:this.state.counter+1,responses_1:this.state.responses_1.concat([1]),response_time_1:this.state.response_time_1.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),69===e.keyCode&&1==this.state.time_window&&(this.setState({counter:this.state.counter+1,responses_1:this.state.responses_1.concat([0]),response_time_1:this.state.response_time_1.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),49!==e.keyCode&&50!==e.keyCode&&51!==e.keyCode&&52!==e.keyCode&&53!==e.keyCode||1!=this.state.time_window_rating||this.setState({ratings_1:this.state.ratings_1.concat([e.keyCode-48]),time_window_rating:!1})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyFunction,!1),0==this.state.continue&&this.create_noise(this.audioContext)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyFunction,!1)}},{key:"render",value:function(){return 1==this.state.continue?(alert("Trial completed"),r.a.createElement(m.a,{to:"/Complete"})):r.a.createElement("div",{className:"Trial"},r.a.createElement("input",{type:"hidden"}),r.a.createElement("header",{className:"Trial-header"},r.a.createElement("canvas",{id:"c",width:"256",height:"256",style:{zIndex:"0",position:"fixed",left:"25%",width:"50%",height:"auto"}}),r.a.createElement("canvas",{id:"c2",width:"256",height:"256",style:{zIndex:"1",position:"fixed",left:"25%",width:"50%",height:"auto"}})))}}]),t}(a.Component),Q=Object(S.c)(function(e){return{data:e.data}},function(e){return{add_response_1:function(t){return e(x(t))},add_response_time_1:function(t){return e(C(t))},add_contrast_1:function(t){return e(j(t))},add_array:function(t){return e(N(t))}}})(A);function q(e,t,n,a){if(a){var r=a.createOscillator(),s=a.createGain();r.connect(s),r.value=t,s.connect(a.destination),s.gain.value=e/100,r.start(a.currentTime),r.stop(a.currentTime+n/1e3)}}n(657);var L=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))},U=(n(658),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keyFunction=n.keyFunction.bind(Object(d.a)(Object(d.a)(n))),n.state={continue:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"keyFunction",value:function(e){81===e.keyCode&&(alert("User has Requested to Continue"),this.setState(function(e,t){return{continue:!0}}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyFunction,!1)}},{key:"render",value:function(){return console.log(this.props.data),!0===this.state.continue?r.a.createElement(m.a,{to:"/TrialQ"}):r.a.createElement("div",{className:"Complete"},r.a.createElement("header",{className:"Complete-header"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",{className:"Complete-text"},"Congratulations",r.a.createElement("br",null),r.a.createElement("br",null)," You have completed the first trial",r.a.createElement("br",null),r.a.createElement("br",null)," You responses have been recorded:",r.a.createElement("br",null),r.a.createElement("br",null),"Responses:",this.props.data.responses_1.map(function(e,t){return r.a.createElement("li",{key:t,style:{listStyleType:"none"}},e)}),"Response Times:",this.props.data.response_time_1.map(function(e,t){return r.a.createElement("li",{key:t,style:{listStyleType:"none"}},e)}),"Contrasts:",this.props.data.contrast_1.map(function(e,t){return r.a.createElement("li",{key:t,style:{listStyleType:"none"}},e)}),r.a.createElement("br",null),r.a.createElement("br",null)))))}}]),t}(a.Component)),G=Object(S.c)(function(e){return{data:e.data}})(U),Y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).keyFunction=n.keyFunction.bind(Object(d.a)(Object(d.a)(n))),n.create_noise=n.create_noise.bind(Object(d.a)(Object(d.a)(n))),n.process_data=n.process_data.bind(Object(d.a)(Object(d.a)(n))),n.state={continue:!1,counter:0,counter2:0,change:!1,responses_1:[],contrast_array_1:[],response_time_1:[],ratings_1:[],responses_2:[],contrast_array_2:[],response_time_2:[],ratings_2:[],time_window:!1,time_window_start:0,time_window_rating:!1,limit:100,rating_window:!0,currentQ:1},n.canvasRef=r.a.createRef(),n.audioContext=new AudioContext,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"process_data",value:function(e,t){var a=n(66),r=y(e),s=E(e),i=y(t),o=E(t);a.mean([r,i]),a.mean([s,o])}},{key:"create_noise",value:function(e){var t,a=80,r=0,s=0,i=0,o=[0,.5,1,0,.5,1,0,.5,1,0,.5,1],c=(a=o.length,new(n(196))),l=document.getElementById("c"),u=l.getContext("2d"),h=u.getImageData(0,0,l.width,l.height),m=h.data,d=0,p=.5,_=g(p,.1,.75,3.5,.01,.01,.001,20),f=g(p,.1,.75,3.5,.01,.01,.001,20),y=R(),E=z(y,0),v=Math.floor(20*Math.random()),k=100,O=0,S=void 0,x=this;function C(){return j.apply(this,arguments)}function j(){return(j=Object(P.a)(F.a.mark(function n(){var o,g,j,N,T,I,M,D,P;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(d==k+v&&(r=x.state.counter,s=x.state.counter2,i=r+s,console.log(b(_),b(f)),r==s&&x.setState({currentQ:1}),r!=s&&(s++,x.setState({currentQ:2})),1==x.state.currentQ&&(O=(r=0)?p+.3:b(_)),2==x.state.currentQ&&(O=(s=0)?p-.3:b(f)),console.log(O),o=(new Date).getTime()/1e3,console.log("time on ",o),x.setState({time_window:!0,time_window_rating:!0,time_window_start:o}),console.log("for 1",x.state.responses_1,x.state.ratings_1,x.state.response_time_1,x.state.contrast_array_1),console.log("for 2",x.state.responses_2,x.state.ratings_2,x.state.response_time_2,x.state.contrast_array_2),t=z(y,O),B(50,830,300,e)),g=0;g<256;g++)for(j=0;j<256;j++)d==k+v||d==k+v+1||d==k+v+2||d==k+v+3||d==k+v+4||d==k+v+5||d==k+v+6||d==k+v+7||d==k+v+8||d==k+v+9||d==k+v+10||d==k+v+11||d==k+v+12||d==k+v+13||d==k+v+14||d==k+v+15||d==k+v+16||d==k+v+17||d==k+v+18||d==k+v+19||d==k+v+20||d==k+v+21||d==k+v+22||d==k+v+23||d==k+v+24||d==k+v+25||d==k+v+26||d==k+v+27||d==k+v+28||d==k+v+29||d==k+v+30?(d==k+v+30&&(d=0),N=.4*c.noise3D(g/8,j/8,d/8)+.35,m[4*(g+256*j)+0]=y.alpha*t[4*(g+256*j)+0]+(1-y.alpha)*N*250,m[4*(g+256*j)+1]=y.alpha*t[4*(g+256*j)+1]+(1-y.alpha)*N*250,m[4*(g+256*j)+2]=y.alpha*t[4*(g+256*j)+2]+(1-y.alpha)*N*250,m[4*(g+256*j)+3]=255):(o=(new Date).getTime()/1e3,x.state.time_window_start+2==o&&(x.setState({time_window:!1,time_window_rating:!1}),1==x.state.currentQ&&(x.state.contrast_array_1.length<x.state.responses_1.length&&(x.setState({contrast_array_1:x.state.contrast_array_1.concat([O])}),x.setState({change:!0})),x.state.responses_1.length!=x.state.ratings_1.length&&(x.state.responses_1.length>x.state.ratings_1.length?(console.log("response and response time discarded",x.state.responses_1,x.state.response_time_1,x.state.ratings_1,x.state.contrast_array_1),x.setState({responses_1:x.state.responses_1.slice(0,x.state.ratings_1.length),response_time_1:x.state.response_time_1.slice(0,x.state.ratings_1.length),counter:x.state.counter-1,contrast_array_1:x.state.contrast_array_1.slice(0,x.state.ratings_1.length)})):(console.log("rating discarded",x.state.responses_1,x.state.ratings_1,x.state.contrast_array_1),x.setState({ratings_1:x.state.ratings_1.slice(0,x.state.responses_1.length)})))),2==x.state.currentQ&&(x.state.contrast_array_2.length<x.state.responses_2.length&&(x.setState({contrast_array_2:x.state.contrast_array_2.concat([O])}),x.setState({change:!0})),x.state.responses_2.length!=x.state.ratings_2.length&&(x.state.responses_2.length>x.state.ratings_2.length?(console.log("response and response time discarded",x.state.responses_2,x.state.response_time_2,x.state.ratings_2,x.state.contrast_array_2),x.setState({responses_2:x.state.responses_2.slice(0,x.state.ratings_2.length),response_time_2:x.state.response_time_2.slice(0,x.state.ratings_2.length),counter:x.state.counter-1,contrast_array_2:x.state.contrast_array_2.slice(0,x.state.ratings_2.length)})):(console.log("rating discarded",x.state.responses_2,x.state.ratings_2,x.state.contrast_array_2),x.setState({ratings_2:x.state.ratings_2.slice(0,x.state.responses_2.length)})))),console.log("time off ",o)),N=.4*c.noise3D(g/8,j/8,d/8)+.35,m[4*(g+256*j)+0]=y.alpha*E[4*(g+256*j)+0]+(1-y.alpha)*N*250,m[4*(g+256*j)+1]=y.alpha*E[4*(g+256*j)+1]+(1-y.alpha)*N*250,m[4*(g+256*j)+2]=y.alpha*E[4*(g+256*j)+2]+(1-y.alpha)*N*250,m[4*(g+256*j)+3]=255);if(d++,u.putImageData(h,0,0),T=l.width/8,I=l.height/8,M=l.width/2-T/2,D=l.height/2-I/2,(P=new Image).src="https://www.shareicon.net/data/256x256/2015/12/04/682310_cross_512x512.png",u.fillStyle="gray",u.fillRect(M,D,T,I),u.drawImage(P,M,D,T,I),i!=a){n.next=18;break}return window.cancelAnimationFrame(S),x.audioContext.close(),x.setState({continue:!0}),n.abrupt("return");case 18:i<a&&(S=window.requestAnimationFrame(C),1==x.state.currentQ&&1==x.state.change&&(console.log("changing the q"),_=w(_,[x.state.contrast_array_1[x.state.contrast_array_1.length-1]],[x.state.responses_1[x.state.responses_1.length-1]]),console.log(b(_)),x.setState({change:!1})),2==x.state.currentQ&&1==x.state.change&&(f=w(f,x.state.contrast_array_1[x.state.contrast_array_1.length-1],x.state.responses_1[x.state.responses_1.length-1]),x.setState({change:!1})));case 19:case"end":return n.stop()}},n)}))).apply(this,arguments)}C.call(x)}},{key:"keyFunction",value:function(e){var t=(new Date).getTime()/1e3;81===e.keyCode&&1==this.state.time_window&&1==this.state.currentQ&&(this.setState({counter:this.state.counter+1,responses_1:this.state.responses_1.concat([1]),response_time_1:this.state.response_time_1.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),81===e.keyCode&&1==this.state.time_window&&2==this.state.currentQ&&(this.setState({counter2:this.state.counter2+1,responses_2:this.state.responses_2.concat([1]),response_time_2:this.state.response_time_2.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),69===e.keyCode&&1==this.state.time_window&&1==this.state.currentQ&&(this.setState({counter:this.state.counter+1,responses_1:this.state.responses_1.concat([0]),response_time_1:this.state.response_time_1.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),69===e.keyCode&&1==this.state.time_window&&2==this.state.currentQ&&(this.setState({counter:this.state.counter2+1,responses_2:this.state.responses_2.concat([0]),response_time_2:this.state.response_time_2.concat([t-this.state.time_window_start]),time_window:!1}),this.state.counter==this.state.limit&&this.setState({continue:!0})),49!==e.keyCode&&50!==e.keyCode&&51!==e.keyCode&&52!==e.keyCode&&53!==e.keyCode||1!=this.state.time_window_rating||(1==this.state.currentQ?this.setState({ratings_1:this.state.ratings_1.concat([e.keyCode-48]),time_window_rating:!1}):this.setState({ratings_2:this.state.ratings_2.concat([e.keyCode-48]),time_window_rating:!1}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyFunction,!1),0==this.state.continue&&this.create_noise(this.audioContext)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyFunction,!1)}},{key:"render",value:function(){return 1==this.state.continue?(alert("Trial completed"),r.a.createElement(m.a,{to:"/Complete"})):r.a.createElement("div",{className:"Trial"},r.a.createElement("input",{type:"hidden"}),r.a.createElement("header",{className:"Trial-header"},r.a.createElement("canvas",{id:"c",width:"256",height:"256",style:{zIndex:"0",position:"fixed",left:"25%",width:"50%",height:"auto"}}),r.a.createElement("canvas",{id:"c2",width:"256",height:"256",style:{zIndex:"1",position:"fixed",left:"25%",width:"50%",height:"auto"}})))}}]),t}(a.Component),W=Object(S.c)(function(e){return{data:e.data}},function(e){return{add_response_1:function(t){return e(x(t))},add_response_time_1:function(t){return e(C(t))},add_contrast_1:function(t){return e(j(t))},add_array:function(t){return e(N(t))}}})(Y);function B(e,t,n,a){if(a){var r=a.createOscillator(),s=a.createGain();r.connect(s),r.value=t,s.connect(a.destination),s.gain.value=e/100,r.start(a.currentTime),r.stop(a.currentTime+n/1e3)}}var H=function(){return r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:I}),r.a.createElement(m.b,{path:"/Welcome",exact:!0,component:I}),r.a.createElement(m.b,{path:"/Instructions",exact:!0,component:M}),r.a.createElement(m.b,{path:"/Trial",exact:!0,component:Q}),r.a.createElement(m.b,{path:"/Complete",exact:!0,component:G}),r.a.createElement(m.b,{path:"/TrialQ",exact:!0,component:W}),r.a.createElement(m.b,{component:L}))},J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null))}}]),t}(a.Component),V=n(58),X=n(32),K=n(52),Z=n(197),$=n(134),ee=n(110),te=n(111),ne={responses_1:[],responses_2:[],response_time_1:[],response_time_2:[],contrast_1:[],contrast_2:[],test:1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ARRAY":return e+1;case"ADD_RESPONSE_1":return Object(te.a)({},e,{responses_1:[].concat(Object(ee.a)(e.responses_1),[t.payload])});case"ADD_RESPONSE_TIME_1":return Object(te.a)({},e,{response_time_1:[].concat(Object(ee.a)(e.response_time_1),[t.payload])});case"ADD_CONTRAST_1":return Object(te.a)({},e,{contrast_1:[].concat(Object(ee.a)(e.contrast_1),[t.payload])});default:return e}},re=function(e){return Object(K.c)({data:ae,router:Object($.a)(e)})},se=Object(X.a)();var ie=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d;return Object(K.e)(re(se),e,t(Object(K.a)(Object(Z.a)(se))))}({history:se});i.a.render(r.a.createElement(S.a,{store:ie},r.a.createElement(V.a,{history:se,basename:"/VCH_APP"},r.a.createElement(J,null))),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.aebe6ce4.chunk.js.map