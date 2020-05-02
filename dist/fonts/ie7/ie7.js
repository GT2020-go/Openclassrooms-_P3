/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Project2\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-menu3left': '&#x27f5;',
		'icon-menu3right': '&#x27f6;',
		'icon-menu4left': '&#x2906;',
		'icon-menu4right': '&#x2907;',
		'icon-menu2right': '&#x25e5;',
		'icon-menu2left': '&#x25e4;',
		'icon-menu1left': '&#x25c4;',
		'icon-menu1right': '&#x25ba;',
		'icon-noteblk': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
