/**
 * Created by yusaira-khan on 13/08/15.
 */
var url = "http://localhost:8080/api/";
function handleError() {
  console.error('An error occured');
  spinner.stop();
  target.style.display='none';
  document.getElementById('error').style.display = 'block';
  document.getElementById('original-text-button').style.display='none';
}

var x = new XMLHttpRequest();
x.open('POST', url);
x.onload = function () {
  var response = x.response;
  if (!response) {
    handleError();
    return;
  }
  target.style.display='none';
  spinner.stop();
  console.log(response);
  document.getElementById('result').innerHTML += "<br/><div style='color:red;'>" + response + '<div>';

};
x.onerror = handleError;
//TODO:fix css
//TODO:get an icon with bangla
//TODO:organise the extension better
//TODO: standalone chrome app without server with selectable pronunciation?

function getSelectedText(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "selected_text"}, function (selectedText) {
        console.log(selectedText);
        callback(selectedText);
      });
  });
}

function displayOriginalText() {
  getSelectedText(function(selectedText){
    document.getElementById('original').innerHTML = "Converted:<br/> &quot;" + selectedText + "&quot;";
  });
}

getSelectedText(function(selectedText){
      x.send(selectedText);
});

window.onload=function() {
  var original = document.getElementById('original-text-button');
  original.addEventListener("click", displayOriginalText);
};