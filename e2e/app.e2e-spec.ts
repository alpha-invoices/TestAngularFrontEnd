import { InvoicesAppPage } from './app.po';

describe('invoices-app App', function() {
  let page: InvoicesAppPage;

  beforeEach(() => {
    page = new InvoicesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
