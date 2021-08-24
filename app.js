const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const pledgeBtns = document.querySelectorAll('.btn-container .pledge-btn');
const pledgeAmounts = {
    option1: 1,
    option2: 10,
    option3: 25,
    option4: 100,
}
console.log(pledgeAmounts.option2);
let pledgeTotal = 0;
let backersCount = 345;
let pledgeCounter = parseInt(0);


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
        }
        e.stopPropagation();
    }
}

const updatePledgeTotal = (e) => {
    const pledgeCount = document.getElementById('pledgeCount');
    // pledgeCounter++;
    let pledgeBtnValue =  parseInt(e.target.dataset.value)
    let pledgeCountValue = pledgeCounter += pledgeBtnValue; 
    pledgeCount.innerText = pledgeCountValue;
    console.log(pledgeCountValue);
}

pledgeBtns.forEach(pledge => {
    pledge.addEventListener('click', updatePledgeTotal)
})

window.addEventListener('click', selectPledgeAmount, false)
