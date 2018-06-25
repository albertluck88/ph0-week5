function graduates (students) {
    var filterKelompok = []
    for(var i=0; i<students.length; i++){
        filterKelompok.push(students[i].class)
    }
    var urutkan = filterKelompok.sort()
    var cekDouble = []
    for(var j=0; j<urutkan.length; j++){
        if(urutkan[j] !== urutkan[j+1]){
            cekDouble.push(urutkan[j])
        }
    }
    var hasil = {}

    for(var k=0; k<cekDouble.length; k++){
       hasil[cekDouble[k]] = []
       
        for(var l=0; l< students.length; l++){
            if(students[l].class === cekDouble[k] && students[l].score > 75){
              hasil[Object.keys(hasil)[k]].push( {name : students[l].name, score : students[l].score})
            }
        }
        
    }

    return hasil
  }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}