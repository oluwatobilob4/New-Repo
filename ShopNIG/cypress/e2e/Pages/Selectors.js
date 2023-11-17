/// <reference types='cypress'/>
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
    Phone_number(Phone,pwd){
        cy.get('[aria-autocomplete="off"]').click()
        cy.get('.form-input-group > input').type(Phone)
        cy.get('.input-group > input').type(pwd)
        cy.get('.enabled').should('be.enabled').click()
    }
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show').should('be.visible')
        cy.contains(dropdown).click()
        cy.wait(2000)
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
        cy.get(':nth-child(5) > .container-sm > .products-section__header').scrollIntoView()
        cy.wait(4000)
        cy.get(':nth-child(5) > .container-sm > .products-section__products > :nth-child(1) > :nth-child(1) > .product-card__header > [style="transform: translateX(0%);"]').click()
    }
    AddToCart(){
        cy.get('.prodPricing__action > .btn-primary').click()
    }

    cart_btn(){
        cy.get(':nth-child(3) > .header__navbar-link').click()
    }

    Increase_btn(){
        cy.get('.add__btn').dblclick()
    }

    Reduce_btn(){
        cy.get('.subtract__btn').click()
    }

    Remoove_btn(){
        cy.get('.cancel__btn > .md').click()
    }
    check_out(){
        cy.get('.checkoutt').click()
    }
}

export class CHECKOUT{
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
        cy.get(':nth-child(5) > .container-sm > .products-section__header').scrollIntoView()
        cy.wait(4000)
        cy.get(':nth-child(5) > .container-sm > .products-section__products > :nth-child(4) > :nth-child(1) > .product-card__header > [style="transform: translateX(0%);"]').click()
    }
    AddToCart(){
        cy.get('.prodPricing__action > .btn-primary').click()
    }
    Popular(){
        cy.get('.accessories__txt').scrollIntoView()
        cy.wait(3000)
        cy.get(':nth-child(1) > .wireless__board > .add').click()
    }

    cart_btn(){
        cy.get(':nth-child(3) > .header__navbar-link').click()
    } 
    check_out(){
        cy.get('.checkoutt').click()
    }

    Add_address(){
        cy.get('.add__details > span').click()
    }

    First_nameField(First_name){
        cy.get('.register__name > :nth-child(1) > input').type(First_name)
    }

    Second_nameField(Scnd_name){
        cy.get('.register__name > :nth-child(2) > input').type(Scnd_name)
    }
    Shipping_address(Address){
        cy.get('.add__shipping__address > input').type(Address)
    }
    Type_Of_Address(TA){
        cy.get('.add__type__address > select').select(TA)
    }
    State(state){
        cy.get('.choose__location > :nth-child(2) > select').select(state)
    }
    Local_Gvt(LGA){
        cy.get(':nth-child(3) > select').select(LGA)
    }
    City(new_city){
        cy.get(':nth-child(4) > select').select(new_city)
    }
    Phone_nmb(number){
        cy.get('.country__input > input').type(number)
    }
    Change_address(){
        cy.get('.choose__btn').click()
    }
    Select_address(){
        cy.get(':nth-child(4) > .select__address__details > .select__address').click()
    }
    Save_btn(){
        cy.get('.save__address').click()
    }
    Door_delivery(){
        cy.get('#carrier').click()
        cy.get('[for="GIG Logistics"] > .remove__border').click()
    }
    Pick_up(){
        cy.get('#pick-up').click()
    }
    Public_transport(){
        cy.get('#public-transport').click()
    }
    Pay_wallet(){
        cy.contains('ShopNig Wallet').click()
    }
    Pay_Flutter(){
        cy.get('[for="3"] > .payment__option').click()
    }
    Pay_Pickup(){
        cy.get('[for="4"] > .payment__option').click()
    }
    Coupon(Coupon_nmb){
        cy.get('.coupon_code > input').type(Coupon_nmb)
        cy.get('.coupon_code > .btn').click()
    }
    Pay(){
        cy.get('.pay').click()
    }
    See_details(){
        cy.get('.see__detailss').click()
    }
}

export class ORDERS{
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
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show').should('be.visible')
        cy.contains(dropdown).click()
        cy.wait(2000)
    }
    Orders(){
        cy.get('.items__list > :nth-child(1)').click()
        cy.wait(4000)
        cy.get('.dash__head > .md').click()
    }
    Order_filter(){
        cy.get('.orders__tabs > .active').click()
        cy.wait(4000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
        cy.get('.orders__tabs > :nth-child(3)').click()
        cy.wait(4000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
        cy.get('.orders__tabs > :nth-child(4)').click()
        cy.wait(4000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
        cy.get('.orders__tabs > :nth-child(5)').click()
        cy.wait(4000)
        cy.get('select').select('All')
        cy.wait(2000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
        cy.get('.orders__tabs > :nth-child(6)').click()
        cy.wait(4000)
        cy.get('select').select('All')
        cy.wait(2000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
        cy.get('.orders__tabs > :nth-child(1)').click()
        cy.wait(4000)
       cy.get('select').select('Today')
        cy.wait(2000)
       cy.get('select').select('This Week')
        cy.wait(1000)
       cy.get('select').select('This Month')
        cy.wait(1000)
       cy.get('select').select('Last Month')
        cy.wait(3000)
    }
}

export class Delivery{

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
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show')
        cy.wait(2000)
        cy.contains(dropdown).click().should('be.visible')
    }
    Addnewaddress(){
        cy.get('.new__delivery').click()
    }
    First_nameField(First_name){
        cy.get('.register__name > :nth-child(1) > input').type(First_name)
    }

    Second_nameField(Scnd_name){
        cy.get('.register__name > :nth-child(2) > input').type(Scnd_name)
    }
    Shipping_address(Address){
        cy.get('.add__shipping__address > input').type(Address)
    }
    Type_Of_Address(TA){
        cy.get('.add__type__address > select').select(TA)
    }
    State(state){
        cy.get('.choose__location > :nth-child(2) > select').select(state)
    }
    Local_Gvt(LGA){
        cy.get(':nth-child(3) > select').select(LGA)
    }
    City(new_city){
        cy.get(':nth-child(4) > select').select(new_city)
    }
    Phone_nmb(number){
        cy.get('.country__input > input').type(number)
    }
    Save_btn(){
        cy.get('.save__address').click()
    }
    Cancel_btn(){
        cy.get('.cancel__address').click()
    }
    Delete_Address(){
        cy.get(':nth-child(8) > .delete__icon').click()
    }
    Change_default(){
        cy.get('.active__change__delivery').click()
        cy.wait(4000)
        cy.get(':nth-child(5) > .select__address__details > .select__address').click()
    }
}

export class Saved{
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
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show')
        cy.wait(2000)
        cy.contains(dropdown).click({force: true}).should('be.visible')
    }
    
    Saved_items(){
        cy.get(':nth-child(5) > .container-sm > .products-section__products > :nth-child(2) > :nth-child(1)').click()
        cy.wait(3000)
        cy.get('.btn-blue-outline').click()
    }
    Unsave(){
        cy.get('.btn-blue-outline').click()
    }
    
}

export class reviews{
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
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show').should('be.visible')
        cy.wait(2000)
        cy.contains(dropdown).click()
        
    }

}

export class Theme{
    Dark(){
        cy.get('.mode-toggle > .md').click()
    }
}

export class Wallet{

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
    Account_Icon(dropdown){
        cy.get('.header__navbar-sub').invoke('show').should('be.visible')
        cy.wait(2000)
        cy.contains(dropdown).click()
        
    }
    Transaction(option){
        cy.get('.filter > select').select(option)
        cy.wait(4000)
        cy.get('.sort > select').select('Today')
        cy.wait(4000)
        cy.get('.sort > select').select('This Week')
        cy.wait(4000)
        cy.get('.sort > select').select('This Month')
        cy.wait(4000)
        cy.get('.sort > select').select('Last Month')
        cy.wait(4000)
        cy.get('.sort > select').select('All')
    }
    
}

export class homepage{
    Navigation_Categories(){
        cy.get('.top-bar__navbar-main > :nth-child(1) > .top-bar__navbar-link').click()
        cy.scrollTo(0,400)
        cy.wait(4000)
        cy.get(':nth-child(2) > .top-bar__navbar-link').click()
        cy.scrollTo(0,400)
        cy.wait(4000)
        cy.get(':nth-child(3) > .top-bar__navbar-link').click()
        cy.scrollTo(0,400)
        cy.wait(4000)
        cy.get(':nth-child(4) > .top-bar__navbar-link').click()
        cy.scrollTo(0,400)
        cy.wait(4000)
        cy.get(':nth-child(5) > .top-bar__navbar-link').click()
        cy.scrollTo(0,400)
        cy.wait(4000)
    }
    Search(input){
        cy.get('.header__search-input').type(input)
        cy.wait(2000)
        cy.get('.header__search-btn').click()
        cy.scrollTo(0,180)
    }
    Search_catogories(input,category){
        cy.get('.header__search-input').type(input)
        cy.wait(2000)
        cy.get('#categories').click()
        .should("be.visible")
        cy.contains(category).click()
        cy.wait(2000)
        cy.get('.header__search-btn').click()
        cy.scrollTo(0,180)
    }
    Footer_Helplinks(){
        cy.contains('FAQ').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.contains('About Us').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.contains('Contact Us').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.contains('Refund Policy').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.contains('Terms').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.contains('Privacy Policy').click({force: true})
        cy.scrollTo(0,450)
        cy.wait(3000).scrollTo('bottom')
        cy.get('[href="http://www.fb.com/shopnig"] > img').click()
        cy.get('[href="http://www.instagram.com/shopnig24"] > img').click()
        cy.get('[href="http://www.instagram.com/shopnig24"] > img').click()

        
    }
    Contact_us(First,last,Email,No,message){
        cy.contains('Contact Us').click({force: true})
        cy.scrollTo(0,500)
    }
    names(First,last){
            cy.get(':nth-child(1) > .namess').type(First)
            cy.get(':nth-child(2) > .namess').type(last)
        }
    Others(Email, No){
        cy.get('.mail').type(Email)
        cy.get('.numberr').type(No)
    }    
    Message(message){
        cy.get('textarea').type(message)
        cy.get('.sendd').click()
    }
      
        

    
}