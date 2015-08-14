/**
 * Created by yusaira-khan on 13/08/15.
 */
var url="http://localhost:8080/";
var x = new XMLHttpRequest();
  x.open('GET', url);
//x.responseType = 'html';
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    if (!response ){
     console.error('error');
      return;
    }
    console.log(response);
    document.getElementById('text').innerHTML = response;
  };
  x.onerror = function() {
    console.error('Network error.');
  };
  x.send();