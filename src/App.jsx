import React, { useEffect, useState } from 'react'
import Modal from './COMPONENTS/Modal/Modal'
import RewardsSummary from './COMPONENTS/RewardsSummary/RewardsSummary'


export const appContext = React.createContext()

// https://github.com/jayziggaman/Balancee_Internship

// git remote add origin https://github.com/jayziggaman/Balancee_Internship


const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [cashoutType, setCashoutType] = useState('')


  useEffect(() => {
    if (!showModal) {
      setCashoutType('')
    }
  }, [showModal])


  function finishCashout(method) {
    alert(`You have chosen ${method} as the cashout method.`);
  }


  return (
    <appContext.Provider
      value={{
        showModal, setShowModal, cashoutType, setCashoutType, finishCashout
      }}
    >
      <RewardsSummary />

      <Modal />
    </appContext.Provider>
  )
}

export default App