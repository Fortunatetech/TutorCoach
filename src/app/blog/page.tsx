import { BLOG_POSTS } from '@/data/blog';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Learning Resources & Insights</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Expert tips, strategies, and guides to help you achieve your academic and career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white text-6xl">
                    📚
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-brand-teal-50 text-brand-teal-700 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-neutral-500">{post.readTime} min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-neutral-600 mb-4 line-clamp-3 flex-1">{post.hook}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <span className="text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="text-brand-teal-600 font-medium hover:text-brand-teal-700">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}