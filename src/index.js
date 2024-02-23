import * as main from './modules/index.js'

let path = window.location.pathname.split('/').slice(-1)[0];
const urlParams = new URLSearchParams(window.location.search);
let storage = window.localStorage;

let isAuthenticated = storage.getItem('user') ? storage.getItem('user') : false;
console.log('isAuthenticated='+isAuthenticated);
let user = storage.getItem('user') ? storage.getItem('user') : null;
console.log('user='+user);

let page = 0;
if (urlParams.has('page')) {
	let page = urlParams.get('page');
}

if (path === 'index.html') {
	console.log('index page');
	main.init(isAuthenticated, user);
}

