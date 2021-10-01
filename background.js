const swapingOrder = "swap images with dogyes";
const msg = {
  txt: swapingOrder,
};
const defaultIconHandler = (tab) => {
//   console.log('I am runing');

  chrome.tabs.sendMessage(tab.id, msg);
};
console.log('hello');
chrome.browserAction.onClicked.addListener(defaultIconHandler);
