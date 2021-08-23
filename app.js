const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
let pledgeTotal = 0;

const selectPledgeAmount = (e) => {
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-btn');
        if(currentPledge) {
            const currentBtn = e.target;
            const progressFill = document.getElementById('progress-fill');
            let pledgeValue = parseInt(e.target.dataset.value);
            progressFill.style.width = parseInt(pledgeTotal);
            let newWidth = pledgeTotal += pledgeValue;
            progressFill.style.width = newWidth + "px";   
            currentBtn.classList.toggle('active');    
            //-------------pledge count & backer count -----------------------
            // let pledgeCount = document.getElementById('pledgeCount');
            let backersCountDisplay = document.getElementById('backersCount');
            let backersCount = 0;
            let backersTotal = parseInt(backersCount) + 1;
            backersTotal++;
            backersCountDisplay.innerText = backersTotal; 

        }
        e.stopPropagation();
    }
}

window.addEventListener('click', selectPledgeAmount, false)
