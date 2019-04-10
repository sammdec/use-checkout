import { useEffect } from "react"
const BETA_VERSION = "checkout_beta_4"

const sendToCheckout = ({ items, successUrl, cancelUrl }) => publicKey => {
  const Stripe = window.Stripe
  const stripe = Stripe(publicKey, {
    betas: [BETA_VERSION]
  })

  stripe
    .redirectToCheckout({
      items,
      successUrl,
      cancelUrl
    })
    .then(function(result) {
      // Display result.error.message to your customer
      return (error = result.error)
    })
}

export default publicKey => {
  useEffect(() => {
    if (typeof Stripe === "undefined") {
      const script = document.createElement("script")
      script.src = "https://js.stripe.com/v3/"
      script.async = true
      script.rel = "prefetch"
      document.body.appendChild(script)
    }
  }, [])

  return [sendToCheckout(publicKey), error]
}
