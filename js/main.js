
function timSoNguyen(){
  var sum=1;
  for (var i = 0; sum < 10000; sum++) 
    if (i = sum + i ,console.log(i,sum), i > 10000){
    var j = 0;
      console.log(sum),
      j = sum; 
      break;
    } 

    document.getElementById("txtSoNguyen").innerHTML = "Số nguyên dương nhỏ nhất: " + j;
  
}


// Bài 2:

function tinhTong(){
  var x = Number(document.getElementById("soX").value);
  var n = Number(document.getElementById("soN").value);
  var sum = 0;
  for(var i = 1; i <= n; i++ ){
      sum = sum + Math.pow(x,i);
      console.log(sum, x,i);
  }
  document.getElementById("txtTong").innerHTML = "S(" + n +") có kết quả là: " + sum;
}

// Bài 3:

function inMauChanLe(){
  var content = '';
  var i = 1;
  while( i < 11){
    if(i % 2 != 0 ){
      content += '<div class = "bg bg-danger w-50" style= "color:white">Div Lẻ</div>';
      console.log(i);
    }else{
      content += '<div class = "bg bg-primary w-50" style="color:black">Div Chẵn</div>';
      console.log(i);
    }
    i++;
    document.getElementById("inChanLe").innerHTML = content;
  }
}

function inSoNguyenTo(){
  var nhanSo = Number(document.getElementById("nhapSo").value);
  var content = '';
    for(var i = 2; i <= nhanSo; i++){
      if(i / 2 == 1 || i / 3 == 1 || i / 5 == 1){
            content += i + ', ';
      }else if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0){
            content += i + ', ';
      }else{
            content += '';
      }
        
      }
    
    document.getElementById("soNguyenTo").innerHTML = content;
  }