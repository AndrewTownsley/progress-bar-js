const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const goalContainer = document.querySelector('.goal-container');
const pledgeBtns = document.querySelectorAll('.btn-container .pledge-btn');
let newWidth = Number(localStorage.getItem('newWidthStored'))
const optionBtns = document.querySelectorAll('.button-options .option-btn');
progressFill.style.width = newWidth + "px";   

let pledgeTotal = 0;
let backersCount = 345;
let pledgeCounter = parseInt(0);
let pledgeCountValue = Number(localStorage.getItem('pledgeValue'));
pledgeCount.innerText = `${pledgeCountValue} of`;


// const updatePledgeTotal = (e) => {
    //     const activePledge = document.querySelector('.custom-pledge-form.active')
    //     if(e.target.nextSibling.nextSibling === activePledge){
        //         activePledge.classList.toggle('active');
        //     } else {
            
            //         e.target.nextSibling.nextSibling.classList.toggle('active');
            //         // customPledgeForm.classList.toggle('active');
            //         // ---------------------progress bar 
            //         const progressFill = document.getElementById('progress-fill');
            //         let pledgeValue = parseInt(e.target.dataset.value);
            //         progressFill.style.width = parseInt(pledgeTotal);
            //         let newWidth = pledgeTotal += pledgeValue;
            //         progressFill.style.width = newWidth + "px";   
            //         localStorage.setItem('newWidthStored', newWidth)
            //         //-------------pledge count & backer count -----------------------
            //         let backersCountDisplay = document.getElementById('backersCount');
            //         backersCount++;
            //         backersCountDisplay.innerText = backersCount; 
            //         const pledgeCount = document.getElementById('pledgeCount');
            //         let pledgeBtnValue =  parseInt(e.target.dataset.value)
            //         let pledgeCountValue = pledgeCounter += pledgeBtnValue; 
            //         pledgeCount.innerText = `${pledgeCountValue} of`;
            //         localStorage.setItem("pledgeValue", pledgeCountValue);
            //         console.log(pledgeCountValue);
            //         if(pledgeCountValue >= 500) {
                //             btnContainer.classList.add('disabled');
                //             goalContainer.classList.add('complete');
                //         }
                //         }
                //     }
                
                // const optionClear = () => {
                    //     const option = document.querySelector('.button-options');
                    //     console.log(option);
                    //     if(option.classList.contains('selected')) {
                        //         e.target.classList.remove('active')
                        //         e.target.parentElement.parentElement.classList.remove('selected');
                        //     } else {
                            //         null
                            //     }
                            // }
                            

    const getSiblings = (element) => {
        let siblings = [];
        let sibling = element.parentElement.parentNode.firstChild;

         while(sibling) {
            if(sibling.nodeType === 1 && sibling !== element) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    }

    const optionSelect = (e) => {
        if(e.target.id === 'option1' || 'option5' || 'option10' || 'option25') {
            console.log('select the option button');
        }
    }

                    
                            
                            
                            
        pledgeBtns.forEach(pledge => {
            pledge.addEventListener('mousedown', updatePledgeTotal)
                })
                            
        optionBtns.forEach(option => {
            option.addEventListener('click', optionSelect)
                })

                            
                            
                            