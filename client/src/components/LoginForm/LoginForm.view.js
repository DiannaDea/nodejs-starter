import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const LoginForm = ({ handleInputChange, handleLogin, loginInputValid, passwordInputValid }) => {
  return (
    <Form>
      <FormGroup>
        <Label for="login">Login</Label>
        <Input
          {...(loginInputValid) ? {valid: true} : {invalid: true }} 
          type="text"
          name="email"
          id="login"
          onChange={(e) => handleInputChange('login', e.target.value)}
        />
        <FormFeedback>Login must contain at least 5 symbols</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          {...(passwordInputValid) ? {valid: true} : {invalid: true }} 
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <FormFeedback>Password must contain at least 3 symbols</FormFeedback>
      </FormGroup>
      <Button onClick={handleLogin}>Sign in</Button>
    </Form>
  )
}

export default LoginForm