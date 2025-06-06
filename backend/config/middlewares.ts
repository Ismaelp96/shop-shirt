export default [
	'strapi::errors',
	{
		name: 'strapi::cors',
		config: {
			origin: ['http://localhost:3000'],
			credentials: true,
		},
	},
	'strapi::security',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
