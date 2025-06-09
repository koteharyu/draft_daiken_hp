import React from 'react';
import { MessageSquare, FileText, HandshakeIcon, PencilRuler, HomeIcon, CheckCircle } from 'lucide-react';

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center shadow-lg mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-teal-700 font-bold text-sm border-2 border-teal-600">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-center text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};

const Workflow: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "お問い合わせ",
      description: "お電話またはウェブサイトからお気軽にご相談ください。ご要望をお聞かせください。",
      icon: <MessageSquare className="w-7 h-7 text-white" />
    },
    {
      number: 2,
      title: "現地調査・ヒアリング",
      description: "お客様のご希望や現場の状況を詳しく確認します。具体的なご要望をお聞かせください。",
      icon: <FileText className="w-7 h-7 text-white" />
    },
    {
      number: 3,
      title: "プラン・お見積り",
      description: "ご要望に基づいたプランと概算お見積りをご提案します。ご納得いただけるまで調整いたします。",
      icon: <PencilRuler className="w-7 h-7 text-white" />
    },
    {
      number: 4,
      title: "ご契約",
      description: "プランとお見積りにご納得いただけましたら、正式なご契約となります。詳細な工程表もご提示します。",
      icon: <HandshakeIcon className="w-7 h-7 text-white" />
    },
    {
      number: 5,
      title: "施工・監理",
      description: "経験豊富な職人による丁寧な施工を行います。定期的に進捗状況をご報告いたします。",
      icon: <HomeIcon className="w-7 h-7 text-white" />
    },
    {
      number: 6,
      title: "完成・お引き渡し",
      description: "工事完了後、お客様立ち会いのもと検査を行い、満足いただけましたらお引き渡しとなります。",
      icon: <CheckCircle className="w-7 h-7 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">工事までの流れ</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お問い合わせから施工完了まで、お客様に安心してご依頼いただけるよう
            丁寧にサポートいたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {steps.map((step) => (
            <WorkflowStep 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;