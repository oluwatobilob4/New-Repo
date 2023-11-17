/// <reference types = 'cypress'/>

import { homepage } from "./Pages/Selectors";

const Homepage = new homepage

describe('Homepage', ()=>{
    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it('Verify categories at the top nav bar', ()=>{
        Homepage.Navigation_Categories()
    })

    it('Verify the search functionality', ()=>{
        Homepage.Search('iphone')
    })

    it('Verify user can search and use the catogory to filter their search',()=>{
        Homepage.Search_catogories('Camera', 'Camera')
    })

    it('Verify the footer links', ()=>{
        cy.scrollTo('bottom')
        Homepage.Footer_Helplinks()
    })

    it.only('Verify user can fil the "contact us" form', ()=>{
        cy.scrollTo('bottom')
        Homepage.Contact_us()
        Homepage.names('James', 'Brian')
        Homepage.Others('testing@gmail.com', '+2348143562738')
        Homepage.Message('This is just for testing')
    })
})