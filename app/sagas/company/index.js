//@flow
import watchGetCompanies from '~/app/sagas/company/GetCompanies'
import watchAddCompany from '~/app/sagas/company/AddCompany'

const sagas = [
  watchGetCompanies(),
  watchAddCompany()
]

export default sagas
