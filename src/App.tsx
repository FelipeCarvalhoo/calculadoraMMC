// App.tsx
import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateImc} from './helpers/imc'; 

const App = () => {

    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const bundaCalculateButton = () => {
        if(heightField && weightField) {
        } else {
        alert("Digite todos os campos.");
        }
    }


    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt="" width={150} />
                </div>
                </header>
                <div className={styles.Container}>
                    <div className={styles.leftSide}>
                        <h1>Calcule o seu IMC.</h1>
                        <p>O IMC Índice de Massa Corporal indica se o peso está adequado à altura, ajudando a avaliar a saúde física.</p>

                        <input
                        type="number"
                        placeholder="Digite sua altura"
                        value={heightField > 0 ? heightField : ''}
                        onChange={e => setHeightField(parseFloat(e.target.value))}
                        />                        
                        
                        <input
                        type="number"
                        placeholder="Digite seu peso"
                        value={weightField > 0 ? weightField : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))}
                        />  
                    <button onClick={bundaCalculateButton}>Calcular</button>
                    </div>
                    <div className={styles.rightSide}>...

                    </div>

                </div>
        </div>
    );
}

export default App;
  