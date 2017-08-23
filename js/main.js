var hideColumns = '2,3';
let hideColumnsMas = hideColumns.split(',');
let table = $('table');

for (let i = 0; i < hideColumnsMas.length; i++) {
  //$('tr td', table).eq(hideColumnsMas[i]).hide();
  console.log(hideColumnsMas[i]);
}
