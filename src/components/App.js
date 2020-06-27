import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
  constructor (){
		super ();
		
		this.state = {
			breakInterval: 5,
			sessionLength: 25,
			timerMinutes: 25,
			isPlay: false
			
		};
		//Break 
		this.onIncreaseBreakInterval = this.onIncreaseBreakInterval.bind(this);
		this.onDecreaseBreakInterval = this.onDecreaseBreakInterval.bind(this);
		//Session
		this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
		this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
		this.onToggleInterval = this.onToggleInterval.bind(this);
		this.onUpdateTimerMinutes = this.onUpdateTimerMinutes.bind(this);
		this.onResetTimer = this.onResetTimer.bind(this);
		this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
		
	}
	
	onIncreaseBreakInterval (){
		this.setState((prevState) => {
			return{
				breakInterval: prevState.breakInterval + 1
			};
		});
	}
	
	onDecreaseBreakInterval (){
		this.setState((prevState) => {
			return{
				breakInterval: prevState.breakInterval - 1
			};
		});
	}
	
	onIncreaseSessionLength(){
		this.setState((prevState) => {
			return{
				sessionLength: prevState.sessionLength + 1,
				timerMinutes: prevState.sessionLength + 1
			};
		});
	}
	
	onDecreaseSessionLength(){
		this.setState((prevState) => {
			return{
				sessionLength: prevState.sessionLength - 1,
				timerMinutes: prevState.sessionLength - 1
			};
		});
	}
	
	onUpdateTimerMinutes(){
		this.setState((prevState) => {
			return{
				timerMinutes: prevState.timerMinutes -1
			}
		})
	}
	
	onToggleInterval (isSession){
		if(isSession){
			this.setState({
			timerMinutes: this.state.sessionLength
		})
	} else {
		this.setState({
			timerMinutes: this.state.breakInterval
		})
	}
}

	onResetTimer (){
		this.setState({
			timerMinutes: this.state.sessionLength
		})
	}
	
	onPlayStopTimer(isPlay){
		this.setState({
			isPlay: isPlay
		})
	}
	
	render(){
		return (
    <main>
		<h2>Pomodoro Clock</h2>
		<section className= "break-time-container">
		<BreakInterval 
		isPlay={this.state.isPlay}
		breakInterval={this.state.breakInterval} 
		increaseBreak={this.onIncreaseBreakInterval} 
		decreaseBreak={this.onDecreaseBreakInterval}/>
		<SessionLength 
		isPlay={this.state.isPlay}
		sessionLength={this.state.sessionLength} 
		increaseSession={this.onIncreaseSessionLength} 
		decreaseSession={this.onDecreaseSessionLength}/>
		</section>
		<Timer
		isPlay={this.state.isPlay}
		timerMinutes={this.state.timerMinutes} 
		breakInterval={this.state.breakInterval}
		updateTimerMinutes= {this.onUpdateTimerMinutes}
		toggleInterval={this.onToggleInterval}
		resetTimer={this.onResetTimer}
		onPlayStopTimer={this.onPlayStopTimer}
		/>
		</main>
		);
	}
}

export default App;

















