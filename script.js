// 1. Список ваших завдань (41 картка)
const myTasks = [
    { nazva: "Завдання №1", kartka: "IMG_7172.JPG.jpeg" },
    { nazva: "Завдання №2", kartka: "IMG_7173.JPG.jpeg" },
    // ... решта ваших завдань ...
    { nazva: "Завдання №41", kartka: "IMG_7279.JPG.jpeg" }
];

const btn = document.getElementById('getTaskBtn');
const display = document.getElementById('cardDisplay');
const img = document.getElementById('taskImage');
const title = document.getElementById('taskTitle');
const attemptsText = document.getElementById('attemptsText');

// 2. Функція перевірки ліміту
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

// 3. Обробник натискання
btn.addEventListener('click', () => {
    let currentAttempts = checkDailyLimit();

    // ПЕРЕВІРКА: Якщо картка вже показана (клас 'hidden' видалено), 
    // значить це вже натискання "Спробувати ще раз" — тільки тоді рахуємо спробу.
    const isCardAlreadyVisible = !display.classList.contains('hidden');

    if (isCardAlreadyVisible) {
        if (currentAttempts >= 3) {
            alert("Ви використали всі 3 додаткові спроби на сьогодні!");
            return;
        }
        // Збільшуємо лічильник тільки для повторних спроб
        currentAttempts++;
        localStorage.setItem('task_attempts', currentAttempts);
    }

    // Випадковий вибір завдання
    const index = Math.floor(Math.random() * myTasks.length);
    const result = myTasks[index];

    title.textContent = result.nazva;
    img.src = result.kartka;
    display.classList.remove('hidden');

    // Оновлення тексту
    attemptsText.textContent = `Залишилося спроб: ${3 - currentAttempts}`;
    btn.textContent = "Спробувати ще раз";

    // Якщо використано всі 3 спроби "ще раз", блокуємо кнопку
    if (currentAttempts >= 3) {
        btn.textContent = "Ліміт вичерпано";
        btn.disabled = true;
        btn.style.opacity = "0.6";
    }
});

// Перевірка при завантаженні
window.onload = () => {
    const startAttempts = checkDailyLimit();
    attemptsText.textContent = `Залишилося спроб: ${3 - startAttempts}`;
    if (startAttempts >= 3) {
        btn.textContent = "Ліміт вичерпано";
        btn.disabled = true;
    }
}
