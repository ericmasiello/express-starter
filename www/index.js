import app from '../server/app';
import { PORT } from '../config';

app.set('port', PORT);

app.listen(app.get('port'), () => {
  debugger;
  console.log(`Server started on port ${app.get('port').toString()}`);
});