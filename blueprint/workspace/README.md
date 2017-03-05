# Project Title

Chrome extension that **tracks browsing activity**, matches with Pomodoro cycles, and visualizes insights from data.

While developing: to test the extension, download everything by clicking File > Download Project in c9. In Chrome, go to chrome://extensions, turn on developer mode, and Load unpacked extension.

## Links

- Google Doc w/ notes: https://docs.google.com/document/d/1l2ltu0sVT0uiUH1cFfTnxYfQDWTz6WDLkQDVg4wabf8/edit?usp=sharing
- Tutorial on building Chrome extensions: https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/
- Another Chrome extension tutorial: https://robots.thoughtbot.com/how-to-make-a-chrome-extension
- Chrome extension documentation: https://developer.chrome.com/extensions/overview
- Minimalistic browsing activity tracker: https://github.com/Thibauth/browsing-activity-tracker
- Another time tracking extension (currently using as main reference): https://github.com/navjagpal/browser-timetracker

## Explaining the code/file structure

```
blueprint/
--manifest.json
--popup.html
--popup.js
--options.html
--options.js
--tracker.js
--sites.js
--config.js
```

- manifest.json is the basic file telling Chrome info about the extension
- popup.html is small page that appears when user clicks on toolbar icon
- popup.js is Javascript that runs on popup.html page
- options.html is the page that appears when user right-clicks toolbar icon and clicks "Options"
- options.js is Javascript that runs on options.html page