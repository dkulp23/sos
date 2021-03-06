var breakfastLocationData = [
  {'name': 'Millionaire Club Charity Breakfast', 'hood': 'Belltown', 'address': '2515 Western Ave', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'openTime': 6, 'closeTime': 7, 'restrictions': 'none'},
  {'name': 'New Horizons Ministries Breakfast', 'hood': 'Belltown', 'address': '2709 3rd Ave', 'meal': 'breakfast', 'days': [1, 2, 4, 5], 'openTime': 10, 'closeTime': 11, 'restrictions': 'Youth under 23'},
  {'name': 'Pike Market Senior Center Breakfast', 'hood': 'Downtown', 'address':'85 Pike St, #200', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5, 6, 7], 'openTime': 8, 'closeTime': 10, 'restrictions': 'Seniors 55+'},
  {'name': 'Operation Sack Lunch Breakfast', 'hood': 'Downtown', 'address': '6th Ave & Columbia St', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'openTime': 8, 'closeTime': 9, 'restrictions': 'none'},
  {'name': 'Chief Seattle Club Breakfast', 'hood': 'Pioneer Square', 'address': '410 2nd Ave Ext S', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'openTime': 7, 'closeTime': 9, 'restrictions': 'American Indians'},
  {'name': 'Union Gospel Mission Breakfast', 'hood': 'Pioneer Square', 'address': '318 2nd Ave Ext S', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'openTime': 7, 'closeTime': 9, 'restrictions': '30 min chapel service before meal'},
  {'name': 'Our Lady of Mt Carmel Breakfast', 'hood': 'First Hill', 'address': '508 Broadway', 'meal': 'breakfast', 'days': [2, 3, 4, 5, 6, 7], 'openTime': 9, 'closeTime': 11, 'restrictions': 'none'},
  {'name': 'Sacred Heart Church Breakfast', 'hood': 'Uptown', 'address': '232 Warren Ave N', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'restrictions': 'none'},
  {'name': 'Mary\'s Place Breakfast', 'hood': 'South Lake Union', 'address': '210 Dexter Ave', 'meal': 'breakfast', 'days': [1, 2, 3, 4, 5], 'openTime': 8, 'closeTime': 9, 'restrictions': 'Women & children only'},
];
//1 = Mon
var lunchLocationData = [
  {'name': 'Millionaire Club Charity Lunch', 'hood': 'Belltown', 'address': '2515 Western Ave', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5], 'openTime': 12, 'closeTime': 13, 'restrictions': 'none'},
  {'name': 'YWCA Angeline\'s Meals Lunch', 'hood': 'Belltown', 'address': '2030 3rd Ave', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5,6,7], 'openTime': 11, 'closeTime': 13, 'restrictions': 'Women 18+'},
  {'name': 'Pike Market Senior Center Lunch', 'hood': 'Downtown', 'address': '85 Pike St., #200', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5,6,7], 'openTime': 12, 'closeTime': 13, 'restrictions': 'Seniors 55+'},
  {'name': 'Bible Study Outreach Ministries Lunch', 'hood': 'Downtown', 'address': '6th Ave & Columbia St', 'meal': 'lunch', 'days': [6], 'openTime': 12, 'closeTime': 13, 'restrictions': 'none'},
  {'name': 'Operation Sack Lunch', 'hood': 'Downtown', 'address': '6th Ave & Columbia St', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5], 'openTime': 13, 'closeTime': 14, 'restrictions': 'none'},
  {'name': 'Lazarus Day Center Lunch', 'hood': 'Pioneer Square', 'address': '416 2nd Ave Ext S', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5,6,7], 'openTime': 12, 'closeTime': 13, 'restrictions': 'Seniors 50+'},
  {'name': 'Union Gospel Mission Lunch', 'hood': 'Pioneer Square', 'address': '318 2nd Ave Ext S', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5,6,7], 'openTime': 12, 'closeTime': 13, 'restrictions': 'Chapel service before lunch'},
  {'name': 'Bread of Life Mission Lunch', 'hood': 'Pioneer Square', 'address': '97 S Main', 'meal': 'lunch', 'days': [1, 2, 3, 4, 5], 'openTime': 12, 'closeTime': 13, 'restrictions': 'none'},
  {'name': 'Peace for the Streets by Kids from the Streets Lunch', 'hood': 'Capitol Hill', 'address': '1814 Summit Ave', 'meal': 'lunch', 'days': [2, 3, 4, 5], 'openTime': 11, 'closeTime': 13, 'restrictions': 'Youth under 21'},
  {'name': 'Community Lunch on Capitol Hill', 'hood': 'Capitol Hill', 'address': '1710 11th Ave,', 'meal': 'lunch', 'days': [2, 5], 'openTime': 12, 'closeTime': 13, 'restrictions': 'none'},
];

var dinnerLocationData = [
  {'name': 'Union Gospel Mission', 'hood': 'Pioneer Square', 'address': '318 2nd Ave Ext S', 'meal': 'dinner', 'days': [1, 2, 3, 4, 5, 6, 7], 'openTime': 17, 'closeTime': 19, 'restrictions': 'none'}, //1
  {'name': 'Bread Of Life Mission', 'hood': 'Downtown', 'address': '97 S Main St', 'meal': 'dinner', 'days': [1, 2, 3, 4, 5, 6, 7], 'openTime': 17, 'closeTime': 18, 'restrictions': 'Chapel attendance required'}, //2
  {'name': 'Lord\'s Table', 'hood': 'Downtown', 'address': '6th Ave & Columbia St', 'meal': 'dinner', 'days': [1, 2, 3, 4], 'openTime': 19, 'closeTime': 21, 'restrictions': 'none'}, //3
  {'name': 'Women\'s Referal Center', 'hood': 'Belltown', 'address': '2030 3rd Ave', 'meal': 'dinner', 'days': [1, 2, 3, 4, 5, 6, 7], 'openTime': 18, 'closeTime': 19, 'restrictions': 'Women 18+'}, //4
  {'name': 'New Horizons Ministries', 'hood': 'Belltown', 'address': '2709 3rd Ave', 'meal': 'dinner', 'days': [1, 2, 3, 7], 'openTime': 18, 'closeTime': 20, 'restrictions': 'Youth under 21'}, //5
  {'name': 'Recovery Cafe', 'hood': 'South Lake Union', 'address': '2022 Boren Ave', 'meal': 'dinner', 'days': [2, 3, 4, 5, 6], 'openTime': 17, 'closeTime': 18, 'restrictions': 'Must be sober 24 hrs'}, //6
  {'name': 'Friday Feasts ROOTS', 'hood': 'U-District', 'address': '1415 NE 43rd St', 'meal': 'dinner', 'days': [5], 'openTime': 18, 'closeTime': 19, 'restrictions': 'none'}, //7
  {'name': 'Phinney Neighbor', 'hood': 'Association', 'hood': 'Greenlake', 'address': '5515 Phinney Ave N', 'meal': 'dinner', 'days': [2], 'openTime': 17, 'closeTime': 18, 'restrictions': 'none'}, //8
  {'name': 'Saint Martin de Porres Shelter', 'hood': 'SODO', 'address': '1561 Alaskan Way S', 'meal': 'dinner', 'days': [1, 2, 3, 4, 5, 6, 7], 'openTime': 18, 'closeTime': 22, 'restrictions': 'Men 55+'}, //9
];
