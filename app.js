const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
let pledgeTotal = 0;
let backersCount = 345;


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
            let backersCountDisplay = document.getElementById('backersCount');
            backersCount++;
            backersCountDisplay.innerText = backersCount; 
            console.log(backersCount);
        }
        e.stopPropagation();
    }
}

window.addEventListener('click', selectPledgeAmount, false)
