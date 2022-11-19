import {Tabs} from 'webextension-polyfill';
import {mockEvent, MockzillaEventOf} from 'mockzilla-webextension';

describe('Background', () => {
  let onMoved: MockzillaEventOf<typeof mockBrowser.tabs.onMoved>;

  beforeEach(() => {
    onMoved = mockEvent(mockBrowser.tabs.onMoved);
  });

  it('should duplicate moved tabs', async () => {
    const tab: Tabs.Tab = {active: false, highlighted: false, incognito: false, index: 2, pinned: false};

    mockBrowser.tabs.duplicate.expect(1, {active: false}).andResolve(tab);

    return import('./background').then(() => {
      onMoved.emit(1, {windowId: 1, fromIndex: 2, toIndex: 3});
    });
  });
});
