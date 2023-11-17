/// <reference types='cypress'/>

import { reviews } from "./Pages/Selectors";

const Reviews = new reviews

describe('Reviews', ()=>{
    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it('Verify user can see lists of all reviews', ()=>{
        Reviews.login()
        Reviews.usermail('mercy@wiseki.com')
        Reviews.Password('12345678')
        Reviews.login_btn()
        cy.wait(2000)
        Reviews.Account_Icon('Reviews')
    })
})