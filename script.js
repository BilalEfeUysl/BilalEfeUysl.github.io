const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    const buttonRect = yesButton.getBoundingClientRect(); // Butonun boyutlarını al

    const maxX = window.innerWidth - buttonRect.width; // Ekran genişliği - buton genişliği
    const maxY = window.innerHeight - buttonRect.height; // Ekran yüksekliği - buton yüksekliği

    const randomX = Math.random() * maxX; // Rastgele X koordinatı
    const randomY = Math.random() * maxY; // Rastgele Y koordinatı

    yesButton.style.position = 'fixed'; // Pozisyonu fixed yap, viewport'a göre konumlanır
    yesButton.style.left = `${randomX}px`; // Rastgele X koordinatını ayarla
    yesButton.style.top = `${randomY}px`; // Rastgele Y koordinatını ayarla
});

noButton.addEventListener('click', () => {
    window.location.href = 'no-page.html'; // Yeni sayfaya yönlendir
});