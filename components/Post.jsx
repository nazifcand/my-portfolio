import classNames from 'classnames'
import { DateTime } from 'luxon'
import Link from 'next/link'

const Post = ({ post }) => {

  const date = new DateTime(post.updatedAt)

  const CategoryItem = ({ category }) => {
    return <div className='category' style={{ backgroundColor: category.color }}> {category.title}</div >
  }

  return <div className={classNames({ 'post': true, [`post--${post.type}`]: true })} >

    <div className="post-image">
      <img src={post.thumbnail} alt={post.title} />
    </div>

    <div className="post-detail">
      <time className="post-time">{date.toFormat('DDDD')}</time>
      <Link className="post-title" href={`/posts/${post.slug}`}><h2>{post.title}</h2></Link>
      <div className="post-summary">{post.summary}</div>
      <div className="post-categories">
        {post.categories.map(category => <CategoryItem key={category.id} category={category} />)}
      </div>
    </div>

  </div>
}

export default Post;