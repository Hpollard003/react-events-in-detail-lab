// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    click = (e) => {
        setTimeout(() => {
            e.persist()
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    render() {
        return <button onClick={this.click}>delay</button>
    }

}
export default DelayedButton