export default defineEventHandler((event) => {
  return {
    status: 200,
    data: [
      {
        title: 'Energie dashboard',
        description:
          'Een dashboard gebouwd om data vanuit de Toon API en AP Systems te combineren. AP Systems had geen publieke API, hiervoor heb ik een scraper gebouwd in puppeteer om toch de benodige data te weer te geven.',
        image: '/projects/dashboard.png',
        url: 'https://power.andywillekens.nl/',
        repository: 'https://github.com/andywillekens/solar-dashboard'
      },
      {
        title: 'PopsUp Applicatie',
        description:
          'PopsUp is een Software as a service en geeft gebruikers de mogelijkheid om professionele pop-up formulieren te bouwen en te integreren in hun website, webshop of webapplicatie.',
        image: '/projects/popsup-app.png',
        url: 'https://app.popsup.andywillekens.nl/'
      },
      {
        title: 'PopsUp website',
        description:
          'Om PopsUp op de markt te brengen heb ik een website gebouwd om het product te verkopen.',
        image: '/projects/popsup-website.png',
        url: 'https://popsup.andywillekens.nl/',
        repository: 'https://github.com/andywillekens/popsup-website'
      },
      {
        title: 'Photobooth App',
        description: "Een test om native MediaDevices web API's uit te proberen binnen Nuxt.",
        image: '/projects/smile.png',
        url: 'https://smile.andywillekens.nl/',
        repository: 'https://github.com/andywillekens/nuxt-photo-booth'
      }
    ]
  }
})
