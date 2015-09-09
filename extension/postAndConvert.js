var url = "http://localhost:8080/api/";

var x = new XMLHttpRequest();
x.open('POST', url);
x.onload = function displayConvertedText() {
  console.log('converting');
  var response = x.response;
  if (!response) {
    console.log('response error', response, typeof  response);
    handleError();
    return;
  }

  addHighlighttableText(response, 'result');
  target.style.display = 'none';
  spinner.stop();
};
console.log('hello1');
function handleError() {
  console.error('An error occured');
  spinner.stop();
  target.style.display = 'none';
  document.getElementById('error').style.display = 'block';
  document.getElementById('original-text-button').style.display = 'none';
}

x.onerror = handleError;

function addHighlighttableText(text, targetElementName) {
  var target = document.getElementById(targetElementName);
  var words = text.split(' ');

  for (var i = 0; i < words.length; i++) {
    var el = document.createElement('span');
    el.appendChild(document.createTextNode(words[i] + ' '));
    el.className = 'word_' + i;
    el.addEventListener("mouseover", highlightOnHover, el.className);
    el.addEventListener("mouseout", removeHighlight);
    target.appendChild(el);

  }
}

function highlightOnHover() {
  var el = document.getElementsByClassName(this.className);
  for (var i = 0; i < el.length; i++) {
    var currentClass = el[i].className;
    if (currentClass.indexOf("hover") > -1){

    }else{
      el[i].className =  currentClass+ ' hover';
    }
  }
}

function removeHighlight() {
  var el = document.getElementsByClassName('hover');
  for (var i = 0; i < el.length; i++) {
    el[i].className = el[i].className.replace(' hover', '');
  }
}

function getSelectedText(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "selected_text"}, function (selectedText) {
      console.log(selectedText);
      callback(selectedText);
    });
  });
}

window.onload = function start() {
  console.log('loaded');
  var original = document.getElementById('original-text-button');
  original.addEventListener("click", displayOriginalText);

  getSelectedText(function (selectedText) {
    console.log('sending');
    x.send(selectedText);
  });

};

function displayOriginalText() {
  getSelectedText(function (selectedText) {
    //document.getElementById('original').innerHTML = "Converted:<br/> &quot;" + selectedText + "&quot;";

    addHighlighttableText(selectedText, 'original');
    document.getElementById('original-text-button').style.display = 'none';
  });
}

//TODO:get an icon with bangla
//TODO:organise the extension better
//  //TODO: add selectable pronunciation in chrome extension options
//TODO: highlighting word hovered over in both original and span text
