import { BestPracticesAngularDemoPage } from './app.po';

describe('best-practices-angular-demo App', () => {
  let page: BestPracticesAngularDemoPage;

  beforeEach(() => {
    page = new BestPracticesAngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
