import s from './MainLayout.module.scss';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className={s.mainLayout}>
      <div className={s.layout}>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
}

export default MainLayout;
