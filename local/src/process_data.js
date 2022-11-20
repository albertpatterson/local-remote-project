export function processData(request) {
  const currentDate = request.data;
  const response = window.userFunction(currentDate);
  return response;
}
