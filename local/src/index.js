import './style.scss';
const iframeWindow = document.getElementById('fullscreen-iframe').contentWindow;
import { processData } from './process_data';

window.addEventListener('message', (request) => {
  handleRequest(request);
});

function handleRequest(request) {
  if (window.userCodeError) {
    const msg = `Error in code.js at line #${window.userCodeError.lineno}, col #${window.userCodeError.colno}: "${window.userCodeError.message}" -- code.js: line #${window.userCodeError.lineno}, col #${window.userCodeError.colno}`;
    iframeWindow.postMessage({ error: new Error(msg) }, '*');
    return;
  }

  try {
    const response = processData(request);
    iframeWindow.postMessage({ response }, '*');
  } catch (error) {
    iframeWindow.postMessage({ error }, '*');
  }
}
