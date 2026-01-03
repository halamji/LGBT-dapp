import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Shield, Users } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const ChatPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Alex',
      avatar: 'https://nocode.meituan.com/photo/search?keyword=person&width=40&height=40&source=meituan',
      lastMessage: '谢谢你的支持，感觉好多了 🌈',
      timestamp: '刚刚',
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      name: 'LGBTQ+ 支持群',
      avatar: 'https://nocode.meituan.com/photo/search?keyword=group&width=40&height=40&source=meituan',
      lastMessage: 'Sam: 大家今天过得怎么样？',
      timestamp: '5分钟前',
      unread: 0,
      isGroup: true,
      isOnline: false
    },
    {
      id: 3,
      name: 'Taylor',
      avatar: 'https://nocode.meituan.com/photo/search?keyword=person&width=40&height=40&source=meituan',
      lastMessage: '周末一起去看电影吗？',
      timestamp: '1小时前',
      unread: 0,
      isOnline: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">消息</h1>
            <button className="p-2 bg-purple-600 rounded-full">
              <Plus className="h-5 w-5 text-white" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索对话..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-green-500" />
            <div>
              <h3 className="font-semibold text-gray-800">端到端加密</h3>
              <p className="text-sm text-gray-600">您的消息受到最高级别的保护</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {conversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full mx-auto object-cover"
                  />
                  {conversation.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                  {conversation.isGroup && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                
                {conversation.unread > 0 && (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-semibold">
                      {conversation.unread}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ChatPage;
