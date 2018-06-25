function highestScore (students) {
    var newData = {}
    var kelas = []
    var hasilSementara = []
 

    for(var i=0; i<students.length; i++){
        kelas.push(students[i].class)
    }

    var urutkanKelas = kelas.sort()

    var cekDouble = []

    for(var j=0; j<urutkanKelas.length; j++){
        if(urutkanKelas[j] !== urutkanKelas[j+1]){
            cekDouble.push(urutkanKelas[j])
        }
    }

    for(var k=0; k<cekDouble.length; k++){
        newData[cekDouble[k]] = {}
        nama = []

        for(var a=0; a<students.length; a++){
            simpan = []
            if(students[a].class === Object.keys(newData)[k]){
            simpan.push(students[a].name)
            simpan.push(students[a].score)
            nama.push(simpan)
            }
            
        }
        for(var b=0; b<nama.length; b++){
           if(nama[b][1] > nama[nama.length-1][1]){
               newData[Object.keys(newData)[k]].Nama = nama[b][0]
               newData[Object.keys(newData)[k]].Score = nama[b][1]
           }else if(newData[Object.keys(newData)[k]].Nama === undefined){
            newData[Object.keys(newData)[k]].Nama = nama[b][0]
            newData[Object.keys(newData)[k]].Score = nama[b][1]
           }
        }


    }
  

    return newData
  
   
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }

  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
  
  
  