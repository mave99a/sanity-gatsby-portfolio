export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61884554d47e3d94dffe94c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-josm3rbg',
                  apiId: 'e9704486-fc00-4217-ab46-9ea430a71ba6'
                },
                {
                  buildHookId: '618845543b832b75b8569daa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z3864k6g',
                  apiId: '297d4628-a1eb-4b71-8d88-c9dc2d3dba2d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mave99a/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z3864k6g.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
