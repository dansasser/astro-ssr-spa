document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.icon').forEach((icon) => {
      icon.addEventListener('click', (event) => {
         console.log(`Clicked ${event.target.alt} icon`)
      })
   })
   // inside of main content
   document
      .getElementById('mainContainer')
      .addEventListener('click', function (event) {
         if (event.target.classList.contains('clickMeTwice')) {
            // Handle the click event for the dynamically created element
            clicker()
            console.log('Clicked on a dynamic element:', event.target.id)
         }
      })
   // Outside of main content
   document.querySelectorAll('.btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
         console.log(`Clicked ${event.target.alt} button`)
      })
   })
   // do something after htmx event fires
   document.body.addEventListener('htmx:configRequest', (event) => {
      event.detail.path = `${event.detail.path}`
      console.log('configRequest event received', event.detail.path)
   })
   function clicker() {
      console.log('Button clicked')
      const randomTheme = getRandomTheme()
      changeTheme(randomTheme)
      document.querySelector('.themeName').textContent = randomTheme
   }

   // Function to change theme
   function changeTheme(newTheme) {
      document.documentElement.dataset.theme = newTheme
   }

   // Function to get a random theme
   function getRandomTheme() {
      const randomIndex = Math.floor(Math.random() * daisyUISelectors.length)
      return daisyUISelectors[randomIndex]
   }

   const daisyUISelectors = []
   const themePattern = /\[data-theme="(.+?)"\]/

   // Function to get all CSS rules from a stylesheet
   function getCSSRulesFromStylesheet(stylesheet) {
      try {
         return Array.from(stylesheet.cssRules || stylesheet.rules)
      } catch (e) {
         return []
      }
   }

   // Function to extract theme name from selector
   function extractThemeName(selector) {
      const match = selector.match(themePattern)
      return match ? match[1] : null
   }

   // Iterate over all stylesheets
   for (let stylesheet of document.styleSheets) {
      const rules = getCSSRulesFromStylesheet(stylesheet)
      for (let rule of rules) {
         if (rule.selectorText) {
            const themeName = extractThemeName(rule.selectorText)
            if (themeName && !daisyUISelectors.includes(themeName)) {
               daisyUISelectors.push(themeName)
            }
         }
      }
   }
   daisyUISelectors.sort()
   console.log(daisyUISelectors)
})
