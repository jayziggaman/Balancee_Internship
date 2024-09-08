import React, { useContext, useEffect, useRef } from 'react'
import { appContext } from '../../App'
import "./Modal.css"

const Modal = () => {
  const { showModal, setShowModal, cashoutType, finishCashout } = useContext(appContext)
  const btnRefs = useRef([])
  const btnRef = el => btnRefs.current.push(el)

  useEffect(() => {
    function btnClick() {
      setShowModal(false)
    }

    btnRefs.current.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', btnClick)
      }
    })

    return () => {
      btnRefs.current.forEach(btn => {
        if (btn) {
          btn.removeEventListener('click', btnClick)
        }
      })
    }
  }, [cashoutType])


  return (
    <div className={showModal ? " active modal-overlay" : "modal-overlay"}>
      <div className="modal-div">
        <h3 className='modal-header'>
          Cash out directly
        </h3>

        <div className="modal-btns">
          {cashoutType === 'cashout-directly' ?
            <>
              <button ref={btnRef} className='modal-btn'
                onClick={() => finishCashout('withdraw to bank account')}
              >
                Withdraw to bank account
              </button>

              <button ref={btnRef} className='modal-btn'
                onClick={() => finishCashout('use as discount for future booking')}
              >
                Use as discount for future booking
              </button>
            </>
            :
            <>
            </>
          }

          <button className='modal-btn cancel'
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal