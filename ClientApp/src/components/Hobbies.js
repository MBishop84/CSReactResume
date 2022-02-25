import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Outdoors from '../NewFolder1/Outdoors.jpg';
import Travel from '../NewFolder1/Travel.jpg';
import Reading from '../NewFolder1/Reading.jpg';
import Family from '../NewFolder1/Family.jpg';
import './Hobbies.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export class Hobbies extends Component {
    render() {
        
        return (
            <div id='hobbies'>
                <h1>Hobbies</h1>
                <hr></hr>
                <AutoplaySlider
                    className='hob'
                    play={true}
                    interval={3000}
                    pauseOnInteraction={true}
                >
                    <div data-src={Family} />
                    <div data-src={Reading} />
                    <div data-src={Outdoors} />
                    <div data-src={Travel} />
                </AutoplaySlider>
            </div>
        )
    }
}

export default Hobbies