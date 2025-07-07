import s from './BalanceSummary.module.scss';
import data from '../../../../data/data.json';

function BalanceSummary() {
  return (
    <div className={s.balanceSummary}>
      <div className={s.currentBalance}>
        <p className={s.textPresetWhite4}>Current Balance</p>
        <p className={s.amount}>${data.balance.current}</p>
      </div>
      <div className={s.income}>
        <p className={s.textPresetBlack4}>Income</p>
        <p className={s.amount}>${data.balance.income}</p>
      </div>
      <div className={s.expenses}>
        <p className={s.textPreset4}>Expenses</p>
        <p className={s.amount}>${data.balance.expenses}</p>
      </div>
    </div>
  );
}
export default BalanceSummary;
