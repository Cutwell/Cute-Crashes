function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}

function similarity(a,b){var c=a,d=b;a.length<b.length&&(c=b,d=a);var e=c.length;return 0==e?1:(e-editDistance(c,d))/parseFloat(e)}

function editDistance(a,b){a=a.toLowerCase(),b=b.toLowerCase();for(var c=new Array,d=0;d<=a.length;d++){for(var e=d,f=0;f<=b.length;f++)if(0==d)c[f]=f;else if(f>0){var g=c[f-1];a.charAt(d-1)!=b.charAt(f-1)&&(g=Math.min(Math.min(g,e),c[f])+1),c[f-1]=e,e=g}d>0&&(c[b.length]=e)}return c[b.length]}

function getClosestMatch(a){var b=window.location.href,c=0,d="";for(pageref in a){var e=similarity(b,pageref);top_match<e&&(c=e,d=pageref)}return d}

function getClosestMatch(){var e=window.location.href;console.log(e);require("fs").readFileSync("pageref.txt");var r=text.split("\n"),t="",a=0;for(pageref in r){var i=similarity(e,pageref);i>a&&(a=i,t=pageref)}return t}
