import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <a className="logo" href="index.html">{this.props.title}</a>
            </header>
        )
    }
}

export default Header