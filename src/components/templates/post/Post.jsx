import React from "react"
import { Link } from "gatsby"
import ParseHTML from "../../particles/ParseHTML"
import { decodeHTML } from "../../helpers"
import { InView } from "react-intersection-observer"
import moment from "moment"

import { Article, ArticleIntro } from "./PostStyles"
import { RelatedContainer, RelatedItem } from "./RelatedStyles"

import Base from "../Base"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

const PostTemplate = ({ pageContext }) => {
	const { content, date, PostFields, title } = pageContext

	const related =
		PostFields &&
		PostFields.relatedPosts &&
		PostFields.relatedPosts.length &&
		PostFields.relatedPosts

	const postDate = new Date(date)

	return (
		<Base context={pageContext}>
			<ArticleIntro>
				<Link to="/posts">Insights</Link>
				<h1>{decodeHTML(title)}</h1>
				<h4>{moment(postDate).format("DD/MM/YYYY")} by Jack Pritchard</h4>
			</ArticleIntro>
			<Article>{ParseHTML(content)}</Article>
			{related && related.length > 0 && <Related data={related} />}
		</Base>
	)
}

function Related({ data }) {
	return (
		<RelatedContainer>
			<h2>
				Continue Reading{" "}
				<span aria-label="book pile emoji" role="img">
					📚
				</span>
			</h2>
			<div className="related__items">
				{data.map(
					item =>
						item.featuredImage && (
							<InView key={item.uri} threshold={0} triggerOnce={true}>
								{({ inView, ref }) => (
									<RelatedItem ref={ref}>
										<Link to={`/${item.uri}`}>
											<ImageLoader
												src={item.featuredImage.md}
												alt={
													item.featuredImage.altText
														? item.featuredImage.altText
														: item.title
												}
												className="related__media"
											/>
											{item.title && <h3>{decodeHTML(item.title)}</h3>}
											{item.seo.metaDesc && <p>{item.seo.metaDesc}</p>}
										</Link>
									</RelatedItem>
								)}
							</InView>
						)
				)}
			</div>
		</RelatedContainer>
	)
}

export default PostTemplate
