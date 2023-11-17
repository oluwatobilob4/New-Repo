/// <reference types= 'cypress'/>

import{CHECKOUT} from './Pages/Selectors';

const Checkout = new CHECKOUT


describe('Cart', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        Checkout.login()
        Checkout.usermail('tyme4christ@gmail.com')
        Checkout.Password('Testing4@')
        Checkout.login_btn()

        cy.location('pathname').should('eq', '/')
    })

    it.skip('Checkout Process - adding shipping address', ()=>{
        cy.visit('/')
        Checkout.Product()
        Checkout.AddToCart()
        Checkout.cart_btn()
        Checkout.check_out()
        Checkout.Add_address()
        Checkout.First_nameField('Paul')
        Checkout.Second_nameField('Phillips')
        Checkout.Shipping_address('old bodija')
        Checkout.Type_Of_Address('Home')
        Checkout.State('Lagos')
        Checkout.Local_Gvt("Ikeja")
        Checkout.City('Egbeda')
        Checkout.Phone_nmb('8123543678')
        Checkout.Save_btn()  
        
    })

    it('Checkout Process - Door delivery', ()=>{
        cy.visit('/')
        cy.scrollTo('bottom', { easing: 'linear' }) 
        cy.wait(1000)
        Checkout.Product()
        cy.wait(800)
        Checkout.AddToCart()
        Checkout.cart_btn()
        Checkout.check_out()
        Checkout.Public_transport()
        cy.scrollTo('top', { easing: 'linear' })
        Checkout.Pay_wallet()
        Checkout.Coupon('Mercy')
        Checkout.Pay()
        Checkout.See_details()
})

it('Checkout Process - Pick up', ()=>{
    cy.visit('/')
    Checkout.Product()
    Checkout.AddToCart()
    Checkout.Popular()
    Checkout.cart_btn()
    Checkout.check_out()
    Checkout.Change_address()
    Checkout.Select_address()
    Checkout.Pick_up()
    Checkout.Pay_Pickup()
    Checkout.Pay()
    Checkout.See_details()
})

    

})