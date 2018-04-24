// Add logic to this script to poll server every second for updated pixels.
let sequenceNumber = 0;
console.log(bitmap);

function fetchUpdates() {
    fetch("/updates", {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        method: "POST",
        body: JSON.stringify({ clientupdates, sequenceNumber })
    })
        .then(response => response.json())
        .then(({ updates }) => {
            console.log("updates: ", updates);
            
            updates.slice(sequenceNumber).map(args => bitmap.updateClient(...args));
            sequenceNumber = updates.length; 
            console.log("sequenceNumber: ", sequenceNumber);
            setTimeout(fetchUpdates, 1000);
        });
    
}
setTimeout(fetchUpdates, 1000);
