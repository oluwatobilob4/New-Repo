/// <reference types='cypress'/>

import {Wallet} from "./Pages/Selectors";

const Mywallet = new Wallet

describe('Wallet', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        Mywallet.login()
        Mywallet.usermail('mercy@wiseki.com')
        Mywallet.Password('12345678')
        Mywallet.login_btn()

        cy.location('pathname').should('eq', '/')
    })

    it('Verify user can navigate to "My wallet"', ()=>{
        cy.visit('/')
        Mywallet.Account_Icon('My Wallet')
    })

    it('Filter Transaction History', ()=>{
        cy.visit('/')
        Mywallet.Account_Icon('My Wallet')
        cy.wait(3000)
        Mywallet.Transaction('Deposit')
        cy.wait(5000)
        Mywallet.Transaction('Purchases')

    })

})