import data from "../data/data.json";

type Transaction = {
  name: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export function getRecurringBills() {
  const now = new Date();

  const recurring = data.transactions.filter((t) => t.recurring);

  const paidBills = recurring.filter((t) => new Date(t.date) < now);
  const upcomingBills = recurring.filter((t) => new Date(t.date) > now);
  const dueSoonBills = recurring.filter((t) => {
    const diff = new Date(t.date).getTime() - now.getTime();
    return diff <= 7 * 24 * 60 * 60 * 1000 && diff > 0;
  });

  const paidAmount = paidBills.reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const upcomingAmount = upcomingBills.reduce(
    (acc, t) => acc + Math.abs(t.amount),
    0
  );
  const dueSoonAmount = dueSoonBills.reduce(
    (acc, t) => acc + Math.abs(t.amount),
    0
  );

  return [
    { name: "Paid Bills", amount: paidAmount, color: "#277C78" },
    { name: "Total Upcoming", amount: upcomingAmount, color: "#F2CDAC" },
    { name: "Due Soon", amount: dueSoonAmount, color: "#82C9D7" },
  ];
}
