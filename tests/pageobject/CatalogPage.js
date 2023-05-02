const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const help = require('../../helper/help.json');


exports.CatalogPage = class CatalogPage extends BasePage {

    constructor(page) {
        super();
        this.page = page;
        this.minPrice = page.locator('[id="price-from"]');
        this.maxPrice = page.locator('[id="price-to"]');
        this.filterBar = page.locator('//div[@class="catalog-sort-wrapper"]');
        this.sortPriseAZ = page.locator('[for="input-sort-1"]');

    }

    async priceFill() {
        await this.minPrice.fill(help.title.minPrice);
        await this.maxPrice.fill(help.title.maxPrice);
        await this.filterBar.click();
        await this.page.waitForLoadState();
        await this.sortPriseAZ.click();
        await this.page.waitForLoadState();
        
    }
}