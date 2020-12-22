var myMap = L.map("map", {
    center: [61.2686, -149.4815],
    zoom: 9
  });

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    id: 'mapbox/streets-v11',
      accessToken: API_KEY
  }).addTo(myMap);
  
  var stores = [{
    location: [61.130249, -149.883896],
    name: "100th & C St - Anchorage",
    store_type: "Company Owned"
  },
  {
    location: [61.145080, -149.862800],
    name: "Old Seward & Diamond",
    store_type: "Company Owned"
  },
  {
    location: [61.180660, -149.884720],
    name: "Tudor Rd and C Street",
    store_type: "Company Owned"
  },
  {
    location: [61.181303, -149.835263],
    name: "Tudor & Lake Otis- Anchorage",
    store_type: "Company Owned"
  },
  {
    location: [61.228633, -149.742397],
    name: "Tikahtnu Commons - Anchorage",
    store_type: "Company Owned"
  },
  {
    location: [61.216609, -149.888719],
    name: "5th Avenue Mall - Level 2",
    store_type: "Company Owned"
  },
  {
    location: [61.325337, -149.570618],
    name: "Eagle River",
    store_type: "Company Owned"
  },
  {
    location: [61.576309, -149.405546],
    name: "Parks Hwy & Palmer Wasilla Hwy",
    store_type: "Company Owned"
  }
  ];
  
  stores.forEach(store => L.marker(store.location)
                          .bindPopup(`<h2>${store.name}</h2> <b></b> <h3>${store.store_type}</h3>`)
                          .addTo(myMap));