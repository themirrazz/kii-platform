# Transparency > Scripts
This file lists all the scripts and their purpose.

## Polyfills
Anything under `polyfill/*` allows my website to run on older browsers.
* [es-shims/es5-shim](https://github.com/es-shims/es5-shim) (`/polyfill/es5-shim.js`)
* [themirrazz/jsofill (under development)](https://github.com/themirrazz/jsofill) (`/polyfill/jsofill.js`)
* [themirrazz/promyfill](https://github.com/themirrazz/promyfill) (`/polyfill/promyfill.js`)
* [LocalStorage implementation for IE5.5-8](/src/ls-ie.js) (`/polyfill/ls-ie.js`)
* [inexorabletash/polyfill > obsolote > storage.js](https://github.com/inexorabletash/polyfill/blob/master/obsolete/storage.js) (`/polyfill/storage.js`)
* [themirrazz/fetchfill](https://github.com/themirrazz/fetchfill) (`/polyfill/fetchfill.js`, `/polyfill/xmlfill.js`) 

## Libs
Anything under `lib/*` are global scripts that power important parts of my website.

### `/lib/migration.js`
Handles migration of users' preferences - like theme and language - from the Sapphire Update to the Kii-chan framework (which uses different localStorage keys).

### `/lib/dark.js`
Handles basic dark mode functionality, including loading user preferences and applying the theme to the document before the page loads.

### `/lib/findBaseUrl.js`
Finds the domain and protocol of the website. It can also detect if it is running from an IPv4 IP address. Used by the sentry lib.

### `/lib/sentry.js`
Privacy-preserving custom implementation for sentry/error logging.

### `/lib/languages.js`
A framework used to handle language switching and localization without having to refresh the page.

### `/lib/jsd.js`
Loads JSON-LD data onto the page dynamically. JSON-LD is provided by websites to help search engines (like Google) better understand the content on the page. JSON-LD is only loaded if the word "bot" is in your user-agent, or if you're using an automation system/webdriver.

### `/lib/theme.js`
Applies functionality to the buttons in the 'theme' menu, allowing them to properly switch between dark mode, light mode, or auto. Does not work properly in Opera 9 or the Wii Browser.

### `/lib/wboption.js`
Handles the header, which includes the buttons to open the "Explorer", and the language and theme panels.

### `/lib/explorer.js`
Handles the explorer and loads items (the explorer is the menu that displays links to other pages along with my social media accounts).

## Locales
Anything in the `locales/*` folder contains localization packs.

## Page Scripts
Anything under `jsx/*` manages page-specific content. I won't list all of them here, since most of them just properly apply localization or language packs to part of a page, or run animations. For more advanced features (eg interactive, search bars, etc), the files *will* be listed here.
