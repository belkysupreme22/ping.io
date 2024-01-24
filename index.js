const inp = document.getElementById('input')
    const btn = document.getElementById('submit')
    const err = document.getElementById('error') 
    

    btn.addEventListener('click', function validate(){
      inpVal = inp.value.trim()
      if(inpVal == ""){
        inp.style.borderColor = 'red'
       
        err.innerHTML = "Please provide a valid email address"
        err.style.fontSize = '1rem'
        err.style.textAlign = 'center'
        err.style.display = "block"
        err.style.color = "red"
      }
      else{
        err.style.display = "none"
        inp.style.borderColor = "green"
      }
    })

   