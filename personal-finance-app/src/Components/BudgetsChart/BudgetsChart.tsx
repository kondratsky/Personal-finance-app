import s from './BudgetsChart.module.scss';
import data from '../../data/data.json';
import { PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import caretRight from '/public/images/icon-caret-right.svg';

type BudgetsItem = {
  category: string;
  maximum: number;
  theme: string;
};

const budgets: BudgetsItem[] = data.budgets;

const pieData = budgets.map(item => ({
  name: item.category,
  value: item.maximum,
  color: item.theme,
}));

function BudgetsChart() {
  return (
    <div className={s.budgetsChart}>
      <div className={s.header}>
        <span className={s.textPresent2}>Budgets</span>
        <div className={s.seeDetails}>
          <Link to="/pots">See Details</Link>

          <img src={caretRight} alt="icon" />
        </div>
      </div>

      <div className={s.main}>
        <div className={s.chartWrapper}>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              stroke="none"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <ul className={s.potsList}>
          {budgets.map(item => (
            <li key={item.category}>
              <span className={s.colorLine} style={{ backgroundColor: item.theme }} />
              <div className={s.info}>
                <span className={s.name}>{item.category}</span>
                <span className={s.amount}>${item.maximum.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BudgetsChart;
