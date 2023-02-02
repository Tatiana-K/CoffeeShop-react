import React from 'react'
import {TfiClose} from 'react-icons/tfi'

class Bill extends React.Component {
    constructor(props) {
        super(props)

        this.closeBill = this.closeBill.bind(this)
        //this.clientData = this.clientData.bind(this)
        
    }
    render() {
        return(<div className={this.props.newClass}>
            <TfiClose className="close-icon" onClick={this.closeBill}/>
            <p className="clientData">{this.props.clientData}</p>
            <p className="orderData">{this.props.orderItem}</p>
        </div>
        )
    }

    closeBill() {
        this.props.changeStyle("billHidden")
    }
}

export default Bill