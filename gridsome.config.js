// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'cuticuti.club',
  siteDescription: 'A journey of Januar Fonti',
  siteUrl: 'https://cuticuti.club',
  port: 6789,

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube'],
            ['gridsome-plugin-remark-prismjs-all', {
              showLineNumbers: true //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            }],
            ['gridsome-plugin-remark-twitter', {
              debug: true
            }]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-55200754-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/404'],
        config: {
          '/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/what-is-this': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://cuticuti.club',
        sitemap: 'https://cuticuti.club/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // '@gridsome/remark-prismjs'
      ]
    }
  }
}
