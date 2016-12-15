import { JeopardePage } from './app.po';

describe('jeoparde App', function() {
  let page: JeopardePage;

  beforeEach(() => {
    page = new JeopardePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
