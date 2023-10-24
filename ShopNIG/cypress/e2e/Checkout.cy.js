/// <reference types= 'cypress'/>

import{CHECKOUT} from './Pages/Selectors';

const Checkout = new CHECKOUT


describe('Cart', ()=>{

    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it('Checkout Process - adding shipping address', ()=>{
        Checkout.login()
        Checkout.usermail('tyme4christ@gmail.com')
        Checkout.Password('Testing4@')
        Checkout.login_btn()
        Checkout.Product()
        Checkout.AddToCart()
        Checkout.cart_btn()
        Checkout.check_out()
        Checkout.Add_address()
        Checkout.First_nameField('Benjamin')
        Checkout.Second_nameField('Phillip')
        Checkout.Shipping_address('new bodija')
        Checkout.Type_Of_Address('Office')
        Checkout.State('Lagos')
        Checkout.Local_Gvt("Ikeja")
        Checkout.City('Egbeda')
        Checkout.Phone_nmb('8123543678')
        Checkout.Save_btn()  
        
    })

    it('Checkout Process - Door delivery', ()=>{
        Checkout.login()
        Checkout.usermail('tyme4christ@gmail.com')
        Checkout.Password('Testing4@')
        Checkout.login_btn()
        Checkout.Product()
        Checkout.AddToCart()
        Checkout.cart_btn()
        Checkout.check_out()
        Checkout.Door_delivery()
        Checkout.Pay_wallet()
        Checkout.Pay()
})

it('Checkout Process - Pick up', ()=>{
    Checkout.login()
    Checkout.usermail('tyme4christ@gmail.com')
    Checkout.Password('Testing4@')
    Checkout.login_btn()
    Checkout.Product()
    Checkout.AddToCart()
    Checkout.cart_btn()
    Checkout.check_out()
    Checkout.Pick_up()
    Checkout.Pay_wallet()
    Checkout.Pay()
})

    

})