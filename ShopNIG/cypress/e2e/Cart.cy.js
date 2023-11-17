/// <reference types= 'cypress'/>

import { CART } from "./Pages/Selectors";

const Cart = new CART;

describe('Cart', ()=>{

    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it('Add a product to cart', () =>{
        Cart.Product()
        Cart.AddToCart()
        Cart.cart_btn()
    })

    it('Increase a product quantity in cart', () =>{
        Cart.Product()
        Cart.AddToCart()
        Cart.cart_btn()
        Cart.Increase_btn()
    })

    it('Reduce a product quantity in cart', () =>{
        Cart.Product()
        Cart.AddToCart()
        Cart.cart_btn()
        Cart.Reduce_btn()
    })

    it('Remove a product quantity in cart', () =>{
        Cart.Product()
        Cart.AddToCart()
        Cart.cart_btn()
        Cart.Remoove_btn()
    })

    it("Verify user can't proceed to checkout without login", ()=>{
        Cart.Product()
        Cart.AddToCart()
        Cart.cart_btn()
        Cart.check_out()
    })
})