import React from 'react'
import ErrorPageNotFound from './ErrorPageNotFound'

describe('<ErrorPageNotFound />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ErrorPageNotFound />)
  })
})