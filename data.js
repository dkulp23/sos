var breakfastLocationData = [
  {name: 'Millionaire Club Charity Breakfast', hood: 'Belltown', address: '2515 Western Ave, Seattle', days: [1, 2, 3, 4, 5], openTime: 6, closeTime: 7, restrictions: 'none'},
  { }
];
//1 = Mon
var lunchLocationData = [
  {name: 'Millionaire Club Charity lunch', hood: 'Belltown', address: '2515 Western Ave, Seattle', days: [1, 2, 3, 4, 5], openTime: 12, closeTime: 13, restrictions: 'none'},
  {name: 'YWCA Angeline\'s Meals lunch', hood: 'Belltown', address: '2030 3rd Ave, Seattle', days: [1, 2, 3, 4, 5,6,7], openTime: 11, closeTime: 13, restrictions: 'Women 18+'},
  {name: 'Pike Market Senior Center lunch', hood: 'Downtown', address: '85 Pike St., #200, Seattle', days: [1, 2, 3, 4, 5,6,7], openTime: 12, closeTime: 13, restrictions: 'Seniors 55+'},
  {name: 'Bible Study Outreach Ministries lunch', hood: 'Downtown', address: '6th Ave & Columbia St', days: [6], openTime: 12, closeTime: 13, restrictions: 'none'},
  {name: 'Operation Sack Lunch', hood: 'Downtown', address: '6th Ave & Columbia St', days: [1, 2, 3, 4, 5], openTime: 13, closeTime: 14, restrictions: 'none'},
  {name: 'Lazarus Day Center lunch', hood: 'Pioneer Square', address: '416 2nd Ave Ext S', days: [1, 2, 3, 4, 5,6,7], openTime: 12, closeTime: 13, restrictions: 'Seniors 50+'},
  {name: 'Union Gospel Mission lunch', hood: 'Pioneer Square', address: '318 2nd Ave Ext S', days: [1, 2, 3, 4, 5,6,7], openTime: 12, closeTime: 13, restrictions: 'Chapel Service required prior to lunch'},
  {name: 'Bread of Life Mission lunch', hood: 'Pioneer Square', address: '97 S Main', days: [1, 2, 3, 4, 5], openTime: 12, closeTime: 13, restrictions: 'none'},
  {name: 'Peace for the Streets by Kids from the Streets lunch', hood: 'Capitol Hill', address: '1814 Summit Ave', days: [2, 3, 4, 5], openTime: 11, closeTime: 13, restrictions: 'Youth, Under 21'},
  {name: 'Community Lunch on Capitol Hill', hood: 'Capitol Hill', address: '1710 11th Ave', days: [2, 5], openTime: 12, closeTime: 13, restrictions: 'none'},
];

var dinnerLocationData = [
  {name: 'Union Gospel Mission', hood: 'Pioneer Square', address: '318 2nd Ave Ext S', days: [1, 2, 3, 4, 5, 6, 7], openTime: 17, closeTime: 19, restrictions: 'none'}, //1
  {name: 'Bread Of Life Mission', hood: 'Downtown', address: '97 S Main St, Seattle, WA 98104', days: [1, 2, 3, 4, 5, 6, 7], openTime: 17, closeTime: 18, restrictions: 'Chapel attendance required'}, //2
  {name: 'Lord\'s Table', hood: 'Downtown', address: '6th Ave & Columbia St', days: [1, 2, 3, 4], openTime: 19, closeTime: 21, restrictions: 'none'}, //3
  {name: 'Women\'s Referal Center', hood: 'Belltown', address: '2030 3rd Ave', days: [1, 2, 3, 4, 5, 6, 7], openTime: 18, closeTime: 19, restrictions: 'women 18+'}, //4
  {name: 'New Horizons Ministries', hood: 'Belltown', address: '2709 3rd Ave', days: [1, 2, 3, 7], openTime: 18, closeTime: 20, restrictions: 'Youth under 21'}, //5
  {name: 'Recovery Cafe', hood: 'SLU', address: '2022 Boren Ave', days: [2, 3, 4, 5, 6], openTime: 17, closeTime: 18, restrictions: 'Must be sober 24 hours'}, //6
  {name: 'Friday Feasts ROOTS', hood: 'U District', address: '1415 NE 43rd St', days: [5], openTime: 18, closeTime: 19, restrictions: 'none'}, //7
  {name: 'Phinney Neighborhood Association', hood: 'Greenlake', address: '5515 Phinney Ave N', days: [2], openTime: 17, closeTime: 18, restrictions: 'none'}, //8
  {name: 'Saint Martin de Porres Shelter', hood: 'SODO', address: '1561 Alaskan Way S', days: [1, 2, 3, 4, 5, 6, 7], openTime: 18, closeTime: 22, restrictions: 'men 55+'}, //9
  // {name: ' ', hood: ' ', address: ' ', days: [1, 2, 3, 4, 5, 6, 7], openTime: 17, closeTime: 19, restrictions: ' '}, //10
];
