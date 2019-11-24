import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateUserForm = ({ handleInputChange, handleCheckboxSelect, handleCreateUser }) => {
  return (
    <Form>
      <FormGroup>
        <Label for="login">Login</Label>
        <Input
          type="text"
          name="login"
          id="login"
          onChange={(e) => handleInputChange('login', e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="text"
          name="password"
          id="password"
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="fullName">Full name</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
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