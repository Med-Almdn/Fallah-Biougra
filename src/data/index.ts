import { NavItem, TeamMember, Mission, Vision } from '../types';
import { Leaf, Users, Truck, Store } from 'lucide-react';

export const navItems: NavItem[] = [
  {
    key: 'home',
    label: {
      ar: 'الرئيسية',
      fr: 'Accueil',
      en: 'Home'
    },
    href: '#home'
  },
  {
    key: 'about',
    label: {
      ar: 'من نحن',
      fr: 'À propos',
      en: 'About'
    },
    href: '#about'
  },
  {
    key: 'products',
    label: {
      ar: 'المنتجات',
      fr: 'Produits',
      en: 'Products'
    },
    href: '#products'
  },
  {
    key: 'contact',
    label: {
      ar: 'تواصل معنا',
      fr: 'Contact',
      en: 'Contact'
    },
    href: '#contact'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: {
      ar: 'محمد العلوي',
      fr: 'Mohammed Alaoui',
      en: 'Mohammed Alaoui'
    },
    role: {
      ar: 'المدير التنفيذي',
      fr: 'Directeur Général',
      en: 'Chief Executive Officer'
    },
    bio: {
      ar: 'يمتلك محمد خبرة تزيد عن 15 عامًا في قطاع الزراعة، وهو متخصص في تطوير الأعمال الزراعية واستراتيجيات النمو.',
      fr: 'Mohammed possède plus de 15 ans d\'expérience dans le secteur agricole et est spécialisé dans le développement des entreprises agricoles et les stratégies de croissance.',
      en: 'Mohammed has over 15 years of experience in the agricultural sector and specializes in agricultural business development and growth strategies.'
    },
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: {
      ar: 'فاطمة الزهراء',
      fr: 'Fatima Zahra',
      en: 'Fatima Zahra'
    },
    role: {
      ar: 'مديرة التسويق',
      fr: 'Directrice Marketing',
      en: 'Marketing Director'
    },
    bio: {
      ar: 'تتمتع فاطمة بخبرة واسعة في مجال التسويق والاتصالات، وهي مسؤولة عن تطوير وتنفيذ استراتيجيات التسويق للشركة.',
      fr: 'Fatima a une vaste expérience dans le marketing et la communication, et est responsable du développement et de la mise en œuvre des stratégies marketing de l\'entreprise.',
      en: 'Fatima has extensive experience in marketing and communications, and is responsible for developing and implementing the company\'s marketing strategies.'
    },
    image: 'https://images.pexels.com/photos/6230971/pexels-photo-6230971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: {
      ar: 'أحمد بنعلي',
      fr: 'Ahmed Benali',
      en: 'Ahmed Benali'
    },
    role: {
      ar: 'رئيس قسم البحث والتطوير',
      fr: 'Chef de la Recherche et Développement',
      en: 'Head of Research and Development'
    },
    bio: {
      ar: 'يقود أحمد فريق البحث والتطوير لابتكار حلول جديدة ومنتجات متطورة تلبي احتياجات السوق الزراعية المتغيرة.',
      fr: 'Ahmed dirige l\'équipe de R&D pour innover de nouvelles solutions et produits avancés qui répondent aux besoins changeants du marché agricole.',
      en: 'Ahmed leads the R&D team to innovate new solutions and advanced products that meet the changing needs of the agricultural market.'
    },
    image: 'https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: {
      ar: 'سارة المنصوري',
      fr: 'Sara Mansouri',
      en: 'Sara Mansouri'
    },
    role: {
      ar: 'مديرة خدمة العملاء',
      fr: 'Directrice du Service Client',
      en: 'Customer Service Manager'
    },
    bio: {
      ar: 'تشرف سارة على فريق خدمة العملاء وتضمن تقديم أفضل مستوى من الخدمة والدعم لعملائنا.',
      fr: 'Sara supervise l\'équipe du service client et assure la fourniture du meilleur niveau de service et de soutien à nos clients.',
      en: 'Sara oversees the customer service team and ensures the provision of the best level of service and support to our customers.'
    },
    image: 'https://images.pexels.com/photos/8101537/pexels-photo-8101537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const missions: Mission[] = [
  {
    id: 1,
    title: {
      ar: 'توفير منتجات عالية الجودة',
      fr: 'Fournir des produits de haute qualité',
      en: 'Provide High-Quality Products'
    },
    description: {
      ar: 'نقدم منتجات زراعية وكيميائية ومعدات ذات جودة عالية تلبي المعايير الدولية.',
      fr: 'Nous offrons des produits agricoles, chimiques et des équipements de haute qualité qui répondent aux normes internationales.',
      en: 'We offer high-quality agricultural products, chemicals, and equipment that meet international standards.'
    },
    icon: 'Leaf'
  },
  {
    id: 2,
    title: {
      ar: 'دعم المزارعين',
      fr: 'Soutenir les agriculteurs',
      en: 'Support Farmers'
    },
    description: {
      ar: 'نوفر الدعم الفني والاستشارات للمزارعين لمساعدتهم على تحسين إنتاجهم وزيادة عائداتهم.',
      fr: 'Nous fournissons un soutien technique et des conseils aux agriculteurs pour les aider à améliorer leur production et à augmenter leurs revenus.',
      en: 'We provide technical support and consultations to farmers to help them improve their production and increase their returns.'
    },
    icon: 'Users'
  },
  {
    id: 3,
    title: {
      ar: 'تعزيز الزراعة المستدامة',
      fr: 'Promouvoir l\'agriculture durable',
      en: 'Promote Sustainable Agriculture'
    },
    description: {
      ar: 'نشجع الممارسات الزراعية المستدامة التي تحافظ على الموارد الطبيعية وتقلل من التأثير البيئي.',
      fr: 'Nous encourageons les pratiques agricoles durables qui préservent les ressources naturelles et réduisent l\'impact environnemental.',
      en: 'We encourage sustainable agricultural practices that preserve natural resources and reduce environmental impact.'
    },
    icon: 'Truck'
  },
  {
    id: 4,
    title: {
      ar: 'المساهمة في التنمية الزراعية',
      fr: 'Contribuer au développement agricole',
      en: 'Contribute to Agricultural Development'
    },
    description: {
      ar: 'نساهم في تطوير وتنمية القطاع الزراعي في المغرب من خلال توفير التقنيات والحلول الحديثة.',
      fr: 'Nous contribuons au développement du secteur agricole au Maroc en fournissant des technologies et des solutions modernes.',
      en: 'We contribute to the development of the agricultural sector in Morocco by providing modern technologies and solutions.'
    },
    icon: 'Store'
  }
];

export const visions: Vision[] = [
  {
    id: 1,
    title: {
      ar: 'التميز',
      fr: 'Excellence',
      en: 'Excellence'
    },
    description: {
      ar: 'نسعى دائمًا لتقديم أفضل المنتجات والخدمات التي تلبي احتياجات عملائنا وتتجاوز توقعاتهم.',
      fr: 'Nous nous efforçons toujours de fournir les meilleurs produits et services qui répondent aux besoins de nos clients et dépassent leurs attentes.',
      en: 'We always strive to provide the best products and services that meet our customers\' needs and exceed their expectations.'
    }
  },
  {
    id: 2,
    title: {
      ar: 'الاستدامة',
      fr: 'Durabilité',
      en: 'Sustainability'
    },
    description: {
      ar: 'نلتزم بتطوير وتعزيز الممارسات الزراعية المستدامة التي تحافظ على البيئة وتضمن مستقبلًا أفضل للأجيال القادمة.',
      fr: 'Nous nous engageons à développer et à promouvoir des pratiques agricoles durables qui préservent l\'environnement et assurent un meilleur avenir pour les générations futures.',
      en: 'We are committed to developing and promoting sustainable agricultural practices that preserve the environment and ensure a better future for coming generations.'
    }
  },
  {
    id: 3,
    title: {
      ar: 'الابتكار',
      fr: 'Innovation',
      en: 'Innovation'
    },
    description: {
      ar: 'نستثمر في البحث والتطوير لتقديم حلول مبتكرة تساعد في مواجهة التحديات الزراعية وتحسين الإنتاجية.',
      fr: 'Nous investissons dans la recherche et le développement pour fournir des solutions innovantes qui aident à relever les défis agricoles et à améliorer la productivité.',
      en: 'We invest in research and development to provide innovative solutions that help address agricultural challenges and improve productivity.'
    }
  }
];