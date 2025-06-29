import s from "./BudgetsChart.module.scss";
import data from "../../data/data.json";
import { PieChart, Pie, Cell } from "recharts";

type BudgetsItem = {
  category: string;
  maximum: number;
  theme: string;
};

function BudgetsChart() {
  const budgets: BudgetsItem[] = data.budgets;

  const pieData = budgets.map((item) => ({
    name: item.category,
    value: item.maximum,
    color: item.theme,
  }));

  return (
    <div className={s.budgetsChart}>
      <div className={s.header}>
        <span className={s.textPresent2}>Budgets</span>
        <div className={s.seeDetails}>
          <a href="/pots">See Details</a>
          <img src="/images/icon-caret-right.svg" alt="icon" />
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
          {budgets.map((item) => (
            <li key={item.category}>
              <span
                className={s.colorLine}
                style={{ backgroundColor: item.theme }}
              />
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
