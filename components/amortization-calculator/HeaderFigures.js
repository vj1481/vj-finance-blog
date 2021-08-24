import React from 'react'

const localeOptions = {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

export const HeaderFigures = (props) => {
  return (<div className=" space-y-12">
    <div className="flex justify-between ">
      <div className="text-left font-light  space-y-3">
        <span className="font-bold bottom-2">
          {parseInt(props.amountToBorrow).toLocaleString('en-IN', localeOptions)}
        </span>
        <div className="italic"> Amount To Borrow</div>
      </div>
      <div className=" text-center font-light space-y-3">
        <span className="font-bold bottom-4">
          {parseInt(props.monthlyPayment).toLocaleString('en-IN', localeOptions)}
        </span>
        <div className="italic">Monthly Payment</div>
      </div>
      
      <div className="text-right font-light space-y-3">
        <span className="font-bold bottom-2">
          {parseInt(props.totalRepaid).toLocaleString('en-IN', localeOptions)}
        </span>
        <div className="italic">Total Repaid</div>
      </div>
      </div>
    <div className="flex justify-between">
    <div className="text-left space-y-3  ">
        <span className="font-bold text-red-500  bottom-2">
          {parseInt(props.totalInterestPaid).toLocaleString('en-IN', localeOptions)}
        </span>
        <div className="italic">Total Interest Paid</div>
      </div>
      <div className="text-center space-y-3 ">
        <span className="font-bold text-green-600 bottom-2">
          {((props.depositAmount / props.purchasingHousePrice) * 100).toFixed(1)}%
        </span>
        <div className="italic">Deposit</div>
      </div>
      <div className="text-right space-y-3 ">
        <span className="font-bold bottom-2">
          {((props.amountToBorrow / props.purchasingHousePrice) * 100).toFixed(1)}%
        </span>
        <div className="italic">Loan To Value</div>
      </div>
    </div>
</div>  )
}
