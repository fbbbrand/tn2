document.getElementById('boutonTri').addEventListener('click', function() {
    trierParMultiplicateur();
});

function trierParMultiplicateur() {
    var tableau = document.querySelector('.top25');
    var lignes = Array.from(tableau.querySelectorAll('.ligne'));

    // Exclure la première ligne du tri
    var lignesAExclure = lignes.shift();

    lignes.sort(function(a, b) {
        var colonneAMulti = a.querySelector('.colonneMulti');
        var colonneBMulti = b.querySelector('.colonneMulti');

        var valeurA = colonneAMulti ? parseFloat(colonneAMulti.innerText) || 0 : 0;
        var valeurB = colonneBMulti ? parseFloat(colonneBMulti.innerText) || 0 : 0;

        return valeurB - valeurA; // Tri décroissant
    });

    // Mettre à jour les ID des participants après le tri
    lignes.forEach(function(ligne, index) {
        ligne.querySelectorAll('.colonnePseudo input').forEach(function(input) {
            input.id = 'participant' + (index + 1);
        });
    });

    // Ajouter la première ligne après le tri
    tableau.appendChild(lignesAExclure);

    // Retirer les lignes existantes du tableau
    lignes.forEach(function(ligne) {
        tableau.removeChild(ligne);
    });

    // Ajouter les lignes triées au tableau
    lignes.forEach(function(ligne) {
        tableau.appendChild(ligne);
    });

    // Mettre à jour les div avec l'id "pseudoGagnant" avec les 8 premières lignes triées
    for (var i = 0; i < 8; i++) {
        var nomParticipant = document.getElementById("participant" + (i + 1)).value;
        document.getElementById("pseudoGagnant" + (i + 1)).textContent = nomParticipant;
    };
};



// CALCUL MULTI TABLEAU 

// Récupérez toutes les boîtes de gain et de résultat
var gainBoxes = document.querySelectorAll(".colonneGain input");
var resultBoxes = document.querySelectorAll(".colonneMulti");

// Ajoutez un écouteur d'événements pour chaque boîte de gain
gainBoxes.forEach(function (colonneGain, index) {
    colonneGain.addEventListener("input", function () {
        // Récupérez la valeur de la boîte de gain correspondante
        var gainValue = parseFloat(colonneGain.value);

        // Vérifiez si la valeur est un nombre valide
        if (!isNaN(gainValue)) {
            // Effectuez le calcul en divisant la valeur par 0.2
            var result = gainValue / 0.2;

            // Mettez à jour la cellule de résultat avec le résultat limité à 2 décimales
            resultBoxes[index].textContent = result.toFixed(2);
            resultBoxes[index].style.textAlign = "center";

            // Appliquez les styles en fonction de la valeur
            if (result < 25) {
                resultBoxes[index].style.color = "#db2b5a";
            } else if (result >= 25 && result <= 75) {
                resultBoxes[index].style.color = "#e38800";
            } else {
                resultBoxes[index].style.color = "#00e31e";
            }
        } 
    });
});


// CALCUL MULTI ARBRE FINAL

// Récupérez toutes les boîtes de gain et de résultat
var gainBoxes2 = document.querySelectorAll(".gainArbre input");
var resultBoxes2 = document.querySelectorAll(".multiArbre");

// Ajoutez un écouteur d'événements pour chaque boîte de gain
gainBoxes2.forEach(function (gainArbre, index) {
    gainArbre.addEventListener("input", function () {
        // Récupérez la valeur de la boîte de gain correspondante
        var gainValue2 = parseFloat(gainArbre.value);

        // Vérifiez si la valeur est un nombre valide
        if (!isNaN(gainValue2)) {
            // Effectuez le calcul en divisant la valeur par 0.2
            var result2 = gainValue2 / 0.2;

            // Mettez à jour la cellule de résultat avec le résultat limité à 2 décimales
            resultBoxes2[index].textContent = result2.toFixed(2);
            resultBoxes2[index].style.textAlign = "center";

            // Appliquez les styles en fonction de la valeur
            if (result2 < 25) {
                resultBoxes2[index].style.color = "#db2b5a";
            } else if (result2 >= 25 && result2 <= 75) {
                resultBoxes2[index].style.color = "#e38800";
            } else {
                resultBoxes2[index].style.color = "#00e31e";
            }
        } 
    });
});

// Récupérez toutes les boîtes de gain et de résultat
var gainBoxes3 = document.querySelectorAll(".gainArbre2 input");
var resultBoxes3 = document.querySelectorAll(".multiArbre2");

// Ajoutez un écouteur d'événements pour chaque boîte de gain
gainBoxes3.forEach(function (gainArbre2, index) {
    gainArbre2.addEventListener("input", function () {
        // Récupérez la valeur de la boîte de gain correspondante
        var gainValue3 = parseFloat(gainArbre2.value);

        // Vérifiez si la valeur est un nombre valide
        if (!isNaN(gainValue3)) {
            // Effectuez le calcul en divisant la valeur par 0.2
            var result3 = gainValue3 / 0.4;

            // Mettez à jour la cellule de résultat avec le résultat limité à 2 décimales
            resultBoxes3[index].textContent = result3.toFixed(2);
            resultBoxes3[index].style.textAlign = "center";

            // Appliquez les styles en fonction de la valeur
            if (result3 < 25) {
                resultBoxes3[index].style.color = "#db2b5a";
            } else if (result3 >= 25 && result3 <= 75) {
                resultBoxes3[index].style.color = "#e38800";
            } else {
                resultBoxes3[index].style.color = "#00e31e";
            }
        } 
    });
});



document.getElementById('boutonRemplir').addEventListener('click', function() {
    scrollToSection('section44');
});


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function determinerGagnant() {
    // Extraction des valeurs des éléments multi
    var multi1 = parseFloat(document.getElementById("gain1").querySelector(".gain").value);
    var multi2 = parseFloat(document.getElementById("gain2").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant9");
    pseudoGagnant.textContent = multi1 > multi2 ? document.getElementById("pseudoGagnant1").textContent : document.getElementById("pseudoGagnant2").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain2").addEventListener("input", determinerGagnant);

function determinerGagnant1() {
    // Extraction des valeurs des éléments multi
    var multi3 = parseFloat(document.getElementById("gain3").querySelector(".gain").value);
    var multi4 = parseFloat(document.getElementById("gain4").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant10");
    pseudoGagnant.textContent = multi3 > multi4 ? document.getElementById("pseudoGagnant3").textContent : document.getElementById("pseudoGagnant4").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain4").addEventListener("input", determinerGagnant1);

function determinerGagnant2() {
    // Extraction des valeurs des éléments multi
    var multi5 = parseFloat(document.getElementById("gain5").querySelector(".gain").value);
    var multi6 = parseFloat(document.getElementById("gain6").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant11");
    pseudoGagnant.textContent = multi5 > multi6 ? document.getElementById("pseudoGagnant5").textContent : document.getElementById("pseudoGagnant6").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain6").addEventListener("input", determinerGagnant2);

function determinerGagnant3() {
    // Extraction des valeurs des éléments multi
    var multi7 = parseFloat(document.getElementById("gain7").querySelector(".gain").value);
    var multi8 = parseFloat(document.getElementById("gain8").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant12");
    pseudoGagnant.textContent = multi7 > multi8 ? document.getElementById("pseudoGagnant7").textContent : document.getElementById("pseudoGagnant8").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain8").addEventListener("input", determinerGagnant3);

function determinerGagnant4() {
    // Extraction des valeurs des éléments multi
    var multi9 = parseFloat(document.getElementById("gain9").querySelector(".gain").value);
    var multi11 = parseFloat(document.getElementById("gain11").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant13");
    pseudoGagnant.textContent = multi9 > multi11 ? document.getElementById("pseudoGagnant9").textContent : document.getElementById("pseudoGagnant11").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain11").addEventListener("input", determinerGagnant4);

function determinerGagnant5() {
    // Extraction des valeurs des éléments multi
    var multi10 = parseFloat(document.getElementById("gain10").querySelector(".gain").value);
    var multi12 = parseFloat(document.getElementById("gain12").querySelector(".gain").value);

    // Comparaison des valeurs et attribution du gagnant à pseudoGagnant9
    var pseudoGagnant = document.getElementById("pseudoGagnant14");
    pseudoGagnant.textContent = multi10 > multi12 ? document.getElementById("pseudoGagnant10").textContent : document.getElementById("pseudoGagnant12").textContent;
}

// Exemple d'appel de la fonction lorsque quelque chose déclenche le calcul (peut-être un bouton)
document.getElementById("gain12").addEventListener("input", determinerGagnant5);



document.getElementById("gain14").addEventListener("input", function() {
    // Appeler determinerGagnant5 après 10 secondes
    setTimeout(Vainqueur, 3000);
});

function Vainqueur() {
    // Votre logique pour déterminer le gagnant ici
    var multi13 = parseFloat(document.getElementById("gain13").querySelector(".gain").value);
    var multi14 = parseFloat(document.getElementById("gain14").querySelector(".gain").value);

    var gagnant = multi13 > multi14 ? document.getElementById("pseudoGagnant13").textContent : document.getElementById("pseudoGagnant14").textContent;

    // Rendre invisibles les div .arbre-gauche, .arbre-droite, .finale
    document.querySelector('.arbre-gauche').style.display = 'none';
    document.querySelector('.arbre-droite').style.display = 'none';
    document.querySelector('.finale').style.display = 'none';

    // Créer l'élément avec l'ID "pseudoGagnant" s'il n'existe pas
    var pseudoGagnantElement = document.getElementById("pseudoGagnant");
    if (!pseudoGagnantElement) {
        pseudoGagnantElement = document.createElement("div");
        pseudoGagnantElement.id = "pseudoGagnant";
        document.querySelector('.arbre-section').appendChild(pseudoGagnantElement); // Ajouter à l'élément .arbre-section ou à un autre parent approprié
    }

    // Définir le contenu du gagnant dans l'élément
    pseudoGagnantElement.textContent = gagnant;

   // Afficher le conteneur
    pseudoGagnantElement.style.display = 'flex';
    pseudoGagnantElement.style.color = 'white';
    pseudoGagnantElement.style.fontSize = '5rem';
    pseudoGagnantElement.style.margin = '0 auto';
    
}



// Fonction pour enregistrer les données localement
function enregistrerDonneesLocalement() {
    // Enregistrer les données des colonnes de gain et de résultat
    var gainBoxes = document.querySelectorAll(".colonneGain input");
    gainBoxes.forEach(function (colonneGain, index) {
        localStorage.setItem("gain" + (index + 1), colonneGain.value);
    });

    var resultBoxes = document.querySelectorAll(".colonneMulti");
    resultBoxes.forEach(function (colonneMulti, index) {
        localStorage.setItem("result" + (index + 1), colonneMulti.textContent);
    });

    // Enregistrer les données des colonnes de pseudos
    var pseudoInputs = document.querySelectorAll('.colonnePseudo input');
    pseudoInputs.forEach(function (input, index) {
        localStorage.setItem("pseudo" + (index + 1), input.value);
    });

    var slotInputs = document.querySelectorAll('.colonneSlot input');
    slotInputs.forEach(function (colonneSlot, index) {
        localStorage.setItem("slot" + (index + 1), colonneSlot.textContent);
    })
}

// Fonction pour charger les données enregistrées localement lors du chargement de la page
function chargerDonneesLocalement() {
    // Charger les données des colonnes de gain et de résultat
    var gainBoxes = document.querySelectorAll(".colonneGain input");
    gainBoxes.forEach(function (colonneGain, index) {
        var gainValue = localStorage.getItem("gain" + (index + 1));
        if (gainValue !== null) {
            colonneGain.value = gainValue;
        }
    });

    var resultBoxes = document.querySelectorAll(".colonneMulti");
    resultBoxes.forEach(function (colonneMulti, index) {
        var resultValue = localStorage.getItem("result" + (index + 1));
        if (resultValue !== null) {
            colonneMulti.textContent = resultValue;
        }
    });

    // Charger les données des colonnes de pseudos
    var pseudoInputs = document.querySelectorAll('.colonnePseudo input');
    pseudoInputs.forEach(function (input, index) {
        var pseudoValue = localStorage.getItem("pseudo" + (index + 1));
        if (pseudoValue !== null) {
            input.value = pseudoValue;
        }
    });

    var slotInputs = document.querySelectorAll('.colonneSlot input');
    slotInputs.forEach(function (colonneSlot, index) {
        var slotValue = localStorage.getItem("slot" + (index + 1));
        if (slotValue !== null) {
            colonneSlot.textContent = slotValue;
        }
    })
}

// Appeler la fonction pour charger les données lors du chargement de la page
chargerDonneesLocalement();

// Écouter les événements de changement pour enregistrer les données localement
document.querySelectorAll('.colonneGain input, .colonnePseudo input, .colonneSlot input').forEach(function (input) {
    input.addEventListener('input', enregistrerDonneesLocalement);
});

// Fonction pour effacer le contenu de tous les inputs
function effacerContenuInputs() {
    // Récupérer tous les inputs de la page
    var inputs = document.querySelectorAll('input');

    // Parcourir tous les inputs et réinitialiser leur valeur à une chaîne vide
    inputs.forEach(function(input) {
        input.value = '';
    });

    // Effacer également les données enregistrées localement
    localStorage.clear();

    // Recharger la page
    location.reload();
}

// Écouter l'événement click sur le bouton pour effacer le contenu des inputs
document.getElementById('boutonReset').addEventListener('click', effacerContenuInputs);
