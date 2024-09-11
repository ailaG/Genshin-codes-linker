
async function linker(options) {
	if (!options['url'] && !options['text']) {
		throw('Needs "url" or "text" option');
	}

	let sourceText = '';
	if (options['url']) {
		sourceText = await fetch(options['url']).then(t=>t.text());
	}
	if (options['text']) {
		sourceText = options['text'];
	}
	const codes = codesFromText(sourceText);
	const links = linksFromCodes(codes);
	return links;
}
export { linker }

function codesFromText(sourceText) {
	const regex = /[A-Z0-9]{12}/g;
	const codes = sourceText.matchAll(regex);
	return Array.from(codes);
}

function linksFromCodes(codesArr) {
	return codesArr.map(code => `
		<a href="https://genshin.hoyoverse.com/en/gift?code=${code}">
			${code}
		</a>
	`);
}

