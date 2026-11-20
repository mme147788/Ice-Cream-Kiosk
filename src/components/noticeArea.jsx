export default function NoticeArea({ flavors, showAvailable, scoopLimit }) {

    let totalScoops = 0;
    let allSoldOut = true;

    for (const flavor of flavors) {
        totalScoops += flavor.scoopsSelected;

        if (!flavor.isSoldOut) {
            allSoldOut = false;
        }
    }

    return (
        <div>
            {totalScoops >= scoopLimit && (
                <p>Scoop limit reached</p>
            )}

            {showAvailable && allSoldOut && (
                <p>No flavors to show</p>
            )}
        </div>
    );
}