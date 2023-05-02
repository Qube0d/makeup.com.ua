const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

exports.BasketPage = class BasketPage extends BasePage {

    constructor(page) {
        super();
        this.page = page;
        this.openFullBasket = page.locator('[class="header-basket"]');
        this.orderPrice = page.locator('//div[@class="order-price"]//strong[contains(text(),"")]');
        this.totalPrice = page.locator('//div[@class="total"]//strong[contains(text(),"")]');
        this.basketFirstPriceAdd = page.locator('(//div[@class="product__button-increase"][normalize-space()="+"])[1]')
        this.basketSecondPriceAdd = page.locator('(//div[@class="product__button-increase"][normalize-space()="+"])[2]')
        this.basketFirstPriceDel = page.locator('(//div[@class="product__button-decrease"][normalize-space()="-"])[1]')
        this.basketRemoveItem = page.locator('(//div[@class="product__button-remove"])[2]')
    }

    async openBasket() {
        await this.openFullBasket.click();
    }

    async basketOperations() {
        await this.basketFirstPriceAdd.click();
        await this.page.waitForLoadState();
        await this.basketSecondPriceAdd.click();
        await this.page.waitForLoadState();
        await this.basketRemoveItem.click();
        await this.page.waitForLoadState();
        const orderPriceText = await this.orderPrice.innerText();
        const totalPriceText = await this.totalPrice.innerText();

if (orderPriceText === totalPriceText) {
  console.log('Order price and total price are equal');
} else {
  console.log('Order price and total price are not equal');
}
    await this.page.waitForTimeout(1500)
    }
}
