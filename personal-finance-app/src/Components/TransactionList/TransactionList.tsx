import s from './TransactionList.module.scss';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import caretRight from '/public/images/icon-caret-right.svg';

function TransactionList() {
  const transactions = data.transactions.slice(0, 5);
  return (
    <div className={s.transactionList}>
      <div className={s.header}>
        <span className={s.textPresent2}>Transaction</span>
        <div className={s.viewAll}>
          <Link to="/transaction">View All</Link>

          <img src={caretRight} alt="icon" />
        </div>
      </div>

      <ul className={s.transaction}>
        {transactions.map(
          (item: { avatar: string; name: string; date: string; amount: number }, index) => (
            <li key={item.avatar}>
              <div className={s.row}>
                <div className={s.information}>
                  <img src={item.avatar} alt="avatar" className={s.avatar} />

                  <span className={s.name}>{item.name}</span>
                </div>

                <div className={s.howMuchAndWhere}>
                  <span className={`${s.amount} ${item.amount > 0 ? s.plus : ''}`}>
                    {item.amount > 0 ? `+$${item.amount}` : `-$${Math.abs(item.amount)}`}
                  </span>
                  <span className={s.date}>
                    {new Date(item.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              {index !== transactions.length - 1 && <hr />}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default TransactionList;
