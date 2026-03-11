import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		ideas: collection({
			label: 'Ideas & Essays',
			slugField: 'title',
			path: 'src/content/ideas/*',
			format: { contentField: 'content' },
			entryLayout: 'content',
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				description: fields.text({ label: 'Description', multiline: true }),
				pubDate: fields.date({ label: 'Publish Date' }),
				updatedDate: fields.date({ label: 'Updated Date' }),
				topic: fields.select({
					label: 'Topic',
					options: [
						{ label: 'Freedom Investing', value: 'freedom-investing' },
						{ label: 'Democracy', value: 'democracy' },
						{ label: 'Philanthropy', value: 'philanthropy' },
						{ label: 'Institutional Reform', value: 'institutional-reform' },
						{ label: 'Latin America', value: 'latin-america' },
						{ label: 'Bitcoin & Technology', value: 'bitcoin-technology' },
					],
					defaultValue: 'freedom-investing',
				}),
				featured: fields.checkbox({ label: 'Featured on homepage', defaultValue: false }),
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'src/assets/ideas',
					publicPath: '/src/assets/ideas/',
				}),
				content: fields.mdx({ label: 'Content' }),
			},
		}),
		projects: collection({
			label: 'Projects',
			slugField: 'name',
			path: 'src/content/projects/*',
			format: { contentField: 'content' },
			entryLayout: 'content',
			schema: {
				name: fields.slug({ name: { label: 'Project Name' } }),
				description: fields.text({ label: 'Short Description', multiline: true }),
				url: fields.url({ label: 'Project URL' }),
				status: fields.select({
					label: 'Status',
					options: [
						{ label: 'Active', value: 'active' },
						{ label: 'Completed', value: 'completed' },
						{ label: 'Upcoming', value: 'upcoming' },
					],
					defaultValue: 'active',
				}),
				order: fields.integer({ label: 'Display Order', defaultValue: 0 }),
				logo: fields.image({
					label: 'Logo',
					directory: 'src/assets/projects',
					publicPath: '/src/assets/projects/',
				}),
				content: fields.mdx({ label: 'Content' }),
			},
		}),
		talks: collection({
			label: 'Talks',
			slugField: 'title',
			path: 'src/content/talks/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				event: fields.text({ label: 'Event Name' }),
				date: fields.date({ label: 'Date' }),
				videoUrl: fields.url({ label: 'Video URL' }),
				slidesUrl: fields.url({ label: 'Slides URL' }),
				description: fields.text({ label: 'Description', multiline: true }),
				featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
				content: fields.mdx({ label: 'Notes' }),
			},
		}),
		podcasts: collection({
			label: 'Podcasts',
			slugField: 'title',
			path: 'src/content/podcasts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				show: fields.text({ label: 'Podcast Show Name' }),
				date: fields.date({ label: 'Date' }),
				audioUrl: fields.url({ label: 'Audio URL' }),
				episodeUrl: fields.url({ label: 'Episode URL' }),
				duration: fields.text({ label: 'Duration' }),
				description: fields.text({ label: 'Description', multiline: true }),
				content: fields.mdx({ label: 'Show Notes' }),
			},
		}),
	},
});
