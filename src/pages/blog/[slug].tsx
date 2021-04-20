import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";
interface BlogPostProps {
    content: string
    frontMatter: {
        title: string,
        author: string,
        date: string
    }
}

const BlogPost: NextPage<BlogPostProps> = ({frontMatter, content}) => {
    return (<Layout pageTitle={frontMatter.title}>
        <div>
            <h3>By {frontMatter.author} - {frontMatter.date}</h3>
            <h1>{frontMatter.title}</h1>
            <ReactMarkdown children={content} />
        </div>
    </Layout>)
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync('src/_posts')
    const paths = files.map((fName) => ({
        params: {
            slug: fName.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({params}) => {
    const slug = params?.slug
    const md = fs.readFileSync(path.join('src/_posts', `${slug}.md`)).toString()
    const { data, content } = matter(md)
    const date = data.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return {
        props: {
            frontMatter: {
                title: data.title,
                author: data.author,
                date
            },
            content,
        }
    }
}

export default BlogPost