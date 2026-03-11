import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: { site: string }) {
	const ideas = await getCollection('ideas');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: ideas
			.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf())
			.map((idea) => ({
				title: idea.data.title,
				pubDate: new Date(idea.data.pubDate),
				description: idea.data.description,
				link: `/ideas/${idea.id}/`,
			})),
	});
}
