import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogs } from '@/app/data/blogData'
import ContainerLayout from '@/layouts/ContainerLayout'
import { ArrowLeft } from 'lucide-react'

interface BlogPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        return {
            title: 'Blog Not Found',
        }
    }

    return {
        title: `${blog.title} | Aqua Excel`,
        description: blog.excerpt,
    }
}

// Simple markdown-like content renderer
const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let key = 0;

    const flushList = () => {
        if (currentList.length > 0 && listType) {
            const ListTag = listType;
            elements.push(
                <ListTag key={`list-${key++}`} className="font-inter-tight text-base md:text-lg text-[#323232] leading-relaxed mb-4 list-disc pl-6 space-y-2">
                    {currentList.map((item, idx) => (
                        <li key={idx} className="font-inter-tight text-base md:text-lg text-[#323232]">
                            {item}
                        </li>
                    ))}
                </ListTag>
            );
            currentList = [];
            listType = null;
        }
    };

    lines.forEach((line, index) => {
        const trimmed = line.trim();

        // H2
        if (trimmed.startsWith('## ')) {
            flushList();
            elements.push(
                <h2 key={`h2-${key++}`} className="font-hoves-pro font-medium text-xl md:text-3xl text-black mt-8 mb-4 tracking-tight">
                    {trimmed.substring(3)}
                </h2>
            );
        }
        // H3
        else if (trimmed.startsWith('### ')) {
            flushList();
            elements.push(
                <h3 key={`h3-${key++}`} className="font-hoves-pro font-medium text-lg md:text-2xl text-black mt-6 mb-3 tracking-tight">
                    {trimmed.substring(4)}
                </h3>
            );
        }
        // Unordered list
        else if (trimmed.startsWith('- ')) {
            if (listType !== 'ul') {
                flushList();
                listType = 'ul';
            }
            currentList.push(trimmed.substring(2));
        }
        // Paragraph
        else if (trimmed.length > 0) {
            flushList();
            // Handle bold text **text**
            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            const content = parts.map((part, idx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={idx} className="font-semibold text-black">{part.slice(2, -2)}</strong>;
                }
                return part;
            });

            elements.push(
                <p key={`p-${key++}`} className="font-inter-tight text-base md:text-lg text-[#323232] leading-relaxed mb-4">
                    {content}
                </p>
            );
        }
    });

    flushList();
    return elements;
};

const BlogDetailPage = async ({ params }: BlogPageProps) => {
    const { slug } = await params
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white py-10 md:py-16">
            <ContainerLayout>
                {/* Back Button */}
                <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-[#646464] hover:text-black transition-colors mb-8 font-inter-tight"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm md:text-base">Back to Resources</span>
                </Link>

                {/* Blog Header */}
                <div className="mb-8 md:mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs md:text-sm px-3 py-1 rounded-full bg-[#FAF9F5] text-[#E31E24] font-inter-tight"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="font-hoves-pro font-medium text-2xl md:text-4xl lg:text-5xl text-black mb-4 tracking-tight">
                        {blog.title}
                    </h1>

                    <p className="text-sm md:text-base text-[#646464] font-inter-tight">
                        {blog.date}
                    </p>
                </div>

                {/* Blog Content */}
                <article className="max-w-none">
                    {renderContent(blog.content)}
                </article>

                {/* Related Articles / CTA */}
                {/* <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 bg-[#E31E24] text-white px-6 py-3 rounded-xl hover:bg-[#c41a1f] transition-colors font-inter-tight font-medium"
                    >
                        Explore More Articles
                    </Link>
                </div> */}
            </ContainerLayout>
        </div>
    )
}

export default BlogDetailPage
