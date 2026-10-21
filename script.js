function appendValue(val) {
  document.getElementById('result').value += val;
}
function clearResult() {
  document.getElementById('result').value = '';
}
function calculate() {
  try {
    let res = document.getElementById('result').value;
    document.getElementById('result').value = eval(res);
  } catch {
    document.getElementById('result').value = 'Error';
  }
}