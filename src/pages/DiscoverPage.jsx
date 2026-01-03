import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, MessageCircle, Share2, Filter } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const posts = [
    {
      id: 1,
      author: 'Alex',
      avatar: 'https://nocode.meituan.com/photo/search?keyword=person&width=40&height=40&source=meituan',
      content: '今天在公园遇到了很多友善的朋友，感受到了社区的温暖 🌈',
      image: 'https://nocode.meituan.com/photo/search?keyword=park,rainbow&width=300&height=200&source=meituan',
      likes: 24,
      comments: 8,
      tags: ['#LGBTQ', '#社区'],
      timestamp: '2小时前'
    },
    {
      id: 2,
      author: 'Sam',
      avatar: 'https://nocode.meituan.com/photo/search?keyword=person&width=40&height=40&source=meituan',
      content: '分享一些关于性别认同的思考，希望可以帮助到正在探索的朋友们 💜',
      likes: 42,
      comments: 15,
      tags: ['#性别认同', '#思考'],
      timestamp: '4小时前'
    }
  ];

  const filters = [
    { id: 'all', label: '全部' },
    { id: 'LGBTQ', label: 'LGBTQ+' },
    { id: 'community', label: '社区' },
    { id: 'support', label: '支持' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索内容..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="p-3 bg-gray-100 rounded-2xl">
              <Filter className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-10 h-10 rounded-full mx-auto object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{post.author}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            
            <p className="text-gray-800 mb-4">{post.content}</p>
            
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-48 rounded-xl mx-auto object-cover mb-4"
              />
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
              </div>
              <button className="text-gray-600 hover:text-purple-500 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default DiscoverPage;
