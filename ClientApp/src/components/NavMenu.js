import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            home: 'active',
            edu: 'text-dark',
            exp: 'text-dark',
            skills: 'text-dark',
            hob: 'text-dark'
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    homeC = () => {
        this.setState({
            home: 'active',
            edu: 'text-dark',
            exp: 'text-dark',
            skills: 'text-dark',
            hob: 'text-dark'
        })
    }
    eduC = () => {
        this.setState({
            home: 'text-dark',
            edu: 'active',
            exp: 'text-dark',
            skills: 'text-dark',
            hob: 'text-dark'
        })
    }
    expC = () => {
        this.setState({
            home: 'text-dark',
            edu: 'text-dark',
            exp: 'active',
            skills: 'text-dark',
            hob: 'text-dark'
        })
    }
    skillsC = () => {
        this.setState({
            home: 'text-dark',
            edu: 'text-dark',
            exp: 'text-dark',
            skills: 'active',
            hob: 'text-dark'
        })
    }
    hobC = () => {
        this.setState({
            home: 'text-dark',
            edu: 'text-dark',
            exp: 'text-dark',
            skills: 'text-dark',
            hob: 'active'
        })
    }
    render() {
        const { home, edu, exp, skills, hob } = this.state;
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Mitch Bishop</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className={home} onClick={this.homeC} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={edu} onClick={this.eduC} to="/education">Education</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={exp} onClick={this.expC} to="/experience">Experience</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={skills} onClick={this.skillsC} to="/skills">Skills</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={hob} onClick={this.hobC} to="/hobbies">Hobbies</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
