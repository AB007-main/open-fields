/* ============================================================
   MOCK DATA. Every field below is INVENTED for the mockup.
   Park names are real Atlanta area parks so the map looks
   plausible, and coordinates are approximate. Goal counts,
   statuses, conditions, ratings and comments are all made up.
   Nobody has verified a single goal. Do not treat as truth.
   ============================================================ */

/* Where "near you" is measured from until the browser tells us
   otherwise. Distances are computed at runtime, not stored. */
const DEFAULT_LOCATION = { lat: 33.9304, lng: -84.3733, label: 'Sandy Springs, GA' };

const FIELDS = [
  {
    id: 'ocee-park',
    name: 'Ocee Park',
    area: 'Johns Creek',
    lat: 34.0330, lng: -84.2200,
    address: '10900 Buice Rd, Johns Creek, GA 30022',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 1, confirmedBy: 9,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open 7am to 10pm',
    note: 'Turf field past the tennis courts. Best surface on this list and it drains fast.'
  },
  {
    id: 'newtown-park',
    name: 'Newtown Park',
    area: 'Johns Creek',
    lat: 34.0140, lng: -84.2210,
    address: '3150 Old Alabama Rd, Johns Creek, GA 30022',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 2, confirmedBy: 6,
    surface: 'Grass',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to 10pm',
    note: 'Goals live on the back field by the amphitheater. Youth league takes it Tue and Thu 6 to 8.'
  },
  {
    id: 'shakerag-park',
    name: 'Shakerag Park',
    area: 'Johns Creek',
    lat: 34.0470, lng: -84.1830,
    address: '10945 Rogers Cir, Johns Creek, GA 30097',
    status: 'seasonal',
    goalType: 'Full size lacrosse, frames only right now',
    goals: 2, nets: false,
    confirmedDays: 31, confirmedBy: 2,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Frames stay up year round but the nets come off in November.'
  },
  {
    id: 'webb-bridge',
    name: 'Webb Bridge Park',
    area: 'Alpharetta',
    lat: 34.0620, lng: -84.2560,
    address: '4780 Webb Bridge Rd, Alpharetta, GA 30005',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 4, nets: true,
    confirmedDays: 1, confirmedBy: 12,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Permit for groups', permitUrl: '#',
    gate: 'Open 8am to 10pm',
    note: 'Four goals across two turf fields. Club teams book it heavily after 5pm on weeknights.'
  },
  {
    id: 'wills-park',
    name: 'Wills Park',
    area: 'Alpharetta',
    lat: 34.0800, lng: -84.2960,
    address: '11925 Wills Rd, Alpharetta, GA 30009',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 4, confirmedBy: 5,
    surface: 'Grass',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to 11pm',
    note: 'Big complex. The lacrosse goals are on the field nearest the equestrian center, not the ballfields.'
  },
  {
    id: 'north-park',
    name: 'North Park',
    area: 'Alpharetta',
    lat: 34.1030, lng: -84.2540,
    address: '13450 Cogburn Rd, Alpharetta, GA 30004',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 4, nets: true,
    confirmedDays: 3, confirmedBy: 8,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Permit for groups', permitUrl: '#',
    gate: 'Open 8am to 10pm',
    note: 'Two turf fields with lights. Easiest place to get a full field on a Sunday morning.'
  },
  {
    id: 'big-creek',
    name: 'Big Creek Park',
    area: 'Roswell',
    lat: 34.0480, lng: -84.3390,
    address: '1600 Old Alabama Rd, Roswell, GA 30076',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 6, confirmedBy: 4,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Quiet on weekday mornings. Field sits low so it holds water after a hard rain.'
  },
  {
    id: 'east-roswell',
    name: 'East Roswell Park',
    area: 'Roswell',
    lat: 34.0230, lng: -84.3000,
    address: '9000 Fouts Rd, Roswell, GA 30076',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 2, confirmedBy: 7,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open 7am to 10pm',
    note: 'Turf, lights, and rarely full before 4pm. One of the best options in the area.'
  },
  {
    id: 'roswell-area-park',
    name: 'Roswell Area Park',
    area: 'Roswell',
    lat: 34.0210, lng: -84.3520,
    address: '10495 Woodstock Rd, Roswell, GA 30075',
    status: 'seasonal',
    goalType: 'Full size lacrosse, frames only right now',
    goals: 2, nets: false,
    confirmedDays: 24, confirmedBy: 3,
    surface: 'Grass',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to 10pm',
    note: 'Nets go back on in March. Frames are solid and fine for shooting drills.'
  },
  {
    id: 'morgan-falls',
    name: 'Morgan Falls Athletic Complex',
    area: 'Sandy Springs',
    lat: 33.9880, lng: -84.3760,
    address: '8200 Roswell Rd, Sandy Springs, GA 30350',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 1, confirmedBy: 11,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Permit for groups', permitUrl: '#',
    gate: 'Open 8am to 10pm',
    note: 'Turf with lights right on the river. Books up fast, check the city calendar first.'
  },
  {
    id: 'hammond-park',
    name: 'Hammond Park',
    area: 'Sandy Springs',
    lat: 33.9200, lng: -84.3610,
    address: '705 Hammond Dr, Sandy Springs, GA 30328',
    status: 'up',
    goalType: 'Practice and mini lacrosse goals',
    goals: 2, nets: true,
    confirmedDays: 5, confirmedBy: 3,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Smaller practice goals, not full size. Good for shooting and stick work, not a full field.'
  },
  {
    id: 'brook-run',
    name: 'Brook Run Park',
    area: 'Dunwoody',
    lat: 33.9490, lng: -84.3120,
    address: '4770 N Peachtree Rd, Dunwoody, GA 30338',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 3, confirmedBy: 6,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Flat and well kept. Parking fills on weekends because of the playground and dog park.'
  },
  {
    id: 'murphey-candler',
    name: 'Murphey Candler Park',
    area: 'Brookhaven',
    lat: 33.9130, lng: -84.3350,
    address: '1551 W Nancy Creek Dr, Brookhaven, GA 30319',
    status: 'seasonal',
    goalType: 'Full size lacrosse, frames only right now',
    goals: 1, nets: false,
    confirmedDays: 38, confirmedBy: 2,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: false,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'One frame at the far end past the baseball fields. Bring your own net if you want rebounds.'
  },
  {
    id: 'blackburn-park',
    name: 'Blackburn Park',
    area: 'Brookhaven',
    lat: 33.9160, lng: -84.3320,
    address: '3493 Ashford Dunwoody Rd, Brookhaven, GA 30319',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 8, confirmedBy: 4,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open 7am to 10pm',
    note: 'Turf field with lights. Adult leagues run most weeknights from 7pm.'
  },
  {
    id: 'chastain-park',
    name: 'Chastain Park',
    area: 'Atlanta, Buckhead',
    lat: 33.8790, lng: -84.3900,
    address: '135 W Wieuca Rd NW, Atlanta, GA 30342',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 2, confirmedBy: 8,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Goals on the open field by the horse park. Busy after 5pm and on weekend mornings.'
  },
  {
    id: 'piedmont-park',
    name: 'Piedmont Park',
    area: 'Atlanta, Midtown',
    lat: 33.7850, lng: -84.3733,
    address: '1320 Monroe Dr NE, Atlanta, GA 30306',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 1, confirmedBy: 14,
    surface: 'Grass',
    lights: true, restrooms: true, parking: 'Street', water: true,
    cost: 'Free', gate: 'Open 6am to 11pm',
    note: 'Meadow gets crowded on nice days. Goals are at the north end near the active oval.'
  },
  {
    id: 'candler-park',
    name: 'Candler Park',
    area: 'Atlanta, Candler Park',
    lat: 33.7660, lng: -84.3400,
    address: '585 Candler Park Dr NE, Atlanta, GA 30307',
    status: 'unverified',
    goalType: 'Goal type not confirmed yet',
    goals: 1, nets: null,
    confirmedDays: null, confirmedBy: 0,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Street', water: false,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Submitted last week with no photo. Nobody has confirmed what kind of goal is there.'
  },
  {
    id: 'grant-park',
    name: 'Grant Park',
    area: 'Atlanta, Grant Park',
    lat: 33.7350, lng: -84.3700,
    address: '840 Cherokee Ave SE, Atlanta, GA 30315',
    status: 'unverified',
    goalType: 'Goal type not confirmed yet',
    goals: 1, nets: null,
    confirmedDays: null, confirmedBy: 0,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Street', water: true,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Reported by one person. Needs a photo before it turns green.'
  },
  {
    id: 'westside-park',
    name: 'Westside Park',
    area: 'Atlanta, Grove Park',
    lat: 33.7930, lng: -84.4290,
    address: '1660 Johnson Rd NW, Atlanta, GA 30318',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 9, confirmedBy: 3,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free', gate: 'Open 7am to dusk',
    note: 'Newest big park in the city. Wide open and almost never busy on weekday mornings.'
  },
  {
    id: 'henderson-park',
    name: 'Henderson Park',
    area: 'Tucker',
    lat: 33.8480, lng: -84.2210,
    address: '2801 Henderson Rd, Tucker, GA 30084',
    status: 'up',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 12, confirmedBy: 2,
    surface: 'Grass',
    lights: false, restrooms: true, parking: 'Lot', water: false,
    cost: 'Free', gate: 'Open dawn to dusk',
    note: 'Field slopes toward the tree line. Fine in dry weather, sloppy after rain.'
  },
  {
    id: 'laurel-park',
    name: 'Laurel Park',
    area: 'Marietta',
    lat: 33.9550, lng: -84.5730,
    address: '151 Manning Rd SW, Marietta, GA 30064',
    status: 'closed',
    goalType: 'Full size lacrosse, 6ft by 6ft',
    goals: 2, nets: true,
    confirmedDays: 7, confirmedBy: 5,
    surface: 'Turf',
    lights: true, restrooms: true, parking: 'Lot', water: true,
    cost: 'Free outside school hours',
    gate: 'Closed for turf replacement, expected back in May',
    note: 'Closed for resurfacing. Goals are stored on site and go back up when it reopens.'
  }
];

/* Condition of the playing surface right now. A separate question
   from whether the goals exist. A field can have goals up and
   still be a swamp. */
const CONDITION = {
  good:       { label: 'Playable',   tone: 'up'         },
  wet:        { label: 'Wet, muddy', tone: 'seasonal'   },
  unplayable: { label: 'Unplayable', tone: 'closed'     },
  unknown:    { label: 'No report',  tone: 'unverified' }
};

/* Sports the data model supports. Only lacrosse is switched on in
   the UI for now. The rest stay here so turning them on later is a
   config change and not a rebuild. */
const SPORTS = [
  { id: 'lacrosse',    label: 'Lacrosse',    live: true  },
  { id: 'soccer',      label: 'Soccer',      live: false },
  { id: 'football',    label: 'Football',    live: false },
  { id: 'fieldhockey', label: 'Field hockey',live: false },
  { id: 'ultimate',    label: 'Ultimate',    live: false },
  { id: 'rugby',       label: 'Rugby',       live: false }
];

const OVERRIDES = {
  'ocee-park':        { condition: 'good',       condAge: '35 min', rating: 4.8, ratings: 71 },
  'webb-bridge':      { condition: 'good',       condAge: '1 hr',   rating: 4.7, ratings: 96 },
  'east-roswell':     { condition: 'good',       condAge: '2 hr',   rating: 4.6, ratings: 58 },
  'big-creek':        { condition: 'unplayable', condAge: '40 min', rating: 4.0, ratings: 33 },
  'chastain-park':    { condition: 'wet',        condAge: '3 hr',   rating: 4.2, ratings: 64 },
  'piedmont-park':    { condition: 'good',       condAge: '20 min', rating: 4.4, ratings: 128 },
  'murphey-candler':  { condition: 'wet',        condAge: '6 hr',   rating: 3.5, ratings: 17 },
  'laurel-park':      { condition: 'unplayable', condAge: '1 day',  rating: 4.3, ratings: 41 }
};

FIELDS.forEach((f, i) => {
  f.sports = ['lacrosse'];
  const o = OVERRIDES[f.id];
  if (o) return Object.assign(f, o);
  Object.assign(f, {
    condition: f.status === 'closed' ? 'unplayable'
             : i % 5 === 1 ? 'unknown'
             : i % 4 === 3 ? 'wet' : 'good',
    condAge:  ['50 min', '2 hr', '5 hr', '1 day', '3 days'][i % 5],
    rating:   Math.round((3.5 + ((i * 7) % 14) / 10) * 10) / 10,
    ratings:  8 + ((i * 13) % 52)
  });
});

/* One tap check ins, shown on the field page. */
const REPORTS = [
  { kind: 'up',     who: 'Mike R.',   text: 'Both lacrosse goals up, nets look new.',              when: '2 days ago' },
  { kind: 'up',     who: 'Anonymous', text: 'Confirmed. Played there Saturday morning.',           when: '4 days ago' },
  { kind: 'warn',   who: 'Dana K.',   text: 'North gate was chained, had to come in off Buice.',   when: '1 week ago' },
  { kind: 'up',     who: 'Coach T.',  text: 'Goals up. Youth league had the field 6 to 8pm.',      when: '2 weeks ago' },
  { kind: 'danger', who: 'Anonymous', text: 'Field was flooded after the storm and unplayable.',   when: '3 weeks ago' }
];

/* Comments require an account. That is the point of the account. */
const COMMENTS = [
  { user: 'Mike Reilly', initials: 'MR', when: '35 min ago', sport: 'lacrosse', rating: 5,
    body: 'Both goals up and the nets are new. Drained fast after last night, totally playable.' },
  { user: 'Dana Kwon',   initials: 'DK', when: '3 hr ago',   sport: 'lacrosse', rating: 4,
    body: 'South end is soft but the north half is fine. Park in the back lot, the main gate was chained.' },
  { user: 'Coach T.',    initials: 'CT', when: 'Yesterday',  sport: 'lacrosse', rating: 5,
    body: 'We practice here Tue and Thu 5 to 7. Field is open the rest of the week with room for a second group.' },
  { user: 'Sam Ortiz',   initials: 'SO', when: '2 days ago', sport: 'lacrosse', rating: 3,
    body: 'Grass is patchy through the middle third. Fine for shooting, I would not run cleats hard on it.' },
  { user: 'Priya N.',    initials: 'PN', when: '4 days ago', sport: 'lacrosse', rating: 4,
    body: 'Lights were on until 9 last week. Restrooms were locked though.' }
];

const STATUS_LABEL = {
  up:         'Lacrosse goals up',
  seasonal:   'Goals seasonal',
  unverified: 'Unverified',
  closed:     'Closed'
};

/* Admin dashboard figures, per WEBAPP_STANDARDS section 5. All invented. */
const ADMIN = {
  users:   { today: 34, week: 218, month: 941, total: 4127 },
  fields:  { live: 142, pending: 9, flagged: 2 },
  reports: { today: 87, week: 604 },
  signups: [
    { name: 'Mike Reilly', email: 'm****@gmail.com',   when: '12 min ago', sport: 'Lacrosse' },
    { name: 'Dana Kwon',   email: 'd****@icloud.com',  when: '1 hr ago',   sport: 'Lacrosse' },
    { name: 'Sam Ortiz',   email: 's****@yahoo.com',   when: '3 hr ago',   sport: 'Lacrosse' },
    { name: 'Priya N.',    email: 'p****@gmail.com',   when: '5 hr ago',   sport: 'Lacrosse' },
    { name: 'Coach T.',    email: 'c****@outlook.com', when: 'Yesterday',  sport: 'Lacrosse' }
  ],
  services: [
    { name: 'Site',     status: 'up',   detail: 'Vercel, 200 OK' },
    { name: 'Supabase', status: 'up',   detail: 'Database and Auth' },
    { name: 'Storage',  status: 'up',   detail: 'Field photos' },
    { name: 'Stripe',   status: 'idle', detail: 'Not configured yet' }
  ],
  dau: [112, 138, 121, 96, 154, 187, 203, 176, 149, 168, 195, 221, 240, 218],
  queue: [
    { name: 'Candler Park',            who: 'Anonymous', when: '2 hr ago',   photo: false },
    { name: 'Grant Park',              who: 'Priya N.',  when: '6 hr ago',   photo: true  },
    { name: 'Dellwood Park practice',  who: 'Anonymous', when: 'Yesterday',  photo: true  },
    { name: 'Suwanee Town Center',     who: 'Sam Ortiz', when: '2 days ago', photo: false }
  ]
};
