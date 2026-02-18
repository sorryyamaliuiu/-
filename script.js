// Список твоїх карток із завданнями
const myTasks = [
    {
        nazva: "Завдання №1",
        kartka: "IMG_7172.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №2",
        kartka: "IMG_7173.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №3",
        kartka: "IMG_7174.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №4",
        kartka: "IMG_7175.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №5",
        kartka: "IMG_7176.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №6",
        kartka: "IMG_7177.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №7",
        kartka: "IMG_7178.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №8",
        kartka: "IMG_7179.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №9",
        kartka: "IMG_7180.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №10",
        kartka: "IMG_7181.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №11",
        kartka: "IMG_7182.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №12",
        kartka: "IMG_7183.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №13",
        kartka: "IMG_7184.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №14",
        kartka: "IMG_7185.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №15",
        kartka: "IMG_7186.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №16",
        kartka: "IMG_7187.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №17",
        kartka: "IMG_7188.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №18",
        kartka: "IMG_7189.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №19",
        kartka: "IMG_7190.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №20",
        kartka: "IMG_7191.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №21",
        kartka: "IMG_7192.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №22",
        kartka: "IMG_7260.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №23",
        kartka: "IMG_7261.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №24",
        kartka: "IMG_7262.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №25",
        kartka: "IMG_7263.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №26",
        kartka: "IMG_7264.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №27",
        kartka: "IMG_7265.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №28",
        kartka: "IMG_7266.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №29",
        kartka: "IMG_7267.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №30",
        kartka: "IMG_7268.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №31",
        kartka: "IMG_7269.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №32",
        kartka: "IMG_7270.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №33",
        kartka: "IMG_7271.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №34",
        kartka: "IMG_7272.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №35",
        kartka: "IMG_7273.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №36",
        kartka: "IMG_7274.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №37",
        kartka: "IMG_7275.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №38",
        kartka: "IMG_7276.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №39",
        kartka: "IMG_7277.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №40",
        kartka: "IMG_7278.JPG.jpeg" // Вкажи назву свого файлу
    },
    {
        nazva: "Завдання №41",
        kartka: "IMG_7279.JPG.jpeg" // Вкажи назву свого файлу
    }

];

const btn = document.getElementById('getTaskBtn');
const display = document.getElementById('cardDisplay');
const img = document.getElementById('taskImage');
const title = document.getElementById('taskTitle');

btn.addEventListener('click', () => {
    // Випадковий вибір індексу
    const index = Math.floor(Math.random() * myTasks.length);
    const result = myTasks[index];

    // Встановлюємо дані картки
    title.textContent = result.nazva;
    img.src = result.kartka;

    // Показуємо картку
    display.classList.remove('hidden');
    btn.textContent = "Спробувати ще раз";

});