const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.querySelector('.question-container');
const noMessageContainer = document.querySelector('.no-message-container');
const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons'); // Butonların konteynerini al

yesButton.addEventListener('click', () => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = yesButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    yesButton.style.position = 'absolute';
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;
});

noButton.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    noMessageContainer.classList.remove('hidden');
    noMessageContainer.style.display = 'block';
    buttonsContainer.style.display = 'none'; // Buton konteynerini gizle, böylece "Evet" butonu da gizlenir
});