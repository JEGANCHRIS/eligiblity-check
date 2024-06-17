const userInput = document.querySelector("#dob")
const button = document.getElementById("onclick")
const result = document.getElementById("result")

function calculateAge(birthdate){
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() - 
    (today.getMonth() > birthdate.getMonth() );
    return age;
}

function displayAge(age) {
    const age1 = document.createElement('p');
    age1.innerText = `${age}`
    result.appendChild(age1)
}

function clearHTML(){
    result.innerHTML= ""
}
button.addEventListener("click", function (e) {
    e.preventDefault()
    clearHTML()
    const dob = new Date (userInput.value)
    const age = calculateAge(dob)
    
   
    if(!age){
        console.log("Enter a valid age")
        displayAge("Enter a valid age")
    }
    else if(age>=18 && age<100){
        console.log('eligible')
    }else if( age>100){
        console.log('Enter valid age')
    }
    else{
        console.log('Not eligible ')
    }

})

// CSS button style
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  let target = button.querySelector('.target');
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty('--x', `${ x }px`)
    target.style.setProperty('--y', `${ y }px`)
  }
  button.addEventListener('mousemove', (e) => {
    handleMove(e);
  });
  button.addEventListener('touchmove', (e) => {
    handleMove(e.changedTouches[0]);
  });
});