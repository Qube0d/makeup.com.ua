const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');
const help = require('../../helper/help.json');

exports.MainPage = class MainPage extends BasePage {

    constructor(page) {
        super();
    this.page = page;
    this.searchBtn = page.locator('//div[@class="search-button"]');
    this.searchFill = page.locator('[id="search-input"]');
    this.manCategoryBtn = page.locator('[href="/ua/categorys/20280/"]');
    this.labelCategory = page.locator('[id="popularinput-checkbox-2243-24165"]');
    this.subCategory = page.locator('[id="popularinput-checkbox-2251-26341"]');  
    this.firstProduct = page.locator('[id="option-preview-34369"]');
    this.secondProduct = page.locator('[id="option-preview-48073"]');
    this.buyBtn = page.locator('[class="button buy"]');
    this.closePopup = page.locator('//div[@class="popup__window"]//div[@class="popup-close close-icon"]');
}

async categoryAndSubcategory() {
    await this.manCategoryBtn.click();
    await this.page.waitForLoadState();
    await this.labelCategory.click();
    await this.page.waitForLoadState();
    await this.subCategory.click();
    await this.page.waitForLoadState();

}
    
async addGrocery() {
    let productAdd = [
            this.firstProduct,
            this.secondProduct
    ]
for (const product of productAdd) {
  await product.click();
  await this.page.waitForLoadState();
  await this.buyBtn.click();
  await this.page.waitForLoadState();
  await this.closePopup.click();
  await this.page.goBack();
  await this.page.waitForLoadState();
}
}
     
async searchItem() {
        await this.searchBtn.click();
        await this.page.waitForTimeout(500)
        await this.searchFill.fill(help.title.search)
        await this.page.keyboard.press('Enter')
        await this.page.waitForTimeout(5000)
}
    
async result() {
    const results = await this.page.$$('[data-default-name][class="simple-slider-list__name"]');

for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const textContent = await result.textContent();
        const containsShampoo = textContent.includes(help.title.search);
        console.log(`Результат ${i + 1}: ${containsShampoo}`);
    }
}
}