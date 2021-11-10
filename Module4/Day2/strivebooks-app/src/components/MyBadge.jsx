import React, { Component } from "react";
import Badge from "react-bootstrap/Badge"

class MyBadge extends Component {
    render() {
        return <Badge className="m-auto" variant={this.props.color}>{this.props.text}</Badge>
    }
}

export default MyBadge 



/* class Cat  {
    constructor(name, color) {
        this.name= name,
        this.color = color
    }
    sayHello() {
        console.log("The ", this.color, " cat says Meaw")
 }
}

const newCat = new Cat("Lylla", "brown")
newCat.sayHello() 
*/