/* select options */
const grades = document.querySelectorAll('.grades');
const chours = document.querySelectorAll('.chours');

/* calculate button and result */
const btn = document.querySelector('.calc-btn');
const result = document.querySelector('.result');

/* clear grades and clear chours.credit load */
const gradesbtn = document.querySelector('.gradesbtn');
const choursbtn = document.querySelector('.choursbtn');

gradesbtn.addEventListener('click', ()=>{
    grades.forEach(select => select.value = '');
})
choursbtn.addEventListener('click', ()=>{
    chours.forEach(select => select.value = '');
})


btn.addEventListener("click", function(){
    var p = 0;
    var cr = 0;
    
    for (var i = 0; i < grades.length; i++) {
        if(grades[i].value == "A" && chours[i].value == "1"){
            p += 5;
            cr += 1;
        }
        else if(grades[i].value == "A" && chours[i].value == "2"){
            p += 10;
            cr += 2;
        }
        else if(grades[i].value == "A" && chours[i].value == "3"){
            p += 15;
            cr += 3;
        }
        /* b */
        else if(grades[i].value == "B" && chours[i].value == "1"){
            p += 4;
            cr += 1;
        }
        else if(grades[i].value == "B" && chours[i].value == "2"){
            p += 8;
            cr += 2;
        }
        else if(grades[i].value == "B" && chours[i].value == "3"){
            p += 12;
            cr += 3;
        }
        /* b */

        /* c */
        else if(grades[i].value == "C" && chours[i].value == "1"){
            p += 3;
            cr += 1;
        }
        else if(grades[i].value == "C" && chours[i].value == "2"){
            p += 6;
            cr += 2;
        }
        else if(grades[i].value == "C" && chours[i].value == "3"){
            p += 9;
            cr += 3;
        }
        /* c */
        
        /* d */
        else if(grades[i].value == "D" && chours[i].value == "1"){
            p += 2;
            cr += 1;
        }
        else if(grades[i].value == "D" && chours[i].value == "2"){
            p += 4;
            cr += 2;
        }
        else if(grades[i].value == "D" && chours[i].value == "3"){
            p += 6;
            cr += 3;
        }
        /* d */

        /* e */
        else if(grades[i].value == "E" && chours[i].value == "1"){
            p += 1;
            cr += 1;
        }
        else if(grades[i].value == "E" && chours[i].value == "2"){
            p += 2;
            cr += 2;
        }
        else if(grades[i].value == "E" && chours[i].value == "3"){
            p += 3;
            cr += 3;
        }
        /* e */

        /* f */
        else if(grades[i].value == "F" && chours[i].value == "1"){
            p += 0;
            cr += 1;
        }
        else if(grades[i].value == "F" && chours[i].value == "2"){
            p += 0;
            cr += 2;
        }
        else if(grades[i].value == "F" && chours[i].value == "3"){
            p += 0;
            cr += 3;
        }
        /* f */
        
    }
    var total = p / cr;
    if (total >= 0) {
        result.innerHTML = `Your Gpa is ${(total).toFixed(2)}`;
    } else {
        result.innerHTML = `No input`;
    }
    
    
}
);


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });
  
  document.onkeydown = function(e) {
    if(event.keyCode == 123){
      return false;
    }
  
    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
    //alert("1");
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
    //alert("2");
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
    //alert("3");
    return false;
    }
    if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    //alert("4");
    return false;
    }
  
  }
  
