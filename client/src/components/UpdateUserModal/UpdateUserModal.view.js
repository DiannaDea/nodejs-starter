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
  Input
} from 'reactstrap';

class UpdateUserModal extends React.Component {
  state = {
    fullName: '',
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
    this.setState({
      [inputType]: value
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
    const { curUser } = this.props;

    const groupIds = this.state.groupIds
      .filter(groupCheckBox => groupCheckBox.checked)
      .map(groupCheckBox => groupCheckBox.id)
    
    this.props.handleUserUpdate({
      fullName: (!this.state.fullName.length) ? curUser.fullName : this.state.fullName,
      groupIds
    })
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
                type="text"
                name="fullName"
                id="fullName"
                defaultValue={curUser ? curUser.fullName : ''}
                onChange={(e) => this.handleInputChange('fullName', e.target.value)}
              />
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