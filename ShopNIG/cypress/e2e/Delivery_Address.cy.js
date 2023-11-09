/// <reference types = 'Cypress'/>

import {Delivery} from "./Pages/Selectors";

const Delivery_Address = new Delivery

describe("Delivery Address", () =>{
    beforeEach(function(){
        
        cy.visit('https://shopnig.netlify.app/')
    
    })
    
    it('Verify a user can navigate to the delivery address page', ()=>{
        Delivery_Address.login()
        Delivery_Address.usermail('mercy@wiseki.com')
        Delivery_Address.Password('12345678')
        Delivery_Address.login_btn()
        Delivery_Address.Account_Icon('Delivery Address')
        cy.scrollTo('bottom', {easing: 'linear'})
        cy.wait(2000)
        cy.scrollTo('top',{easing: 'linear'})
    })

})