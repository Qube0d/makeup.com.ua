const { expect } = require('@playwright/test');


exports.BasePage = class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("");
    const pageTitle = await this.page.title();
      if (pageTitle == 'MAKEUP - косметика і парфумерія в інтернет-магазині №1') {
        console.log('MAKEUP - косметика і парфумерія в інтернет-магазині №1');
      } else {
        console.error('Error: Incorrect page title');
      }
    await this.page.waitForTimeout(500);
  }
};