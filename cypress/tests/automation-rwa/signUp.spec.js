import LoginPage from '../../pages/loginPage.js'
import SignUpPage from '../../pages/signUpPage.js'
import { generateUser } from '../../support/factories/userFactory.js'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()

describe('New User Registration RWA Tests', () => {

  let user

  beforeEach(() => {
    user = generateUser()
  
    loginPage.accessLoginPage()
    loginPage.creatAccountButton()
    signUpPage.accessSignUpPage()
  })

describe('Happy Path', () => {
  it('Register new user successfully', () => {
    signUpPage.fillUserData({firstName: user.firstName, lastName: user.lastName, username: user.username, password: user.password})
    signUpPage.fillConfirmPassword(user.password)  
    signUpPage.signUpButton()

    cy.url().should('include', '/signin')
  })       
  })

describe('Validation Scenarios', () => {

  it('should not allow registration with existing username', () => {

    const username = user.username

    signUpPage.fillUserData({
      firstName: 'John',
      lastName: 'Doe',
      username: username,
      password: '123456'
  })
    signUpPage.fillConfirmPassword('123456') 
    signUpPage.signUpButton()

    cy.url().should('include', '/signin')
    
    // tenta criar novamente com mesmo username
    loginPage.creatAccountButton()
    
    signUpPage.fillUserData({
      firstName: 'John',
      lastName: 'Doe',
      username: username,
      password: '123456'
  })
    signUpPage.fillConfirmPassword('123456')
    signUpPage.validateFieldError(
    signUpPage.selectorsList().usernameField
  )
    signUpPage.disableSignUpButton()
    
    //BUG: System allows duplicate usernames
  })
        
  it('Should not allow registration with incomplete data', () => {
    
    signUpPage.fillUserData({lastName: user.lastName, username: user.username, password: user.password})
    signUpPage.fillConfirmPassword(user.password)  
    signUpPage.validateFieldError(
    signUpPage.selectorsList().firstNameField
  )
    signUpPage.disableSignUpButton()
  })

  it('should not allow registration with fields containing only spaces', () => {

  const spaces = '     '

  signUpPage.fillUserData({
    firstName: spaces,
    lastName: spaces,
    username: spaces,
    password: '1234'
  })

  signUpPage.fillConfirmPassword('1234')

  signUpPage.validateFieldError(signUpPage.selectorsList().firstNameField)
  signUpPage.validateFieldError(signUpPage.selectorsList().lastNameField)
  signUpPage.validateFieldError(signUpPage.selectorsList().usernameField)

  signUpPage.disableSignUpButton()

  //BUG: System allows fields with only spaces and enable registration

})
})  
})  