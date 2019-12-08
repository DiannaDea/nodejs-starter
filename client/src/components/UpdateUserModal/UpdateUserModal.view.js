import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';

class UpdateUserModal extends React.Component {
  state = {
    fullName: {
      text: '',
      isValid: true,
    },
    groupIds: [
      { id: 1, checked: false, name: 'Administrators' },
      { id: 2, checked: false, name: 'Team A' },
      { id: 3, checked: false, name: 'Team B' },
      { id: 4, checked: false, name: 'Team C' }
    ]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.curUser !== this.props.curUser) {
      const userGroups = this.getUserGroupIds();
      
      const updGroupIds = this.state.groupIds.map(groupCheckBox => {
        return userGroups.includes(groupCheckBox.id)
          ? {...groupCheckBox, checked: true}
          : groupCheckBox
      })

      this.setState({
        groupIds: updGroupIds
      })
    }
  }

  handleInputChange = (inputType, value) => {
    const validations = {
      fullName: (value) => value && value.length >= 1,
    }

    this.setState({
      [inputType]: {
        text: value,
        isValid: validations[inputType](value)
      }
    })
  }

  handleCheckboxSelect = (groupId) => {
    const updGroupIds = this.state.groupIds.map(groupCheckBox => {
      return groupCheckBox.id === groupId
        ? {...groupCheckBox, checked: !groupCheckBox.checked}
        : groupCheckBox
    })

    this.setState({
      groupIds: updGroupIds
    })
  }

  getUserGroupIds = () => {
    const {curUser} = this.props

    if (curUser) {
      return curUser.groups.map(g => g.id)
    }
    return []
  }

  handleUserUpdate = () => {
    const { curUser, handleUserUpdate } = this.props;
    const { fullName } = this.state;
  
    const groupIds = this.state.groupIds
      .filter(groupCheckBox => groupCheckBox.checked)
      .map(groupCheckBox => groupCheckBox.id)
    
    if (fullName.text.length && fullName.isValid) {
      handleUserUpdate({
        fullName: (!fullName.text.length)
          ? curUser.fullName
          : fullName.text,
        groupIds
      })
    }
  }

  render() {
    const {show, hideModal, curUser} = this.props

    return (
      <div>
        <Modal isOpen={show} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Update user</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="fullName">Full name</Label>
              <Input
                {...(this.state.fullName.isValid) ? {valid: true} : {invalid: true }} 
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={curUser ? curUser.fullName : ''}
                onChange={(e) => this.handleInputChange('fullName', e.target.value)}
              />
              <FormFeedback>Full name is required</FormFeedback>
            </FormGroup>
            {
              this.state.groupIds.map(groupCheckBox => {
                return (
                  <FormGroup check key={groupCheckBox.id}>
                    <Label check>
                      <Input
                        defaultChecked={groupCheckBox.checked}
                        type="checkbox"
                        onChange={e => this.handleCheckboxSelect(groupCheckBox.id)}
                      />{' '}
                      {groupCheckBox.name}
                    </Label>
                  </FormGroup>
                )
              })
            }
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={hideModal}>Cancel</Button>
            <Button color="primary" onClick={this.handleUserUpdate}>Update</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UpdateUserModal