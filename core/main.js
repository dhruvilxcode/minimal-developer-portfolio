document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        height: "92vh",
        fixedHeight: "92vh",
        autoWidth: true,
        gap: "50px"
    }).mount();
});