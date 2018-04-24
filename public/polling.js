// Add logic to this script to poll server every second for updated pixels.
let sequenceNumber = 0;

function fetchUpdates() {
    fetch("/updates", {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        method: "POST",
        body: JSON.stringify({ clientupdates })
    })
        .then(response => response.json())
        .then(({ updates }) => {
            setTimeout(fetchUpdates, 1000);
        });
    
}
setTimeout(fetchUpdates, 1000);
