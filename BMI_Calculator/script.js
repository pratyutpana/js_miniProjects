const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height=parseFloat(document.querySelector('#height').value);
    let weight=parseFloat(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if(height<0 || height===''||isNaN(height)){
        result.innerHTML='Please enter a valid height';
    } else if(weight<0 || weight===''||isNaN(weight)){
        result.innerHTML='Please enter a valid weight';
    } else{
        const bmi=(weight/((height/100)**2)).toFixed(2);
        result.innerHTML=`Your BMI is: ${bmi}`;
    }
})