// 1. Повний список ваших карток (41 завдання)
const myTasks = [
    { nazva: "Завдання №1", kartka: "IMG_7172.JPG.jpeg" },
    { nazva: "Завдання №2", kartka: "IMG_7173.JPG.jpeg" },
    { nazva: "Завдання №3", kartka: "IMG_7174.JPG.jpeg" },
    { nazva: "Завдання №4", kartka: "IMG_7175.JPG.jpeg" },
    { nazva: "Завдання №5", kartka: "IMG_7176.JPG.jpeg" },
    { nazva: "Завдання №6", kartka: "IMG_7177.JPG.jpeg" },
    { nazva: "Завдання №7", kartka: "IMG_7178.JPG.jpeg" },
    { nazva: "Завдання №8", kartka: "IMG_7179.JPG.jpeg" },
    { nazva: "Завдання №9", kartka: "IMG_7180.JPG.jpeg" },
    { nazva: "Завдання №10", kartka: "IMG_7181.JPG.jpeg" },
    { nazva: "Завдання №11", kartka: "IMG_7182.JPG.jpeg" },
    { nazva: "Завдання №12", kartka: "IMG_7183.JPG.jpeg" },
    { nazva: "Завдання №13", kartka: "IMG_7184.JPG.jpeg" },
    { nazva: "Завдання №14", kartka: "IMG_7185.JPG.jpeg" },
    { nazva: "Завдання №15", kartka: "IMG_7186.JPG.jpeg" },
    { nazva: "Завдання №16", kartka: "IMG_7187.JPG.jpeg" },
    { nazva: "Завдання №17", kartka: "IMG_7188.JPG.jpeg" },
    { nazva: "Завдання №18", kartka: "IMG_7189.JPG.jpeg" },
    { nazva: "Завдання №19", kartka: "IMG_7190.JPG.jpeg" },
    { nazva: "Завдання №20", kartka: "IMG_7191.JPG.jpeg" },
    { nazva: "Завдання №21", kartka: "IMG_7192.JPG.jpeg" },
    { nazva: "Завдання №22", kartka: "IMG_7260.JPG.jpeg" },
    { nazva: "Завдання №23", kartka: "IMG_7261.JPG.jpeg" },
    { nazva: "Завдання №24", kartka: "IMG_7262.JPG.jpeg" },
    { nazva: "Завдання №25", kartka: "IMG_7263.JPG.jpeg" },
    { nazva: "Завдання №26", kartka: "IMG_7264.JPG.jpeg" },
    { nazva: "Завдання №27", kartka: "IMG_7265.JPG.jpeg" },
    { nazva: "Завдання №28", kartka: "IMG_7266.JPG.jpeg" },
    { nazva: "Завдання №29", kartka: "IMG_7267.JPG.jpeg" },
    { nazva: "Завдання №30", kartka: "IMG_7268.JPG.jpeg" },
    { nazva: "Завдання №31", kartka: "IMG_7269.JPG.jpeg" },
    { nazva: "Завдання №32", kartka: "IMG_7270.JPG.jpeg" },
    { nazva: "Завдання №33", kartka: "IMG_7271.JPG.jpeg" },
    { nazva: "Завдання №34", kartka: "IMG_7272.JPG.jpeg" },
    { nazva: "Завдання №35", kartka: "IMG_7273.JPG.jpeg" },
    { nazva: "Завдання №36", kartka: "IMG_7274.JPG.jpeg" },
    { nazva: "Завдання №37", kartka: "IMG_7275.JPG.jpeg" },
    { nazva: "Завдання №38", kartka: "IMG_7276.JPG.jpeg" },
    { nazva: "Завдання №39", kartka: "IMG_7277.JPG.jpeg" },
    { nazva: "Завдання №40", kartka: "IMG_7278.JPG.jpeg" },
    { nazva: "Завдання №41", kartka: "IMG_7279.JPG.jpeg" }
];

const btn = document.getElementById('getTaskBtn');
const display = document.getElementById('cardDisplay');
const img = document.getElementById('taskImage');
const title = document.getElementById('taskTitle');
const attemptsText = document.getElementById('attemptsText');

function checkDailyLimit() {
    const today = new Date().toLocaleDateString();
    const lastDate = localStorage.getItem('task_date');
    let attempts = parseInt(localStorage.getItem('task_attempts')) || 0;

    if (lastDate !== today) {
        attempts = 0;
        localStorage.setItem('task_attempts', 0);
        localStorage.setItem('task_date', today);
    }
    return attempts;
}

btn.addEventListener('click', () => {
    let currentAttempts = checkDailyLimit();
    const isCardVisible = !display.classList.contains('hidden');

    if (isCardVisible) {
        if (currentAttempts >= 3) return;
        currentAttempts++;
        localStorage.setItem('task_attempts', currentAttempts);
    }

    // ЛОГІКА УНІКАЛЬНОСТІ: Отримуємо список вже бачених картинок
    let seenTasks = JSON.parse(localStorage.getItem('seen_tasks')) || [];

    // Залишаємо тільки ті, які користувач ще НЕ бачив
    let availableTasks = myTasks.filter(t => !seenTasks.includes(t.kartka));

    // Якщо раптом усі 41 завдання закінчилися, скидаємо список бачених, щоб почати спочатку
    if (availableTasks.length === 0) {
        seenTasks = [];
        availableTasks = myTasks;
    }

    // Вибираємо випадкову картинку з доступних
    const index = Math.floor(Math.random() * availableTasks.length);
    const result = availableTasks[index];

    // Додаємо цю картинку в список "бачених"
    seenTasks.push(result.kartka);
    localStorage.setItem('seen_tasks', JSON.stringify(seenTasks));

    // Оновлюємо екран
    title.textContent = result.nazva;
    img.src = result.kartka;
    display.classList.remove('hidden');

    if (attemptsText) {
        attemptsText.textContent = `Залишилося спроб: ${3 - currentAttempts}`;
    }

    if (currentAttempts < 3) {
        btn.textContent = "Хочу ще одну спробу";
    } else {
        btn.textContent = "Ліміт вичерпано";
        btn.disabled = true;
        btn.style.opacity = "0.6";
    }
});

window.onload = () => {
    const startAttempts = checkDailyLimit();
    if (attemptsText) {
        attemptsText.textContent = `Залишилося спроб: ${3 - startAttempts}`;
    }
    if (startAttempts >= 3) {
        btn.textContent = "Ліміт вичерпано";
        btn.disabled = true;
        btn.style.opacity = "0.6";
    }
};
