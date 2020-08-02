var table =document.querySelector("#corona")
        var alpha =document.querySelector("#alpha")
        var death =document.querySelector("#death")
        var infected =document.querySelector("#infected")
        var daily =document.querySelector("#daily")

alpha.addEventListener("click", function(e){
    table.innerHTML ="";
    $.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var obj =[]
    var d =data.countryitems[0]
    for (var i=1;i<182; i++){
        g = {}
        g["kraj"] =d[i].title, 
        g["wszystkie_przypadki"]=d[i].total_cases
        g["dzienne_przypadki"]=d[i].total_new_cases_today
        g["laczne_zgony"] =d[i].total_deaths
        obj.push(g)
    }

    obj.sort(function(a, b){ 
return a["kraj"]- b["kraj"];
})
table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Dzienna liczba zakażeń</th>
    <th>Chorzy łącznie</th>
    <th>Zgony łącznie</th>
  </tr>`
for (var i=0;i<obj.length; i++){
        table.innerHTML +=`<tr>
        <td>${obj[i]["kraj"]}</td>
        <td>${obj[i]["dzienne_przypadki"]}</td>
        <td>${obj[i]["wszystkie_przypadki"]}</td>
        <td>${obj[i]["laczne_zgony"]}</td>
        </tr>`
    }
  }
})
})

death.addEventListener("click", function(e){
    table.innerHTML ="";
    $.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var obj =[]
    var d =data.countryitems[0]
    for (var i=1;i<182; i++){
        g = {}
        g["kraj"] =d[i].title, 
        g["wszystkie_przypadki"]=d[i].total_cases
        g["dzienne_przypadki"]=d[i].total_new_cases_today
        g["laczne_zgony"] =d[i].total_deaths
        obj.push(g)
    }

    obj.sort(function(a, b){ 
return b["laczne_zgony"]- a["laczne_zgony"];
})

table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Dzienna liczba zakażeń</th>
    <th>Chorzy łącznie</th>
    <th>Zgony łącznie</th>
  </tr>`
for (var i=0;i<obj.length; i++){
        table.innerHTML +=`<tr>
        <td>${obj[i]["kraj"]}</td>
        <td>${obj[i]["dzienne_przypadki"]}</td>
        <td>${obj[i]["wszystkie_przypadki"]}</td>
        <td>${obj[i]["laczne_zgony"]}</td>
        </tr>`
    }
  }
})
})

infected.addEventListener("click", function(e){
    table.innerHTML ="";
    $.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var obj =[]
    var d =data.countryitems[0]
    for (var i=1;i<182; i++){
        g = {}
        g["kraj"] =d[i].title, 
        g["wszystkie_przypadki"]=d[i].total_cases
        g["dzienne_przypadki"]=d[i].total_new_cases_today
        g["laczne_zgony"] =d[i].total_deaths
        obj.push(g)
    }

    obj.sort(function(a, b){ 
return b["wszystkie_przypadki"]- a["wszystkie_przypadki"];
})

table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Dzienna liczba zakażeń</th>
    <th>Chorzy łącznie</th>
    <th>Zgony łącznie</th>
  </tr>`
for (var i=0;i<obj.length; i++){
        table.innerHTML +=`<tr>
        <td>${obj[i]["kraj"]}</td>
        <td>${obj[i]["dzienne_przypadki"]}</td>
        <td>${obj[i]["wszystkie_przypadki"]}</td>
        <td>${obj[i]["laczne_zgony"]}</td>
        </tr>`
    }
  }
})
})

daily.addEventListener("click", function(e){
    table.innerHTML ="";
    $.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var obj =[]
    var d =data.countryitems[0]
    for (var i=1;i<182; i++){
        g = {}
        g["kraj"] =d[i].title, 
        g["wszystkie_przypadki"]=d[i].total_cases
        g["dzienne_przypadki"]=d[i].total_new_cases_today
        g["laczne_zgony"] =d[i].total_deaths
        obj.push(g)
    }

    obj.sort(function(a, b){ 
return b["dzienne_przypadki"]- a["dzienne_przypadki"];
})

table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Dzienna liczba zakażeń</th>
    <th>Chorzy łącznie</th>
    <th>Zgony łącznie</th>
  </tr>`
for (var i=0;i<obj.length; i++){
        table.innerHTML +=`<tr>
        <td>${obj[i]["kraj"]}</td>
        <td>${obj[i]["dzienne_przypadki"]}</td>
        <td>${obj[i]["wszystkie_przypadki"]}</td>
        <td>${obj[i]["laczne_zgony"]}</td>
        </tr>`
    }
  }
})
})


$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotals=ALL',
  dataType: 'json',
  success: function(data){
    var obj =[]
    var d =data.countryitems[0]
    for (var i=1;i<182; i++){
        g = {}
        g["kraj"] =d[i].title, 
        g["wszystkie_przypadki"]=d[i].total_cases
        g["dzienne_przypadki"]=d[i].total_new_cases_today
        g["laczne_zgony"] =d[i].total_deaths
        obj.push(g)
    }

    obj.sort(function(a, b){ 
return a["kraj"]- b["kraj"];
})
table.innerHTML +=`<tr>
    <th>Kraj</th>
    <th>Dzienna liczba zakażeń</th>
    <th>Chorzy łącznie</th>
    <th>Zgony łącznie</th>
  </tr>`
for (var i=0;i<obj.length; i++){
        table.innerHTML +=`<tr>
        <td>${obj[i]["kraj"]}</td>
        <td>${obj[i]["dzienne_przypadki"]}</td>
        <td>${obj[i]["wszystkie_przypadki"]}</td>
        <td>${obj[i]["laczne_zgony"]}</td>
        </tr>`
    }
  }
})