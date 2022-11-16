import './style.scss';
const iframeWindow = document.getElementById('fullscreen-iframe').contentWindow;

window.addEventListener('message', (request) => {
  handleRequest(request);
});

function handleRequest(request) {
  try {
    const response = window.processData(request.data);
    iframeWindow.postMessage({ response }, '*');
  } catch (error) {
    iframeWindow.postMessage({ error }, '*');
  }
}
