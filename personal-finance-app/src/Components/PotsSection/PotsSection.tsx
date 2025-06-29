import s from "./PotsSection.module.scss";
import data from "../../data/data.json";

function PostSection () { 
    return(
<div className={s.postSection}>
    <div className={s.pots}>
        <span className={s.textPresent2}>Pots</span>
        <div className={s.seeDetails}>
        <a href="/pots"> See Details</a>
        <img src="/images/icon-caret-right.svg" alt="icon" />
        </div>
        
    </div>
    <div className={s.saving}>
        <div className={s.totalSaved}>
            <div className={s.img}>
            <img src="/public/images/icon-pot.svg" alt="pot"/>
         </div>
        
        <div className={s.information}>
        <p className={s.textPresent4}>Total Saved</p>
        <p className={s.textPresent1}>$850</p>
        </div>
        </div>
        <div className={s.smallSaved}>
            <ul className={s.potsList}>
  {data.pots.slice(0, -1).map((item: {name:string, total:number, theme:string}) => (
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