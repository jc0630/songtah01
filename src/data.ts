export interface MenuItem {
  title: string;
  href: string;
  subItems?: MenuItem[];
}

export const MAIN_MENU: MenuItem[] = [
  { title: "首頁", href: "/" },
  { title: "關於崧達", href: "/about" },
  {
    title: "服務項目",
    href: "/services",
    subItems: [
      { title: "牙科技工數位轉型評估", href: "/services/lab-digital-transformation" },
      { title: "診間數位製程導入", href: "/services/clinic-digital-workflow" },
    ],
  },
  {
    title: "牙科產品",
    href: "/products",
    subItems: [
      { title: "牙科3D列印機", href: "/products/3d-printers" },
      { title: "牙科CAD/CAM系統", href: "/products/cad-cam" },
      { title: "牙科齒雕機（車機／研磨機）", href: "/products/milling-machines" },
      { title: "牙科材料", href: "/products/materials" },
      { title: "牙科耗材", href: "/products/consumables" },
      { title: "玻璃陶瓷與美學貼片", href: "/products/glass-ceramics" },
      { title: "牙科數位軟體", href: "/products/software" },
    ],
  },
  { title: "課程與活動", href: "/courses-events" },
  {
    title: "技術支援",
    href: "/technical-support",
    subItems: [
      { title: "說明中心", href: "/support/help-center" },
      { title: "常見問題FAQ", href: "/support/faq" },
      { title: "資源下載", href: "/support/downloads" },
    ],
  },
  { title: "最新消息", href: "/news" },
  { title: "客戶案例", href: "/case-studies" },
  { title: "聯絡我們", href: "/contact" },
];

export const SEO_DATA = {
  "/": {
    h1: "整合設備、材料與技術，讓數位牙科製程穩定落地",
    h2: ["牙科設備與材料供應", "連結國際技術，建立在地可行的數位製程", "產品供應與在地庫存"],
  },
  "/about": {
    h1: "崧達企業｜深耕台灣牙科產業逾四十年",
    h2: ["長期在地服務，讓國際技術真正接上日常工作"],
  },
  "/services/lab-digital-transformation": {
    h1: "牙體技術所數位轉型評估",
    h2: ["什麼情況適合做數位轉型評估"],
  },
  "/services/clinic-digital-workflow": {
    h1: "診間數位製程導入",
    h2: ["什麼情況適合把製程搬進診間"],
  },
  "/products": {
    h1: "牙科數位設備與材料",
    h2: ["產品只是其中一環，導入流程才決定結果"],
  },
  "/products/3d-printers": {
    h1: "牙科 3D 列印機",
    h2: ["適用應用與產量評估", "ASIGA 設備型號比較", "3D 列印樹脂"],
  },
  "/products/cad-cam": {
    h1: "牙科 CAD/CAM 系統",
    h2: ["掃描設備：口內與桌上型", "設計軟體", "Zirkonzahn M1／M2／M4／M6 機型比較", "搭配樹脂與後處理設備", "加工與研磨設備"],
  },
  "/products/milling-machines": {
    h1: "牙科齒雕機與研磨設備",
    h2: ["齒雕機怎麼選：軸數、乾濕式與可加工材料", "PMMA 與蠟塊", "集塵與過濾（KO-MAX）", "GenCore MillFix 與 MAI 機型", "加工配件與旋轉器械"],
  },
  "/products/materials": {
    h1: "牙科材料",
    h2: ["氧化鋯材料", "PMMA 與蠟塊", "3D 列印樹脂", "染色與上色系統", "材料選用與參數建議"],
  },
  "/products/consumables": {
    h1: "牙科耗材",
    h2: ["研磨與拋光耗材", "集塵與過濾（KO-MAX）", "加工配件與旋轉器械", "常用規格在地備貨", "訂購與交期"],
  },
  "/products/glass-ceramics": {
    h1: "玻璃陶瓷與美學貼片材料｜HASS Rosetta",
    h2: [
      "美學貼片該選什麼材料",
      "Rosetta SM：CAD/CAM 切削瓷塊（440 MPa）",
      "Rosetta SP：壓鑄鑄塊（460 MPa・HT／LT／MO・19 色階）",
      "適用案件：貼片、嵌體、單冠與前牙三單位牙橋",
      "色階與透光度怎麼選",
      "切削／壓鑄參數與結晶條件",
      "常見問題"
    ],
  },
  "/products/software": {
    h1: "牙科設計軟體｜Zirkonzahn 與 Dentbird",
    h2: [
      "牙科設計軟體怎麼選",
      "Zirkonzahn 軟體系統（含 Modifier 全口贗復設計）",
      "Dentbird 雲端 AI 設計（Dentbird Crown 自動牙冠設計）",
      "單機安裝與雲端服務的差別",
      "與現有掃描機、加工機的相容性",
      "導入、授權與教育訓練"
    ],
  },
  "/courses-events": {
    h1: "不只參加一場活動，而是把新技術帶回工作現場",
    h2: ["從需求選主題", "確認場次與形式", "把內容帶回現場", "展會活動"],
  },
  technicalSupport: {
    title: "技術支援",
    h1: "設備與製程的在地技術支援",
    h2: ["牙科設備維修申請流程", "牙科設備保固說明", "常見問題"],
  },
  "/support/help-center": {
    h1: "設備操作與製程說明中心",
    h2: ["設備操作指引", "製程參數建議", "操作手冊", "切削／壓鑄參數與結晶條件"],
  },
  "/support/faq": {
    h1: "牙科設備常見問題",
    h2: ["設備出現異常，第一步該做什麼？", "保固說明", "保養與耗材更換", "疑難排解", "常見問題"],
  },
  "/support/downloads": {
    h1: "牙科產品型錄與技術文件下載",
    h2: ["產品型錄", "材料技術資料"],
  },
  "/news": {
    h1: "最新消息",
    h2: ["近期課程與最新消息"],
  },
  "/contact": {
    h1: "聯絡崧達",
    h2: ["聯絡資訊", "服務時間", "公司位置", "表單說明", "外縣市也能到府維修嗎？"],
  },
  "/case-studies": {
    h1: "客戶案例與技轉成果",
    h2: ["牙醫診所診間製程導入", "牙技所 3D 列印自動化升級", "大型醫療機構設備建置"],
  },
};
