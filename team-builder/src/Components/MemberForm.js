import React from 'react';
import {Form, FormGroup, Button, Input} from 'reactstrap';

const MemberForm = (props) => {

  const member = {name: null, email: null, role: null}

  const addMember = (event) => {
    event.preventDefault()
    if(member.name === null) {
      return
    }
    props.addMember(member)
  }

  return (
    <Form onSubmit={addMember}>
      <FormGroup>
        <Input type="text" name="formName" placeholder="Name" onChange={(event) => member.name = event.target.value}/>
      </FormGroup>
      <FormGroup>
        <Input type="text" name="email" placeholder="Email" onChange={(event) => member.email = event.target.value}/>
      </FormGroup>
      <FormGroup>
        <Input type="text" name="role" placeholder="Role" onChange={(event) => member.role = event.target.value}/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default MemberForm;