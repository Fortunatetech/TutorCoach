import { getBlogPostBySlug, BLOG_POSTS } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-teal-600 hover:text-brand-teal-700 mb-8">
            ← Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-brand-teal-50 text-brand-teal-700 rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-neutral-500">{post.readTime} min read</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-500">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          {/* Hook */}
          <p className="text-2xl text-neutral-600 mb-8 leading-relaxed">{post.hook}</p>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-neutral-200">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white font-bold">
              TC
            </div>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-neutral-500">Published on {new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-neutral-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-lg prose-p:leading-relaxed prose-p:text-neutral-700 prose-p:mb-6
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-lg prose-li:text-neutral-700
              prose-strong:text-neutral-900 prose-strong:font-semibold
              prose-a:text-brand-teal-600 prose-a:no-underline hover:prose-a:text-brand-teal-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-brand-teal-50 to-accent-coral-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Want Personalized Help?</h3>
            <p className="text-lg text-neutral-600 mb-6">
              Get expert guidance tailored to your specific needs and goals
            </p>
            <Link href="/book-consultation">
              <Button size="large">Book Free Consultation</Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}