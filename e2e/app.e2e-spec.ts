import { NewProjetoPage } from './app.po';

describe('new-projeto App', () => {
  let page: NewProjetoPage;

  beforeEach(() => {
    page = new NewProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
