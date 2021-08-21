const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');

const selectPledgeAmount = (e) => {
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-btn');
        if(currentPledge) {
            currentPledge.classList.remove('active');
            console.log("current pledge btn");
        }
        const btn = e.target;
        btn.classList.toggle('active');
        e.stopPropagation();
    }
}

window.addEventListener('click', selectPledgeAmount, false)
