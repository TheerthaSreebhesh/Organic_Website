let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzmINsrfO9LFFe3vv2vB99awRs83S0yMkQH3_-FeXRk50EVOlxq1t_DEUsdl2EBYWJXNg/exec'
        const form = document.forms['submit-to-google-sheet']
        constmsg=document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message sent Successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
