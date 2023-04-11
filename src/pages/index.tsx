import {
  getAllPosts,
  getPostDir
} from '@/lib/blog'

import Link from 'next/link'

export default function Home({title,all_posts}) {
  return (
   <div>
    <h1>{title}</h1>
    <div>
      <ul>
      { all_posts.length > 0 ? 
      all_posts.map(post => { 
          return (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          )
          }) : "No Posts Now"
      }
      </ul>
    </div>
  </div> 
   )
}

export async function getStaticProps() {
  const all_posts = await getAllPosts()
  console.log(all_posts)
  return {
    props: {
      title: "Blog App",
      all_posts
    }
  }
}
