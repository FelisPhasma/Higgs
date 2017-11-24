// Higgs.js micro selector library
// Copyright Felis Phasma 2014-2017 v3.0
window._ = (query, context) => {
	context = context || document;
	let pad = [".", "#"].indexOf(query[0]);
	return [
		(s) => {
			return context.getElementsByTagName(s);
		},
		(s) => {
			return context.getElementsByClassName(s);
		},
		(s) => {
			return context.getElementById(s);
		}
	][pad + 1](pad < 0 ? query : query.slice(1));
}
