window.onload = function () {
  const zodiacData = [
    { name: "Monkey", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/MONKEY_Animal-Icon.png?v=1727672294" },
    { name: "Rooster", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/ROOSTER_Animal-Icon.png?v=1727672294" },
    { name: "Dog", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/DOG_Animal-Icon.png?v=1727672294" },
    { name: "Pig", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/PIG_Animal-Icon.png?v=1727672294" },
    { name: "Rat", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/RAT.png?v=1727430457" },
    { name: "Ox", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/OX_Animal-Icon.png?v=1727672294" },
    { name: "Tiger", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/TIGER_Animal-Icon.png?v=1727672294" },
    { name: "Rabbit", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/RABBIT_Animal-Icon.png?v=1727672294" },
    { name: "Dragon", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/DRAGON_Animal-Icon.png?v=1727672294" },
    { name: "Snake", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/SNAKE_Animal-Icon.png?v=1727672294" },
    { name: "Horse", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/HORSE_Animal-Icon.png?v=1727672294" },
    { name: "Goat", img: "https://cdn.shopify.com/s/files/1/0267/6352/6343/files/GOAT_Animal-Icon.png?v=1727672294" },
  ];

  const chineseNewYearDates = [
    { year: 1900, date: new Date(1900, 0, 31) },
    { year: 1901, date: new Date(1901, 1, 19) },
    { year: 1902, date: new Date(1902, 1, 8) },
    { year: 1903, date: new Date(1903, 0, 29) },
    { year: 1904, date: new Date(1904, 1, 16) },
    { year: 2023, date: new Date(2023, 0, 22) },
    { year: 2024, date: new Date(2024, 1, 10) },
    { year: 2025, date: new Date(2025, 0, 29) },
  ];

  document.getElementById("submitButton").addEventListener("click", function () {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value);
    const birthDay = parseInt(document.getElementById("birthDay").value);
    const digitNumber = parseInt(document.getElementById("digitNumber").value);

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay) || isNaN(digitNumber)) {
      alert("Please fill in all fields with valid numbers!");
      return;
    }

    if (birthMonth < 1 || birthMonth > 12 || birthDay < 1 || birthDay > 31) {
      alert("Please enter a valid birth date!");
      return;
    }

    if (digitNumber < 1) {
      alert("The lucky number must have at least 1 digit.");
      return;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let zodiacYear = birthYear;

    const newYear = chineseNewYearDates.find((yearData) => yearData.year === birthYear);
    if (!newYear) {
      alert("Birth year is out of range for zodiac calculation.");
      return;
    }

    if (birthDate < newYear.date) {
      zodiacYear -= 1;
    }

    const zodiacIndex = (zodiacYear - 1900) % 12;
    const zodiac = zodiacData[zodiacIndex];

    const min = Math.pow(10, digitNumber - 1);
    const max = Math.pow(10, digitNumber) - 1;
    const luckyNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("zodiacName").innerText = `Zodiac: ${zodiac.name}`;
    document.getElementById("zodiacImage").src = zodiac.img;
    document.getElementById("luckyNumber").innerText = `Lucky Number: ${luckyNumber}`;
    document.getElementById("result").style.display = "block";
  });
};
