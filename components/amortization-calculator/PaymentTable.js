import React from 'react'
const localeOptions = {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

export const PaymentTable = (props) => {
  let paymentMonthsArr = []
  for (let i = 0; i < props.yearlyPayments.length; i++) {
    paymentMonthsArr.push(
      <tr key={props.yearlyPayments[i].year}>
        <td>{props.yearlyPayments[i].year}</td>
        <td>{props.yearlyPayments[i].interestPaid.toLocaleString('en-IN', localeOptions)}</td>
        <td>{props.yearlyPayments[i].interestPaidToDate.toLocaleString('en-IN', localeOptions)}</td>
        <td>{props.yearlyPayments[i].principalRepaid.toLocaleString('en-IN', localeOptions)}</td>
        <td>
          {props.yearlyPayments[i].principalRepaidToDate.toLocaleString('en-IN', localeOptions)}
        </td>
        <td>{props.yearlyPayments[i].outstandingBalance.toLocaleString('en-IN', localeOptions)}</td>
      </tr>
    )
  }

  return (
    <section class="container mx-auto p-6 font-mono">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg pl-4  bg-purple-100">
        <div class="w-full overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Year</th>
                <th>Year Interest Paid</th>
                <th>Total Interest Paid</th>
                <th>Year Principal Repaid</th>
                <th>Total Principal Repaid</th>
                <th>Mortgage Balance</th>
              </tr>
            </thead>
            <tbody>{paymentMonthsArr}</tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
