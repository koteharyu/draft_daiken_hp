import React from 'react';
import { Home, PaintBucket, Hammer, Ruler } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string[];
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, icon }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-teal-100 p-2 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <ul className="text-gray-600 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "新築工事",
      description: [
        "建築設計と施工",
        "木造住宅・RC住宅",
        "注文住宅・建売住宅",
        "店舗・オフィス設計",
        "耐震・省エネ設計"
      ],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Home className="w-5 h-5 text-teal-600" />
    },
    {
      title: "内装工事",
      description: [
        "マンションリフォーム",
        "キッチン改修",
        "バスルーム改修",
        "内装デザイン",
        "断熱改修や結露対策"
      ],
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <PaintBucket className="w-5 h-5 text-teal-600" />
    },
    {
      title: "リノベーション",
      description: [
        "フルリノベーション",
        "コンバージョン",
        "古民家再生",
        "間取り変更",
        "耐震補強・断熱改修"
      ],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Ruler className="w-5 h-5 text-teal-600" />
    },
    {
      title: "修繕工事",
      description: [
        "屋根修繕",
        "外壁塗装",
        "水回り修理",
        "エクステリア工事",
        "雨漏り修理"
      ],
      image: "https://images.pexels.com/photos/8961315/pexels-photo-8961315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: <Hammer className="w-5 h-5 text-teal-600" />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">サービス内容</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            株式会社大樹では、お客様のニーズに合わせた多様な建築サービスをご提供しています。
            新築からリノベーション、修繕工事まで、あらゆる住まいの課題に対応いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;