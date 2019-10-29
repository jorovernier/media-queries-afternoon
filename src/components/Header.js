import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.toggler = this.toggler.bind(this);
    }

    toggler(){
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render(){

        return (
            <header>
                <div>
                    <div className='logo'>
                        <a href='#/'>Start Bootstrap</a>
                    </div>

                    <button onClick={this.toggler}>
                        MENU ☰
                    </button>

                    <nav className={this.state.show ? 'show' : ''}>
                        <ul>
                            <li>
                                <a href='#/services' >SERVICES</a>
                            </li>
                            <li>
                                <a href='#/portfolio' >PORTFOLIO</a>
                            </li>
                            <li>
                                <a href='#/about' >ABOUT</a>
                            </li>
                            <li>
                                <a href='#/team' >TEAM</a>
                            </li>
                            <li>
                                <a href='#/contact' >CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}