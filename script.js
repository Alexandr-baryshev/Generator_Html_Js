// ---- Функции RC ----
function sort_R(txtRepl, rStart, rSize, cStart, cSize) { //
   let row, column, allResult = ""

   for (let r = rStart; r <= rSize; r++) {
      row = txtRepl.replace("R1", "R" + r)

      for (let c = cStart; c <= cSize; c += 1) {
         column = row.replace("C1", "C" + c);
         allResult = allResult + column + "\n";
      }
   }
    return (allResult)
}


function sort_C(txtRepl, rStart, rSize, cStart, cSize) { //
   let row, column, allResult = ""

   for (let c = cStart; c <= cSize; c++) {
      column = txtRepl.replace("C1", "C" + c)

      for (let r = rStart; r <= rSize; r += 1) {
         row = column.replace("R1", "R" + r);
         allResult = allResult + row + "\n";
      }
   }
   return (allResult)
}



// ---- Функции Интерфейса ----
inputText = document.getElementById("inTxt")
outText = document.getElementById("outTxt")

function start(){
   let R_Start = parseInt(document.getElementById("R_Start").value)
   let R_Size = parseInt(document.getElementById("R_Size").value)
   let C_Start = parseInt(document.getElementById("C_Start").value)
   let C_Size = parseInt(document.getElementById("C_Size").value)
   let RC_pri = document.getElementById("RC_pri")


   if (RC_pri.value === "R" ) {
      outText.value = sort_R(inputText.value, R_Start, R_Size, C_Start, C_Size)
   }

   if (RC_pri.value === "C" ) {
      outText.value = sort_C(inputText.value, R_Start, R_Size, C_Start, C_Size)
   }

   console.log("Тест - ок")
}


