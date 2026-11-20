
export default function ShowOnlyAvailable({ showAvailable, setShowAvailable }) {

    return (
        showAvailable
            ? <button onClick={() => setShowAvailable(false)}>Show All</button>
            : <button onClick={() => setShowAvailable(true)}>Show only available flavors</button>
    );
}
