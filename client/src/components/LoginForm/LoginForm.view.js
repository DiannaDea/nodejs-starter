import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = ({ handleInputChange, handleLogin}) => {
  return (
    <Form>
      <FormGroup>
        <Label for="login">Login</Label>
        <Input
          type="text"
          name="email"
          id="login"
          onChange={(e) => handleInputChange('login', e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
      </FormGroup>
      <Button onClick={handleLogin}>Sign in</Button>
    </Form>
  )
}

export default LoginForm