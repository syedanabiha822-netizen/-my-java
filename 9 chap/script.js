function table(){
  let num = prompt("Enter number",5);
  let html="";
  for(let i=1;i<=10;i++){
    html += num + " x " + i + " = " + (num*i) + "<br>";
  }
  document.getElementById("show").innerHTML = html;
}

function marks(){
  let s1=prompt("Subject 1");
  let s2=prompt("Subject 2");
  let s3=prompt("Subject 3");

  let m1=+prompt("Marks 1");
  let m2=+prompt("Marks 2");
  let m3=+prompt("Marks 3");

  let total=m1+m2+m3;
  let per=(total/300)*100;

  document.getElementById("show").innerHTML =
  "<table><tr><th>Subject</th><th>Marks</th></tr>"+
  "<tr><td>"+s1+"</td><td>"+m1+"</td></tr>"+
  "<tr><td>"+s2+"</td><td>"+m2+"</td></tr>"+
  "<tr><td>"+s3+"</td><td>"+m3+"</td></tr>"+
  "<tr><th>Total</th><th>"+total+"</th></tr>"+
  "<tr><th>%</th><th>"+per+"</th></tr></table>";
}
