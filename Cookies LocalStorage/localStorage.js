const nameLS = document.querySelector('#formLocalStorage__name');
const surnameLS = document.querySelector('#formLocalStorage__surname');
const lastNameLS = document.querySelector('#formLocalStorage__lastName');
const genderMaleLS = document.querySelector('#formLocalStorage__male');
const genderFemaleLS = document.querySelector('#formLocalStorage__female');
const checkAgeLS = document.querySelector('#formLocalStorage__age');
const checkEducationLS = document.querySelector('#formLocalStorage__education');
const checkCountryLS = document.querySelector('#formLocalStorage__country');

function saveLS() {
    let genderLS = '';

    if(genderMaleLS.checked == true || genderFemaleLS == true){
        genderLS = document.querySelector('input[name="formLocalStorage__gender"]:checked').value;
    }

    const obj = {
        'name': nameLS.value,
        'surname': surnameLS.value,
        'lastName': lastNameLS.value,
        'gender': genderLS,
        'age': (checkAgeLS.checked == true) ? true : false,
        'education': (checkEducationLS.checked == true) ? true : false,
        'country': (checkCountryLS.checked == true) ? true : false,
    }
    localStorage.setItem('obj', JSON.stringify(obj));
}

function resetLS() {
    localStorage.clear();
    nameLS.value = '';
    surnameLS.value = '';
    lastNameLS.value = '';
    checkAgeLS.checked = false;
    checkEducationLS.checked = false;
    checkCountryLS.checked = false;
    genderMaleLS.checked = false;
    genderFemaleLS.checked = false;
}

window.addEventListener('load', (event) => {
    if (localStorage.getItem('obj') !== null){
        let objLS = JSON.parse(localStorage.getItem('obj'));

        nameLS.value = objLS.name;
        surnameLS.value = objLS.surname;
        lastNameLS.value = objLS.lastName;
        if(objLS.age === true) {
            checkAgeLS.checked = true;
        }
        if(objLS.education === true) {
            checkEducationLS.checked = true;
        }
        if(objLS.country === true) {
            checkCountryLS.checked = true;
        }
        if (objLS.gender === 'male') {
            genderMaleLS.checked = true;
        } else {
            genderFemaleLS.checked = true;
        }
    }
});