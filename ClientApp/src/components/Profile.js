import React, { Component } from 'react';
import './Profile.css';
import Img0 from '../NewFolder1/20220210_110831.jpg';
import Img1 from '../NewFolder1/DianaRoku.jpg';
import Img2 from '../NewFolder1/Emma.jpg';



export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hello: 'Hello,',
            p1: `I am a recent graduate from Austin Peay State University.
                 My concentrations are Software Development and
                    Information Security. I really enjoy learning new
                    technology and using what I have learned to create
                    useful and visually appealing tools.`,

            p2: `   I hope you enjoy exploring this website, and I would love to
                    hear from you if you have any suggestions or job
                    opportunities.`
        }
    }

    render() {
        
        return (
            <div id='profile' className='profile'>
                <h1>Profile</h1>
                <hr></hr>
                    <div className='slide'>
                        <p className='intro'>{this.state.hello}
                            <br></br><br></br>{this.state.p1}<br></br><br></br>{this.state.p2}
                        </p>
                        <img src={Img0} className='me' alt="" />
                    </div>
            </div>
        )
    }
}

export default Profile