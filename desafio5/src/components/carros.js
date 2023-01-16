import styles from "./carros.module.css" 

const carros = ({ brand, km, color, newCar }) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>

        <ul>
            <li className={styles.li_carros}>Marca: {brand}</li>
            <li className={styles.li_carros}>KM: {km}</li>
            <li className={styles.li_carros}>Cor: {color}</li>
        </ul>
        { newCar && <p>Este carro é novo</p>}
    </div>
  );
}

export default carros;