import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	...defaultTheme,
	safelist: ['bg-primary', 'bg-success', 'bg-error', 'bg-dark'],
	theme: {
		extend: {
			colors: {
				primary: '#4F46E5',
				success: '#36C76D',
				error: '#EF4444',
				dark: '#27272A',
				darker: '#1F1F22',
			},
			fontFamily: {
				sans: ['Sono Variable'],
			},
		},
	},
}
