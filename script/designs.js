console.log('aqui estoy designs');

async function getDesigns() {
    let response = await fetch('https://shopseekerback-production.up.railway.app/api/designs', {
        method: "POST",
        credentials: "include",
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}
getDesigns();