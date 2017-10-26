'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const getSum = (acc, ele) => acc + ele

const calculateTotals =
  listings =>
    carts => {
      return carts.map( cart => {
        let total = cart.items.map( x  => listedPrice(listings[listings.findIndex( i => i.name === x)])(x))
          .reduce(getSum)
          return { customer: cart.customer, total}
      }
    )
  }
    
    
  
module.exports = {
  listing,
  cart,
  calculateTotals
}
