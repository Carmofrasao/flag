import { readFile } from 'fs';

readFile('flag.txt', (err, data) => {
  if (err) throw err;
  document.open();
  document.write(data);
  document.close();
});
