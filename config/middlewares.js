module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [ "'self'", "data:", "blob:", "https://v2backend-assets.s3.us-east-2.amazonaws.com/",],
          "media-src": ["'self'", "data:", "blob:", "https://v2backend-assets.s3.us-east-2.amazonaws.com/"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
