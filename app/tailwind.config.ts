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
            keyframes: {
                'loader-first': {
                    '0%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(1, 1)' },
                    '50%': { transform: 'scale(1, 1.5)' },
                    '75%': { transform: 'scale(1, 1)' },
                    '100%': { transform: 'scale(1, 1)' },
                },
                'loader-second': {
                    '0%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(1, 1)' },
                    '50%': { transform: 'scale(1, 0.67)' },
                    '75%': { transform: 'scale(1, 1.5)' },
                    '100%': { transform: 'scale(1, 1)' },
                },
                'loader-last': {
                    '0%': { transform: 'scale(1, 1)' },
                    '25%': { transform: 'scale(1, 1)' },
                    '50%': { transform: 'scale(1, 0.67)' },
                    '75%': { transform: 'scale(1, 1.5)' },
                    '100%': { transform: 'scale(1, 1)' },
                },
            },
            animation: {
                'loader-first': 'loader-first 1s infinite linear',
                'loader-second': 'loader-second 1s infinite linear',
                'loader-last': 'loader-last 1s infinite linear',
            },
        },
    },
}
