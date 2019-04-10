import React from "react"
import { renderHook, act, cleanup } from "react-hooks-testing-library"
import "jest-dom/extend-expect"

import useCheckout from "../src/use-checkout"

afterEach(cleanup)

describe("useCheckout", () => {
  test("renders script tag on page", () => {
    renderHook(() => useCheckout("pk_test_ZbteARJtfxbUKpMs7GlgJAG9"))

    const el = document.querySelector('[data-testid="stripe-script"]')

    expect(el).toBeInstanceOf(HTMLElement)

    el.parentNode.removeChild(el)
  })

  test("only renders one script if called multiple times", () => {
    const initialScripts = document.querySelectorAll(
      '[data-testid="stripe-script"]'
    )
    expect(initialScripts.length).toBe(0)
    renderHook(() => useCheckout("pk_test_ZbteARJtfxbUKpMs7GlgJAG9"))
    renderHook(() => useCheckout("pk_test_ZbteARJtfxbUKpMs7GlgJAG9"))

    const postRenderScripts = document.querySelectorAll(
      '[data-testid="stripe-script"]'
    )

    expect(postRenderScripts.length).toBe(1)
  })

  describe("redirectToCheckout", () => {
    test("calls function and mock stripe function", () => {
      window.Stripe = jest.fn(() => {
        return {
          redirectToCheckout: () =>
            Promise.resolve({ error: { message: "Test Msg" } })
        }
      })

      const { result } = renderHook(() =>
        useCheckout("pk_test_ZbteARJtfxbUKpMs7GlgJAG9")
      )
      const [redirectToCheckout] = result.current
      act(() => redirectToCheckout({}))
      expect(window.Stripe).toBeCalled()
    })
  })
})
