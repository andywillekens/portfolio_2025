export default defineEventHandler((event) => {
  return {
    status: 200,
    data: {
      frameworks: ['Vue', 'Nuxt', 'React', 'Next.js', 'Tailwind', 'Laravel', 'Express.js'],
      languages: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'PHP'],
      tools: ['Git', 'Jira', 'Github', 'Gitlab', 'Docker', 'Node', 'Puppeteer'],
      design: ['Figma', 'Adobe CC', 'Photoshop', 'Illustrator'],
      api: ['REST', 'GraphQL'],
      cms: ['Statamic', 'Backpack for Laravel'],
      deploymeny: ['Netlify', 'Vercel', 'Forge']
    }
  }
})
