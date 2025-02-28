/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
      extend: {
          colors: {
              base: {
                  100: '#FFFFFF',
                  200: '#EDEEF0',
                  300: '#9098A0',
                  400: '#555E67',
                  500: '#31373D',
                  600: '#1D1E20'
              },
              dark: {
                  100: '#F4F5F6',
                  200: '#D3D5D9',
                  300: '#B2B6BD',
                  400: '#9CA1AA',
                  500: '#4B4F58',
                  600: '#232529'
              },
              blue: {
                  100: '#F5F8FE',
                  200: '#D9E5FC',
                  300: '#B3CCFA',
                  400: '#79A5F6',
                  500: '#538BF3',
                  600: '#266DF0'
              }
          },
        fontFamily: {
            heading: ['Gilroy Bold', 'sans-serif']
        },
        fontSize: {
            'h1-desktop': ['92px', { lineHeight: '96px', letterSpacing: '-3.6px' }],
            'h2-desktop': ['52px', { lineHeight: '58px', letterSpacing: '-1.2px' }],
            'h3-desktop': ['40px', { lineHeight: '44px', letterSpacing: '-0.8px' }],

            'h1-mobile': ['32px', { lineHeight: '56px', letterSpacing: '-1.5px' }],
            'h2-mobile': ['32px', { lineHeight: '38px', letterSpacing: '-0.5px' }],
            'h3-mobile': ['24px', { lineHeight: '26px', letterSpacing: '-0.8px' }],

            'body-xl': ['22px', { lineHeight: '32px', letterSpacing: '-0.3px' }],
            'body-lg': ['20px', { lineHeight: '28px', letterSpacing: '-0.2px' }],
            'body-md': ['18px', { lineHeight: '26px', letterSpacing: '-0.2px' }],
            'body-sm': ['16px', { lineHeight: '24px', letterSpacing: '-0.2px' }],
            'body-xs': ['14px', { lineHeight: '20px', letterSpacing: '-0.1px' }],
            'body-xxs': ['12px', { lineHeight: '18px', letterSpacing: '0px' }],
            'body-xxxs': ['10px', { lineHeight: '14px', letterSpacing: '0.6px' }]
        },
        fontWeight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700'
        },
        screens: {
            'custom': '885px',
            'custom-images':'1114px'
        }
      }
  },
  plugins: []
}