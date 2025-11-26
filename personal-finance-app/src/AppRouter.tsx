import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Overview from './pages/Overview/Overview';
import Transactions from './pages/Transactions/Transactions';
import Budgets from './pages/Budgets/Budgets';
import Recurring from './pages/Recurring/Recurring';
import Pots from './pages/Pots/Pots';

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<MainLayout/>}>
        <Route index element={<Overview/>} />
        <Route path="transaction" element={<Transactions/>}/>
        <Route path="budgets" element={<Budgets/>}/>
        <Route path="pots" element={<Pots/>}/>
        <Route path="recurring" element={<Recurring/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    );
}
