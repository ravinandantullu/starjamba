import { StarjambaPage } from './app.po';

describe('starjamba App', function() {
  let page: StarjambaPage;

  beforeEach(() => {
    page = new StarjambaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
