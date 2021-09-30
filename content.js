const fileNames = [
  'karsten-winegeart-Qb7D1xw28Co-unsplash.jpg',
  'oscar-sutton-yihlaRCCvd4-unsplash.jpg',
  'richard-brutyo-Sg3XwuEpybU-unsplash.jpg',
  'taylor-kopel-WX4i1Jq_o0Y-unsplash.jpg',
  'victor-grabarczyk-N04FIfHhv_k-unsplash.jpg',
];
const imags = document.getElementsByTagName('img');
const swapingOrder = 'swap images with dogyes';

const imagSwaper = () => {
  console.log('imagSwaper running');
  for (imag of imags) {
    const fileNum = Math.floor(Math.random() * fileNames.length);
    const file = 'dogs/' + fileNames[fileNum];
    const url = chrome.extension.getURL(file);
    imag.src = url;
  }
};

const proccesMessagHandler = (messag, sender, sendResponse) => {
  console.log('proccesMessagHandler running');
  if (messag.txt === swapingOrder) imagSwaper();
};

chrome.runtime.onMessage.addListener(proccesMessagHandler);
