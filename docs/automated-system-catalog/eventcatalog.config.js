const path = require('path');

module.exports = {
  title: 'MyOrganization Event Catalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'MyOrganization',
  projectName: 'Event System Catalog',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://www.eventcatalog.dev/"
  },
  logo: {
    alt: 'MyOrganization Logo',
    // found in the public dir
    src: '1.jpg',
  },
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/boyney123/eventcatalog-demo/edit/master' }
  ],
  users: [
    {
      id: 'memeberone',
      name: 'Memeber One',
      avatarUrl: 'https://randomuser.me/api/portraits/lego/2.jpg',
      role: 'Developer',
    },
    {
      id: 'memeertwo',
      name: 'Member Two',
      avatarUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
      role: 'Developer',
    },
  ],
  generators: [
    [
      '@eventcatalog/plugin-doc-generator-asyncapi',
      {
        pathToSpec: [
          path.join(__dirname, '../streams/CAPABILITY/1.0.0', 'asyncapi.yaml')
        ],
        versionEvents: false,
        renderNodeGraph: true,
        renderMermaidDiagram: true,
        domainName: 'Order Management'
      },
    ],
  ]
}
