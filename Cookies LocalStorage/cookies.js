const nameC = document.querySelector('#formCookie__name');
const surnameC = document.querySelector('#formCookie__surname');
const lastNameC = document.querySelector('#formCookie__lastName');
const genderMaleC = document.querySelector('#formCookie__male');
const genderFemaleC = document.querySelector('#formCookie__female');
const checkAgeC = document.querySelector('#formCookie__age');
const checkEducationC = document.querySelector('#formCookie__education');
const checkCountryC = document.querySelector('#formCookie__country');

function saveC() {
    let genderC = '';

    if (genderMaleC.checked == true || genderFemaleC == true) {
        genderC = document.querySelector('input[name="formCookie__gender"]:checked').value;
    }

    const obj = {
        'name': nameC.value,
        'surname': surnameC.value,
        'lastName': lastNameC.value,
        'gender': genderC,
        'age': (checkAgeC.checked == true) ? true : false,
        'education': (checkEducationC.checked == true) ? true : false,
        'country': (checkCountryC.checked == true) ? true : false,
    }
    document.cookie = `form=${JSON.stringify(obj)}`;
}

function resetC() {
    document.cookie = "form=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";

    nameC.value = '';
    surnameC.value = '';
    lastNameC.value = '';
    checkAgeC.checked = false;
    checkEducationC.checked = false;
    checkCountryC.checked = false;
    genderMaleC.checked = false;
    genderFemaleC.checked = false;
}

window.addEventListener('load', (event) => {
    let cookieForm = document.cookie.replace(/(?:(?:^|.*;\s*)form\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    let cookieObj = JSON.parse(cookieForm);

    nameC.value = cookieObj.name;
    surnameC.value = cookieObj.surname;
    lastNameC.value = cookieObj.lastName;
    if(cookieObj.age === true) {
        checkAgeC.checked = true;
    }
    if(cookieObj.education === true) {
        checkEducationC.checked = true;
    }
    if(cookieObj.country === true) {
        checkCountryC.checked = true;
    }
    if (cookieObj.gender === 'male') {
        genderMaleC.checked = true;
    } else {
        genderFemaleC.checked = true;
    }
});