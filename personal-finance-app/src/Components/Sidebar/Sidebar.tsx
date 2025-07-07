import s from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoLarge from '/public/images/logo-large.svg';
import logoSmall from '/public/images/logo-small.svg';

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);

  const toggleSidebar = () => {
    setIsSwinging(true);

    setTimeout(() => {
      setIsSwinging(false);
      setIsMinimized(prev => !prev);
    }, 600);
  };

  const navItems = [
    { label: 'Overview', icon: '/images/icon-nav-overview.svg', to: '/' },
    { label: 'Transaction', icon: '/images/icon-nav-transactions.svg', to: '/transaction' },
    { label: 'Budgets', icon: '/images/icon-nav-budgets.svg', to: '/budgets' },
    { label: 'Pots', icon: '/images/Pots.svg', to: '/pots' },
    { label: 'Recurring Bills', icon: '/images/icon-nav-recurring-bills.svg', to: '/recurring' },
  ];

  return (
    <div className={`${s.sidebar} ${isMinimized ? s.minimized : ''}`}>
      <div className={isMinimized ? s.logoSmall : s.logoBig}>
        <img src={isMinimized ? logoSmall : logoLarge} alt="Logo" />
      </div>
      <ul className={s.navList}>
        {navItems.map(item => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              className={({ isActive }: { isActive: boolean }) =>
                `${s.navItem} ${isActive ? s.active : ''}`
              }
            >
              <img src={item.icon} alt={item.label} />
              <span className={s.textPresent3}>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={toggleSidebar} className={s.minimizeMenu}>
        <img
          src={'/images/icon-minimize-menu.svg'}
          alt="MinimizeMenu"
          className={`
    ${isSwinging ? s.swinging : ''}
    ${isMinimized ? s.rotated : ''}
  `}
        />
        <span className={s.textPresent3}>Minimize Menu</span>
      </button>
    </div>
  );
}
export default Sidebar;
