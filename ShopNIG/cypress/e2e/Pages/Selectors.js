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
        cy.get('.add__btn').dblclick()
    }

    Reduce_btn(){
        cy.get('.subtract__btn').click()
    }

    Remoove_btn(){
        cy.get('.cancel__btn > .md').click()
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
        cy.get(':nth-child(5) > .container-sm > .products-section__products > :nth-child(3) > :nth-child(1) > .product-card__header > [style="transform: translateX(0%);"]').click()
    }
    AddToCart(){
        cy.get('.prodPricing__action > .btn-primary').click()
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
        cy.get('.header__navbar-sub').invoke('show')
        cy.wait(2000)
        cy.contains(dropdown).click()
    }
    Orders(){
        cy.get('.items__list > :nth-child(1)').click()
        cy.wait(5000)
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
        cy.contains(dropdown).click()
    }

}