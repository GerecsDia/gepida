/*
* File: ButtonPanel.java
* Author: Gerecs Diána
* Copyright: 2023, Gerecs Diána
* Group: Szoft I-2-E
* Date: 2023-03-06
* Github: https://github.com/GerecsDia/
* Licenc: GNU GPL
*/
const biketbody = document.querySelector('#biketbody');

var bikeList = [
    { id: 1, name:"cassis", col: 28, type: 'offroad', price: 557900 },
    { id: 2, name:"Alboin 900", col: 28, type: 'trekking', price: 51990 },
    { id: 3, name:"Asgard", col: 28, type: 'technic', price: 51990 },
    { id: 4, name:"Ruga", col: 28, type: 'mountainbike', price: 372900 },
   

];
//createTable();
(function createTable() {
bikeList.forEach((bike) => {
    console.log(bike.name)
    let tr = document.createElement('tr');     //tr elem gyártása

    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCol = document.createElement('td');
    let tdType = document.createElement('td');
    let tdPrice = document.createElement('td');

    //Adunk neki tartalmat:
    tdId.textContent = bike.id;
    tdName.textContent = bike.name;
    tdCol.textContent = bike.col;
    tdType.textContent = bike.type;
    tdPrice.textContent = bike.price;

    //hozzá kell adni a tbodyt a tr és td elemekhez
    biketbody.append(tr);
    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdCol);
    tr.append(tdType);
    tr.append(tdPrice);
    


    
});
})();

