function navigate(button) {
    const page = button.dataset.page;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    button.classList.add('active');

    window.location.href = page;
}