import { UdemyProjPage } from './app.po';

describe('udemy-proj App', () => {
  let page: UdemyProjPage;

  beforeEach(() => {
    page = new UdemyProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
