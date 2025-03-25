const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.querySelector('.question-container');
const noMessageContainer = document.querySelector('.no-message-container');
const container = document.querySelector('.container');

yesButton.addEventListener('click', () => {
    const containerRect = container.getBoundingClientRect(); // Konteynerin boyutlarını al
    const buttonRect = yesButton.getBoundingClientRect(); // Butonun boyutlarını al

    const maxX = containerRect.width - buttonRect.width; // Butonun konteyner içinde gidebileceği maksimum X mesafesi
    const maxY = containerRect.height - buttonRect.height; // Butonun konteyner içinde gidebileceği maksimum Y mesafesi

    const randomX = Math.random() * maxX; // Rastgele X koordinatı
    const randomY = Math.random() * maxY; // Rastgele Y koordinatı

    yesButton.style.position = 'absolute'; // Butonu mutlak pozisyona ayarla
    yesButton.style.left = `${randomX}px`; // Rastgele X koordinatını ayarla
    yesButton.style.top = `${randomY}px`; // Rastgele Y koordinatını ayarla
});

noButton.addEventListener('click', () => {
    questionContainer.classList.add('hidden'); // Soru konteynerini gizle
    noMessageContainer.classList.remove('hidden'); // Mesaj konteynerini görünür yap
    noMessageContainer.style.display = 'block'; // Mesaj konteynerinin görünür olduğundan emin ol
});