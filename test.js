import {linker} from './linker.js';

const debug = {
	url: 'https://www.pockettactics.com/genshin-impact/codes',
}

let res = await linker({url: debug.url});
console.log(res);