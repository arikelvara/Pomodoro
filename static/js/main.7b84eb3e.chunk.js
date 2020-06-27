(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(7),r=n.n(i),o=n(2),c=n(3),l=n(1),m=n(5),u=n(4);n(13);var h=function(e){return a.a.createElement("section",null,a.a.createElement("h4",null,"Break Duration"),a.a.createElement("section",{className:"interval-container"},a.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",onClick:function(){1!==e.breakInterval&&e.decreaseBreak()}},"Down"),a.a.createElement("p",{className:"time-duration"},e.breakInterval),a.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",onClick:function(){60!==e.breakInterval&&e.increaseBreak()}},"Up")))};var d=function(e){return a.a.createElement("section",null,a.a.createElement("h4",null,"Session Duration"),a.a.createElement("section",{className:"interval-container"},a.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",onClick:function(){1!==e.sessionLength&&e.decreaseSession()}},"Down"),a.a.createElement("p",{className:"time-duration"},e.sessionLength),a.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",onClick:function(){60!==e.sessionLength&&e.increaseSession()}},"Up")))},b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={isSession:!0,timerSeconds:0,intervalId:0},e.playTimer=e.playTimer.bind(Object(l.a)(e)),e.stopTimer=e.stopTimer.bind(Object(l.a)(e)),e.resetTimer=e.resetTimer.bind(Object(l.a)(e)),e.decreaseTimer=e.decreaseTimer.bind(Object(l.a)(e)),e}return Object(c.a)(n,[{key:"playTimer",value:function(){var e=setInterval(this.decreaseTimer,1e3);this.props.onPlayStopTimer(!0),this.setState({intervalId:e})}},{key:"decreaseTimer",value:function(){switch(this.state.timerSeconds){case 0:0===this.props.timerMinutes?this.state.isSession?(this.setState({isSession:!1}),this.props.toggleInterval(this.state.isSession)):(this.setState({isSession:!0}),this.props.toggleInterval(this.state.isSession)):(this.props.updateTimerMinutes(),this.setState({timerSeconds:59}));break;default:this.setState((function(e){return{timerSeconds:e.timerSeconds-1}}))}}},{key:"stopTimer",value:function(){clearInterval(this.state.intervalId),this.props.onPlayStopTimer(!1)}},{key:"resetTimer",value:function(){this.stopTimer(),this.props.resetTimer(),this.props.onPlayStopTimer(!1),this.setState({timerSeconds:0,isSession:!0})}},{key:"render",value:function(){return a.a.createElement("section",null,a.a.createElement("section",{className:"timer-container"},a.a.createElement("h4",null,!0===this.state.isSession?"Session":"Break"),a.a.createElement("span",{className:"time"},this.props.timerMinutes),a.a.createElement("span",{className:"time"},":"),a.a.createElement("span",{className:"time"},0===this.state.timerSeconds?"00":this.state.timerSeconds<10?"0"+this.state.timerSeconds:this.state.timerSeconds)),a.a.createElement("section",{className:"timer-buttons"},a.a.createElement("button",{onClick:this.playTimer},"Play"),a.a.createElement("button",{onClick:this.stopTimer},"Stop"),a.a.createElement("button",{onClick:this.resetTimer},"Restart")))}}]),n}(a.a.Component),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={breakInterval:5,sessionLength:25,timerMinutes:25,isPlay:!1},e.onIncreaseBreakInterval=e.onIncreaseBreakInterval.bind(Object(l.a)(e)),e.onDecreaseBreakInterval=e.onDecreaseBreakInterval.bind(Object(l.a)(e)),e.onIncreaseSessionLength=e.onIncreaseSessionLength.bind(Object(l.a)(e)),e.onDecreaseSessionLength=e.onDecreaseSessionLength.bind(Object(l.a)(e)),e.onToggleInterval=e.onToggleInterval.bind(Object(l.a)(e)),e.onUpdateTimerMinutes=e.onUpdateTimerMinutes.bind(Object(l.a)(e)),e.onResetTimer=e.onResetTimer.bind(Object(l.a)(e)),e.onPlayStopTimer=e.onPlayStopTimer.bind(Object(l.a)(e)),e}return Object(c.a)(n,[{key:"onIncreaseBreakInterval",value:function(){this.setState((function(e){return{breakInterval:e.breakInterval+1}}))}},{key:"onDecreaseBreakInterval",value:function(){this.setState((function(e){return{breakInterval:e.breakInterval-1}}))}},{key:"onIncreaseSessionLength",value:function(){this.setState((function(e){return{sessionLength:e.sessionLength+1,timerMinutes:e.sessionLength+1}}))}},{key:"onDecreaseSessionLength",value:function(){this.setState((function(e){return{sessionLength:e.sessionLength-1,timerMinutes:e.sessionLength-1}}))}},{key:"onUpdateTimerMinutes",value:function(){this.setState((function(e){return{timerMinutes:e.timerMinutes-1}}))}},{key:"onToggleInterval",value:function(e){e?this.setState({timerMinutes:this.state.sessionLength}):this.setState({timerMinutes:this.state.breakInterval})}},{key:"onResetTimer",value:function(){this.setState({timerMinutes:this.state.sessionLength})}},{key:"onPlayStopTimer",value:function(e){this.setState({isPlay:e})}},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement("h2",null,"Pomodoro Clock"),a.a.createElement("section",{className:"break-time-container"},a.a.createElement(h,{isPlay:this.state.isPlay,breakInterval:this.state.breakInterval,increaseBreak:this.onIncreaseBreakInterval,decreaseBreak:this.onDecreaseBreakInterval}),a.a.createElement(d,{isPlay:this.state.isPlay,sessionLength:this.state.sessionLength,increaseSession:this.onIncreaseSessionLength,decreaseSession:this.onDecreaseSessionLength})),a.a.createElement(b,{isPlay:this.state.isPlay,timerMinutes:this.state.timerMinutes,breakInterval:this.state.breakInterval,updateTimerMinutes:this.onUpdateTimerMinutes,toggleInterval:this.onToggleInterval,resetTimer:this.onResetTimer,onPlayStopTimer:this.onPlayStopTimer}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7b84eb3e.chunk.js.map