import styles from './HomePage.module.css';

export default function OrderSummary({ flavors }) {

    function totalScoops() {
        let countScoop = 0;

        for (const flavor of flavors) {
            countScoop += flavor.scoopsSelected;
        }
        return countScoop;
    }

    return (
        <div className={styles.summary}>
            <p>Total scoops: {totalScoops()}</p>
            <p>Total price: {totalScoops() * 6}$</p>

        </div>
    );
}
