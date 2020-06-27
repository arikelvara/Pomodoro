import React from 'react';


class Timer extends React.Component {
	
	constructor (){
		super ();
		
		this.state={
			isSession: true,
			timerSeconds: 0,
			intervalId: 0
		};
		this.playTimer = this.playTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.decreaseTimer= this.decreaseTimer.bind(this);
	}
	
	
	playTimer(){
		let intervalId = setInterval(this.decreaseTimer, 1000);
		this.props.onPlayStopTimer(true);
		this.setState({
			intervalId: intervalId
		})
	}
	
	decreaseTimer(){
		switch(this.state.timerSeconds){
			case 0:
				if(this.props.timerMinutes === 0){
					if(this.state.isSession){
						this.setState({
							isSession: false
						});
						
						this.props.toggleInterval(this.state.isSession);
					} else {
						this.setState({
							isSession: true
						});
						this.props.toggleInterval(this.state.isSession);
					}
				} else {
					this.props.updateTimerMinutes()
				this.setState({
					timerSeconds: 59
				})
			}
				break;
		default:
			this.setState((prevState) => {
				return{
					timerSeconds: prevState.timerSeconds - 1 
				}	
			})
			break;
	}
}
	
	stopTimer(){
		clearInterval(this.state.intervalId);
		this.props.onPlayStopTimer(false);
	}
	
	resetTimer(){
		this.stopTimer();
		this.props.resetTimer();
		this.props.onPlayStopTimer(false);
		this.setState({
			timerSeconds: 0,
			isSession: true
		});
		
	}
	

	render(){
		return (
		<section>
			<section className="timer-container">
				<h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
				<span className="time">{this.props.timerMinutes}</span>
				<span className="time">:</span>
				<span className="time">
				{this.state.timerSeconds === 0 ? "00" : this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds : this.state.timerSeconds}
				</span>
			</section>
			<section className="timer-buttons">
				<button onClick={this.playTimer}>Play</button>
				<button onClick={this.stopTimer}>Stop</button>
				<button onClick={this.resetTimer}>Restart</button>
			</section>
		</section>
		);
	}
}

export default Timer;












