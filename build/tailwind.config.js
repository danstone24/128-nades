const mapKeys = require('lodash/mapKeys');
const mapValues = require('lodash/mapValues');
const range = require('lodash/range');
const variables = require('../resources/assets/variables.json');

// converters and calculators
const relative = (px, unit = 'rem', base = variables['browser-default-font-size']) => `${px / base}${unit}`;
const letterSpacing = value => `${value / 1000}em`;
const ratio = (x, y) => `${y / x * 100}%`;

// values
const colors = variables['colors'];

const easing = mapValues(variables.easing, val => `cubic-bezier(${val[0]}, ${val[1]}, ${val[2]}, ${val[3]})`);

const screens = mapValues(variables.breakpoints, px => relative(px, 'em'));

const c = variables.columns;
const widths = mapKeys(mapValues(range(0, c), (v) => ratio(c, v + 1)), (v, k) => `${parseInt(k, 10) + 1}/${c}`);

const z = variables['z-indexes'];
const zIndex = z.reduce((v, name, i) => ({ ...v, [name]: z.length - i }), {});

// tailwind settings
module.exports = {
	target: 'relaxed',
	theme: {
		screens,
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			inherit: 'inherit',
			...colors,
		},
		fontFamily: {
			body: ['RobotoMono', 'Helvetica', 'sans-serif'],
			heading: ['RobotoMono', 'Georgia', 'serif'],
			system: ['system-ui', 'sans-serif'],
		},
		boxShadow: {
			none: 'none',
			focus: `0 0 5px ${colors.blue}`,
			outline: `0 0 3px ${colors.blue}, 0 0 6px ${colors.blue}, 0 0 9px ${colors.blue}`,
		},
		fontSize: {
			xs: relative(12),
			sm: relative(14),
			base: relative(16),
			lg: relative(18),
			xl: relative(20),
			'2xl': relative(24),
			'3xl': relative(30),
			'4xl': relative(36),
			'5xl': relative(48),
			'6xl': relative(64),
			full: '100%',
		},
		fontWeight: {
			light: 300,
			normal: 400,
			bold: 700,
		},
		letterSpacing: {
			normal: 0,
			wide: letterSpacing(50),
		},
		lineHeight: {
			none: 1,
			tight: 1.1,
			snug: 1.25,
			normal: 1.5,
			relaxed: 1.75,
			loose: 2,
		},
		transitionTimingFunction: easing,
		zIndex: {
			...zIndex,
			0: 0,
			'-1': -1,
		},
		extend: {
			inset: (theme, { negative }) => ({
				'1/2': '50%',
				...widths,
				...(negative(widths)),
			}),
			maxWidth: {
				container: relative(1400),
				copy: '35em',
			},
			padding: {
				full: '100%',
				'9/16': ratio(16, 9),
				'3/4': ratio(4, 3),
				'4/3': ratio(3, 4),
			},
			spacing: {
				em: '1em',
				'1/2em': '.5em',
			},
			width: {
				...widths,
			},
		},
	},
	variants: {
		extend: {
			scale: ['active', 'group-hover'],
		},
	},
	corePlugins: {
		container: false,
	},
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'resources/**/*.vue',
			'nuxt.config.js'
		],
	},
};
