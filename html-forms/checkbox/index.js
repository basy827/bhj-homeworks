const checkbox = document.getElementById('main-checkbox');
const checkboxes = document.querySelectorAll('.sub-checkbox');

checkbox.addEventListener('change', () => {
    checkboxes.forEach((cb) => {
        cb.checked = checkbox.checked;
    });
});

checkboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
        const allChecked = Array.from(checkboxes).every((c) => c.checked);
        checkbox.checked = allChecked;
    });
});

