import React, { Component } from 'react';
import './Education.css';
import AP from '../NewFolder1/AP_Logo.png'

export class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            button: 'Show Courses',
            show: false
        }
    }

    transcript() {
        if (this.state.show) {
            this.setState({ show: false, button: 'Show Courses' })

        } else {
            this.setState({
                show: true,
                button: 'Hide Courses'
            })
        }
    }
    render() {
        if (this.state.show) {
            return (
                <div id='education' className='edu'>
                    <h1>Education</h1>
                    <hr></hr>
                    <h2>B.S. Computer Information Systems</h2>
                    <img src={AP} alt='' />
                    <h4>Concentrations</h4>
                    <p>Information Security</p>
                    <p>Software Development</p>
                    <button onClick={() => this.transcript()}>{this.state.button}</button>
                </div>
            );
        }
        else {
            return (
                <div id='education' className='edu'>
                    <h1>Education</h1>
                    <hr></hr>
                    <img src={AP} alt='' />
                    <h3>B.S. Computer Information Systems</h3>
                    <h4>Concentrations</h4>
                    <p>Information Security</p>
                    <p>Software Development</p>
                    <button onClick={() => this.transcript()}>{this.state.button}</button>
                </div>
            );
        }
    }
}

export default Education;
