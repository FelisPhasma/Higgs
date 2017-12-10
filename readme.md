# Higgs.js

The JavaScript selector engine that can fit in a tweet. 127 bytes.

Higgs.js supports the major CSS selectors.

As far as I can tell, this is the smallest selector engine in existence.

# Usage

```
// Arguments
_(<selector>, [context]);

// ID Selection
// Returns single value
let header = _("#header");
header.style.background = "#000";

// Tag name
// Returns array
let divs = _("div", header);
for(let i of divs){
	i.style.left = Math.random();
}

// Class name
// Returns array
let btns = _(".button", _("#form1"));
for(let i of btns){
	btns.onclick = () => {
		alert("Boo!");
	}
}
```

# Don't like `_`?

Me neither!

```
window.Query = _;
```

# Why not `document.querySelectorAll`?

First: Browser support.
Second: querySelectorAll is slow compared to basic selector function https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18.

As a developer, you should run simple queries through Higgs and more complicated queries through `querySelectorAll`.

# Copyright

Copyright Felis Phasma 2014-2017
