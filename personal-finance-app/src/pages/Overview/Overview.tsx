import PostSection from '../../Components/PotsSection/PotsSection';
import s from './Overview.module.scss';
import BalanceSummary from './components/BalanceSummary/BalanceSummary';
import TransactionList from '../../Components/TransactionList/TransactionList';
import BudgetsChart from '../../Components/BudgetsChart/BudgetsChart';
import RecurringBills from '../../Components/RecurringBills/RecurringBills';

function Overview() {
  return (
    <div className={s.Overview}>
      <h2>Overview</h2>

      <BalanceSummary />

      <div className={s.grid}>
        <div className={s.leftColumn}>
          <PostSection />
          <TransactionList />
        </div>
        <div className={s.rightColumn}>
          <BudgetsChart />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
}
export default Overview;
