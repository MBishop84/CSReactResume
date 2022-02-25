import React, { Component } from 'react';
import './Experience.css';
import MMM from '../NewFolder1/3M.png';
import Donaldson from '../NewFolder1/Donaldson.png';
import Lear from '../NewFolder1/lear.png';

const nav = {
    height: '20px',
    margin: '27px 0',
}
const out = {
    height: '100%',
}
const visible = {
    border: '1px solid black',
    margin: 'auto',
    minHeight: '300px',
    width: '100%',
    display: 'block',
    backgroundColor: 'white',
    padding: '50px'
}
const invisible = {
    display: 'none'
}
const selected = {
    border: '1px solid black',
    borderBottom: 'none',
    margin: 'none',
    fontSize: 'large',
    width: '150px',
    padding: '10px',
    backgroundColor: 'white',
    color: '#282c34',
    borderRadius: '15px 15px 0 0'
}
const notSelected = {
    border: '1px solid black',
    borderBottom: 'none',
    margin: 'none',
    fontSize: 'large',
    width: '150px',
    padding: '10px',
    backgroundColor: '#282c34',
    borderRadius: '15px 15px 0 0',
    color: 'white'
}


export class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tab1: visible,
            tab2: invisible,
            tab3: invisible,
            threeMB: selected,
            donaldsonB: notSelected,
            learB: notSelected
        }
    }
    threeM = () => {
        this.setState({
            tab1: visible,
            tab2: invisible,
            tab3: invisible,
            threeMB: selected,
            donaldsonB: notSelected,
            learB: notSelected
        })
    }
    donaldson = () => {
        this.setState({
            tab1: invisible,
            tab2: visible,
            tab3: invisible,
            threeMB: notSelected,
            donaldsonB: selected,
            learB: notSelected
        })
    }
    lear = () => {
        this.setState({
            tab1: invisible,
            tab2: invisible,
            tab3: visible,
            threeMB: notSelected,
            donaldsonB: notSelected,
            learB: selected
        })
    }

    render() {
        const { tab1, tab2, tab3, threeMB, donaldsonB, learB } = this.state
        return (
            <div style={out} id='experience'>
                <h1>Experience</h1>
                <hr></hr>
                <nav style={nav}>
                    <button style={threeMB} onClick={this.threeM}>3M</button>
                    <button style={donaldsonB} onClick={this.donaldson}>Donaldson</button>
                    <button style={learB} onClick={this.lear}>Lear</button>
                </nav>
                <div style={tab1} className='threeM'>
                    <img src={MMM} alt='' className='exp'/>
                    <h2>Arc Furnace Operator</h2>
                    <h3>(2016 - Present)</h3>
                    <ul>
                        <li>Working through Computer Information Systems degree at APSU.</li>
                        <li>Operating an arc furnace to produce fused silica.</li>
                        <li>Earned Green Belt certification.</li>
                    </ul>
                </div>
                <div style={tab2} className='Donaldson'>
                    <img src={Donaldson} alt='' className='exp'/>
                    <h2>Production Supervisor</h2>
                    <h3>(2013 - 2016)</h3>
                    <ul>
                        <li>Managed assembly line production. ( 25+ employees )</li>
                        <li>Managed production schedule based on customer orders and material availability.</li>
                        <li>Built production reporting software and database using MS Access and MS Excel that is still in use. This enabled long term analysis of production data and trends that was previously unavailable.</li>
                    </ul>
                </div>
                <div style={tab3} className='Lear'>
                    <img src={Lear} alt='' className='exp'/>
                    <h2>Production Supervisor</h2>
                    <h3>(2012 - 2013)</h3>
                    <ul>
                        <li>Managed metal stamping production department. ( 50+ employees )</li>
                        <li>Managed production schedule based on customer orders and material availability.</li>
                        <li>Developed shift production reports using MS Excel that resulted in pinpointing machine issues and multiple improvement opportunities.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Experience