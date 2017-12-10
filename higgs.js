// Higgs.js micro selector library
// Copyright Felis Phasma 2014-2017 v3.1
window._ = (query, context, pad) => {
	pad = ".#".indexOf(query[0]);
	return (context || document)["getElement" + [
		"sByTagName",
		"sByClassName",
		"ById"
	][pad + 1]](pad < 0 ? query : query.slice(1))
}
