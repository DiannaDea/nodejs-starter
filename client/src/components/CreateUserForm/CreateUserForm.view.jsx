import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const CreateUserForm = (props) => {
  const {
    handleInputChange,
    handleCheckboxSelect,
    handleCreateUser,
    loginInputValid,
    passwordInputValid,
    fullNameInputValid
  } = props;

  return (
    <Form>
      <FormGroup>
        <Label for="login">Login</Label>
        <Input
          {...(loginInputValid) ? {valid: true} : {invalid: true }} 
          type="text"
          name="login"
          id="login"
          onChange={(e) => handleInputChange('login', e.target.value)}
        />
        <FormFeedback>Login must contain at least 5 symbols</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          {...(passwordInputValid) ? {valid: true} : {invalid: true }} 
          type="text"
          name="password"
          id="password"
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <FormFeedback>Password must contain at least 3 symbols</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="fullName">Full name</Label>
        <Input
          {...(fullNameInputValid) ? {valid: true} : {invalid: true }} 
          type="text"
          name="fullName"
          id="fullName"
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <FormFeedback>Full name is required</FormFeedback>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={e => handleCheckboxSelect(1)}/>{' '}
          Administrators
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={e => handleCheckboxSelect(2)}/>{' '}
          Team 1
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={e => handleCheckboxSelect(3)}/>{' '}
          Team 2
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" onChange={e => handleCheckboxSelect(4)}/>{' '}
          Team 3
        </Label>
      </FormGroup>
      <Button onClick={handleCreateUser}>Create user</Button>
    </Form>
  )
}

export default CreateUserForm