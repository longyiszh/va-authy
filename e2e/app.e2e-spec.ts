import { VaAuthyPage } from './app.po';

describe('va-authy App', () => {
  let page: VaAuthyPage;

  beforeEach(() => {
    page = new VaAuthyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
