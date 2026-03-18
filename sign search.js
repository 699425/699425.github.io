function calculateZodiac() {
    const dobInput = document.getElementById('dob');
    const resultDiv = document.getElementById('result');
    const dobValue = dobInput.value;

    if (!dobValue) {
        resultDiv.textContent = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dobValue);
    const year = birthDate.getYear();
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    let az = "";

    const czSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", 
                    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        az = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        az = "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        az = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        az = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        az = "Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        az = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        az = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        az = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        az = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        az = "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        az = "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        az = "Capricorn";
    } else {
        az = "Unknown";
    }

    if (isNaN(year) || year < 1) {
        resultDiv.textContent = `Your Astrological Sign is: ${az}
Please enter a valid year`;
        return;
    }
    // Calculate the index in the array using the modulo operator
    // The formula (year) % 12 works for years greater than 0 CE
    let index = (year) % 12;
    // Handle potential negative index if year < 4
    if (index < 0) {
        index += 12;
    }
    
    const cz = czSigns[index];

    resultDiv.textContent = `Your Astrological Sign is ${az} 
Your Chinese Zodiac sign is ${cz}`;
}