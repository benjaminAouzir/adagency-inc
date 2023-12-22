function callModelForest(attribut) {
    const countrySelect = document.getElementById("country");
    const countryValue = countrySelect.value;
    const ethnicitySelect = document.getElementById("ethnicity");
    const ethnicityValue = ethnicitySelect.value;

    const languageSelect = document.getElementById("language");
    const languageValue = languageSelect.value;

    const heightSelect = document.getElementById("height");
    const heightValue = heightSelect.value;

    const ageSelect = document.getElementById("age");
    const ageValue = ageSelect.value;

    const genderSelect = document.getElementById("gender");
    const genderValue = genderSelect.value;

    const yearSelect = document.getElementById("year");
    const yearValue = yearSelect.value;
    fetch("https://yannax.pythonanywhere.com/api", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'type' : attribut,
                'year': yearValue,
                'language' : languageValue,
                'country': countryValue,
                'primary_height' : heightValue,
                'primary_age': ageValue,
                'primary_gender': genderValue,
                'primary_ethnicity' : ethnicityValue
            })
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                document.getElementById("result").innerHTML = json.predicted
                document.getElementById("title-result").innerHTML = json.title
                closeModal()
            })
}

 function openModal() {
        document.getElementById('myModal').style.display = 'block';
    }

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
