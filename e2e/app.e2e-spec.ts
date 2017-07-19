import { FirePage } from './app.po';

describe('fire App', () => {
  let page: FirePage;

  beforeEach(() => {
    page = new FirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
