const showToastBtn=document.querySelector('.show-toast')
const horizontalPosition=document.querySelector('#horizontal-position')
const verticalPosition=document.querySelector('#vertical-position')
const toastTypes=document.querySelector('#toast-types')
const toastMessage=document.querySelector('#toast-message')
const toastContainer =document.querySelector('.toast-container')
const durationInput=document.querySelector('#duration')


showToastBtn.addEventListener('click',()=>{

    if(horizontalPosition.value==='right'){
        toastContainer.classList.add('right')
    }
    else{
        toastContainer.classList.remove('right')
    }
   
    if(verticalPosition.value==='bottom'){
        toastContainer.classList.add('bottom')
    }
    else{
        toastContainer.classList.remove('bottom')
    }

    const newToast=document.createElement('div')
    newToast.classList.add('toast')
    newToast.classList.add(toastTypes.value)
    newToast.innerText=toastMessage.value
    
    const closeIcon=document.createElement('span')
    closeIcon.innerText='✕'
    newToast.append(closeIcon)

    function removeToast(){

        if(toastContainer.classList.contains('right')){
            newToast.classList.add('go-right')
        }else{
            newToast.classList.add('go-left')
        }

       
        //remove after 100 milliseconds
        setTimeout(() => {
            newToast.remove() 
        }, 100);
    }

    closeIcon.addEventListener('click',()=>{
        // newToast.classList.add('go-left')
        // //remove after 100 milliseconds
        // setTimeout(() => {
        //     newToast.remove() 
        // }, 100);
        removeToast()
        
    })

    //example remove automatic 

    setTimeout(()=>{
        removeToast()
    },(durationInput.value)*1000)

    toastContainer.append(newToast)

   
   
})