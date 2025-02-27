document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('cookie-accept');
    const moreButton = document.getElementById('cookie-more');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // Handle accept button click
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        cookieConsent.style.display = 'none';
    });

    // Handle more info button click
    moreButton.addEventListener('click', function() {
        window.location.href = 'privacy-policy-cookies.html';
    });
});
