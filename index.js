const FS = require('fs');
const XLSX = require('xlsx');

const file = './TestMappe.xlsx';
const sheet = XLSX.readFile(file);
const sheetNameList = sheet.SheetNames;
const space = sheet.Sheets[sheetNameList[0]];
const parsed = XLSX.utils.sheet_to_json(space, { raw: false });

const csved = XLSX.utils.sheet_to_csv(space);

FS.writeFileSync('./parsed.json', JSON.stringify(parsed));
FS.writeFileSync('./parsed-csv.csv', csved);
