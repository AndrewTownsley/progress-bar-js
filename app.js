const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const goalContainer = document.querySelector('.goal-container');
const pledgeBtns = document.querySelectorAll('.btn-container .pledge-btn');
console.log(pledgeBtns);

let pledgeTotal = 0;
let backersCount = 345;
let pledgeCounter = parseInt(0);
let pledgeCountValue = Number(localStorage.getItem('pledgeValue'));
pledgeCount.innerText = `${pledgeCountValue} of`;



const updatePledgeTotal = (e) => {
    // ---------------------progress bar 
    const progressFill = document.getElementById('progress-fill');
    let pledgeValue = parseInt(e.target.dataset.value);
    progressFill.style.width = parseInt(pledgeTotal);
    let newWidth = pledgeTotal += pledgeValue;
    progressFill.style.width = newWidth + "px";   
    //-------------pledge count & backer count -----------------------
    let backersCountDisplay = document.getElementById('backersCount');
    backersCount++;
    backersCountDisplay.innerText = backersCount; 
    const pledgeCount = document.getElementById('pledgeCount');
    let pledgeBtnValue =  parseInt(e.target.dataset.value)
    let pledgeCountValue = pledgeCounter += pledgeBtnValue; 
    pledgeCount.innerText = `${pledgeCountValue} of`;
    localStorage.setItem("pledgeValue", pledgeCountValue);
    console.log(pledgeCountValue);
    if(pledgeCountValue >= 500) {
        btnContainer.classList.add('disabled');
        goalContainer.classList.add('complete');
    }
}

// const setLocalStorage = () => {
// }


pledgeBtns.forEach(pledge => {
    pledge.addEventListener('click', updatePledgeTotal)
})


// selectPledgeFunc = () => {
//     console.log("pledgeFunc");
//     // if(e.target == e.currentTarget) {
//     //     const currentPledge = document.querySelector('.pledge-btn');
//     //     // const currentBtn = e.target;
//     //     console.log(e.currentTarget);
//     //     if(currentPledge) {
//             const progressFill = document.getElementById('progress-fill');
//             let pledgeValue = parseInt(e.target.dataset.value);
//             progressFill.style.width = parseInt(pledgeTotal);
//             let newWidth = pledgeTotal += pledgeValue;
//             progressFill.style.width = newWidth + "px";   
//             // currentBtn.classList.toggle('active');    
//             //-------------pledge count & backer count -----------------------
//             let backersCountDisplay = document.getElementById('backersCount');
//             backersCount++;
//             backersCountDisplay.innerText = backersCount; 
        
// }