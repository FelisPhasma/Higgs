// Higgs.js micro selector library
// Copyright Felis Phasma 2014-2017 v3.0
window._ = (query, context) => {
	let pad = [".", "#"].indexOf(query[0]);
	return (context || document)[[
		"getElementsByTagName",
		"getElementsByClassName",
		"getElementById"
	][pad + 1]](pad < 0 ? query : query.slice(1))
}
