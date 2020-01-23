/*import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/login', this.state)
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true
                })

            }).catch((err) => console.log(err.response.data))
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Container>
                <h1>Login Form</h1>
                <Form>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input name='username' id='username' type='text'
                            value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleClick}>Login!</Button>
                    <FormText>Not yet a user? <Link to='/registration'>Register here!</Link> </FormText>
                </Form>
            </Container>
        )
    }
}*/

import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/users/login', this.state)
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true
                })

            }).catch((err) => console.log(err.response.data))
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Container>
                <h1>Login Form</h1>
                <Form>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input name='username' id='username' type='text'
                            value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleClick}>Login!</Button>
                    <FormText>Not yet a user? <Link to='/register'>Register here!</Link> </FormText>
                </Form>
            </Container>
        )
    }
}