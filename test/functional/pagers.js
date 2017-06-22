describe('pagers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-pagers.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'pagers',
      });
      expect(screenshots).to.matchReference();
    });
  });
});