'use client'
import { useState } from 'react';
import { blogs } from '../../../app/data/blogData';
import StarBorder from '../StarBorder';
import Link from 'next/link';

const PLACEHOLDER_IMAGE = '/BLOG_PLACEHOLDER.png';

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

const AllBlogs = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const visibleBlogs = blogs.slice(0, visibleCount);
    const hasMore = visibleCount < blogs.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
    };

    return (
        <section className="bg-white text-black py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-hoves-pro font-medium mb-10 tracking-tight">
                    Latest Insights
                </h2>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleBlogs.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/resources/blogs/${blog.slug}`}
                            className="group space-y-4"
                        >
                            {/* Image */}
                            <div className="relative w-full h-[220px] overflow-hidden rounded-[20px] bg-[#FAF9F5]">
                                <img
                                    src={PLACEHOLDER_IMAGE}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Date */}
                            <p className="text-xs text-[#E31E24] font-inter-tight">
                                {blog.date}
                            </p>

                            {/* Title */}
                            <h3 className="text-lg font-semibold flex items-center gap-2 leading-snug font-hoves-pro group-hover:text-[#E31E24] transition-colors">
                                {blog.title}
                                <span className="text-base">↗</span>
                            </h3>

                            {/* Excerpt */}
                            {blog.excerpt && (
                                <p className="text-sm text-[#646464] line-clamp-3 font-inter-tight">
                                    {blog.excerpt}
                                </p>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-[#FAF9F5] text-[#646464] font-inter-tight"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                {hasMore && (
                    <div className="flex justify-center mt-14">
                        <StarBorder color="#E31E24" thickness={1.5} speed="4s">
                            <button onClick={handleLoadMore} className="font-inter-tight font-medium">
                                Read More
                            </button>
                        </StarBorder>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllBlogs;
