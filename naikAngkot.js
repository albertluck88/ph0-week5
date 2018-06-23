function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var newArry = []
    for(var i=0; i<arrPenumpang.length; i++){
        newArry.push(Object.create({}))
        nilaiKurang = 0
        for(var j=0; j<rute.length; j++){
            ruteAwal = 0
            ruteAkhir = 0
            if(rute[j] === arrPenumpang[i][1]){
                ruteAwal += j
            }else if(rute[j] === arrPenumpang[i][2]){
                ruteAkhir += j
            }
        
            nilaiKurang += ruteAkhir - ruteAwal
        }
    


        newArry[i]["Penumpang"] = arrPenumpang[i][0]
        newArry[i]["naikDari"] = arrPenumpang[i][1]
        newArry[i]["tujuan"] = arrPenumpang[i][2]
        newArry[i]["bayar"] = nilaiKurang * 2000
    }
    return newArry
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]