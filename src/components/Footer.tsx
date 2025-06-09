import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">株式会社大樹</h3>
            <p className="mb-4 text-gray-400">
              未来のための空間を創造する建築会社です。
              高品質な住宅建設、リフォーム、リノベーションを提供しています。
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">クイックリンク</h3>
            <ul className="space-y-3">
              {['ホーム', '会社概要', 'サービス', '施工事例', 'お問い合わせ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">サービス</h3>
            <ul className="space-y-3">
              {['新築工事', '内装工事', 'リノベーション', '修繕工事', '耐震診断・補強'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">お問い合わせ</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  〒XXX-XXXX<br />東京都○○区○○町X-X-X
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">03-XXXX-XXXX</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">info@taiju-construction.co.jp</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 株式会社大樹 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;