import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi, I'm Niall, a software developer <br />
                    based in Dublin, Ireland.<br /></strong></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
