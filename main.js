var ajout = document.getElementById("formulaire");
var liste = document.getElementById("liste");
var fait = document.getElementById("fait");
// var zoneTaches = document.getElementById("zone-taches")
var zoneSaisie = document.getElementById("zoneSaisie");
var zoneDescription = document.getElementById("zoneDescription");
var zoneDate = document.getElementById("zoneDate");

var randomColor

// ajout.submit(function() {
ajout.addEventListener('submit', function() {
    var tache = document.createElement('div');
    tache.classList.add("zone-taches");
    // tache.style.borderColor = randomColor;
    liste.appendChild(tache);
    
    var titre = document.createElement('p');
    titre.classList.add("titre-style");
    titre.innerText = zoneSaisie.value;
    tache.appendChild(titre);
    zoneSaisie.value = "";

    var description = document.createElement('p');
    description.classList.add("description-style");
    description.innerText = zoneDescription.value;
    tache.appendChild(description);
    zoneDescription.value = "";

    var date = document.createElement('p');
    date.classList.add("date-style");
    date.innerText = new Date().toLocaleDateString("fr-FR");
    tache.appendChild(date);

    // var zone-boutons = document.createElement('div');
    // zone-boutons.classList.add("zone-boutons");
    // tache.appendChild(zone-boutons);

    var check = document.createElement('div');
    check.classList.add("check");
    tache.appendChild(check);

    var remove = document.createElement('div');
    remove.classList.add("remove");
    tache.appendChild(remove);

    titre.addEventListener('click', function() {
        liste.removeChild(tache);
        fait.appendChild(tache);
        titre.style.textDecoration = "line-through";
        titre.style.textDecorationColor = "grey";
        titre.style.color = "grey";
        description.style.textDecoration = "line-through";
        description.style.textDecorationColor = "grey";
        description.style.color = "grey";
        date.style.textDecoration = "line-through";
        date.style.textDecorationColor = "grey";
        date.style.color = "grey";
        check.remove();
        })

    check.addEventListener('click', function() {
        liste.removeChild(tache);
        fait.appendChild(tache);
        titre.style.textDecoration = "line-through";
        titre.style.textDecorationColor = "grey";
        titre.style.color = "grey";
        description.style.textDecoration = "line-through";
        description.style.textDecorationColor = "grey";
        description.style.color = "grey";
        date.style.textDecoration = "line-through";
        date.style.textDecorationColor = "grey";
        date.style.color = "grey";
        check.remove();
        })

    titre.addEventListener('dblclick', function(){
        tache.remove();
        // tache.removeChild(titre);
        // tache.removeChild(description);
        // tache.removeChild(date);
    })

    remove.addEventListener('click', function(){
        tache.remove();
    })
})

