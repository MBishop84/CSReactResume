import React, { Component } from 'react';
import './skills.css'

export class Skills extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    mySymbol() {
        return <label>&#10097;&#10097;&#10097;&nbsp;&nbsp;&nbsp;</label>
    }
    render() {
        let symbol = this.mySymbol();
        return (
            <div id='skills'>
                <h1>Skills</h1>
                <hr></hr>
                <br></br>
                <div className='col'>
                    <ul className='ski'>
                        <li>{symbol}SQL (3yr)</li>
                        <li>{symbol}C/C++ (2yr)</li>
                        <li>{symbol}C# (1yr)</li>
                        <li>{symbol}ASP.NET (1yr)</li>
                        <li>{symbol}Python (1yr)</li>
                        <li>{symbol}Visual Basic (1yr)</li>
                        <li>{symbol}PHP (2yr)</li>
                        <li>{symbol}Kotlin (1yr)</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='ski'>
                        <li>{symbol}React.JS (1yr)</li>
                        <li>{symbol}AJAX (1yr)</li>
                        <li>{symbol}JavaScript (2yr)</li>
                        <li>{symbol}MS Office (10yrs)</li>
                        <li>{symbol}VS Code (3yr)</li>
                        <li>{symbol}Linux (3yr)</li>
                        <li>{symbol}Active Directory (1yr)</li>
                        <li>{symbol}Agile Dev (1yr)</li>
                    </ul>
                </div>
                <div className='col'>
                    <ul className='ski'>
                        <li>{symbol}Android Studio (1yr)</li>
                        <li>{symbol}SQL Server (3yr)</li>
                        <li>{symbol}Data Analytics (3yr)</li>
                        <li>{symbol}Data Management (3yr)</li>
                        <li>{symbol}Visual Studio (3yr)</li>
                        <li>{symbol}Tableau (1yr)</li>
                        <li>{symbol}VMware (1yr)</li>
                        <li>{symbol}VirtualBox (1yr)</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills