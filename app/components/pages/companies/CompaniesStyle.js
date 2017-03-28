//@flow
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
`
export const Header = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`
export const Company = styled.div`
  background-color: #ddd;
  padding: 20px;
  font-size: 20px;
  margin: 10px;
`

export const Button = styled.button`
  width: 200px;
  color: white;
  background: green;
  padding: 20px;
  font-size: 20px;
  text-align: center;
`


export const CompanyTitleInput = styled.input`
  width: 200px;
  color: black;
  background: white;
  margin-bottom:20px;
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

export const AddCompanyButton = styled.a`
  width: 200px;
  color: white;
  background: green;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  margin-left: calc(50% - 100px);
`
