
import { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* 主内容 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* 导航栏 */}
        <nav className={`px-6 py-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Welcome</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">功能</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">关于</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系</a>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                开始使用
              </button>
            </div>
          </div>
        </nav>

        {/* 英雄区域 */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-300">欢迎访问我们的网站</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                开启您的
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> 精彩旅程</span>
              </h1>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                我们致力于为您提供最优质的服务和体验。探索无限可能，创造属于您的精彩故事。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    立即开始
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                  了解更多
                </button>
              </div>
            </div>

            {/* 特性卡片 */}
            <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: '快速高效',
                  description: '优化的性能，让您的体验更加流畅'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: '安全可靠',
                  description: '企业级安全保障，保护您的数据'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: '用心服务',
                  description: '专业团队，为您提供贴心支持'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* 页脚 */}
        <footer className={`px-6 py-8 border-t border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
            <p>© 2024 Welcome. 保留所有权利.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
