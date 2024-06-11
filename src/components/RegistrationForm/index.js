// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErrorMsg: false,
    showLastNameErrorMsg: false,
    submitSuccessfully: false,
    showRegistrationForm: true,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({showFirstNameErrorMsg: true, showLastNameErrorMsg: true})
    } else if (firstName === '') {
      this.setState({showFirstNameErrorMsg: true})
    } else if (lastName === '') {
      this.setState({showLastNameErrorMsg: true})
    } else {
      this.setState({
        submitSuccessfully: true,
        showRegistrationForm: false,
        showFirstNameErrorMsg: false,
        showLastNameErrorMsg: false,
      })
    }
  }

  showRegistrationFormPage = () => {
    this.setState({
      submitSuccessfully: false,
      showRegistrationForm: true,
      firstName: '',
      lastName: '',
    })
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({showFirstNameErrorMsg: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({showLastNameErrorMsg: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value, showFirstNameErrorMsg: false})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value, showLastNameErrorMsg: false})
  }

  renderLastNameField = () => {
    const {lastName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          className="lastName-input-filed"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  renderFirstNameField = () => {
    const {firstName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className="firstName-input-filed"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  render() {
    const {
      submitSuccessfully,
      showFirstNameErrorMsg,
      showLastNameErrorMsg,
      showRegistrationForm,
    } = this.state
    return (
      <div className="login-form-container">
        <h1 className="heading">Registration</h1>
        {showRegistrationForm ? (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstNameField()}</div>
            {showFirstNameErrorMsg && (
              <p className="error-message">*Required</p>
            )}
            <div className="input-container">{this.renderLastNameField()}</div>
            {showLastNameErrorMsg && <p className="error-message">*Required</p>}
            <button type="submit" className="submit-button">
              submit
            </button>
          </form>
        ) : (
          <div className="successful-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              className="success-img"
              alt="success"
            />
            <p className="success-heading">Submitted Successfully</p>
            <button
              type="button"
              className="submit-another-response-button"
              onClick={this.showRegistrationFormPage}
            >
              SubmitAnotherResponse
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
