/**
 * Created by yusaira-khan on 12/08/15.
 */
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id,
    {"message": "muh_selection"}, function (resp) {
      console.log(resp);
      document.getElementById('text').innerHTML = resp.data;
//TODO: send post requests to local host
    });
});
