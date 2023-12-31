var heightInput = document.querySelector(".height");
var weightInput = document.querySelector(".weight");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
document.getElementById("reset").onclick = reset;
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else if((BMI >= 30) && (BMI <= 39.9 )){
        statement.innerText = "Your BMI falls within the obese range";
    }else{
        statement.innerText = "Your BMI falls within the severe obese range";
    }
});

function reset() {
    document.querySelector(".height").value = " ";
    document.querySelector(".weight").value = " "; 
    statement.innerText = "";
    result.textContent = ""
  }