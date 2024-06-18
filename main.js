import { crawlPage } from "./crawl.js";

function main() {
	var args = process.argv.slice(2);
	const baseURL = args[0]
    	if (args.length < 1) {
        	console.log('Error: Base URL needed');
        	process.exit(1);  // Exit with a non-zero code to indicate an error
    	} else if (args.length > 1) {
        	console.log('Error: Too many arguments');
        	process.exit(1);  // Exit with a non-zero code to indicate an error
    	} else {
        	console.log(`Starting crawl from ${baseURL}`);  // Fixed the closing backtick
    	}
	crawlPage(baseURL)
}

main();
