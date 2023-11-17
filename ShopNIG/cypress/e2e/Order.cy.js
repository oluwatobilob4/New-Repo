/// <reference types = 'Cypress'/>

import { ORDERS } from "./Pages/Selectors";

const Order = new ORDERS

describe("Orders", ()=>{
    beforeEach(()=>{

        cy.session('login', ()=>{
            cy.visit('/')
            Order.login()
            Order.usermail('tyme4christ@gmail.com')
            Order.Password('Testing4@')
            Order.login_btn()

        cy.location('pathname').should('eq', '/')

        })
       
    })

    it("Navigating to Orders", ()=>{
        cy.visit('/')
        cy.wait(1000)
        Order.Account_Icon('Orders')
    })

    it("Verify user can view order details", ()=>{
        cy.visit('/')
        cy.wait(1000)
        Order.Account_Icon('Orders')
        Order.Orders()
        cy.scrollTo('bottom', { easing: 'linear' }) 
        cy.wait(3000)
        cy.scrollTo('top', { easing: 'linear' }) 
    })

    it("Verify user can sort and filter orders", ()=>{
        cy.visit('/')
        cy.wait(1000)
        Order.Account_Icon('Orders')
        Order.Order_filter()
    })

})