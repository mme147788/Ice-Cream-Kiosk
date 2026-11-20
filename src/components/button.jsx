
export default function Button({ index, flavor, setFlavors }) {

  function addScoop() {
    setFlavors(prevFlavors =>
      prevFlavors.map((item, i) =>
        i === index
          ? { ...item, scoopsSelected: item.scoopsSelected + 1 }
          : item
      )
    );
  }

  function removeScoop() {
    setFlavors(prevFlavors =>
      prevFlavors.map((item, i) =>
        i === index && item.scoopsSelected > 0
          ? { ...item, scoopsSelected: item.scoopsSelected - 1 }
          : item
      )
    );
  }

  return (
    <div>
      <button
        onClick={addScoop}
        disabled={flavor.isSoldOut}
      >
        +
      </button>

      <button
        onClick={removeScoop}
        disabled={flavor.scoopsSelected === 0}
      >
        -
      </button>
    </div>
  );
}
