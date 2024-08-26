/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
      './node_modules/flowbite/**/*.js'
   ],
   theme: {
      extend: {
         colors: {
            MyGray: 'rgba(0,0,0,0.5)',
            cy1: 'rgba(253,206,16,1)',
            cy2: 'rgba(238,131,40,1)',
            cy3: 'rgba(238,221,122,1)',
            cr1: 'rgba(225,67,24,1)',
            cb1: 'rgba(32,115,148,1)'
         }
      },
      container: {
         padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem'
         }
      }
   },
   plugins: [require('daisyui'), require('flowbite/plugin')],
   daisyui: {
      themes: [
         {
            charmander: {
               primary: '#e53800',
               'primary-focus': '#de5138',
               'primary-content': '#ffffff',
               secondary: '#ff00db',
               'secondary-focus': '#30295e',
               'secondary-content': '#ffffff',
               accent: '#dbc06b',
               'accent-focus': '#fed276',
               'accent-content': '#2a2e37',
               'accent-hover': '#fbfa08',
               neutral: '#dbc06b',
               'neutral-focus': '#9c6228',
               'neutral-content': '#2a2e37',
               'base-100': '#2a2e37',
               //"base-200": "#2a2e37",//butons
               //"base-300": "#16181d",
               'base-content': '#ffffff',
               info: '#66c6ff',
               success: '#87d039',
               warning: '#e2d562',
               error: '#ff6f6f',
               'background-color': '#87d039' /* 
				"accent-focus": "#de5138",
				"accent-content": "#ffffff",
				"neutral-content": "#ffffff",
				"base-100-content": "#ffffff",
				"primary-content": "#ffffff",
				"secondary-content": "#ffffff",
				"border-content": "#000000",
				"input": "#f4f4f4",
				"input-content": "#000000",*/,
               body: '#ffffff',
               'body-content': '#000000',
               border: '#e4e4e4',
               card: '#9c6228',
               'card-content': '#dbc06b',
               'card-border': '#cb5205',
               dialog: '#ffffff',
               'dialog-content': '#000000',
               dropdown: '#ffffff',
               'dropdown-content': '#000000',
               header: '#ffffff',
               '--rounded-box': '0.5rem',
               '--rounded-btn': '0.5rem',
               '--rounded-badge': '2.25rem',
               '--rounded-lg': '0.75rem',
               '--rounded-xl': '1rem',
               '--rounded-full': '9999px',
               '--rounded-none': '0px',
               '--rounded-sm': '0.375rem',
               '--rounded-md': '0.5rem',
               '--rounded-3xl': '1.5rem',
               '--rounded-2xl': '1rem',
               '--rounded-4xl': '2rem',
               '--rounded-t-lg': '0.75rem',
               '--rounded-r-lg': '0.75rem',
               '--rounded-b-lg': '0.75rem'
            }
         },
         'coffee'
         /* 'light',
         'dark',
         'cupcake',
         'bumblebee',
         'emerald',
         'corporate',
         'synthwave',
         'retro',
         'cyberpunk',
         'valentine',
         'halloween',
         'garden',
         'forest',
         'aqua',
         'lofi',
         'pastel',
         'fantasy',
         'wireframe',
         'black',
         'luxury',
         'dracula',
         'cmyk',
         'autumn',
         'business',
         'acid',
         'lemonade',
         'night',
         'winter',
         'dim',
         'nord',
         'sunset' */
      ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: 'coffee', // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ':root' // The element that receives theme color CSS variables
   }
}
