const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", reset);

const tbody = document.getElementById("tbody");
const table = document.querySelector("table");
const main = document.querySelector(".table-wrapper");


function reset() {
    Swal.fire({
            icon: 'warning',
            title: 'Reset',
            text: 'This can not be undone, once perfomed!',
            showDenyButton: true,
            denyButtonText: 'Cancel',
            confirmButtonText: 'Reset'
    });
}