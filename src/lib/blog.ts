import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const post_dir = path.resolve(process.cwd(),'_posts')

function getPostDir() {
    return post_dir
}

function savePost(blog_text: string) {
    const matters = matter(blog_text)
    console.log(matters)
    const slug = matters.data.title.trim()
    try { 
         const file = fs.writeFileSync(`${post_dir}/${slug}.md`,blog_text,'utf-8')
    } catch(err)
    {
        console.log(`got err`)
        console.log(err)
    }

}

async function getAllPosts() {
    const post_files = fs.readdirSync(post_dir,'utf-8')
    
    const matters = post_files.map( file => {
        const slug = file.replace(/\.md$/,'')
        const matter_result = matter(fs.readFileSync(path.join(post_dir,file)))
        return {
            slug,
            title: matter_result.data.title,
            author: matter_result.data.author,
            date: matter_result.data.date
        }
    })
    return matters
}

async function getPostBySlug(slug: string) {
    const file = fs.readFileSync(path.join(post_dir,`${slug}.md`),'utf-8')
    const result = matter(file)
    return {
        content: result.content,
        author: result.data.author,
        title: result.data.title,
        date: result.data.date
    }
}

export { 
    getPostDir,
    getAllPosts,
    getPostBySlug,
    savePost
}