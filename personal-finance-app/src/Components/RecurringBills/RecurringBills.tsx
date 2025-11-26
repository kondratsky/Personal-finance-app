import s from './RecurringBills.module.scss';
import { getRecurringBills } from '../../utils/getRecurringBills';
import { Link } from 'react-router-dom';
import caretRight from '/public/images/icon-caret-right.svg';

function RecurringBills() {
  const bills = getRecurringBills();
  return (
    <div className={s.recurringBills}>
      <div className={s.header}>
        <span className={s.textPresent2}>Recurring Bills</span>
        <div className={s.seeDetails}>
          <Link to="/recurring">See Detail</Link>

          <img src={caretRight} alt="icon" />
        </div>
      </div>
      <div className={s.main}>
        <ul className={s.billsList}>
          {bills.map(bill => (
            <li key={bill.name}>
              <span className={s.colorStripe} style={{ backgroundColor: bill.color }}></span>
              <div className={s.content}>
                <span>{bill.name}</span>
                <span className={s.amount}>${bill.amount.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default RecurringBills;
