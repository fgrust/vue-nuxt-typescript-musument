describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
  })

  it('first page renders', () => {
    cy.get('.container-lg').get('.card').should('have.length', 6)
  })

  it('pagination', () => {
    cy.get('button[aria-label="Go to next page"]').click()
    cy.wait(500)
    cy.get('.container-lg').get('.card').should('have.length', 6)

    cy.get('button[aria-label="Go to last page"]').click()
    cy.wait(500)
    cy.get('.container-lg').get('.card').should('have.length', 6)

    cy.get('button[aria-label="Go to first page"]').click()
    cy.wait(500)
    cy.get('.container-lg').get('.card').should('have.length', 6)

    cy.get('button[aria-label="Go to page 3"]').click()
    cy.wait(500)
    cy.get('.container-lg').get('.card').should('have.length', 6)
  })

  it('add to cart', () => {
    cy.get('.container-lg')
      .get('.card')
      .get('button[data-testid="btn__add-to-cart"]')
      .first()
      .click()
    cy.get('div[data-testid="ic__cart"]').get('span').contains(1)
  })

  it('add to wishlist', () => {
    cy.get('.container-lg')
      .get('.card')
      .get('button[data-testid="btn__add-to-wishlist"]')
      .first()
      .click()
    cy.get('div[data-testid="ic__wishlist"]').get('span').contains(1)
  })

  it('dropdown cart', () => {
    cy.get('li[data-testid="tg__cart"]')
      .get('a.dropdown-toggle[role="button"]')
      .first()
      .click()
    cy.get('ul.dropdown-menu').contains('(No Item)')
    cy.get('body').click()
    cy.get('.container-lg')
      .get('.card')
      .get('button[data-testid="btn__add-to-cart"]')
      .first()
      .click()
    cy.get('li[data-testid="tg__cart"]')
      .get('a.dropdown-toggle[role="button"]')
      .first()
      .click()
    const menuItems = cy.get('div.card.dropdown-menu-item')
    menuItems.should('have.length', 1)
    cy.get('li[data-testid="tg__cart"]')
      .get('a.dropdown-toggle[role="button"]')
      .first()
      .click()
    cy.wait(100)
    menuItems.get('button.menu-item-action').first().click()
    cy.get('ul.dropdown-menu').contains('(No Item)')
  })
})
