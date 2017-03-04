import { TetherNgCliPage } from './app.po';

describe('tether-ng-cli App', () => {
  let page: TetherNgCliPage;

  beforeEach(() => {
    page = new TetherNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
