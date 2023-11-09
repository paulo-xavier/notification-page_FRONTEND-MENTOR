const containerNotifications = document.querySelectorAll('.container-notification'); 
const count = containerNotifications.length; 
const markAllAsRead = document.getElementById('read-all-notifications'); 
const numberUnreadNotifications = document.getElementById('number-unread-notifications'); 
let notificationsRemaining = 3; 
const symbolUnlisted = document.getElementsByClassName('symbol-unlisted'); 

console.log(count); 

markAllAsRead.addEventListener('click', () => {
    for (let i = 0; i < count; i++ ){
        let verify = containerNotifications[i].classList.contains('unlisted');
        
        if (verify){
            containerNotifications[i].classList.remove('unlisted'); 
            notificationsRemaining--; 
            numberUnreadNotifications.innerText = notificationsRemaining;  
            removeSymbol(symbolUnlisted[i]); 
        }
    }
}); 

containerNotifications.forEach((containerNotification, index) => {
    
    containerNotification.addEventListener("click", () => {

        if (containerNotification.classList.contains('unlisted')){
            notificationsRemaining--; 
            numberUnreadNotifications.innerText = notificationsRemaining; 
            containerNotification.classList.remove('unlisted'); 
            removeSymbol(symbolUnlisted[index]);
        } else {}
    
    }); 
}); 

const removeSymbol = (symbol) => {
    symbol.style.visibility = 'hidden'; 
}