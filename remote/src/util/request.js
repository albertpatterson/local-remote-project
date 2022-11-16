// let handler = null;
// let timeout = null;
// window.addEventListener('message', (event) => {
//   if (handler) {
//     clearTimeout(timeout);
//     handler(event.data);
//     handler = null;
//   }
// });

// export async function sendRequest(request) {
//   return await new Promise((res, rej) => {
//     handler = res;
//     timeout = setTimeout(() => {
//       rej('Request timed out');
//     }, 1e3);
//     window.parent.postMessage(request, '*');
//   });
// }

// class RequestManager {
//   handler = null;
//   timeout = null;
//   constructor() {
//     window.addEventListener('message', (event) => {
//       if (this.handler) {
//         clearTimeout(this.timeout);
//         this.handler(event.data);
//         this.handler = null;
//         this.timeout = null;
//       }
//     });
//   }

//   async sendRequest(request) {
//     return await new Promise((res, rej) => {
//       this.handler = res;
//       this.timeout = setTimeout(() => {
//         rej('Request timed out');
//       }, 1e3);
//       window.parent.postMessage(request, '*');
//     });
//   }
// }

// export const requestManager = new RequestManager();

function createRequestSender() {
  let handler = null;
  let timeout = null;

  window.addEventListener('message', (event) => {
    if (handler) {
      clearTimeout(timeout);
      handler(event.data);
      handler = null;
      timeout = null;
    }
  });

  async function sendRequest(request) {
    return await new Promise((res, rej) => {
      handler = (result) => {
        if (result.response) {
          res(result.response);
        } else if (result.error) {
          rej(response.error);
        } else {
          rej(`Invalid result: ${JSON.stringify(result)}`);
        }
      };

      timeout = setTimeout(() => {
        rej('Request timed out');
      }, 1e3);
      window.parent.postMessage(request, '*');
    });
  }

  return sendRequest;
}

export const sendRequest = createRequestSender();
