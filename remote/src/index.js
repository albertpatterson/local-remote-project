import './style.scss';
import { sendRequest } from './util/request';

setInterval(async () => {
  const now = new Date();
  console.log(`\nsending request for date ${now}`);
  const response = await sendRequest(now);
  console.log(`received response for date ${now}: ${response}`);
}, 1e3);
