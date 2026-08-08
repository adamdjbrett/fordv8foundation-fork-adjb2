import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });
	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});


	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "news", "events", "educations" , "tours","donations" , "motors","fordthree","fordfour","fordfive","fordv", "galleries" , "eventgalleries"].indexOf(tag) === -1);
	});

	// Adopt-A-Ford pills.
	// Decade comes from `model_year` and availability from `status` — never from
	// `tags` — so a vehicle can't land in a decade that disagrees with its year.
	const adoptDecade = post => {
		const year = Number(post && post.data && post.data.model_year);
		return Number.isFinite(year) ? `${Math.floor(year / 10) * 10}s` : null;
	};

	// Anything that isn't explicitly "adopted" counts as available, so a typo in
	// the status field shows the vehicle rather than hiding it from every pill.
	const adoptIsAdopted = post => String(post && post.data && post.data.status || "").trim().toLowerCase() === "adopted";

	eleventyConfig.addFilter("adoptIsAdopted", adoptIsAdopted);

	// `pane` is "all", "adopted", or a decade such as "1930s".
	// Available vehicles sort ahead of adopted ones, then by model year, then title.
	eleventyConfig.addFilter("adoptPane", function adoptPane(posts, pane) {
		return (posts || [])
			.filter(post => {
				if (pane === "all") return true;
				if (pane === "adopted") return adoptIsAdopted(post);
				return adoptDecade(post) === pane;
			})
			.sort((a, b) =>
				(adoptIsAdopted(a) - adoptIsAdopted(b))
				|| ((Number(a.data.model_year) || 0) - (Number(b.data.model_year) || 0))
				|| String(a.data.title || "").localeCompare(String(b.data.title || ""))
			);
	});

};
