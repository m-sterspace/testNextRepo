const data = require('./utils/projectsData');

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const { projects } = data;
    const paths = {
      '/': { page: '/' },
      '/other': { page: '/other' }
    };

    projects.forEach((project) => {
      paths[`/project/${project.slug}`] = {
        page: '/project/[path]',
        query: { path: project.slug },
      };
    });

    return paths;
  },
};