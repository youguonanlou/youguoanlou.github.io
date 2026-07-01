// ============================================
// 个人信息 — 修改此文件即可更新页面内容
// ============================================

export const personalInfo = {
  name: "郭权",
  title: "财政学博士研究生",
  institution: "对外经济贸易大学国际经济贸易学院",
  email: "guoquan@uibe.edu.cn",
} as const;

export const aboutText = [
  "现为对外经济贸易大学国际经济贸易学院财政学博士研究生。研究主要关注气候变化与环境财税、土地财政、地方政府行为等议题。",
] as const;

export interface EducationItem {
  school: string;
  department: string;
  degree: string;
  period: string;
}

export const educationList: EducationItem[] = [
  {
    school: "对外经济贸易大学",
    department: "国际经济贸易学院",
    degree: "财政学博士研究生",
    period: "2025.09—至今",
  },
  {
    school: "天津财经大学",
    department: "财税与公共管理学院",
    degree: "财政学硕士",
    period: "2022.09—2025.06",
  },
  {
    school: "首都经济贸易大学",
    department: "财政税务学院",
    degree: "税收学学士",
    period: "2018.09—2022.06",
  },
];

export const researchInterests = [
  "公共财政 · 地方政府行为 · 地方政府债务治理 · 土地财政",
  "气候变化与环境财税 · 环境治理与生态补偿",
] as const;

export interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  note?: string;
}

// 论文列表 — 格式：题目 / 作者 / 期刊、年份与期号
export const papers: Paper[] = [
  {
    title:
      "《流域横向生态补偿机制与绿色发展效率——基于中国9个跨省流域横向生态补偿机制的证据》",
    authors: "陈旭东、郭权、鹿洪源",
    journal: "《当代经济科学》",
    year: "2026年第1期",
  },
  {
    title: "《全链条推进碳中和的绿色税收政策：国际经验与政策建议》",
    authors: "王烨、郭权、鹿洪源、温晓东",
    journal: "《国际税收》",
    year: "2024年第12期",
  },
  {
    title: "《欧盟碳关税对我国的影响和对策》",
    authors: "邓嵩松、鹿洪源、郭权",
    journal: "《税务研究》",
    year: "2023年第12期",
  },
  {
    title: "《以税扩绿：绿色税收促进制造业绿色化转型了吗？》",
    authors: "陈旭东、鹿洪源、郭权",
    journal: "《经济与管理评论》",
    year: "2024年第4期",
    note: "《新华文摘》论点摘编转载；人大复印资料全文转载",
  },
];

export interface OtherWork {
  title: string;
  venue: string;
  year: string;
}

export const otherWorks: OtherWork[] = [
  {
    title: "《完善绿色税制 引导全过程减碳》",
    venue: "《中国税务报》",
    year: "2023",
  },
  {
    title:
      "《经济转型的税治之路：绿色税收能推动经济绿色低碳发展吗？》",
    venue: "《中国税收教育研究（2023—2024）》",
    year: "",
  },
];

export const academicActivities = ["香樟经济学术圈推文作者"] as const;

export const navItems = [
  { label: "关于我", href: "#about" },
  { label: "教育背景", href: "#education" },
  { label: "研究兴趣", href: "#research" },
  { label: "代表性论文", href: "#papers" },
  { label: "其他", href: "#others" },
] as const;
