/// <reference types = 'cypress'/>

import { Saved } from "./Pages/Selectors";

const Saveditem = new Saved

describe('Saved Items', ()=>{
    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it("Verify user can't save a product for later without logging in ", ()=>{
        cy.scrollTo(0,670)
        cy.wait(4000)
        Saveditem.Saved_items()
    })

    it("Verify user can save a product for later", ()=>{
        Saveditem.login()
        Saveditem.usermail('tyme4christ@gmail.com')
        Saveditem.Password('Testing4@')
        Saveditem.login_btn()
        cy.wait(4000)
        cy.scrollTo(0,670)
        cy.wait(4000)
        Saveditem.Saved_items()
    })

    it("Verify user can unsave a product", ()=>{
        Saveditem.login()
        Saveditem.usermail('tyme4christ@gmail.com')
        Saveditem.Password('Testing4@')
        Saveditem.login_btn()
        cy.wait(4000)
        cy.scrollTo(0,700)
        cy.wait(4000)
        Saveditem.Saved_items()
        cy.wait(5000)
        cy.scrollTo('top', {easing: 'linear'})
        Saveditem.Unsave()
    })

    it.only("Verify user can view the list of all saved item", ()=>{
        Saveditem.login()
        Saveditem.usermail('tyme4christ@gmail.com')
        Saveditem.Password('Testing4@')
        Saveditem.login_btn()
        cy.wait(4000)
        Saveditem.Account_Icon('Saved items')
    })
})