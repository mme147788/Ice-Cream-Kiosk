import Button from './button.jsx';
import styles from './HomePage.module.css';

export default function FlavorList({ flavors, setFlavors }) {
  return (
    <div className={styles.flavors}>
      {flavors.map((flavor, index) => (
        <div className={styles.flavor} key={index}>

          <h3>{flavor.name}</h3>

          <p>
            {flavor.isSoldOut ? 'Sold Out' : 'Available'}
          </p>

          <p>Scoops: {flavor.scoopsSelected}</p>

          <Button
            index={index}
            flavor={flavor}
            setFlavors={setFlavors}
          />

        </div>
      ))}
    </div>
  );
}
