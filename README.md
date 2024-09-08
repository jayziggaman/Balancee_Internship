# Balancee_Internship
A React JS component where customers can see an overview of the total rewards or cashback they have earned through their bookings, view detailed information about their previous cashback transactions and customers to utilize their earned rewards.


- APP.JS COMPONENT
- 'appContext' to prevent prop drilling
- 'ShowModal' for situations where there are further options to be explored when a user clicks a button. To open and close modals
- 'CashoutType' so the modal can be used in different situations
- 'finishCashout' function to complete the cashout process

############

- REWARDS SUMMARY COMPONENT
- 'fetchData' to simulate data fetching
- 'Cashout Directly' button opens the modal since there are two options to be explored with it
- 'Convert to Promo Codes' button calls the 'finishCashout' function directly since there are no further options

############

- MODAL COMPONENT
- 'btnRefs' ref array to hold all buttons to be displayed depending on the use of the modal (substitute for document.querySelectorAll())
- 'btnRef' ref function for all buttons in the modal component
- 'btnClick' function is a general function for every button in the modal to call on click to close the modal
