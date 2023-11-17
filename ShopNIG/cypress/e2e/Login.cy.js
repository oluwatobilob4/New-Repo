/// <reference types = 'cypress'/>

import { LOGIN } from "./Pages/Selectors"

const Login = new LOGIN;

describe('Testing Login', () => {

  beforeEach(function(){

    cy.visit('https://shopnig.netlify.app/')

  })

  it('Login with valid details', function(){
    Login.login()
    Login.usermail('tyme4christ@gmail.com')
    Login.Password('Testing4@')
    Login.login_btn()
    cy.wait(20000)

  })

  it.only('Login with phone number', ()=>{
    Login.login()
    Login.Phone_number('8132432908', 'Testing4@')
    cy.wait(20000)
  })

  it('Verify users can not"login with a valid and unregistered email"', () =>{
    Login.login()
    Login.usermail('testing24user@gmail.com')
    Login.Password('Testing4#')
    Login.login_btn()

  })

  it.only('Verify user can logout', ()=>{
    Login.login()
    Login.usermail('tyme4christ@gmail.com')
    Login.Password('Testing4@')
    Login.login_btn()
    Login.Account_Icon('Log Out')
  })

 
})