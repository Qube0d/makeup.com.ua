const { MainPage } = require('../pageobject/MainPage');
const { BasketPage } = require('../pageobject/BasketPage');
const {CatalogPage} = require('../pageobject/CatalogPage');
import { test, expect } from '@playwright/test';



test("Verify if the price filter working correctly for the following marketplaces", async ({ page }) => {
    const mainPage = new MainPage(page);
    const catalogPage = new CatalogPage(page);
    await mainPage.navigate();
    await mainPage.categoryAndSubcategory();
    await catalogPage.priceFill();
    await page.waitForTimeout(1500);
});

test("Add items to the basket", async ({ page }) => {
    const mainPage = new MainPage(page);
    const basketPage = new BasketPage(page);
    await mainPage.navigate();
    await mainPage.categoryAndSubcategory();
    await mainPage.addGrocery();
    await basketPage.openBasket();
    await basketPage.basketOperations();
    await page.waitForTimeout(1500);
});

test("Search the item", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.searchItem();
    await mainPage.result();
    await page.waitForTimeout(1500);
});

test("Fail", async ({ page }) => {
    const mainPage = new MainPage(page);
    const basketPage = new BasketPage(page);
    await mainPage.navigate();
    await basketPage.openBasket();
})