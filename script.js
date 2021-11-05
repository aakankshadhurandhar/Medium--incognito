function medium() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      chrome.windows.create({ url: tabs[0].url, incognito: true });
    });
  }
  
  chrome.browserAction.onClicked.addListener(function () {
    medium();
  });
  
  chrome.contextMenus.create(
    {
      title: "Go Medium Incognito",
      onclick: function (e) {
        medium();
      },
    },
    function () {}
  );
  
  chrome.commands.onCommand.addListener(function (command) {
    if (command == "medium") {
      medium();
    }
  });
  