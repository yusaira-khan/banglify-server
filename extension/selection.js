/**
 * Created by yusaira-khan on 12/08/15.
 */
countt = 0;
chrome.extension.onMessage.addListener(function (inRequest, sender, sendOut) {

  if (inRequest.message == 'muh_selection') {
    text = window.getSelection().toString();
    console.log(++countt, text);
    if (text.length > 0) {
      sendOut({data: text});
      console.log(text.length);
    }
  }

});