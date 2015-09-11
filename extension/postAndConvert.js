var url = "https://banglify.herokuapp.com/api/";

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
    el.dataset.index = i;
    el.className = 'word_' + i;
    el.addEventListener("mouseover", toggleHighlightOnHover);
    el.addEventListener("mouseout", toggleHighlightOnHover);
    target.appendChild(el);

  }
}

function toggleHighlightOnHover() {
  var el = document.getElementsByClassName('word_'+this.dataset.index);
  for (var i = 0; i < el.length; i++) {
    var node=el[i];
    node.classList.toggle('hover');
  }
}

function getSelectedText(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "selected_text"}, function (selectedText) {
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
//TODO: add selectable pronunciation in chrome extension options
