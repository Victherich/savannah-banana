import React, { createContext } from 'react'

export const Context = createContext(); 

const ContextProvider = ({children}) => {


//  const api_url = "https://www.cwmsrfupre.com.ng/api"

  const api_url = "https://savannahbananasfansfirsttickets.com/api"

    // const api_url = ""

   const ticketTiers = [
    {
      id: 1,
      title: "Open Seatings",
      price: 60,
      priceUnit: "USD",
      badge: "Best Value",
      isFeatured: false,
      isPrimaryButton: false,
      cryptoRate: 0.00038, // Example conversion rate (USD to BTC/Crypto unit or fixed estimate)
      features: [
        "Unreserved stadium seating",
        "Full access to all Banana Ball action",
        "Concessions & store access",
        "Instant e-ticket delivery",
      ],
    },
    {
      id: 2,
      title: "VIB (Very Important Banana)",
      price: 100,
      priceUnit: "USD",
      badge: "Most Popular",
      isFeatured: true,
      isPrimaryButton: true,
      cryptoRate: 0.0011,
      features: [
        "Priority stadium early entrance",
        "Premium front section seating",
        "Exclusive meet & greet with players",
        "Commemorative lanyard & merch pass",
      ],
    },
  ];

  return (
    <Context.Provider value={{ api_url, ticketTiers}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
