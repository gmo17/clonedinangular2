import { MgNg2projPage } from './app.po';

describe('mg-ng2proj App', function() {
  let page: MgNg2projPage;

  beforeEach(() => {
    page = new MgNg2projPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
