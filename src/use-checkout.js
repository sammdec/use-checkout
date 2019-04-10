import { useEffect } from "react"
const BETA_VERSION = "checkout_beta_4"

const sendToCheckout = publicKey => async options => {
  const Stripe = window.Stripe
  const stripe = Stripe(publicKey, {
    betas: [BETA_VERSION]
  })

  const result = await stripe.redirectToCheckout({ ...options })
  return result.error.message
}

export default publicKey => {
  useEffect(() => {
    if (!document.querySelector('[src="https://js.stripe.com/v3/"]')) {
      const script = document.createElement("script")
      script.src = "https://js.stripe.com/v3/"
      script.async = true
      script.rel = "prefetch"
      script.setAttribute("data-testid", "stripe-script")
      document.head.appendChild(script)
    }
  }, [])

  return [sendToCheckout(publicKey)]
}
