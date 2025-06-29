import s from "./RecurringBills.module.scss"
import { getRecurringBills } from "../../utils/getRecurringBills"; 

function RecurringBills () {
    const bills = getRecurringBills();
    return (
        <div className={s.recurringBills}>
            <div className={s.header}>
                <span className={s.textPresent2}>Recurring Bills</span>
        <div className={s.seeDetails}>
          <a href="/recurring">See Details</a>
          <img src="/images/icon-caret-right.svg" alt="icon" />
        </div>
            </div>
            <div className={s.main}>
                <ul className={s.billsList}>
                    {bills.map((bill) => <li key={bill.name}>
                        <span  className={s.colorStripe} style={{ backgroundColor: bill.color }} ></span>
                        <div className={s.content}>
                         <span>{bill.name}</span>
                        <span className={s.amount}>${bill.amount.toFixed(2)}</span></div>
                       

                    </li>)}
                </ul>
            </div>
        </div>
    )
}
export default RecurringBills;