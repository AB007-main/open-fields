/* ============================================================
   OPEN FIELDS. Mockup behaviour.
   Shared chrome, location, cards, map, filters. No backend.
   ============================================================ */

/* ---------- the goal glyph ----------
   A lacrosse goal seen head on: crossbar and posts open at the
   bottom, netting inside, ground line beneath. It is the logo,
   the map pin, the favicon and the photo watermark. */
const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-goal" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 7.4v11M15.5 7.4v11M4.8 11.4h14.4M4.8 15.2h14.4" stroke-width=".95" opacity=".65"/>
    <path d="M4.4 18.6V7.4h15.2v11.2" stroke-width="2"/>
    <path d="M2.2 18.6h19.6" stroke-width="1.3" opacity=".4"/>
  </symbol>
  <!-- Below about 20px the full mark fills in, so small sizes use
       fewer mesh lines and drop the ground. -->
  <symbol id="i-goal-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.5 7.4v11M15.5 7.4v11M4.8 12.8h14.4" stroke-width="1.2" opacity=".7"/>
    <path d="M4.4 18.6V7.4h15.2v11.2" stroke-width="2.2"/>
  </symbol>
  <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>
  </symbol>
  <symbol id="i-crosshair" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="7.5"/><path d="M12 1.8v4M12 18.2v4M22.2 12h-4M5.8 12h-4"/>
  </symbol>
  <symbol id="i-search" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>
  </symbol>
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m4 12.5 5.2 5.2L20 7"/>
  </symbol>
  <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </symbol>
  <symbol id="i-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 8h3.5l1.6-2.4h7.8L17.5 8H21v11H3z"/><circle cx="12" cy="13.4" r="3.4"/>
  </symbol>
  <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z"/>
  </symbol>
  <symbol id="i-drop" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2.8s6 6.6 6 10.6a6 6 0 0 1-12 0c0-4 6-10.6 6-10.6Z"/>
  </symbol>
  <symbol id="i-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.2M12 16.4v.1"/>
  </symbol>
  <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.8" y="5" width="18.4" height="14" rx="2"/><path d="m3.4 6.4 8.6 6.4 8.6-6.4"/>
  </symbol>
  <symbol id="i-insta" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5"/><circle cx="12" cy="12" r="4"/>
    <circle cx="17" cy="7" r=".9" fill="currentColor"/>
  </symbol>
  <symbol id="i-xcom" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4l16 16M20 4L4 20"/>
  </symbol>
  <symbol id="i-google" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.2c0 5-3.6 8.4-8.8 8.4a8.6 8.6 0 1 1 5.9-14.9l-2.5 2.4a5 5 0 1 0-3.4 8.7c2.6 0 4.4-1.5 4.8-3.6h-4.8v-3.2H21z"/>
  </symbol>
</svg>`;

const icon = (id, cls = '') =>
  `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"></use></svg>`;

/* ---------- fake session ----------
   No backend. This only flips the UI between the signed out and
   signed in states so both can be reviewed. */
const SESSION_KEY = 'of-demo-user';
const currentUser = () => {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
  catch { return null; }
};
function signIn() {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name: 'Alex B.', initials: 'AB' }));
  location.reload();
}
function signOut() {
  localStorage.removeItem(SESSION_KEY);
  location.reload();
}

/* ============================================================
   LOCATION
   Distances are computed from wherever the user actually is,
   not stored on the field. Everything sorts off this.
   ============================================================ */
const LOC_KEY = 'of-location';

function userLocation() {
  try {
    const saved = JSON.parse(localStorage.getItem(LOC_KEY) || 'null');
    if (saved && typeof saved.lat === 'number') return saved;
  } catch { /* fall through to the default */ }
  return DEFAULT_LOCATION;
}

function setUserLocation(loc) {
  localStorage.setItem(LOC_KEY, JSON.stringify(loc));
}

/* Haversine, in miles. */
function distanceMiles(lat1, lng1, lat2, lng2) {
  const R = 3958.8;
  const toRad = d => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

function distanceTo(f, from = userLocation()) {
  return distanceMiles(from.lat, from.lng, f.lat, f.lng);
}

const fmtMiles = m => (m < 10 ? m.toFixed(1) : Math.round(m).toString());

/* Browser geolocation. Needs a secure context, so it works on
   localhost and on https but not on a plain http LAN address. */
function useMyLocation(onDone) {
  if (!navigator.geolocation) {
    onDone(null, 'This browser cannot share your location.');
    return;
  }
  if (!window.isSecureContext && location.hostname !== 'localhost') {
    onDone(null, 'Your browser only shares location over https. Search a place name instead.');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const loc = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        label: 'Your location'
      };
      setUserLocation(loc);
      onDone(loc);
    },
    err => onDone(null, err.code === 1
      ? 'Location permission was denied. Search a place name instead.'
      : 'Could not get your location. Search a place name instead.'),
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

/* Free geocoding through OpenStreetMap Nominatim. No key, no
   billing. Their policy asks for light use, which is fine here. */
async function geocode(query) {
  const url = 'https://nominatim.openstreetmap.org/search'
            + `?format=json&limit=1&countrycodes=us&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
  if (!res.ok) throw new Error('Search is unavailable right now.');
  const [hit] = await res.json();
  if (!hit) throw new Error(`Nothing found for "${query}".`);
  return {
    lat: parseFloat(hit.lat),
    lng: parseFloat(hit.lon),
    label: hit.display_name.split(',').slice(0, 2).join(',').trim()
  };
}

/* ---------- shared chrome ---------- */
function renderChrome(current) {
  document.body.insertAdjacentHTML('afterbegin', SPRITE);
  const user = currentUser();
  const loc = userLocation();

  const header = document.querySelector('[data-header]');
  if (header) {
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">
          ${icon('goal', 'goal-glyph')}
          <span class="brand-name">Open<em>Fields</em></span>
        </a>
        <a class="place-chip" href="map.html">${icon('pin')} ${loc.label}</a>
        <nav class="nav">
          <a href="map.html" ${current === 'map' ? 'aria-current="page"' : ''}>Map</a>
          <a href="submit.html" ${current === 'submit' ? 'aria-current="page"' : ''}>Add a field</a>
          <a href="about.html" data-optional ${current === 'about' ? 'aria-current="page"' : ''}>About</a>
        </nav>
        <div class="auth">
          ${user
            ? `<span class="avatar" title="${user.name}">${user.initials}</span>
               <button class="btn btn-outline btn-sm" onclick="signOut()">Sign out</button>`
            : `<button class="btn btn-outline btn-sm" onclick="signIn()">Sign in</button>
               <button class="btn btn-primary btn-sm" onclick="signIn()">Sign up</button>`}
        </div>
      </div>`;
  }

  const footer = document.querySelector('[data-footer]');
  if (footer) {
    footer.innerHTML = `
      <div class="wrap">
        <div class="foot-cols">
          <div>
            <a class="brand" href="index.html" style="margin-bottom:12px">
              ${icon('goal', 'goal-glyph')}
              <span class="brand-name">Open<em>Fields</em></span>
            </a>
            <p class="small" style="max-width:34ch">
              Public fields with real lacrosse goals, checked by the people who play there.
              Working title, mockup only, no live data.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <a href="index.html">Home</a>
            <a href="map.html">Map</a>
            <a href="submit.html">Add a field</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="contact.html#bug">Report a bug</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="privacy.html">Privacy policy</a>
            <a href="terms.html">Terms of service</a>
            <a href="contact.html#removal">Remove a listing</a>
          </div>
        </div>
        <div class="foot-bottom">
          <span>&copy; ${new Date().getFullYear()} Open Fields</span>
          <div class="social">
            <a href="#" aria-label="Instagram">${icon('insta')}</a>
            <a href="#" aria-label="X">${icon('xcom')}</a>
            <a href="contact.html" aria-label="Email">${icon('mail')}</a>
          </div>
        </div>
      </div>`;
  }
}

/* ---------- helpers ---------- */

/* Freshness is the whole product. A field without a recent check
   is a rumour, so the age of the check is stated everywhere. */
function freshness(f) {
  if (f.status === 'closed') return 'Closed, see notes';
  if (f.status === 'unverified') return 'Never confirmed';
  if (f.confirmedDays === 1) return `Confirmed yesterday by ${f.confirmedBy}`;
  if (f.confirmedDays <= 14) return `Confirmed ${f.confirmedDays} days ago by ${f.confirmedBy}`;
  return `Last checked ${f.confirmedDays} days ago`;
}

function statusClass(s) {
  return { up: 'is-up', seasonal: 'is-seasonal', unverified: 'is-unverified', closed: 'is-closed' }[s];
}

/* Say what kind of goal it is, everywhere. "2 goals" is useless
   if you drive out and find soccer nets. */
function goalSummary(f) {
  if (f.status === 'unverified') return 'Goal type unconfirmed';
  const n = f.goals;
  const kind = /practice|mini/i.test(f.goalType) ? 'practice lacrosse' : 'lacrosse';
  return `${n} ${kind} goal${n > 1 ? 's' : ''}`;
}

/* Hand off to the maps app people already have. No turn by turn here. */
function directionsUrl(f, platform) {
  const q = encodeURIComponent(`${f.name}, ${f.address}`);
  return platform === 'apple'
    ? `https://maps.apple.com/?daddr=${q}&dirflg=d`
    : `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}

const isApple = () => /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);

const thumb = (f, tag) => `
  <div class="field-thumb ${f.surface === 'Grass' ? 'is-grass' : ''}">
    ${icon('goal', 'goal-glyph')}
    ${tag ? `<span class="thumb-tag">${tag}</span>` : ''}
  </div>`;

/* ---------- conditions and ratings ---------- */
const CONDITION_ICON = { good: 'check', wet: 'drop', unplayable: 'alert', unknown: 'goal-sm' };

function conditionBadge(f) {
  const c = CONDITION[f.condition] || CONDITION.unknown;
  return `<span class="cond t-${c.tone}">
    ${icon(CONDITION_ICON[f.condition] || 'goal-sm', 'ico')}${c.label}
  </span>`;
}

function stars(value) {
  return `<span class="stars" role="img" aria-label="${value} out of 5">` +
    [1, 2, 3, 4, 5].map(n =>
      `<svg class="${n <= Math.round(value) ? 'on' : ''}" aria-hidden="true"><use href="#i-star"></use></svg>`
    ).join('') + `</span>`;
}

function ratingRow(f) {
  return `<span class="rating-row">${stars(f.rating)}
    <span class="rating-num">${f.rating.toFixed(1)}</span>
    <span class="small">(${f.ratings})</span></span>`;
}

/* Only rendered when more than one sport is switched on. Lacrosse
   only for now, so this stays quiet. */
function sportPills(f) {
  const live = SPORTS.filter(s => s.live);
  if (live.length < 2) return '';
  return `<span class="sports">` + (f.sports || []).map(id => {
    const s = SPORTS.find(x => x.id === id);
    return `<span class="sport">${s ? s.label : id}</span>`;
  }).join('') + `</span>`;
}

/* ---------- sparkline ----------
   One series, so no legend. The heading names it. Only the last
   point is labelled. */
function sparkline(data, w = 460, h = 110) {
  const max = Math.max(...data), min = Math.min(...data);
  const pad = 10;
  const span = (max - min) || 1;
  const pts = data.map((v, i) => [
    pad + (i * (w - pad * 2)) / (data.length - 1),
    h - pad - ((v - min) / span) * (h - pad * 2)
  ]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${line} L${pts.at(-1)[0].toFixed(1)} ${h - pad} L${pts[0][0].toFixed(1)} ${h - pad} Z`;
  const [lx, ly] = pts.at(-1);
  // Flip the label below the point when it would clip off the top.
  // The last value is often the maximum, which is when y is smallest.
  const ty = ly - 12 < 14 ? ly + 20 : ly - 12;
  return `
    <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" role="img"
         aria-label="Daily active users, last ${data.length} days, ending at ${data.at(-1)}">
      <path d="${area}" fill="var(--turf)" opacity=".10"/>
      <path d="${line}" fill="none" stroke="var(--turf)" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="4" fill="var(--turf)"
              stroke="var(--surface)" stroke-width="2"/>
      <text x="${(lx - 10).toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="end"
            font-family="var(--data)" font-size="12" fill="var(--muted)">${data.at(-1)}</text>
    </svg>`;
}

/* ---------- cards ---------- */
function featuredCard(f) {
  const d = fmtMiles(distanceTo(f));
  return `
    <a class="card" href="field.html?id=${f.id}">
      ${thumb(f, `${f.surface}, ${goalSummary(f)}`)}
      <div class="card-body stack">
        <span class="badge ${statusClass(f.status)}">${STATUS_LABEL[f.status]}</span>
        <h3 class="field-title">${f.name}</h3>
        <div class="field-meta data">
          <span>${d} mi</span><i class="dot"></i><span>${f.area}</span>
        </div>
        ${sportPills(f)}
        <div class="field-meta">${conditionBadge(f)}<i class="dot"></i>${ratingRow(f)}</div>
        <p class="small">${freshness(f)}</p>
      </div>
    </a>`;
}

function resultCard(f) {
  const d = fmtMiles(distanceTo(f));
  return `
    <article class="card result" data-id="${f.id}" tabindex="0">
      ${thumb(f)}
      <div>
        <div class="result-top">
          <h3 class="field-title">${f.name}</h3>
          <span class="data dist">${d} mi</span>
        </div>
        <div class="field-meta data" style="margin-top:6px">
          <span>${f.surface}</span><i class="dot"></i>
          <span>${goalSummary(f)}</span><i class="dot"></i>
          <span>${f.nets === true ? 'Nets on' : f.nets === false ? 'No nets' : 'Nets unknown'}</span>
        </div>
        <div style="margin-top:9px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          <span class="badge ${statusClass(f.status)}">${STATUS_LABEL[f.status]}</span>
          ${conditionBadge(f)}
        </div>
        <div style="margin-top:8px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          ${ratingRow(f)}<i class="dot"></i><span class="small">${freshness(f)}</span>
        </div>
        ${sportPills(f)}
      </div>
    </article>`;
}

const adCard = () => `
  <div class="ad ad-leader">
    <div>
      <div class="data">Sponsored</div>
      <p class="small" style="margin-top:6px">Local shop or club spot, 728 by 90</p>
    </div>
  </div>`;

/* ---------- map ----------
   MapLibre with free CARTO dark raster tiles. No API key, no
   billing account. If the CDN or WebGL is unavailable the list
   still has to work, so this never throws. */
function initMap(el, fields, opts = {}) {
  if (typeof maplibregl === 'undefined') return null;
  try {
    return buildMap(el, fields, opts);
  } catch (err) {
    console.warn('Map unavailable:', err);
    return null;
  }
}

function buildMap(el, fields, opts) {
  const here = userLocation();
  const map = new maplibregl.Map({
    container: el,
    style: {
      version: 8,
      sources: {
        carto: {
          type: 'raster',
          tiles: [
            'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
            'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
            'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
          ],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap contributors, &copy; CARTO'
        }
      },
      layers: [{ id: 'carto', type: 'raster', source: 'carto' }]
    },
    center: opts.center || [here.lng, here.lat],
    zoom: opts.zoom || 10,
    attributionControl: { compact: true }
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
  map.addControl(new maplibregl.ScaleControl({ unit: 'imperial' }), 'bottom-left');
  map.on('load', () => document.querySelectorAll('.map-fallback').forEach(n => n.remove()));

  const markers = {};
  fields.forEach(f => {
    const node = document.createElement('div');
    node.className = `marker ${statusClass(f.status)}`;
    node.dataset.id = f.id;
    node.innerHTML = `<div class="crease">${icon('goal-sm', 'goal-glyph')}</div>`;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `${f.name}, ${STATUS_LABEL[f.status]}`);

    const popup = new maplibregl.Popup({ offset: 22, closeButton: true }).setHTML(`
      <span class="badge ${statusClass(f.status)}">${STATUS_LABEL[f.status]}</span>
      <h3 class="field-title" style="margin:9px 0 4px">${f.name}</h3>
      <div class="data" style="color:var(--muted)">
        ${fmtMiles(distanceTo(f))} mi, ${f.surface}, ${goalSummary(f)}
      </div>
      <p class="small" style="margin-top:8px">${freshness(f)}</p>
      <a class="btn btn-primary btn-block" style="margin-top:12px"
         href="field.html?id=${f.id}">See this field</a>
    `);

    markers[f.id] = new maplibregl.Marker({ element: node })
      .setLngLat([f.lng, f.lat])
      .setPopup(popup)
      .addTo(map);

    node.addEventListener('mouseenter', () => highlight(f.id, true));
    node.addEventListener('mouseleave', () => highlight(f.id, false));
  });

  return { map, markers };
}

/* list and pin cross highlighting */
function highlight(id, on) {
  document.querySelectorAll(`.result[data-id="${id}"], .marker[data-id="${id}"]`)
    .forEach(n => n.classList.toggle('is-active', on));
}

/* Keep the pins honest with the filter chips. A filtered list next
   to an unfiltered map is the fastest way to lose someone's trust. */
function showOnly(markers, ids) {
  const keep = new Set(ids);
  Object.entries(markers).forEach(([id, marker]) => {
    marker.getElement().style.display = keep.has(id) ? '' : 'none';
  });
}

const byId = id => FIELDS.find(f => f.id === id);
const getParam = name => new URLSearchParams(location.search).get(name);

/* ============================================================
   PHOTO PICKER
   A real file input. It validates, previews and lets you remove
   a shot before sending. Nothing uploads in the mockup, but the
   pick, reject and preview behaviour is the real thing, and the
   same object array is what Supabase Storage will take later.
   ============================================================ */
const MAX_PHOTOS = 5;
const MAX_BYTES = 10 * 1024 * 1024;
const OK_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];

function initPhotoPicker(mount, opts = {}) {
  if (!mount) return null;
  const picked = [];

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  input.hidden = true;
  mount.after(input);

  const list = document.createElement('div');
  list.className = 'photo-grid';
  const err = document.createElement('p');
  err.className = 'hint';
  err.setAttribute('role', 'status');
  mount.after(err);
  mount.after(list);

  const say = t => { err.textContent = t || ''; err.style.color = t ? 'var(--warn)' : 'var(--faint)'; };

  const fmtSize = b => b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`;

  function draw() {
    list.innerHTML = picked.map((p, i) => `
      <figure class="photo-item">
        <img src="${p.url}" alt="${p.file.name}">
        <button type="button" class="photo-remove" data-i="${i}" aria-label="Remove ${p.file.name}">
          ${icon('x')}
        </button>
        <figcaption>${fmtSize(p.file.size)}</figcaption>
      </figure>`).join('');
    if (opts.onChange) opts.onChange(picked);
  }

  function add(files) {
    const problems = [];
    for (const file of files) {
      if (picked.length >= MAX_PHOTOS) { problems.push(`Only ${MAX_PHOTOS} photos at a time.`); break; }
      // Some phones report an empty type for HEIC, so fall back to the extension.
      const okType = OK_TYPES.includes(file.type) || /\.(jpe?g|png|webp|heic|heif)$/i.test(file.name);
      if (!okType) { problems.push(`${file.name} is not an image.`); continue; }
      if (file.size > MAX_BYTES) { problems.push(`${file.name} is over 10 MB.`); continue; }
      if (picked.some(p => p.file.name === file.name && p.file.size === file.size)) continue;
      picked.push({ file, url: URL.createObjectURL(file) });
    }
    say(problems[0]);
    draw();
  }

  input.addEventListener('change', () => { add(input.files); input.value = ''; });

  mount.addEventListener('click', () => input.click());
  mount.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
  });

  // drag and drop, desktop only but free to support
  ['dragenter', 'dragover'].forEach(t => mount.addEventListener(t, e => {
    e.preventDefault(); mount.classList.add('is-drop');
  }));
  ['dragleave', 'drop'].forEach(t => mount.addEventListener(t, e => {
    e.preventDefault(); mount.classList.remove('is-drop');
  }));
  mount.addEventListener('drop', e => add(e.dataTransfer.files));

  list.addEventListener('click', e => {
    const b = e.target.closest('.photo-remove');
    if (!b) return;
    const i = +b.dataset.i;
    URL.revokeObjectURL(picked[i].url);   // release the blob, or the tab leaks
    picked.splice(i, 1);
    say('');
    draw();
  });

  return { files: () => picked.map(p => p.file), clear: () => { picked.splice(0); draw(); } };
}
