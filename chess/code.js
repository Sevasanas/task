var chessFigures = { 
	paw: '&#9823;',
	knight: '&#9822;',
	bishop: '&#9821;',
	castle: '&#9820',
	queen: '&#9819;',
	king: '&#9812;'
}
var blackCell = '#563a2f';
var whiteCell = '#ded1af';


var table = document.createElement('table');
var flag = true;
for (var i = 0; i < 8; i++) {
	var tr = document.createElement('tr');
	table.appendChild(tr);

	for (var j = 0; j < 8; j++) {

		if (j == 0) { flag = !flag }
		var td = document.createElement('td');
		if (flag && j % 2 == 0) {
			td.style.backgroundColor = blackCell;
		}
		else {
			td.style.backgroundColor = whiteCell;
		}
		if (!flag && j % 2 != 0) {
			td.style.backgroundColor = blackCell;
		}
		tr.appendChild(td);
	}
}
document.querySelector('.table_container').appendChild(table);

var tdlist = document.querySelectorAll('td'); 

for (i = 48; i < tdlist.length; i++) {
    tdlist[i].style.color = 'black';
    
}

var tdArr = Array.from(tdlist);
var result = tdArr.filter(function (elem) {
    switch (tdArr.indexOf(elem)) {
        case 0: case 7: case 56: case 63:
			elem.innerHTML = chessFigures.castle;
			break;
		case 1: case 6: case 57: case 62:
			elem.innerHTML = chessFigures.knight;
			break;
		case 2: case 5: case 58: case 61:
			elem.innerHTML = chessFigures.bishop;
			break;
		case 4: case 60:
			elem.innerHTML = chessFigures.queen;
			break;
		case 3: case 59:
			elem.innerHTML = chessFigures.king;
			break;
    }
    if (tdArr.indexOf(elem) > 7 && tdArr.indexOf(elem) < 16 || tdArr.indexOf(elem) > 47 && tdArr.indexOf(elem) < 56) {
        elem.innerHTML = chessFigures.paw;
    }
})
var trlist = document.querySelectorAll('tr');

for (var i = 0, j = 8; i < trlist.length; i++, j--) {
	trlist[i].insertAdjacentHTML('afterBegin', '<td style="color: black">' + j + '</td>');
}
for (var i = 0; i < 8; i++) {
	trlist[i].insertAdjacentHTML('beforeEnd', '<td style="color: black; transform:rotate(180deg); ">' + (8 - i) + '</td>');
}

table = document.querySelector('table');
trlist[0].insertAdjacentHTML('beforeBegin', '<tr id="begintr">  </tr>');
trlist[7].insertAdjacentHTML('afterEnd', '<tr id="endtr">  </tr>');

for (var i = 0, c = 72; i < 8; i++, c--) { 
	var td = document.createElement('td');
	td.style.transform = "rotate(180deg)";
	td.innerHTML = String.fromCharCode(c);
	document.querySelector('#begintr').appendChild(td);

}
document.querySelector('#begintr').insertAdjacentHTML('afterBegin', '<td></td>');

for (var i = 0, c = 72; i < 8; i++, c--) { 
	var td = document.createElement('td');
	td.innerHTML = String.fromCharCode(c);
	document.querySelector('#endtr').appendChild(td);
}
document.querySelector('#endtr').insertAdjacentHTML('afterBegin', '<td ></td>');