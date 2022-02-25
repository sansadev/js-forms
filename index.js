function bmi() {
    let x= document.getElementById("height").value;
    let y= document.getElementById("weight").value;
    let z= x / (y * y);
    let total = Math.round(z);
    
    
      document.getElementById("demo").innerHTML = "my answer is "   + total;
      
    }
    