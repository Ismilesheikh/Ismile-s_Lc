let SHEET_ID = '1Dsnmnh58z9i0_vYdkzWgLAEeLfTFQcFowgHP7f90ZL0'
let SHEET_TITLE = 'Class-X';
let SHEET_RANGE = 'C7:H30';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let name = document.getElementById('name1');
    let student_age = document.getElementById('age');
    let name1 = document.getElementById('name1');
    let age2 = document.getElementById('age2');
    let length = data.table.rows.length;

 
  

 
})
