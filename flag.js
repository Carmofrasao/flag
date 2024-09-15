import { readFile } from 'fs';

readFile('flag.txt', (err, data) => {
  if (err) throw err;
  alert(data);
});
