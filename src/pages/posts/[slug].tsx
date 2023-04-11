import { getAllPosts, getPostBySlug } from "@/lib/blog"

import Link from 'next/link'
import { MDXRemote } from "next-mdx-remote"
import fs from 'fs'
import path from 'path'
import { serialize } from "next-mdx-remote/serialize"

export default function Post({post,source}) {
    return (
        <div className='container'>
            <div>
                <h1>{post.title}</h1>
                <h4 className='text-end'>Create by {post.author} at { post.date} </h4>
                <MDXRemote {...source} />
            </div>

            <div>
                <Link href='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const all_posts = await getAllPosts()
    const paths = all_posts.map( post => {
        return {
            params: { slug: post.slug }
        }
    })
    console.log(paths)
    return (
        {
            paths,
            fallback: false
        }
    )
}

export async function getStaticProps({params}) {
    
    const post = await getPostBySlug(params.slug)
    console.log(post)
    const mdxSource = await serialize(post.content)
    return {
        props:{
            source: mdxSource,
            post
        }
    }
}