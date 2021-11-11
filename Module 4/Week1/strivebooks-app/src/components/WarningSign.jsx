import React, { Component } from "react";
import Alert from "react-bootstrap/Alert"

class WarningSign extends Component {
    render() {
        return <Alert variant='danger'>
            {this.props.name}
        </Alert>  
    }
}

// const WarningSign = (props) => (
//     <Alert variant='danger'>
//         {this.props.name}
//     </Alert>      
// )

export default WarningSign