# `use-checkout`

> A React hook to be able to easily use Stripe's new (currently in beta) checkout

> **Note:** The new version of Stripe Checkout is currently in beta, I will make sure that this package stays up to date with new beta releases and then bumped to 1.0 when the final version goes live.

<a href="https://www.npmjs.com/package/use-checkout"><img alt="npm version" src="https://img.shields.io/npm/v/use-checkout.svg?style=flat-square"/></a> <a href="https://travis-ci.org/samjbmason/use-checkout"><img alt="Build Status" src="https://img.shields.io/travis/samjbmason/use-checkout.svg?style=flat-square"/></a> <a href="https://coveralls.io/github/samjbmason/use-checkout?branch=master"><img alt="Coverage Status" src="https://img.shields.io/coveralls/github/samjbmason/use-checkout.svg?style=flat-square"/></a> <a href="https://github.com/samjbmason/use-checkout"><img alt="dependencies" src="https://img.shields.io/david/samjbmason/use-checkout.svg?style=flat-square"/></a> <a href="https://bundlephobia.com/result?p=use-checkout"><img alt="package size" src="https://img.shields.io/bundlephobia/min/use-checkout.svg?style=flat-square"/></a>

A tiny React hook that makes it easy to setup Stripe's new (currently in beta) [Checkout](https://stripe.com/docs/payments/checkout) in your React app. If you use this hook multiple times it will only ever create one Stripe instance

If your building an ecommerce site this hook pairs very nicely with the [`use-cart`](https://github.com/samjbmason/use-cart)

## Installation

> Note: please ensure you install versions >= 16.8.0 for both react and react-dom, as this library depends on the new hooks feature

## NPM

```
npm i use-checkout --save
```

## Yarn

```
yarn add use-checkout
```

## Quick Start

```js
import useCheckout from "use-checkout"

// Items for checkout
const items = [{ sku: "SKU_1", quantity: 1 }, { sku: "SKU_2", quantity: 3 }]
const succesUrl = "https://my-website.com/success-url"
const cancelUrl = "https://my-website.com/cancel-url"

const App = () => (
  <div>
    <button onClick={() => useCheckout({ items, successUrl, cancelUrl })}>
      Go to checkout
    </button>
  </div>
)
```

## Examples

- [Basic]()
- [with `use-cart`]()

## API

### `useCheckout(publicKey)`

The hook that sets up the Stripe instance, you must provide

#### Returns

Object containing:

- `redirectToCheckout(options): Function` - redirects to the Stripe Checkout with all the options passed through

## Detailed API from `useCheckout` object

### `redirectToCheckout(options)`

This method calls the `stripe.redirectToCheckout` function and passes along all the `options` to the function - see [here](https://stripe.com/docs/stripe-js/reference#stripe-redirect-to-checkout) for available options for Stripe Checkout

#### Arguments

`options (Object)`: an object containing the options used in the [`stripe.redirectToCheckout()`](https://stripe.com/docs/stripe-js/reference#stripe-redirect-to-checkout) function

#### Returns

`(null)` - Will either redirect you to the Stripe checkout page

---

MIT License.

---
