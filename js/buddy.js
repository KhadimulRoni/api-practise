const loadBuddies = () =>{
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayBuddies(data));
}

const displayBuddies = buddy =>{
    const buddyGenerate = document.getElementById('buddies');
    const buddies = buddy.results;
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title}  ${buddy.name.first} ${buddy.name.last} , email: ${buddy.email}`;
        buddyGenerate.appendChild(p);
    }
}