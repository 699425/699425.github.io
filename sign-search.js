const asPages = {
    "Aries": "AS 1 Aries",
    "Taurus": "AS 2 Taurus",
    "Gemini": "AS 3 Gemini",
    "Cancer": "AS 4 Cancer",
    "Leo": "AS 5 Leo",
    "Virgo": "AS 6 Virgo",
    "Libra": "AS 7 Libra",
    "Scorpio": "AS 8 Scorpio",
    "Sagittarius": "AS 9 Sagittarius",
    "Capricorn": "AS 10 Capricorn",
    "Aquarius": "AS 11 Aquarius",
    "Pisces": "AS 12 Pisces",
};
const czPages = {
    "Rat": "CZ 1 Rat",
    "Ox": "CZ 2 Ox",
    "Tiger": "CZ 3 Tiger",
    "Rabbit": "CZ 4 Rabbit",
    "Dragon": "CZ 5 Dragon",
    "Snake": "CZ 6 Snake",
    "Horse": "CZ 7 Horse",
    "Goat": "CZ 8 Goat",
    "Monkey": "CZ 9 Monkey",
    "Rooster": "CZ 10 Rooster",
    "Dog": "CZ 11 Dog",
    "Pig": "CZ 12 Pig"
};
const animalMap = {
    "鼠": "Rat",
    "牛": "Ox",
    "虎": "Tiger",
    "兔": "Rabbit",
    "龙": "Dragon",
    "蛇": "Snake",
    "马": "Horse",
    "羊": "Goat",
    "猴": "Monkey",
    "鸡": "Rooster",
    "狗": "Dog",
    "猪": "Pig"
};
function calculateZodiac() {
    const dobInput = document.getElementById('dob');
    const resultDiv = document.getElementById('result');

    if (!dobInput.value) {
        resultDiv.textContent = "Pick a date first";
        return;
    }

    const birthDate = new Date(dobInput.value);
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    let az = "";

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

    const lunar = solarlunar.solar2lunar(year, month, day);
    const cz = animalMap[lunar.animal];
    
    const czpage = czPages[cz];
    const aspage = asPages[az];
    resultDiv.innerHTML = `Your Astrological Sign is <a href="${aspage}.html">${az}</a>
Your Chinese Zodiac sign is <a href="${czpage}.html">${cz}</a>`;
}