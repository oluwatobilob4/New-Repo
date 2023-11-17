/// <reference types='cypress'/>

import { Theme } from "./Pages/Selectors";

const Dark_mode = new Theme

describe('Theme', ()=>{
    beforeEach(()=>{
        cy.visit('https://shopnig.netlify.app/')
    })

    it('Changing to dark mode', ()=>{
        Dark_mode.Dark()
        cy.wait(5000)
        Dark_mode.Dark()
    })
})