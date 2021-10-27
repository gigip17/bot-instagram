const puppeteer = require('puppeteer');
require("dotenv").config();

const url = "https://www.instagram.com";

(async () => {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2"});
    // on accepte les cookies 
    await page.click("._1XyCr > button");
    // login
    await page.type("[name=username]", "gigip@hotmail.fr",
    {delay: 300});
    await page.type("[name=password]",  process.env.INSTA_PASS, 
    {delay:500});
    //envoyer les données  
    await page.click("button[type=submit]",
    {delay:200});
    // attendre que la page se charge
    await page.waitForSelector('.cmbtv > button',
    {delay:200}, {visible: true});
    // cliquer sur plus tard
    await page.click(".cmbtv > button",
    {delay:300},); 

    // notif
    await page.waitForSelector('.mt3GC > button',
    {delay:600}, {visible: true});
    await page.click('.mt3GC > button');
    debugger;
    await page.click("xWeGp");

    

})(); 