function hesaplaMatch(){

  let FirstExam =document.getElementById("FirstExam").value;
  let SecondExam =document.getElementById("SecondExam").value;
  let ThirdExam =document.getElementById("ThirdExam").value;

  let e1= Number(FirstExam);
  let e2= Number(SecondExam);
  let e3= Number(ThirdExam);
  

  let average = (e1 + e2 + e3) / 3;

  if(average > 49.9)
  document.getElementById("sonuc1").innerHTML="Average : " + average + " .Passed.";
else

   document.getElementById("sonuc1").innerHTML="Average : " + average + " .Kaldın";

}
 let buton1Btn=document.getElementById("buton1");
 buton1Btn.onclick=hesaplaMatch;


 function hesaplaEnglish(){

    let FirstExam2 =document.getElementById("FirstExam2").value;
    let SecondExam2 =document.getElementById("SecondExam2").value;
    let ThirdExam2 =document.getElementById("ThirdExam2").value;
  
    let e4= Number(FirstExam2);
    let e5= Number(SecondExam2);
    let e6= Number(ThirdExam2);
    
  
    let average2 = (e4 + e5 + e6) / 3;
  
    if(average2 > 49.9)
    document.getElementById("sonuc2").innerHTML="Average : " + average2 + " .Passed.";
  else
  
     document.getElementById("sonuc2").innerHTML="Average: " + average2 + " .Kaldın";
  
  }
   let buton2Btn=document.getElementById("buton2");
   buton2Btn.onclick=hesaplaEnglish;











