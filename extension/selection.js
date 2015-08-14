/**
 * Created by yusaira-khan on 12/08/15.
 */
countt = 0;
chrome.extension.onMessage.addListener(function (message, sender, sendOut) {

  if (message.message == 'selected_text') {
    //getting selected text in active tab
    text = window.getSelection().toString();

    //Not sending a response if no text is selected (neeed this incase current tab has multiple frames
    if (text.length > 0) {
      sendOut(text);
      console.log(text.length);
    }
  }

});