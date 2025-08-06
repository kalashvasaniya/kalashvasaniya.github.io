import { MetadataRoute } from 'next'
import { readdir } from 'fs/promises'
import { join } from 'path'

// Function to get all blog post slugs dynamically
async function getBlogPosts() {
  try {
    const postsDirectory = join(process.cwd(), 'app/blog/posts')
    const files = await readdir(postsDirectory)
    
    const posts = []
    for (const file of files) {
      if (file.endsWith('.ts')) {
        const slug = file.replace('.ts', '')
        try {
          // Dynamic import to get post metadata
          const mod = await import(`./blog/posts/${slug}`)
          if (mod && mod.post) {
            posts.push({
              slug,
              lastModified: mod.post.date ? new Date(mod.post.date) : new Date('2025-08-06'),
            })
          }
        } catch (e) {
          // Skip posts that can't be imported
          continue
        }
      }
    }
    return posts
  } catch (error) {
    // Fallback to hardcoded posts if directory reading fails
    return [
      {
        slug: 'i-got-5m-views-in-a-week-just-by-tweeting',
        lastModified: new Date('2025-08-06'),
      }
    ]
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kalashvasaniya.com'
  const currentDate = new Date()
  
  // Get all blog posts dynamically
  const blogPosts = await getBlogPosts()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bucketlist`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
  
  // Dynamic blog post pages
  const blogPostPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  
  return [...staticPages, ...blogPostPages]
} 