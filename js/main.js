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
const item = document.getElementById("ElItemwaney");
    for (let i = 0 ; i < Team.length; i++) {
        let membro = Team[i];
        // console.log(membro);
        
        for (let chiave in membro) {
            item.innerHTML += membro[chiave]; 
            console.log(membro[chiave]);
        }
    }






    