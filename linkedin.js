const puppeteer = require('puppeteer');
require("dotenv").config();

const url = "https://fr.linkedin.com/";

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2"});
    await page.setViewport({ width: 1920, height: 937 })

    await page.type('[name="session_key"]', "********************", {
        delay:100
    });
    await page.type('[name="session_password"]', "*************", {
        delay:100
    });
    await page.click('button[type=submit');
    await page.click('.ember21',{delay:300});

})(); 
