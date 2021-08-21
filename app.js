const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
let width = 1;

const selectPledgeAmount = (e) => {
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-btn');
        console.log(e.target.dataset);
        if(currentPledge) {
            currentPledge.classList.remove('active');
            console.log("current pledge btn");
        }
        width++
        const progressFill = document.getElementById('progress-fill');
        // const btn = e.target;
        progressFill.style.width = width + e.target.dataset +  "%";
        // btn.classList.toggle('active');
        e.stopPropagation();
    }
}

window.addEventListener('click', selectPledgeAmount, false)
