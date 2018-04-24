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
            // console.log("updates: ", updates);
            updates.map(args => bitmap.setColor(...args, true));
            clientupdates.length = 0;
            setTimeout(fetchUpdates, 1000);
        });
    
}
setTimeout(fetchUpdates, 1000);
