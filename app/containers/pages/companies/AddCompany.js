//@flow
import { connect } from 'react-redux'
import AddCompany from '~/app/components/pages/companies/AddCompany'
import { createAction } from 'redux-actions'
import { SAGA_ADD_COMPANY,SAGA_COMPANY_TITLE_UPDATE } from '~/app/reducers/Company'

export const mapStateToProps = (state: Object): Object => ({
  title: state.company.title
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  addCompany: (title) => dispatch(createAction(SAGA_ADD_COMPANY)(title)),
  updateTitle: (title) => dispatch(createAction(SAGA_COMPANY_TITLE_UPDATE)(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany)
