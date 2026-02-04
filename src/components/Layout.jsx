import React from 'react';

export default function Layout({ children }) {
  return ( 

    <div className="min-h-screen bg-gray-100 py-8 flex flex-col">
      <div className="container mx-auto px-4 max-w-4xl flex-1">
        <header className="relative mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">AdCreative Login App</h1>
          <p className="text-gray-600 text-sm mt-2">Manage your TikTok Ads</p>
        </header>

        <main>{children}</main>

        <footer className="mt-12 border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 mb-4">© 2026 AdCreative Login App</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/adcreative-login-app/privacy.html" className="text-black hover:underline">Privacy</a>
            <span className="text-gray-400">|</span>
            <a href="/adcreative-login-app/terms.html" className="text-black hover:underline">Terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
