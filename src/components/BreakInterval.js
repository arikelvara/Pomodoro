import React from 'react';

function BreakInterval(props){
	function decreaseCounter (){
		if (props.breakInterval === 1){
			return;
		}
		props.decreaseBreak();
	}
	
	function increaseCounter (){
		if (props.breakInterval === 60){
			return;
		}
		
		props.increaseBreak();
	}
	
	return(
	<section>
		<h4>Break Duration</h4>
		<section className="interval-container">
			<button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseCounter}>Down</button>
			<p className="time-duration">{props.breakInterval}</p>
			<button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseCounter}>Up</button>
		</section>
	</section>
	
	);
}


export default BreakInterval;