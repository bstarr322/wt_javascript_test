//@flow
import React, { PropTypes as pt } from 'react'
import { Container, Header, Company, AddCompanyButton } from './CompaniesStyle'

const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired
  },
  componentDidMount() {
    this.props.getCompanies()
  },

  render() {
    const { companies } = this.props

    return <Container>
      <Header>Companies</Header>
      {companies.map(c =>
        <Company key={c.id}>{c.name}</Company>
      )}
      <AddCompanyButton href='/companies/new'>Add Company</AddCompanyButton>
    </Container>
  }
})

export default Companies
