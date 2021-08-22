const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
let pledgeTotal = 0;

const selectPledgeAmount = (e) => {
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-btn');
        if(currentPledge) {
            const progressFill = document.getElementById('progress-fill');
            let pledgeValue = parseFloat(e.target.dataset.value);
            progressFill.style.width = parseFloat(pledgeTotal);
            let newWidth = pledgeTotal += pledgeValue;
            progressFill.style.width = newWidth + "px";       
            console.log(newWidth); 
        }
        e.stopPropagation();
    }
}
const updateProgressBar = () => {
    console.log("progress bar");         
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-btn');
        if(currentPledge) {
            const progressFill = document.getElementById('progress-fill');
            progressFill.style.width = pledgeTotal;
            let newWidth = Number(e.target.dataset.value += pledgeTotal);
            progressFill.style.width = (newWidth) + "px";
        }
        e.stopPropagation();
    }
}

window.addEventListener('click', selectPledgeAmount, updateProgressBar, false)
