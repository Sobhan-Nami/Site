export interface Platform {
  name: string;
  url: string;
  description: string;
  role: string;
}

export interface ConsultingPillar {
  title: string;
  audience: string;
  description: string;
}

export interface SiteConfig {
  email: string;
  linkedin: string;
  telegram: string;
  en: {
    name: string;
    role: string;
    tagline: string;
    intro: string;
    platformsTitle: string;
    platformsSubtitle: string;
    platforms: Platform[];
    consultingTitle: string;
    consultingBadge: string;
    consultingPledge: string;
    consultingPillars: ConsultingPillar[];
    contactTitle: string;
    contactSubtitle: string;
  };
  fa: {
    name: string;
    role: string;
    tagline: string;
    intro: string;
    platformsTitle: string;
    platformsSubtitle: string;
    platforms: Platform[];
    consultingTitle: string;
    consultingBadge: string;
    consultingPledge: string;
    consultingPillars: ConsultingPillar[];
    contactTitle: string;
    contactSubtitle: string;
  };
}

export const siteConfig: SiteConfig = {
  email: 'sobhan.nami76@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sobhan-nami/',
  telegram: 'https://t.me/SobhanNami76',

  en: {
    name: 'Sobhan Nami',
    role: 'Co-founder & Chief Technology Officer',
    tagline: 'Software Architect & Engineering Leader',
    intro: "I'm a software engineer and technology leader passionate about turning practical ideas into real products and helping people grow along the way. At Ronika, I lead engineering and build connected platforms. Alongside my day-to-day work, my biggest focus is advisory and mentorship—helping businesses make smart digital decisions, and guiding aspiring engineers to build confident careers in tech.",
    
    platformsTitle: 'Platforms & Systems',
    platformsSubtitle: 'Flagship products and platforms I have architected and built with my team:',
    platforms: [
      {
        name: 'Ronika',
        url: 'https://ronikapars.com',
        role: 'Co-founder & CTO',
        description: 'Knowledge-based company developing connected hardware, smart utilities (water, gas, electricity), and industrial IoT solutions.'
      },
      {
        name: 'Dahir',
        url: 'https://dahir.io',
        role: 'Lead Engineer',
        description: 'A smart aquaculture automation platform utilizing acoustic feeding controllers and water-quality telemetry for marine farming.'
      },
      {
        name: 'ThingsPod',
        url: 'https://thingspod.io',
        role: 'Lead Engineer',
        description: 'An industrial IoT platform designed for high-frequency telemetry, edge data processing, and large-scale device management.'
      }
    ],

    consultingTitle: 'Advisory & Mentorship',
    consultingBadge: 'Social Responsibility • Without Charge',
    consultingPledge: 'I believe in sharing engineering experience to help creators, students, and businesses make sound decisions. If you would like to discuss your project, architecture, or career roadmap, feel free to reach out to schedule an advisory appointment.',
    consultingPillars: [
      {
        title: 'For Businesses',
        audience: 'Companies, organizations, and entrepreneurs launching or upgrading digital products',
        description: 'Practical, independent advice on web platforms, custom development vs. ready-made solutions, technology selection, and avoiding costly missteps when bringing your business online.'
      },
      {
        title: 'For Students & Aspiring Engineers',
        audience: 'University students, career changers, and junior developers',
        description: 'Personalized career roadmaps, guidance on breaking into software engineering, portfolio reviews, and learning the foundational habits of software craftsmanship.'
      },
      {
        title: 'For Startups & Engineering Teams',
        audience: 'Founders, CTOs, and developers solving technical challenges',
        description: 'An experienced sounding board for system architecture, choosing the right tech stack, database selection, microservices, and scaling distributed backends.'
      }
    ],

    contactTitle: 'Get in Touch',
    contactSubtitle: 'To schedule an advisory appointment, ask a question, or discuss technical topics, reach out through any of the channels below:'
  },

  fa: {
    name: 'سبحان نامی',
    role: 'هم‌بنیان‌گذار و مدیر ارشد فناوری (CTO)',
    tagline: 'معمار نرم‌افزار و سرپرست تیم‌های مهندسی',
    intro: 'من یک مهندس نرم‌افزار و رهبر فناوری هستم که علاقه‌ی زیادی به تبدیل ایده‌های عملی به محصولات واقعی و کمک به رشد افراد در این مسیر دارم. در رونیکا، من رهبری مهندسی و ساخت پلتفرم‌های متصل را بر عهده دارم. در کنار کار روزمره‌ام، بزرگترین تمرکز من مشاوره و راهنمایی است - کمک به کسب‌وکارها برای تصمیم‌گیری‌های هوشمند دیجیتال و راهنمایی مهندسان مشتاق برای ایجاد مشاغل مطمئن در حوزه فناوری.',
    
    platformsTitle: 'پلتفرم‌ها و سامانه‌ها',
    platformsSubtitle: 'محصولات و پلتفرم‌های شاخصی که به همراه تیمم طراحی و معماری کرده‌ام:',
    platforms: [
      {
        name: 'رونیکا (Ronika)',
        url: 'https://ronikapars.com',
        role: 'هم‌بنیان‌گذار و مدیر ارشد فناوری',
        description: 'شرکت دانش‌بنیان طراح و تولیدکننده سیستم‌های هوشمند، کنتورهای هوشمند انرژی و شبکه‌های اینترنت اشیاء شهری و صنعتی.'
      },
      {
        name: 'داهیر (Dahir)',
        url: 'https://dahir.io',
        role: 'سرپرست مهندسی',
        description: 'سامانه هوشمندسازی مزارع آبزی‌پروری با بهره‌گیری از پردازش آکوستیک تغذیه، پایش برخط کیفیت آب و اتوماسیون استخرها.'
      },
      {
        name: 'تینگزپاد (ThingsPod)',
        url: 'https://thingspod.io',
        role: 'سرپرست مهندسی',
        description: 'پلتفرم جامع اینترنت اشیاء صنعتی جهت جمع‌آوری جریان‌های داده با سرعت بالا، پردازش لبه (Edge) و مدیریت ناوگان حسگرها.'
      }
    ],

    consultingTitle: 'مشاوره و منتورشیپ',
    consultingBadge: 'مسئولیت اجتماعی • بدون دریافت هزینه',
    consultingPledge: 'به عنوان مسئولیت اجتماعی، خوشحال می‌شوم تجربه‌ام را با دیگران به اشتراک بگذارم. چه در مورد راه‌اندازی سایت و فروشگاه سوالی داشته باشید، چه برای شروع مسیر شغلی و چالش‌های فنی نرم‌افزار؛ می‌توانید پیام دهید تا یک زمان برای گفتگو و جلسه مشاوره هماهنگ کنیم.',
    consultingPillars: [
      {
        title: 'برای کسب‌وکارها',
        audience: 'شرکت‌ها، سازمان‌ها و کارآفرینانی که قصد راه‌اندازی یا ارتقای سامانه‌های آنلاین خود را دارند',
        description: 'مشاوره راهبردی و کاربردی پیرامون انتخاب پلتفرم‌های تحت وب، مقایسه راهکارهای اختصاصی و آماده، برآورد فنی و جلوگیری از هزینه‌های غیرضروری در راه‌اندازی سامانه‌های دیجیتال.'
      },
      {
        title: 'برای دانشجویان و علاقه‌مندان به برنامه‌نویسی',
        audience: 'دانشجویان کامپیوتر، افراد در حال تغییر مسیر شغلی و برنامه‌نویسان تازه‌کار',
        description: 'ترسیم نقشه راه ورود به بازار کار، بررسی رزومه و نمونه‌کارها، آموزش تفکر مهندسی و انتقال تجربه عملی از سال‌های ابتدایی مسیر مهندسی نرم‌افزار.'
      },
      {
        title: 'برای استارتاپ‌ها و تیم‌های نرم‌افزاری',
        audience: 'بنیان‌گذاران، مدیران فنی و تیم‌های درگیر با توسعه محصول',
        description: 'همفکری تخصصی در زمینه معماری سیستم‌های توزیع‌شده، انتخاب بهینه استک و پایگاه داده، خطوط داده IoT و برطرف کردن گلوگاه‌های مقیاس‌پذیری.'
      }
    ],

    contactTitle: 'راه‌های ارتباط مستقیم',
    contactSubtitle: 'برای هماهنگی وقت مشاوره، طرح سوال یا گفتگوی کاری، از هر کدام از راه‌های زیر می‌توانید پیام دهید:'
  }
};
