import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

type Post = {
  title: string
  slug: string
  description: string
  date: string
  category?: string
  canonicalUrl?: string
}

async function getPosts(): Promise<Post[]> {
  const dir = join(process.cwd(), 'app/blog/posts')
  try {
    const files = await readdir(dir)
    const posts: Post[] = []
    for (const file of files) {
      if (!file.endsWith('.ts')) continue
      const slug = file.replace('.ts', '')
      try {
        const mod = await import(`../blog/posts/${slug}`)
        if (mod?.post) {
          posts.push({
            title: mod.post.title,
            slug: mod.post.slug,
            description: mod.post.description,
            date: mod.post.date,
            category: mod.post.category,
            canonicalUrl: mod.post.canonicalUrl,
          })
        }
      } catch {
        // ignore import errors
      }
    }
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  const site = 'https://kalashvasaniya.com'
  const requestUrl = new URL(request.url)
  const selfHref = `${requestUrl.origin}${requestUrl.pathname}`
  const posts = await getPosts()

  const items = posts
    .map((p) => {
      const url = p.canonicalUrl || `${site}/blog/${p.slug}`
      return `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.description}]]></description>
      ${p.category ? `<category>${p.category}</category>` : ''}
    </item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Kalash Vasaniya - Blog</title>
      <link>${site}/blog</link>
      <description>Thoughts on technology, travel, entrepreneurship, and building products as a digital nomad.</description>
      <language>en-us</language>
      <atom:link href="${selfHref}" rel="self" type="application/rss+xml" />
      ${items}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}


