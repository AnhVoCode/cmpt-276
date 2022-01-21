function getPercentage(score,mean,a_num){
  var num = score.value;
  var denom = mean.value;
  var percent = num / denom *100;

  if(num == "" || denom ==""){
      document.getElementsByClassName("percent")[a_num].innerHTML = "";
  }
  else if(percent >= 0 && percent <= 100){
      document.getElementsByClassName("percent")[a_num].innerHTML = percent.toFixed(3) + "%";
  }

  else{
      document.getElementsByClassName("percent")[a_num].innerHTML = "Invalid Inputs";
  }
}

function addRow(){
    var table = document.getElementById("calculator_table");
    var row_count = table.getElementsByTagName("tr").length;
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "Activity " + row_count;
    row.insertCell(1).innerHTML = "A" + row_count;
    row.insertCell(2).innerHTML = '<input type="number" id="weight' + row_count + '">';
    row.insertCell(3).innerHTML = '<input type="number" id="num' + row_count + '" oninput="getPercentage(num' + row_count + ',den' + row_count + ',' + row_count + ')"> / <input type="number" id="den' + row_count + '" oninput="getPercentage(num' + row_count + ',den' + row_count + ',' + row_count + ')">';
    var percent = row.insertCell(4);
    percent.id ='a'+ row_count;
    percent.className = "percent";
   
}

function getMean(){
    var mean = 0;
    var activ_count = 0;
    var table = document.getElementById("calculator_table");
    var row_count = table.getElementsByTagName("tr").length;
  
    for (var i = 1; i < row_count; i++) {
        var num = document.getElementById("num"+i).value;
        var den = document.getElementById("den"+ i).value;
        var grade = num / den;
        if(num == "" || den == ""){
            continue;
        }
        else if(grade >= 0 && grade <=1){
            activ_count++;
            mean += parseFloat(grade);
        }
        else{
            window.alert("There are Invalid Inputs");
            continue;
        }
    }
  mean = mean / activ_count * 100;
  document.getElementById("result").innerHTML = "Mean:" + mean.toFixed(3) + "%";
}

function getWeight(){
    var total = 0;
    var totalWeight = 0;
    var table = document.getElementById("calculator_table");
    var row_count = table.getElementsByTagName("tr").length;

    for(var i=1; i<row_count; i++){
        var weight = document.getElementById("weight"+i).value;
        var num = document.getElementById("num"+i).value;
        var den = document.getElementById("den"+ i).value;
        var grade = num/den;

        if(num == "" || den == ""){
            continue;
        }
        else if(grade >= 0 && grade <=1){
            total += (num/den)*weight;
            totalWeight += parseFloat(weight);
        }
        else{
            window.alert("There are Invalid Inputs");
            continue;
        }
    }

    if(totalWeight == 0){
        window.alert("No/Invalid Inputs")
        document.getElementById("result").innerHTML = "";
    }
    else{
        document.getElementById("result").innerHTML = "Weight: " + (total/totalWeight * 100).toFixed(3) + "%";
    }

}