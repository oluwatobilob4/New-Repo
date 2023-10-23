export class LOGIN{
    login(){
        cy.get('.header__right > [href="/login"]').click()
    }

    usermail(username){
        cy.get('.form-input').type(username)
    }

    Password(passwrd){
        cy.get('.input-group > input').type(passwrd)
    }

    login_btn(){
        cy.get('.enabled').click()
    }
}

export class CART{
    login(){
        cy.get('.header__right > [href="/login"]').click()
    }

    usermail(username){
        cy.get('.form-input').type(username)
    }

    Password(passwrd){
        cy.get('.input-group > input').type(passwrd)
    }

    login_btn(){
        cy.get('.enabled').click()
    }

    Product(){
        cy.get(':nth-child(5) > .container-sm > .products-section__products > :nth-child(1) > :nth-child(1) > .product-card__header > [style="transform: translateX(0%);"]').click()
    }
    AddToCart(){
        cy.get('.prodPricing__action > .btn-primary').click()
    }

    cart_btn(){
        cy.get(':nth-child(3) > .header__navbar-link').click()
    }

    Increase_btn(){
        cy.get('.add__btn').click()
    }

    Reduce_btn(){
        cy.get('.subtract__btn').click()
    }
}