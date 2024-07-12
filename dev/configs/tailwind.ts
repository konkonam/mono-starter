import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    ...defaultTheme,
    theme: {
        extend: {
            colors: {
                dark: '#27272A',
                darker: 'rgba(31, 31, 34, 1)',
            },
            borderRadius: {
                primary: '3px',
            },
            fontFamily: {
                sans: ['Sono Variable'],
            },
            maxWidth: {
                form: '250px',
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        prefix: 'd-',
        themes: [
            {
                custom: {
                    primary: '#4F46E5',
                    success: '#36c76d',
                    error: '#EF4444',
                },
            },
        ],
    },
}
