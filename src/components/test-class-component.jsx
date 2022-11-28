import React from "react"

/*
    Note: This class component describes three ways of binding 
    functions correctly. 
*/
class TestClassComponent extends React.Component {
	constructor(){
		super();
		this.handleClick2 = this.handleClick1.bind(this); 
	}

	handleClick1() {
		console.log("Button 1 clicked", this)
	}

	handleClick3 = () => {console.log("Button 3 Clicked", this)}

	render() {
		return (
			<div>
				<button onClick={this.handleClick1()}>Button 1</button>
				<button onClick={this.handleClick1}>Button 2</button>
				<button onClick={this.handleClick2}>Button 3</button>
				<button onClick={this.handleClick3}>Button 4</button>
				<button onClick={() => this.handleClick1()}>Button 4</button>
			</div>
		)
	}
}

export default TestClassComponent
