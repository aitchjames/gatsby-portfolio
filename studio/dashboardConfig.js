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
                  buildHookId: '5f5020d46d385b1bc4c3697a',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-hvmxtj6f',
                  apiId: 'c4129084-cc0b-487b-854c-6c80d66e6114'
                },
                {
                  buildHookId: '5f5020d4abaf02179a32b59b',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-5o68jspo',
                  apiId: '2b42562f-ed2f-4817-ade5-3ec11b927d62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aitchjames/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-5o68jspo.netlify.app',
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
