import s from './PotsSection.module.scss';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import caretRight from '/public/images/icon-caret-right.svg';
import iconPot from '/public/images/icon-pot.svg';

function PostSection() {
  return (
    <div className={s.postSection}>
      <div className={s.pots}>
        <span className={s.textPresent2}>Pots</span>
        <div className={s.seeDetails}>
          <Link to="/pots">See Details</Link>
          <img src={caretRight} alt="icon" />
        </div>
      </div>
      <div className={s.saving}>
        <div className={s.totalSaved}>
          <div className={s.img}>
            <img src={iconPot} alt="pot" />
          </div>

          <div className={s.information}>
            <p className={s.textPresent4}>Total Saved</p>
            <p className={s.textPresent1}>$850</p>
          </div>
        </div>
        <div className={s.smallSaved}>
          <ul className={s.potsList}>
            {data.pots.slice(0, -1).map((item: { name: string; total: number; theme: string }) => (
              <li key={item.name}>
                <span className={s.colorLine} style={{ backgroundColor: item.theme }} />
                <div className={s.info}>
                  <span className={s.name}>{item.name}</span>
                  <span className={s.amount}>${item.total}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PostSection;
