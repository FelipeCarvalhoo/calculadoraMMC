import { levels } from "../../helpers/imc"; //escri levels e não level ok!
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = { 
    item: levels
};
//ali na linha14 eu poderia fazer assim {item.icon === 'up' && <img src={upImage} alt="" width="30"/>} e {item.icon === 'down' && <img src={downImage} alt="" width="30"/>} this is economy


export const GridItem = ({item}: Props) => {
    return (
<div className={styles.main} style={{ backgroundColor: item.color }}>
<div className={styles.gridIcon}>
<img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/> 

</div>
<div className={styles.gridTitle}></div>
<div className={styles.gridInfo}></div>
</div>
);
}  