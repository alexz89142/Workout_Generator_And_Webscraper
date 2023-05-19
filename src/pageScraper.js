const scraperObject = {
	url: 'https://musclewiki.com/directory',
	async scraper(browser){
		let page=await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		//Navigate to the page
		await page.goto(this.url);
		
		/*
		await page.$$("table") will return every table on the site
		
		All that needs to be done is loop through the tables and grab the info from the child list elements,
		write it to a JSON file, and pass that to the front-end on request
		*/
	}
}

module.exports = scraperObject;