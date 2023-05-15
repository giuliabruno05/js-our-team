//creare un array di oggetti per rappresentare i membri del team, nome, ruolo e foto.


//MILESTONE 0

const Team = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto":"wayne-barnett-founder-ceo.jpg",
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto":"angela-caroll-chief-editor.jpg",
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto":"walter-gordon-office-manager.jpg",
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto":"angela-lopez-social-media-manager.jpg",
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto":"scott-estrada-developer.jpg",
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto":"barbara-ramos-graphic-designer.jpg",
    }
];
//MILESTONE 1
 console.log(Team);

//MILESTONE 2
const item = document.getElementById("teamItem");
    for (let i = 0 ; i < Team.length; i++) {
        let partner = Team[i];
       

        // mi creo delle costanti per creare le card 
        const nomePartner = partner.nome ;
        const ruoloPartner = partner.ruolo;
        const fotoPartner = partner.foto;
        
        const elCard = `<div class="card">
                        <img src="img/${partner.foto}" class="foto">
                        <div class="name-partner">${partner.nome}</div>
                        <div class="name-partner">${partner.ruolo}</div>
                        </div>`
                        
       
        item.innerHTML += elCard;
    }







    