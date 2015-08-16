/**
 * Created by yusaira-khan on 13/08/15.
 */

var url = "http://localhost:8080/api/";

var x = new XMLHttpRequest();
x.open('POST', url);
x.onload = function () {
  var response = x.response;
  if (!response) {
    console.error('error');
    return;
  }
  console.log(response);
  document.getElementById('spinner').style.display='none';
  document.getElementById('text').innerHTML += "<br/><div style='color:red;'>" + response + '<div>';
};
x.onerror = function () {
  console.error('Network error.');
};
//TODO:fix css
//TODO:get an icon with bangla
//TODO:organise the extension better
//TODO: standalone chrome app without server with selectable pronunciation?
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id,
    {"message": "selected_text"}, function (selectedText) {
      console.log(selectedText);
      document.getElementById('text').innerHTML = "sending \"" + selectedText + "\"\n";
      x.send(selectedText);

    });
});

