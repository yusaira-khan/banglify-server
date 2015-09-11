chrome.extension.onMessage.addListener(function (message, sender, sendOut) {

  if (message.message == 'selected_text') {
    //getting selected text in active tab
    text = window.getSelection().toString();

    //Not sending a response if no text is selected (neeed this incase current tab has multiple frames
    if (text.length > 0) {
      sendOut(text);
    }
  }

});