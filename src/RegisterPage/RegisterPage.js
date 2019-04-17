import React from 'react'
import './style.css'
// import { Link } from 'react-router-dom'
import { Input } from '../_components/input'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      birthDate: '',
      submitted: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //Quand mon composant s'initialise
  componentDidMount() {
    console.log('Hey, my component is mounted')
  }
  handleChange(event) {
    const { name, value } = event.target
    //Si name = username alors on modifie this.state.username
    //Si name = password alors on modifie this.state.password
    this.setState({ [name]: value })
  }

  handleRegister(event) {
    event.preventDefault()
    //this.state.username
    //this.state.password
    //this.state.firstname
    //this.state.lastname
    //this.state.birthDate
    const { username, password, firstname, lastname, birthDate } = this.state
    console.log('username : ', username)
    console.log('password : ', password)
    console.log('firstname : ', firstname)
    console.log('lastname : ', lastname)
    console.log('birthdate : ', birthDate)
    this.setState({ submitted: true })
  }

  render() {
    console.log('My component re-rendered')
    return (
      <div className="Register-page page">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleRegister}>
          <Input
            type={'text'}
            className={'form-control'}
            name={'FirstName'}
            value={this.state.firstname}
            label={'First Name'}
            handleChange={this.handleChange}
          />
          <Input
            type={'text'}
            className={'form-control'}
            name={'LastName'}
            value={this.state.lastname}
            label={'Last Name'}
            handleChange={this.handleChange}
          />
          <Input
            type={'text'}
            className={'form-control'}
            name={'username'}
            value={this.state.username}
            label={'User Name'}
            handleChange={this.handleChange}
          />
          <Input
            type={'text'}
            className={'form-control'}
            name={'password'}
            value={this.state.password}
            label={'Password'}
            handleChange={this.handleChange}
          />
          <Input
            type={'text'}
            className={'form-control'}
            name={'BirthDate'}
            value={this.state.birthDate}
            label={'Boirth Date'}
            handleChange={this.handleChange}
          />
          {/* <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={this.state.username}
            // onChange={event => this.handleChange(event)}
          />
          {/* Conditional rendering avec deux conditions */}
          {/* {this.state.submitted && !this.state.username && (
            <div className="error">Username is required</div>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password} */}
          {/* // onChange={event => this.handleChange(event)}
          />
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={this.state.birthDate}
          />
          {/* Conditional rendering avec deux conditions */}
          {/* {this.state.submitted && !this.state.password && (
            <div className="error">Password is required</div>
          )}
          <div className="form-group">
            <button
              onClick={event => this.handleSubmit(event)}
              className="btn btn-primary"
            >
              HEY TU T'enregistres ?
            </button> */}
          {/* <button>
              <Link to="/login">Link to the past</Link>
            </button>
            {/* Conditional rendering avec deux conditions */}
          {/* {this.state.loading && this.state.submitted && <p>Loading</p>} */}
        </form>
      </div>
    )
  }
}

export { RegisterPage }
