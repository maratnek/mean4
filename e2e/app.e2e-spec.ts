import { Mean4Page } from './app.po';

describe('mean4 App', () => {
  let page: Mean4Page;

  beforeEach(() => {
    page = new Mean4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
