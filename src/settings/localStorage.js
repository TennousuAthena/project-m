import { useLocalStorage } from '@uidotdev/usehooks';

let defaultSettings = {
  reportDebug: true,
};

function init() {
  if (!window.localStorage.getItem('settings')) {
    window.localStorage.setItem('settings', JSON.stringify(defaultSettings));
  }
}

export default { defaultSettings, init };
