import React, { useEffect, useState } from "react";

const apiUrl = "https://api.nytimes.com/svc/topstories/v2";
const apiKey = "0O0AAmGz5sIJyqxbUBcYGUdVW7t7iiPB";
const type = "world.json"

function News() {
	const [news, setNews] = useState(null);
	useEffect(() => {
		let api = `${apiUrl}/${type}?api-key=${apiKey}`;
		fetch(api).then(response => response.json()).then(data => {
			setNews(data);
		})
	}, []);

	return (
		news && news.results.splice(0, 5).map((article, index) => {
			return (
				<article key={article.url}>
					<img alt={index} height="100px" src={article.multimedia[0].url}/>
					<a href={article.url}>{article.title}</a>
				</article>
			)
		})
	);
}

export default News;