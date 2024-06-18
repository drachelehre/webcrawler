export { normalizeURL };
export { crawlPage };
import { JSDOM } from 'jsdom'

function normalizeURL(url_string) {
	const url = new URL(url_string)
	const normalized = `${url.hostname}${url.pathname}`
	return normalized.endsWith('/') ? normalized.slice(0,-1) : normalized
}

function getUrlsFromHTML(htmlBody, baseURL) {
	const baseUrl = new URL(baseURL)
	const dom = new JSDOM(htmlBody)
	const aAnchorElements = dom.window.document.querySelectorAll('a')
	// in case of multiple 'a' anchor elements
	const urls = [];
	for (let i = 0; i < aAnchorElements.length; i++) {
    		const link = aAnchorElements[i].href;
    		const fullUrl = new URL(link, baseUrl).toString();
    		urls.push(fullUrl);
	}	
	return urls;
}

async function crawlPage(currentURL) {
	const currentUrl = new URL(currentURL)
	try {
		const response = await fetch(currentUrl, {
			method: 'GET',
			mode: 'cors'
		});
		if (response.status >= 400) {
    			console.log(`Error ${response.status}: ${response.statusText}`);
			return;
		}
		if (response.headers.get('Content-Type') !== 'text/html') {
    			console.log('Error: Wrong Content Type');
    			return;
		}
		const result = await response.text()
		console.log(result)
	} catch(err) {
		console.log(err.message)
	}
}