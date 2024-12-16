document.addEventListener('DOMContentLoaded', () => {
    let counPlay = document.querySelector('.coun-play');
    let red;
    
    let close = document.querySelector('#close');
    close.addEventListener("click", (e) => {
        e.preventDefault();
        counPlay.style.display = 'none';
    }) ;

    let closer=document.getElementById('closer');
    closer.addEventListener('click',function(e){
        e.preventDefault();
        let Formulaire=document.getElementById('Formulaire');
        Formulaire.style.display='none';
        
    });

    let ID=0;
    let IDE=0;
    let cardplay=document.getElementsByClassName('card-player');
    
    let ajouerCb1 = document.querySelector('#ajouter-cb-un');
    let ajouerCb2 =document.querySelector('#ajouter-cb-deux');
    
    const  ajouterR=document.querySelector('#ajouter-rb');
    let  ajouterL=document.querySelector('#ajouter-lb');
   

    let ajouteGk = document.getElementById('ajouter-gk');
   

    let ajouerCm1 = document.querySelector('#ajouter-cm-un');
    let ajouerCm2 = document.querySelector('#ajouter-cm-deux');
    let ajouerCm3 = document.querySelector('#ajouter-cm-trois');

    let ajouterLf=document.querySelector('#ajouter-lf');
    const  ajouteSt=document.querySelector('#ajouter-st');
    const  ajouterRf=document.querySelector('#ajouter-rf');

    let ajoute = document.getElementById('boutton-ajoutee');
    let infoForm = document.querySelector('form');

    const subinfo=document.querySelector('#subinfo');


   let counChangment= document.querySelector('.changment')

ajoute.addEventListener('click', () => {





    //infoForm.style.display = 'block';  
});


    fetch("/js/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let arr = data.players; 
        console.log(arr);





    ajouterL.addEventListener("click", () => {
            counPlay.innerHTML="";
           
            counPlay.append(close);
            counPlay.style.display = 'block';  
                arr.forEach(element => {
                    if(element.position==="LB"){
                        ID++;
                        IDE++;
                        const htmlContent = `
                        <div class="card-player" id="${ID}">
                        <img src="${element.photo}" alt="joueur photo">
                         <div class="post-total">
                         <span id="total-player">${element.rating}</span><br>
                         <span id="position">${element.position}</span>
                         </div>
                         <div class="flag-club">
                         <span class="flag">
                         <img src="${element.flag}" alt="${element.nationality}">
                         </span>
                         <span class="club">
                         <img src="${element.logo}" alt="${element.club}">
                         </span>
                       </div>
                       <div class="statistiques">
                        <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                        <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                        <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                        <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                        <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                        <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                       </div>
                       <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                        <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                    </div>
                     `
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer () ;
                        ajoutePlayerLb ();
                    }
                  
                });
 
            })
    ajouterLf.addEventListener("click", () => {
                counPlay.innerHTML="";
                counPlay.append(close);
                counPlay.style.display = 'block';    
                    arr.forEach(element => {
                        
                        if(element.position==="LW"){
                            ID++;
                            const htmlContent = `
                             <div class="card-player" id="${ID}">
                            <div class="card-player">
                           <img src="${element.photo}" alt="joueur photo">
                           <div class="post-total">
                             <span id="total-player">${element.rating}</span><br>
                             <span id="position">${element.position}</span>
                           </div>
                           <div class="flag-club">
                             <span class="flag">
                                 <img src="${element.flag}" alt="${element.nationality}">
                             </span>
                             <span class="club">
                                 <img src="${element.logo}" alt="${element.club}">
                             </span>
                           </div>
                           <div class="statistiques">
                                 <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                 <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                 <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                 <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                 <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                 <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                           </div>
                            </div>
                              <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                              <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ();
                            ajoutePlayerLw ();
                            
                        }
                    });
            })
    ajouterRf.addEventListener("click", () => {
            counPlay.style.display = 'block';
            counPlay.innerHTML="";
            counPlay.append(close);
            let thisPlayer;  
            arr.forEach(element => {
                if(element.position==="RW"){
                        if(!thisPlayer){
                            thisPlayer = element;
                        }else if(element.rating>thisPlayer.rating){
                                    thisPlayer = element;
                                }
                            }
                        });
                        ajouerRf.innerHTML = `
                        <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                        `;            
            })
    ajouteSt.addEventListener("click", () => {
      
        counPlay.style.display = 'block';
        counPlay.innerHTML="";
        counPlay.append(close);
        let thisPlayer;  
        arr.forEach(element => {
            if(element.position==="ST"){
                    if(!thisPlayer){
                        thisPlayer = element;
                    }else if(element.rating>thisPlayer.rating){
                                thisPlayer = element;
                            }
                         }
                    });
                    ajouerSt.innerHTML = `
                    <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                    `;            

            })
    ajouterR.addEventListener("click", () => {
        counPlay.style.display = 'block';
        counPlay.innerHTML="";
        counPlay.append(close);
        let thisPlayer;  
        arr.forEach(element => {
            if(element.position==="R"){
                    if(!thisPlayer){
                        thisPlayer = element;
                    }else if(element.rating>thisPlayer.rating){
                                thisPlayer = element;
                            }
                         }
                    });
                    ajouerR.innerHTML = `
                    <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                    `;            
            })   

    ajouerCm1.addEventListener('click', () => {

        counPlay.style.display = 'block';
        counPlay.innerHTML="";
        counPlay.append(close);
        let thisPlayer;  
        arr.forEach(element => {
            if(element.position==="CM"){
                    if(!thisPlayer){
                        thisPlayer = element;
                    }else if(element.rating>thisPlayer.rating){
                                thisPlayer = element;
                            }
                         }
                    });
                    ajouerCm1.innerHTML = `
                    <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                    `;            

            })
    ajouerCm2.addEventListener('click', () => {
        counPlay.style.display = 'block';
        counPlay.innerHTML="";
        counPlay.append(close);
        let thisPlayer;  
        arr.forEach(element => {
            if(element.position==="CM"){
                    if(!thisPlayer){
                        thisPlayer = element;
                    }else if(element.rating>thisPlayer.rating){
                                thisPlayer = element;
                            }
                         }
                    });
                    ajouerCm2.innerHTML = `
                    <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                    `;            
            })
    ajouerCm3.addEventListener('click', () => {
        counPlay.style.display = 'block';
        counPlay.innerHTML="";
        counPlay.append(close);
        let thisPlayer;  
        arr.forEach(element => {
            if(element.position==="CM"){
                    if(!thisPlayer){
                        thisPlayer = element;
                    }else if(element.rating>thisPlayer.rating){
                                thisPlayer = element;
                            }
                         }
                    });
                    ajouerCm3.innerHTML = `
                    <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                    `;            

            })
  
    ajouerCb1.addEventListener('click', () => {
        
            counPlay.style.display = 'block';
            counPlay.innerHTML="";
            counPlay.append(close);
            let thisPlayer;  
            arr.forEach(element => {
                if(element.position==="CB"){
                        if(!thisPlayer){
                            thisPlayer = element;
                        }else if(element.rating>thisPlayer.rating){
                                    thisPlayer = element;
                                }
                             }
                        });
                        ajouerCb1.innerHTML = `
                        <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                        `;            

            })
    ajouerCb2.addEventListener('click', () => {
                    counPlay.style.display = 'block';
                    counPlay.innerHTML="";
                    counPlay.append(close);
                    let thisPlayer;  
                    arr.forEach(element => {
                        if(element.position==="CB"){
                                if(!thisPlayer){
                                    thisPlayer = element;
                                }else if(element.rating>thisPlayer.rating){
                                            thisPlayer = element;
                                        }
                                     }
                                });
                                ajouerCb2.innerHTML = `
                                <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 100px; margin-left:20px; padding:0px">
                                `; 
                            
                            });
   
    ajouteGk.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.append(close);
            counPlay.style.display = 'block';  
            let thisPlayer;  
                arr.forEach(element => {
                    if(element.position==="GK"){
                        if(!thisPlayer){
                            thisPlayer = element;
                        }else if(element.rating>thisPlayer.rating){
                            thisPlayer = element;
                        }
                     }
                });
                ajouteGk.innerHTML = `
                <img src="${thisPlayer.photo}" alt="Player" class="position-player" style="width: 60%; margin-left:20px; padding:0px">
                `; 
            })
        });



        function deletPlayer (){
            supp = document.querySelectorAll('.supp');
            supp.forEach(item=>{
                item.addEventListener('click',() => {
                    let cardPlayer = item.closest('.card-player');
                        cardPlayer.remove();
                });
            })

        }
        function ajoutePlayerLb() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                   
                    let cardPlayer = button.closest('.card-player');
        
                    let playerImage = cardPlayer.querySelector('img').src; 
                        ajouterL.innerHTML = `
                        <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                        `; 
                });
            });
        }  
        function ajoutePlayerRb() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterR.innerHTML = `
                        <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                        `;  
                });
            });
        }

        function ajoutePlayerLw() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterLf.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width:  27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerRw() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterRf.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width:  27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerSt() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouteSt.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width: 27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerCb1() {
                    let addButtons = document.querySelectorAll('.add');
                    addButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            let cardPlayer = button.closest('.card-player');
                            let playerImage = cardPlayer.querySelector('img').src;
                            ajouerCb1.innerHTML =`
                            <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                            `; 
                        }); 
                    });
        }
         function ajoutePlayerCb2() {
                    let addButtons = document.querySelectorAll('.add');
                    addButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            let cardPlayer = button.closest('.card-player');
                            let playerImage = cardPlayer.querySelector('img').src;
                            ajouerCb2.innerHTML =`
                            <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                            `;  
                        }); 
                    });
        }    
        function ajoutePlayerCm1() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouerCm1.innerHTML =`
                    <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }            
        function ajoutePlayerCm2() {
    let addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cardPlayer = button.closest('.card-player');
            let playerImage = cardPlayer.querySelector('img').src;
            ajouerCm2.innerHTML =`
            <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
            `;  
        }); 
    });
        }            
        function ajoutePlayerCm3() {
    let addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cardPlayer = button.closest('.card-player');
            let playerImage = cardPlayer.querySelector('img').src;
            ajouerCm3.innerHTML =`
            <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
            `;  
        }); 
    });
        }            
document.getElementById('subinfo').addEventListener('click', function (event) {
    event.preventDefault();

    const name_pl = document.getElementById('name_pl').value;
    const notation_pl = document.getElementById('notation-pl').value;
    const rythme_pl = document.getElementById('rythme-pl').value;
    const tir_pl = document.getElementById('tir-pl').value;
    const passe_pl = document.getElementById('passe-pl').value;
    const dribble_pl = document.getElementById('dribble-pl').value;
    const defense_pl = document.getElementById('defense-pl').value;
    const physique_pl = document.getElementById('physique-pl').value;
    const position_pl = document.getElementById('position-pl').value;
    const photo_pl = document.getElementById('photo-pl').value;
    const nationality_pl = document.getElementById('nationality-pl').value;
    const club_pl = document.getElementById('club-pl').value;

    if (
        !name_pl || !notation_pl || !rythme_pl || !tir_pl || !passe_pl ||
        !dribble_pl || !defense_pl || !physique_pl ||
        !position_pl || !photo_pl || !nationality_pl || !club_pl
    ) {
        alert('error');
        return;
    }

    const card_play_chan = document.createElement('div');
    card_play_chan.className = "card-player_pl";
    card_play_chan.innerHTML = `
        <div id="blue">
           <img src="${photo_pl}" alt="${name_pl}" style="width:6em; margin: 10px 0px 1px 25px;"><br>
           <span id="total-player" style="width:6em; margin-left: 39px;">${notation_pl}</span>
           <span id="position" style="width:6em; margin-left: 16px;">${position_pl}</span>
           <div class="flag-club_pl">
               <span class="flag">
                   <img src="${nationality_pl}" style="width: 24px; height: 24px; margin-left:41px;">
               </span>
               <span class="club">
                   <img src="${club_pl}" style="width: 24px; height: 24px;">
               </span>
           </div>
           <div class="statistiques_pl">
               <span class="statistique-un">Rythme: <span class="rythme">${rythme_pl}</span></span><br>
               <span class="statistique-deux">Tir: <span class="tir">${tir_pl}</span></span><br>
               <span class="statistique-trois">Passe: <span class="passe">${passe_pl}</span></span><br>
               <span class="statistique-quatre">Dribble: <span class="dribble">${dribble_pl}</span></span><br>
               <span class="statistique-cinq">Défense: <span class="defense">${defense_pl}</span></span><br>
               <span class="statistique-six">Physique: <span class="physique">${physique_pl}</span></span>
           </div>
           <p style="margin-left:41px;">${name_pl}</p>
        </div>
        <button style="background:red" class="supp_pl">Supprimer</button>
        <button style="background:green" class="add_pl">Ajouter</button>
    `;
    document.querySelector('.changment').appendChild(card_play_chan);

    const supp_pl = card_play_chan.querySelector('.supp_pl');
    supp_pl.addEventListener('click', () => {
        card_play_chan.remove();
    });

    const add_pl = card_play_chan.querySelector('.add_pl');
    add_pl.addEventListener('click', () => {
        alert(`${name_pl} etait ajouter`);
    });
});

});
























