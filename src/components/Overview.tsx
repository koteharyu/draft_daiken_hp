import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">概要</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-10"></div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            株式会社大樹は、<span className="font-semibold">住まいづくりのプロフェッショナル</span>として、
            高品質な住宅建設、リフォーム、リノベーションをご提供しています。
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            お客様一人ひとりのライフスタイルに合わせた、理想の空間づくりをお手伝いします。
            確かな技術と経験を活かし、設計から施工、アフターケアまで一貫してサポートしています。
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
              <div className="text-4xl font-bold text-teal-600 mb-2">25+</div>
              <p className="text-gray-600">施工実績年数</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-gray-600">施工実績件数</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <p className="text-gray-600">顧客満足度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;