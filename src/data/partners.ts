export interface Partner {
  name: string;
  logo: string;
  description: string;
}

export interface Partners {
  global: Partner[];
  government: Partner[];
  ecosystem: Partner[];
  academic: Partner[];
}

export const partners: Partners = {
  global: [
    { 
      name: "SDSN Youth", 
      logo: "https://cdn.prod.website-files.com/5eab2402c548d961a485e2d7/60a5e4221ed0b785540e8584_SDSN%2BYouth%2Blogo%2Bcropped.png",
      description: "UN Sustainable Development Solutions Network Youth Initiative"
    },
    { 
      name: "UNLEASH", 
      logo: "https://i0.wp.com/unleash.org/wp-content/uploads/2022/04/UNLEASH_white.png?w=890&ssl=1",
      description: "Global Innovation Lab for the SDGs"
    },
    {
      name: "Stanford Seed",
      logo: "https://i0.wp.com/gbsn.org/wp-content/uploads/2020/10/Stanford-seed-logo.jpg?fit=2144%2C596&ssl=1",
      description: "Stanford Institute for Innovation in Developing Economies"
    }
  ],
  government: [
    { 
      name: "Tamil Nadu Government", 
      logo: "https://w1.pngwing.com/pngs/645/769/png-transparent-india-food-government-of-tamil-nadu-arignar-anna-zoological-park-tamil-nadu-open-university-election-organization-library-directorate-of-government-examinations.png",
      description: "Government of Tamil Nadu"
    },
    { 
      name: "StartupTN", 
      logo: "https://startuptn.in/images/blue%20horizontal.png",
      description: "Tamil Nadu Startup and Innovation Mission"
    },
    {
      name: "Coimbatore Corporation",
      logo: "https://icts.smartccmc.com/App_Themes/CCMC/images/logo.png",
      description: "Coimbatore Municipal Corporation"
    }
  ],
  ecosystem: [
    { 
      name: "Startup Grind", 
      logo: "https://mlwdmr8a4b9i.i.optimole.com/llKkcbI-voN_u7GV/w:2000/h:530/q:90/https://partners.startupgrind.com/wp-content/uploads/sites/5/2019/09/logo-dark.png",
      description: "Global Startup Community"
    },
    { 
      name: "Founder Lair", 
      logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/xjfi4gizywvaanmvuhwe",
      description: "Startup Support Network"
    },
    {
      name: "We Founder Circle",
      logo: "https://wefoundercircle.com/wp-content/uploads/2024/09/WFC-Black-Square-2.png",
      description: "Founder Community Platform"
    },
    {
      name: "Blume",
      logo: "https://cdn.blume.vc/blume/imager/images/14230/Blume_Full_Colour_Primary_Reverse-1_6bbcab3b028630e4b58739c0d887078d.jpeg",
      description: "Venture Capital Partner"
    }
  ],
  academic: [
    {
      name: "GRD School of Commerce",
      logo: "https://grdscib.in/wp-content/uploads/2014/02/logo11.jpg",
      description: "School of Commerce & International Business"
    },
    {
      name: "GRD Institute of Management",
      logo: "https://grdscib.in/wp-content/uploads/2014/02/logo12.jpg",
      description: "Institute of Management"
    }
  ]
}; 