module.exports = {
    trailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/other': { page: '/other' }

        };
    }
};