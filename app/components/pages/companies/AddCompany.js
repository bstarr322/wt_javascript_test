//@flow
import React, { PropTypes as pt } from 'react'
import { browserHistory } from 'react-router'
import { Container, Button, CompanyTitleInput } from './CompaniesStyle'

const AddCompany = React.createClass({
  propTypes: {
    addCompany: pt.func.isRequired,
    title: pt.string.isRequired,
    updateTitle: pt.func.isRequired
  },
  addCompany() {
    this.props.addCompany(this.props.title)
    browserHistory.push('/')
  },
  render() {
    return <Container>
      <CompanyTitleInput type='text' value={this.props.title} onChange={(e) => this.props.updateTitle(e.target.value)} />
      <Button onClick={this.addCompany}>Add</Button>
    </Container>
  }
})

export default AddCompany
