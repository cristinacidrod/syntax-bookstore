// SEARCH VALIDATION

document.getElementById("buttonSearch").addEventListener("click", validateSearch);
// Validate search nav
function validateSearch() {
    let searchValidation = document.getElementById("inputSearch");
    let searchValue = searchValidation.value;
    // Show messages in placeholder
    if (searchValue.length == "") {
        document.getElementById("inputSearch").value = "";
        searchValidation.placeholder = "Please, search something.";
    } else if (searchValue.length < 3) {
        document.getElementById("inputSearch").value = "";
        searchValidation.placeholder = "More than 3 characters.";
    }
}

// FORM AND MODAL VALIDATION

(function () {
    'use strict';
    window.addEventListener("load", function () {
        // Get the inputs and values
        let forms = document.getElementsByClassName("needs-validation");
        let emailForm = document.getElementById("inputSuccess2").value;
        let emailModal = document.getElementById("inputSuccess6").value;
        let passwordModal = document.getElementById("inputSuccess7").value;
        let dropdownSelect = document.getElementsByTagName("select");
        // Prevent submission if empty
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    // Add e-mail validation for form and modal
                } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(emailForm, emailModal)) {
                    event.preventDefault();
                    event.stopPropagation();
                    // Dropdown validation
                } else if (dropdownSelect.value == "") {
                    event.preventDefault();
                    event.stopPropagation();
                }
                // Repeat password validation for form is done in html index
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
})();


// LEAFLET MAP

let leafletMap = L.map("map").setView([48.081375, -22.200988], 3);
// Create custom logo icons
let LeafIcon = L.Icon.extend({
    options: { iconSize: [40, 40] }
});
let syntaxIcon = new LeafIcon({
    iconUrl: 'resources/images/logo-syntax-transparent.png',
})
// Custom icons with random coordenades
let syntaxNorthAmerica1 = L.marker([39.528947, -77.064833], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxNorthAmerica2 = L.marker([40.368783, -112.637708], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxNorthAmerica3 = L.marker([54.542405, -114.116064], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxNorthAmerica4 = L.marker([47.206319, -105.171109], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxEurope1 = L.marker([40.419024, -3.700197], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxEurope2 = L.marker([52.621565, -0.841530], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxEurope3 = L.marker([48.365722, 8.522254], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxAsia1 = L.marker([49.572782, 25.346220], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxAsia2 = L.marker([56.947760, 45.092718], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxAsia3 = L.marker([35.126121, 135.766555], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxSouthAmerica1 = L.marker([-12.760422, -48.185277], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxSouthAmerica2 = L.marker([-32.733532, -63.848703], { icon: syntaxIcon }).addTo(leafletMap);
let syntaxSouthAmerica3 = L.marker([-10.704712, -73.166884], { icon: syntaxIcon }).addTo(leafletMap);

// Legal terms and map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(leafletMap);