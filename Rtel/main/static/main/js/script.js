let b = document.getElementById("click");
b.addEventListener('click', () => {
    const a = document.getElementById("popup-container");
    a.classlist.add("show");
});