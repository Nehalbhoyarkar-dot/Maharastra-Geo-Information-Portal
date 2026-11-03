/* ============================================================
   DATA
   ============================================================ */
const districts = {
  "Nagpur": { region:"Vidarbha", population:"24,05,665", area:"9,892 sq km", crop:"Cotton, Soybean, Oranges", rivers:"Kanhan, Pench, Wainganga", rainfall:"1,205 mm", lat:21.1458, lng:79.0882, soil:"Black cotton soil", irrigation:"Canal & well irrigation" },
  "Pune": { region:"Western Maharashtra", population:"31,15,431", area:"15,643 sq km", crop:"Sugarcane, Grapes, Jowar", rivers:"Mula, Mutha, Bhima", rainfall:"722 mm", lat:18.5204, lng:73.8567, soil:"Black soil; laterite in western hills", irrigation:"Canal & drip irrigation" },
  "Mumbai": { region:"Konkan", population:"1,24,42,373", area:"603 sq km", crop:"Minimal — urban / horticulture pockets", rivers:"Mithi", rainfall:"2,422 mm", lat:19.0760, lng:72.8777, soil:"Coastal alluvial soil", irrigation:"Not applicable (urban)" },
  "Nashik": { region:"North Maharashtra", population:"14,86,973", area:"15,530 sq km", crop:"Grapes, Onion, Tomato", rivers:"Godavari, Darna", rainfall:"902 mm", lat:19.9975, lng:73.7898, soil:"Black soil & red soil", irrigation:"Canal & drip (grape belt)" },
  "Aurangabad": { region:"Marathwada", population:"11,75,116", area:"10,100 sq km", crop:"Cotton, Bajra, Sugarcane", rivers:"Godavari, Kham", rainfall:"726 mm", lat:19.8762, lng:75.3433, soil:"Black soil", irrigation:"Canal & well irrigation" },
  "Thane": { region:"Konkan", population:"18,41,488", area:"9,558 sq km", crop:"Rice, Vegetables", rivers:"Ulhas", rainfall:"2,500 mm", lat:19.2183, lng:72.9781, soil:"Laterite & coastal alluvial", irrigation:"Rainfed & canal" },
  "Kolhapur": { region:"Western Maharashtra", population:"5,49,236", area:"7,685 sq km", crop:"Sugarcane, Rice, Groundnut", rivers:"Panchganga, Krishna", rainfall:"1,868 mm", lat:16.7050, lng:74.2433, soil:"Black soil & laterite", irrigation:"Canal (Krishna basin)" },
  "Solapur": { region:"Western Maharashtra", population:"9,51,118", area:"14,895 sq km", crop:"Jowar, Sugarcane, Grapes", rivers:"Bhima, Sina", rainfall:"563 mm", lat:17.6599, lng:75.9064, soil:"Black soil — drought-prone belt", irrigation:"Canal & drip" },
  "Amravati": { region:"Vidarbha", population:"6,47,057", area:"12,235 sq km", crop:"Cotton, Soybean, Orange", rivers:"Purna, Wardha", rainfall:"890 mm", lat:20.9374, lng:77.7796, soil:"Black cotton soil", irrigation:"Canal & well irrigation" },
  "Nanded": { region:"Marathwada", population:"5,50,564", area:"10,528 sq km", crop:"Cotton, Sugarcane, Turmeric", rivers:"Godavari", rainfall:"930 mm", lat:19.1383, lng:77.3210, soil:"Black soil", irrigation:"Canal (Godavari basin)" },
  "Ratnagiri": { region:"Konkan", population:"16,15,069", area:"8,208 sq km", crop:"Rice, Alphonso Mango, Cashew, Coconut", rivers:"Bhatsai, Vashishti", rainfall:"3,200 mm", lat:16.9902, lng:73.3120, soil:"Laterite soil", irrigation:"Rainfed & well irrigation" },
  "Jalgaon": { region:"Khandesh", population:"4,60,468", area:"11,765 sq km", crop:"Banana, Cotton, Groundnut", rivers:"Tapi, Girna", rainfall:"690 mm", lat:21.0077, lng:75.5626, soil:"Black soil (Tapi basin)", irrigation:"Canal & drip (banana belt)" }
};

const crops = [
  {name:"Cotton", desc:"Dominant across Vidarbha and Khandesh on black cotton soil; Maharashtra's largest cash crop by area."},
  {name:"Sugarcane", desc:"Concentrated in the well-irrigated Krishna–Bhima belt of Western Maharashtra."},
  {name:"Jowar & Bajra", desc:"Rain-fed staple millets grown widely across the drought-prone central plateau."},
  {name:"Grapes", desc:"Nashik's signature crop, largely under drip irrigation for export-quality yield."},
  {name:"Rice", desc:"Grown along the high-rainfall Konkan coast where paddy is the traditional staple."},
  {name:"Alphonso Mango & Cashew", desc:"Konkan's orchard crops, prized for export and thriving on laterite soil."}
];

const soils = [
  {name:"Black cotton soil (Regur)", desc:"Covers most of the Deccan plateau; moisture-retentive and ideal for cotton."},
  {name:"Red soil", desc:"Found in parts of Vidarbha and the eastern plateau; lower fertility, needs added nutrients."},
  {name:"Laterite soil", desc:"Typical of the Konkan and Western Ghats slopes; suits cashew, mango and coconut."},
  {name:"Coastal alluvial soil", desc:"Narrow belt along the coastline; fertile and used for paddy and vegetables."}
];

const irrigation = [
  {name:"Canal irrigation", desc:"Major river-basin projects on the Godavari, Krishna and Tapi feed the largest command areas."},
  {name:"Well & borewell", desc:"The most widespread source across rain-fed districts of the plateau."},
  {name:"Drip irrigation", desc:"Standard for grapes, banana and sugarcane where water-use efficiency matters most."},
  {name:"Percolation tanks", desc:"Small check-dams that recharge groundwater in drought-prone talukas."}
];

const weatherSample = [
  {city:"Mumbai", region:"Konkan", temp:"31°C", cond:"Humid, scattered showers", humidity:"78%"},
  {city:"Pune", region:"W. Maharashtra", temp:"27°C", cond:"Partly cloudy", humidity:"58%"},
  {city:"Nagpur", region:"Vidarbha", temp:"34°C", cond:"Hot & dry", humidity:"41%"},
  {city:"Nashik", region:"N. Maharashtra", temp:"29°C", cond:"Clear skies", humidity:"49%"},
  {city:"Kolhapur", region:"W. Maharashtra", temp:"26°C", cond:"Light rain", humidity:"81%"}
];

/* ============================================================
   ICONS (inline SVG, stroke-based)
   ============================================================ */
const icons = {
  crop:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><path d="M12 21V9"/><path d="M12 9c0-4 3-7 7-7 0 4-3 7-7 7Z"/><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z"/></svg>',
  soil:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><path d="M3 8h18M3 13h18M3 18h18"/></svg>',
  drip:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11Z"/></svg>',
  flood:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><path d="M2 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M2 20c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M12 3v9"/></svg>',
  drought:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="9" r="4"/><path d="M12 1v2M4.2 4.2l1.4 1.4M20 4l-1.4 1.6M2 15h4M18 15h4M6 20l3-4M18 20l-3-4"/></svg>',
  fire:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round"><path d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1.5-1-2-1-3 2 1 3 3 3 5a5 5 0 0 1-10 0c0-5 4-6 5-11Z"/></svg>'
};

/* ============================================================
   THEME SWITCHER
   ============================================================ */
const themeToggleBtn = document.getElementById('themeToggle');
let activeTheme = localStorage.getItem('theme') || 'light';

// Apply theme on load
document.documentElement.setAttribute('data-theme', activeTheme);

themeToggleBtn.addEventListener('click', () => {
  activeTheme = activeTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', activeTheme);
  localStorage.setItem('theme', activeTheme);
  
  // Reload Map tile layers if map is initialized
  updateMapTileLayer();
});

/* ============================================================
   RENDER: district cards (with dynamic search and region filter)
   ============================================================ */
const districtGrid = document.getElementById('districtGrid');
const districtSearchInput = document.getElementById('districtSearchInput');
const regionFilters = document.getElementById('regionFilters');
let selectedRegion = 'all';

function renderDistricts() {
  districtGrid.innerHTML = '';
  const searchVal = districtSearchInput.value.toLowerCase().trim();

  Object.entries(districts).forEach(([name, d]) => {
    // Region Filter
    if (selectedRegion !== 'all' && d.region !== selectedRegion) return;

    // Search Query (match name, region, crop or soil)
    const matchesSearch = 
      name.toLowerCase().includes(searchVal) ||
      d.region.toLowerCase().includes(searchVal) ||
      d.crop.toLowerCase().includes(searchVal) ||
      d.soil.toLowerCase().includes(searchVal);

    if (searchVal && !matchesSearch) return;

    // Calculate rainfall bar percentage (based on max rainfall of ~3200mm in Ratnagiri)
    const rainfallNum = parseInt(d.rainfall.replace(/[^\d]/g, '')) || 0;
    const progressPercent = Math.min((rainfallNum / 3200) * 100, 100);

    const card = document.createElement('div');
    card.className = 'district-card';
    card.innerHTML = `
      <div class="district-card-top">
        <h3>${name}</h3>
        <span class="region-tag">${d.region}</span>
      </div>
      <div class="stat-row"><span>Population</span><span>${d.population}</span></div>
      <div class="stat-row"><span>Area</span><span>${d.area}</span></div>
      <div class="stat-row"><span>Main Crop</span><span>${d.crop.split(',')[0]}</span></div>
      <div class="stat-row"><span>Primary River</span><span>${d.rivers.split(',')[0]}</span></div>
      <div class="stat-row"><span>Avg. Rainfall</span><span>${d.rainfall}</span></div>
      <div class="rainfall-meter-wrapper">
        <div class="rainfall-meter-bar">
          <div class="rainfall-meter-fill" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
      <button class="card-locate" data-district="${name}">Locate on map <span>→</span></button>
    `;
    districtGrid.appendChild(card);
  });
}

// Attach filtering listeners
districtSearchInput.addEventListener('input', renderDistricts);

regionFilters.addEventListener('click', (e) => {
  const filterBtn = e.target.closest('.filter-tag');
  if (!filterBtn) return;
  
  // Update active styling
  regionFilters.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  filterBtn.classList.add('active');
  
  selectedRegion = filterBtn.dataset.region;
  renderDistricts();
});

// Initial Render
renderDistricts();

/* ============================================================
   RENDER: agriculture icon grids
   ============================================================ */
function renderIconGrid(containerId, items, iconKey){
  const el = document.getElementById(containerId);
  el.innerHTML = items.map(i => `
    <div class="icon-card">
      ${icons[iconKey]}
      <h4>${i.name}</h4>
      <p>${i.desc}</p>
    </div>
  `).join('');
}
renderIconGrid('cropGrid', crops, 'crop');
renderIconGrid('soilGrid', soils, 'soil');
renderIconGrid('irrigationGrid', irrigation, 'drip');

/* ============================================================
   RENDER: weather cards
   ============================================================ */
document.getElementById('weatherGrid').innerHTML = weatherSample.map(w => `
  <div class="weather-card" data-region="${w.region}">
    <h4>${w.city}</h4>
    <div class="region">${w.region}</div>
    <div class="weather-temp">${w.temp}</div>
    <div class="weather-cond">${w.cond}</div>
    <div class="weather-humidity">
      <span>Humidity</span>
      <span>${w.humidity}</span>
    </div>
  </div>
`).join('');

/* ============================================================
   RENDER: disaster cards
   ============================================================ */
const disasters = [
  { cls:"", icon:"flood", title:"Flood Risk", desc:"Heavy monsoon discharge in river basins like the Godavari and Krishna can cause sudden flooding in low-lying and coastal districts.",
    tips:["Move to higher ground before water levels rise","Avoid crossing flooded roads or bridges","Keep a battery radio and emergency kit ready","Follow local disaster-management alerts"] },
  { cls:"drought", icon:"drought", title:"Drought & Water Scarcity", desc:"Deficient or delayed monsoon rainfall regularly affects Marathwada and parts of Western Maharashtra, straining water and crop yield.",
    tips:["Adopt drip irrigation and water-efficient crops","Store water during surplus periods","Report crop stress early to local agriculture office","Support community water-conservation works"] },
  { cls:"fire", icon:"fire", title:"Forest Wildfires", desc:"Dry deciduous forests in the Western Ghats and Vidarbha are prone to fires in the hot, dry pre-monsoon months.",
    tips:["Avoid open flames or burning waste near forest edges","Report smoke sightings to the forest department","Maintain firebreaks around settlements","Evacuate promptly if a warning is issued"] }
];
document.getElementById('disasterGrid').innerHTML = disasters.map(d => `
  <div class="disaster-card ${d.cls}">
    ${icons[d.icon]}
    <h3>${d.title}</h3>
    <p>${d.desc}</p>
    <ul>${d.tips.map(t => `<li>${t}</li>`).join('')}</ul>
  </div>
`).join('');

/* ============================================================
   NAVIGATION
   ============================================================ */
const navButtons = document.querySelectorAll('nav.links button');
let mapInitialized = false;
let leafletMap, mapTileLayer, markerLookup = {}, activeDistrict = null;

function navigate(target){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + target).classList.add('active');
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.target === target));
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
  if(target === 'map'){
    ensureMapInit();
    setTimeout(() => {
      leafletMap.invalidateSize();
    }, 120);
  }
}

navButtons.forEach(btn => btn.addEventListener('click', () => navigate(btn.dataset.target)));
document.querySelectorAll('[data-target]').forEach(el => {
  if(!el.closest('nav.links') && !el.closest('header.site-nav')){
    el.addEventListener('click', () => navigate(el.dataset.target));
  }
});

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* Locate-on-map buttons on home cards (delegated, since cards are dynamic) */
districtGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.card-locate');
  if(!btn) return;
  const name = btn.dataset.district;
  navigate('map');
  setTimeout(() => focusDistrict(name), 200);
});

/* ============================================================
   LEAFLET MAP (High-performance Esri ArcGIS Basemaps - No API Key Required)
   ============================================================ */
const basemapLayers = {
  street: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Street Map',
    maxZoom: 19
  }),
  satellite: L.layerGroup([
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Satellite Imagery',
      maxZoom: 19
    }),
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19
    })
  ]),
  topo: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Topographic',
    maxZoom: 19
  }),
  dark: L.layerGroup([
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Dark Canvas',
      maxZoom: 19,
      maxNativeZoom: 16
    }),
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      maxNativeZoom: 16
    })
  ])
};

let currentLayerKey = null;

function setMapBasemap(layerKey) {
  if (!leafletMap || !basemapLayers[layerKey]) return;
  
  if (currentLayerKey && basemapLayers[currentLayerKey]) {
    leafletMap.removeLayer(basemapLayers[currentLayerKey]);
  }
  
  currentLayerKey = layerKey;
  basemapLayers[layerKey].addTo(leafletMap);
  
  // Bring markers to front if needed
  Object.values(markerLookup).forEach(m => {
    if (m && m.bringToFront) m.bringToFront();
  });

  // Update switcher buttons
  document.querySelectorAll('.map-layer-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layer === layerKey);
  });
}

function updateMapTileLayer() {
  if (!leafletMap) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  
  // If user is currently on street or dark (or first load), auto-switch with theme
  if (!currentLayerKey || currentLayerKey === 'street' || currentLayerKey === 'dark') {
    setMapBasemap(isDark ? 'dark' : 'street');
  }
}

function ensureMapInit(){
  if(mapInitialized) return;
  mapInitialized = true;

  leafletMap = L.map('leafletMap', { scrollWheelZoom:false }).setView([19.2, 76.2], 6.5);
  
  // Set initial map tiles base theme
  updateMapTileLayer();

  // Attach toolbar layer switcher events
  const switcher = document.getElementById('mapLayerSwitcher');
  if (switcher) {
    switcher.querySelectorAll('.map-layer-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setMapBasemap(btn.dataset.layer);
      });
    });
  }

  const ochreIcon = L.divIcon({
    className: 'custom-pin',
    html: '<div style="width:14px;height:14px;border-radius:50%;background:#C68A3B;border:2px solid #0E2C27;box-shadow:0 0 0 3px rgba(198,138,59,0.35);"></div>',
    iconSize:[14,14], iconAnchor:[7,7]
  });

  // Setup markers with tooltip on hover and popup on click
  Object.entries(districts).forEach(([name, d]) => {
    const marker = L.marker([d.lat, d.lng], { icon: ochreIcon }).addTo(leafletMap);
    
    // Add tooltip on hover
    marker.bindTooltip(`<strong>${name}</strong> <span style="opacity:0.8">(${d.region})</span>`, {
      direction: 'top',
      offset: [0, -8],
      className: 'custom-map-tooltip'
    });

    marker.bindPopup(`
      <div class="popup-title">${name}</div>
      <div class="popup-row"><strong>Region:</strong> ${d.region}</div>
      <div class="popup-row"><strong>Population:</strong> ${d.population}</div>
      <div class="popup-row"><strong>Famous Crop:</strong> ${d.crop.split(',')[0]}</div>
      <div class="popup-row"><strong>Avg. Rainfall:</strong> ${d.rainfall}</div>
      <div class="popup-row"><strong>Coordinates:</strong> ${d.lat}, ${d.lng}</div>
    `);
    markerLookup[name] = marker;
  });

  renderMapSidebar();
}

function renderMapSidebar(searchQuery = '') {
  const sidebar = document.getElementById('mapSidebar');
  sidebar.innerHTML = '';
  const query = searchQuery.toLowerCase().trim();

  Object.entries(districts).forEach(([name, d]) => {
    const matchesSearch = 
      name.toLowerCase().includes(query) || 
      d.region.toLowerCase().includes(query);

    if (query && !matchesSearch) return;

    const item = document.createElement('button');
    item.textContent = name;
    if (activeDistrict === name) {
      item.className = 'active-marker';
    }
    item.addEventListener('click', () => focusDistrict(name));
    sidebar.appendChild(item);
  });
}

// Map sidebar search event
document.getElementById('mapSidebarSearch').addEventListener('input', (e) => {
  renderMapSidebar(e.target.value);
});

function focusDistrict(name){
  const d = districts[name];
  if(!d || !leafletMap) return;
  
  activeDistrict = name;
  leafletMap.flyTo([d.lat, d.lng], 9.5, { duration: 0.9 });
  
  // Highlight active sidebar item
  document.querySelectorAll('.map-sidebar button').forEach(b => {
    b.classList.toggle('active-marker', b.textContent === name);
  });

  setTimeout(() => {
    markerLookup[name].openPopup();
  }, 950);
}

/* ============================================================
   SEARCH VIEW (Home / Contact & Search tab)
   ============================================================ */
const districtList = document.getElementById('districtList');
districtList.innerHTML = Object.keys(districts).map(n => `<option value="${n}">`).join('');

function runSearch(){
  const raw = document.getElementById('searchInput').value.trim();
  const resultEl = document.getElementById('searchResult');
  if(!raw){
    resultEl.innerHTML = '<p class="result-empty">Type a district name above, e.g. <strong>Nagpur</strong>, <strong>Pune</strong>, or <strong>Mumbai</strong>.</p>';
    return;
  }
  const key = Object.keys(districts).find(n => n.toLowerCase() === raw.toLowerCase())
    || Object.keys(districts).find(n => n.toLowerCase().startsWith(raw.toLowerCase()));

  if(!key){
    resultEl.innerHTML = `<p class="result-not-found">No records found for &ldquo;${raw}&rdquo;. Try Nagpur, Pune, or Mumbai.</p>`;
    return;
  }
  const d = districts[key];
  resultEl.innerHTML = `
    <div class="result-card">
      <h4>${key}</h4>
      <span class="region-tag">${d.region}</span>
      <div class="result-line"><span>Population</span><span>${d.population}</span></div>
      <div class="result-line"><span>Major crop</span><span>${d.crop.split(',')[0]}</span></div>
      <div class="result-line"><span>Average rainfall</span><span>${d.rainfall}</span></div>
      <div class="result-line"><span>Soil Type</span><span>${d.soil}</span></div>
      <div class="result-line"><span>Irrigation</span><span>${d.irrigation}</span></div>
      <div class="result-line"><span>Latitude / Longitude</span><span>${d.lat}, ${d.lng}</span></div>
      <button class="card-locate" style="margin-top:20px;" onclick="navigate('map'); setTimeout(() => focusDistrict('${key}'), 200);">Locate on map <span>→</span></button>
    </div>
  `;
}
document.getElementById('searchBtn').addEventListener('click', runSearch);
document.getElementById('searchInput').addEventListener('keydown', (e) => { if(e.key === 'Enter') runSearch(); });

/* ============================================================
   CONTACT FORM (static demo)
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMsg').classList.add('show');
  e.target.reset();
  setTimeout(() => {
    document.getElementById('formMsg').classList.remove('show');
  }, 5000);
});
