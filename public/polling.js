let lastSeen = 0;

function fetchUpdates() {
    fetch("/updates", {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        method: "POST",
        body: JSON.stringify({ clientupdates, lastSeen })
    })
        .then(response => response.json())
        .then(({ newUpdates, latest }) => {
            lastSeen = latest;
            console.log("newUpdates: ", newUpdates);
            // debugger;
            newUpdates.map(args => bitmap.setColor(...args, true));
            clientupdates = [];
            setTimeout(fetchUpdates, 1000);
        });
    
}
setTimeout(fetchUpdates, 1000);
