const form= document.querySelector('form');
// this usecse will give you empty
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault(); // it is used to stop the form to load untill result is not print

    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML='please give  avalid height  ${height}';
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML='please give  avalid weight  ${weight}';
    }else{
       // Calculate BMI
       let bmi = (weight / ((height * height) / 10000)).toFixed(2);
       // Determine the BMI category
       let classification;
       if (bmi < 18.6) {
           classification = 'Underweight';
       } else if (bmi >= 18.6 && bmi <= 24.9) {
           classification = 'Normal Range';
       } else {
           classification = 'Overweight';
       }

       // Display the BMI and the classification
       results.innerHTML = `Your BMI is ${bmi}. You are classified as: ${classification}`;
   
    }
});