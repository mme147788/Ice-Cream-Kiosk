import { useState } from 'react';
import FlavorList from './flavorList.jsx';
import OrderSummary from './orderSummary.jsx';
import Header from './header.jsx';
import ShowOnlyAvailable from './showOnlyAvailable.jsx'
import NoticeArea from './noticeArea.jsx'
import styles from './HomePage.module.css';


export default function HomePage() {

  const [flavors, setFlavors] = useState([
    { name: 'Vanilla', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Chocolate', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Strawberry', isSoldOut: true, scoopsSelected: 0 },
    { name: 'Pistachio', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Cookies & Cream', isSoldOut: false, scoopsSelected: 0 },
    { name: 'Mango', isSoldOut: true, scoopsSelected: 0 }
  ]);
  const scoopLimit = 5;
  const [showAvailable, setShowAvailable] = useState(false);

  return (
    <div className={styles.container}>
      <Header title="Ice-Cream Kiosk" />
      <ShowOnlyAvailable showAvailable={showAvailable} setShowAvailable={setShowAvailable} />
      <FlavorList flavors={showAvailable ? flavors.filter(flavor => !flavor.isSoldOut) : flavors} setFlavors={setFlavors} />
      <NoticeArea flavors={flavors} />
      <OrderSummary flavors={flavors} />
      <NoticeArea flavors={flavors} showAvailable={showAvailable} scoopLimit={scoopLimit}/>
    </div>
  )
}
