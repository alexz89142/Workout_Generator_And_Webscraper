const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try{
        console.log("Opening the browser.....");
        browser = await puppeteer.launch({
            headless: false,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--remote-debugging-port=9222",
                "--headless",
                "--no-first-run",
                "--disable-gpu",
                "--use-fake-ui-for-media-stream",
                "--use-fake-device-for-media-stream",
                "--disable-sync"
            ],
            'ignoreHTTPSErrors':true
        });
    } catch (err){
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}

module.exports={
    startBrowser
}