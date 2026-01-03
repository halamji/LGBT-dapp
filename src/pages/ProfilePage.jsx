import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit3, 
  Settings, 
  Shield, 
  Heart, 
  Users, 
  MessageCircle,
  Camera,
  Plus,
  X
} from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';
import { useAuthStore } from '../stores/authStore';

const ProfilePage = () => {
  const { user, updateUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [showAddTag, setShowAddTag] = useState(false);

  const predefinedTags = [
    'LGBTQ+', '非二元性别', '泛性恋', '双性恋', '跨性别',
    '酷儿', '盟友', '性别流动', '无性别', '同性恋'
  ];

  const handleAddTag = (tag) => {
    if (tag && !user.tags.includes(tag)) {
      updateUser({ tags: [...user.tags, tag] });
    }
    setNewTag('');
    setShowAddTag(false);
  };

  const handleRemoveTag = (tagToRemove) => {
    updateUser({ tags: user.tags.filter(tag => tag !== tagToRemove) });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">个人资料</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 bg-purple-600 rounded-full"
            >
              <Edit3 className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-full h-full rounded-full mx-auto object-cover"
                  />
                ) : (
                  <Heart className="h-8 w-8 text-white" />
                )}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Camera className="h-3 w-3 text-white" />
                </button>
              )}
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">
                {user?.walletAddress ? 
                  `${user.walletAddress.slice(0, 6)}...${user.walletAddress.slice(-4)}` : 
                  '用户'
                }
              </h2>
              <p className="text-gray-600">DID: {user?.did || 'N/A'}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">关注</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">28</div>
              <div className="text-sm text-gray-600">粉丝</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-sm text-gray-600">帖子</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">个人标签</h3>
            {isEditing && (
              <button
                onClick={() => setShowAddTag(true)}
                className="p-2 bg-purple-100 rounded-full"
              >
                <Plus className="h-4 w-4 text-purple-600" />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {user?.tags?.map((tag) => (
              <div
                key={tag}
                className="flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-600 rounded-full"
              >
                <span>{tag}</span>
                {isEditing && (
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="text-purple-400 hover:text-purple-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {showAddTag && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="添加自定义标签..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag(newTag)}
              />
              <div className="flex flex-wrap gap-2">
                {predefinedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleAddTag(tag)}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">隐私设置</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-500" />
                <div>
                  <h4 className="font-medium text-gray-800">数据可见性</h4>
                  <p className="text-sm text-gray-600">控制谁可以看到你的信息</p>
                </div>
              </div>
              <select className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                <option>仅好友</option>
                <option>所有人</option>
                <option>仅自己</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <h4 className="font-medium text-gray-800">匿名模式</h4>
                  <p className="text-sm text-gray-600">隐藏你的钱包地址</p>
                </div>
              </div>
              <button className="w-12 h-6 bg-purple-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
