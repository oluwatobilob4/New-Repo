/// <reference types = 'Cypress'/>

import {Delivery} from "./Pages/Selectors";

const Delivery_Address = new Delivery

describe("Delivery Address", () =>{
    beforeEach(function(){
        
        cy.visit('/')
        Delivery_Address.login()
        Delivery_Address.usermail('mercy@wiseki.com')
        Delivery_Address.Password('12345678')
        Delivery_Address.login_btn()

        cy.location('pathname').should('eq', '/')
    
    })
    
    it('Verify a user can navigate to the delivery address page', ()=>{
        cy.visit('/')
        Delivery_Address.Account_Icon('Delivery Address')
        cy.scrollTo('bottom', {easing: 'linear'})
        cy.wait(2000)
        cy.scrollTo('top',{easing: 'linear'})
    })

    it.skip('Verify user can add a new address', ()=>{
        cy.visit('/')
        Delivery_Address.Account_Icon('Delivery Address')
        Delivery_Address.Addnewaddress()
        Delivery_Address.First_nameField('Mary')
        Delivery_Address.Second_nameField('Chuckwu')
        Delivery_Address.Shipping_address('Test avenue, bodija')
        Delivery_Address.Type_Of_Address('Home')
        Delivery_Address.State('Oyo')
        Delivery_Address.Local_Gvt('Ibadan North')
        Delivery_Address.City('Bodija')
        Delivery_Address.Phone_nmb('8142367435')
        Delivery_Address.Save_btn()
    })

    it('Verify user can delete a delivery address', ()=>{
        cy.visit('/')
        Delivery_Address.Account_Icon('Delivery Address')
        Delivery_Address.Delete_Address()
    })

    it.only('Verify user can change default delivery address', ()=>{
        cy.visit('/')
        Delivery_Address.Account_Icon('Delivery Address')
        Delivery_Address.Change_default()
        cy.wait(4000)

    })

})