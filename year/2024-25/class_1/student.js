let SHEET_ID = '1Dsnmnh58z9i0_vYdkzWgLAEeLfTFQcFowgHP7f90ZL0'
let SHEET_TITLE = 'Class-X';
let SHEET_RANGE = 'C7:H13';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let name = document.getElementById('name1');
    let pname = document.getElementById('pname');
    let dob = document.getElementById('dob1');
    let mno = document.getElementById('mno1');
    let length = data.table.rows.length;

 name.innerHTML=(data.table.rows[0].c[1]).v;
  

 
})