import marketNestHome from "../components/Projects/Screenshots/MarketNest/Home_Page.png";
import marketNestProductDetails from "../components/Projects/Screenshots/MarketNest/Product_Details_Page.png";
import marketNestDashboard from "../components/Projects/Screenshots/MarketNest/Dashboard_Page.png";
import marketNestProductCreation from "../components/Projects/Screenshots/MarketNest/Product_Creating_Page.png";
import marketNestLogin from "../components/Projects/Screenshots/MarketNest/Login_Page.png";
import marketNestSignup from "../components/Projects/Screenshots/MarketNest/Signup_Page.png";
import heartGuardHome from "../components/Projects/Screenshots/HeartGuard/home_page.png";
import heartGuardLogin from "../components/Projects/Screenshots/HeartGuard/login_page.png";
import heartGuardRegistration from "../components/Projects/Screenshots/HeartGuard/registration_page.png";
import heartGuardRiskPrediction from "../components/Projects/Screenshots/HeartGuard/riskprediction_page.png";
import heartGuardProfile from "../components/Projects/Screenshots/HeartGuard/profile_page.png";
import heartGuardHistory from "../components/Projects/Screenshots/HeartGuard/history_page.png";
import amazonCloneHome from "../components/Projects/Screenshots/Amazon_Clone/home_page.png";
import amazonCloneCart from "../components/Projects/Screenshots/Amazon_Clone/cart_page.png";
import amazonCloneOrders from "../components/Projects/Screenshots/Amazon_Clone/orders_page.png";
import amazonCloneTracking from "../components/Projects/Screenshots/Amazon_Clone/tracking_page.png";

const projects = [
  {
    id: "marketnest",
    title: "MarketNest",
    featured: true,
    featuredLabel: "Featured Project",
    description:
      "A full-stack e-commerce marketplace with dedicated customer and brand experiences for discovering products and managing listings.",
    extraDescription:
      "Built with role-based authentication, JWT access and refresh-token handling, Google OAuth, Cloudinary image uploads, and a complete draft-to-archive product lifecycle across separately deployed frontend and backend services.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    githubUrl: "https://github.com/charanramagiri/marketnest",
    liveDemoUrl: "https://marketnest-silk.vercel.app/marketplace",
    images: [
      {
        src: marketNestHome,
        alt: "MarketNest marketplace with product search, category filtering, and product listings",
      },
      {
        src: marketNestProductDetails,
        alt: "MarketNest product details page showing product image, price, category, and description",
      },
      {
        src: marketNestDashboard,
        alt: "MarketNest brand dashboard with product metrics and active and archived listing sections",
      },
      {
        src: marketNestProductCreation,
        alt: "MarketNest product creation form with listing details, publication status, and image upload",
      },
      {
        src: marketNestLogin,
        alt: "MarketNest login page with email, password recovery, and Google sign-in options",
      },
      {
        src: marketNestSignup,
        alt: "MarketNest signup page with customer or brand role selection",
      },
    ],
    reverse: false,
  },
  {
    id: "heartguard",
    title: "HeartGuard: Stroke Risk & Rescue",
    description:
      "A machine learning healthcare project that evaluates stroke-risk indicators from patient health information and reported approximately 94% model accuracy during project testing.",
    extraDescription:
      "The Flask application supports patient and doctor functionality, user-doctor connections, and health-history management backed by SQLite and PostgreSQL data workflows. Its model output is educational and is not a clinical diagnosis.",
    techStack: [
      "Python",
      "Flask",
      "Machine Learning",
      "SQLite",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/charanramagiri/HeartGuard_StrokeRisk_-_Rescue",
    liveDemoUrl: null,
    images: [
      { src: heartGuardHome, alt: "HeartGuard application home page" },
      { src: heartGuardLogin, alt: "HeartGuard user login page" },
      { src: heartGuardRegistration, alt: "HeartGuard account registration page" },
      { src: heartGuardRiskPrediction, alt: "HeartGuard stroke-risk prediction form" },
      { src: heartGuardProfile, alt: "HeartGuard user health profile page" },
      { src: heartGuardHistory, alt: "HeartGuard patient health history page" },
    ],
    reverse: true,
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description:
      "A responsive Amazon-inspired storefront interface built with HTML, CSS, and JavaScript, recreating familiar product discovery and commerce layouts.",
    extraDescription:
      "Implements responsive navigation and product presentation alongside frontend cart, orders, and shipment-tracking interfaces without claiming backend or database functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/charanramagiri/Amazon_Clone_Project",
    liveDemoUrl: null,
    images: [
      { src: amazonCloneHome, alt: "Amazon Clone responsive storefront home page" },
      { src: amazonCloneCart, alt: "Amazon Clone shopping cart interface" },
      { src: amazonCloneOrders, alt: "Amazon Clone orders interface" },
      { src: amazonCloneTracking, alt: "Amazon Clone shipment tracking interface" },
    ],
    reverse: false,
  },
];

export default projects;
