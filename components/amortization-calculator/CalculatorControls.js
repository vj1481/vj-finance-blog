import React from 'react'

const localeOptions = {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}

export const CalculatorControls = (props) => {
  return (
    <>
      <div className="flex  justify-between">
        <div className=" text-left  flex-grow font-semibold space-y-2">
          <span className="bottom-2">
            {parseInt(0).toLocaleString('en-IN', localeOptions).replace(/\d/g, '').trim()}
          </span>
          <input
            className="pl-2 "
            min="50000"
            max="75000000"
            step="1000"
            value={props.purchasingHousePrice}
            onChange={(event) => props.setPurchasingHousePrice(event.target.value)}
          />

          <div>
            <input
              type="range"
              className=" w-80"
              id="purchasingHousePrice"
              min="50000"
              max="75000000"
              step="1000"
              value={props.purchasingHousePrice}
              onChange={(event) => props.setPurchasingHousePrice(event.target.value)}
            />
          </div>

          <label htmlFor="purchasingHousePrice" className=" italic font-light">
            Purchasing House Price
          </label>
        </div>
        <div className="text-left  flex-grow font-semibold space-y-2">
          <span className="bottom-2">
            {parseInt(0).toLocaleString('en-IN', localeOptions).replace(/\d/g, '').trim()}
          </span>
          <input
            className="pl-2 "
            id="depositAmount"
            min="1000"
            max="15000000"
            step="1000"
            value={props.depositAmount}
            onChange={(event) => props.setDepositAmount(event.target.value)}
          />
          <div>
            <input
              type="range"
              className=" w-80"
              id="depositAmount"
              min="1000"
              max="15000000"
              step="1000"
              value={props.depositAmount}
              onChange={(event) => props.setDepositAmount(event.target.value)}
            />
          </div>
          <label className="italic font-light" htmlFor="points">
            Deposit
          </label>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="text-left  flex-grow font-semibold space-y-2">
          <span className="bottom-2">{props.mortgageTerm} Years</span>
          <div>
            <input
              type="range"
              className=" w-80"
              id="mortgageTerm"
              min="5"
              max="35"
              step="1"
              value={props.mortgageTerm}
              onChange={(event) => props.setMortgageTerm(event.target.value)}
            />
          </div>
          <label className="italic font-light" htmlFor="mortgageTerm">
            Mortgage Term
          </label>
        </div>
        <div className="text-left  flex-grow font-semibold space-y-2">
          <span className="bottom-2">{props.interestRate}%</span>
          <div>
            <input
              type="range"
              className="w-80"
              id="interestRate"
              min="0.1"
              max="16"
              step="0.1"
              value={props.interestRate}
              onChange={(event) => props.setInterestRate(event.target.value)}
            />
          </div>
          <label className="italic font-light" htmlFor="interestRate">
            Interest Rate
          </label>
        </div>
      </div>
    </>
  )
}
