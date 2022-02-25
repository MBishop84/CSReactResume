import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/skills';
import { Hobbies } from './components/Hobbies';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className='layout'>
                <Layout>
                    <Route exact path='/' component={Profile} />
                    <Route path='/education' component={Education} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/hobbies' component={Hobbies} />
                </Layout>
            </div>
        );
    }
}
