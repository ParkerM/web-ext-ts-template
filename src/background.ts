import browser, {Tabs} from 'webextension-polyfill';

function duplicateCreatedTab(tabId: number, moveInfo: Tabs.OnMovedMoveInfoType): Promise<Tabs.Tab> {
  return browser.tabs.duplicate(tabId, {active: false});
}

browser.tabs.onMoved.addListener(duplicateCreatedTab);
