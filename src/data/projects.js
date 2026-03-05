import heartGuardHome from "../components/Projects/Screenshots/project_1/home_page.png";
import heartGuardLogin from "../components/Projects/Screenshots/project_1/login_page.png";
import heartGuardRegistration from "../components/Projects/Screenshots/project_1/registration_page.png";
import heartGuardRiskPrediction from "../components/Projects/Screenshots/project_1/riskprediction_page.png";
import heartGuardProfile from "../components/Projects/Screenshots/project_1/profile_page.png";
import heartGuardHistory from "../components/Projects/Screenshots/project_1/history_page.png";
import amazonCloneHome from "../components/Projects/Screenshots/project_2/home_page.png";
import amazonCloneCart from "../components/Projects/Screenshots/project_2/cart_page.png";
import amazonCloneOrders from "../components/Projects/Screenshots/project_2/orders_page.png";
import amazonCloneTracking from "../components/Projects/Screenshots/project_2/tracking_page.png";

const projects = [
  {
    id: "heartguard",
    title: "HeartGuard: Stroke Risk & Rescue",
    description:
      "A machine learning-powered healthcare web application that predicts stroke risk using patient health metrics with 94% accuracy. The platform features a dual-user authentication system and a User-Doctor Connect module that enables personalized health recommendations and communication between patients and doctors.",
    extraDescription:
      "Built with a scalable database architecture using SQLAlchemy ORM to manage health records and doctor profiles with automated schema migration.",
    techStack: [
      "Python",
      "Flask",
      "Machine Learning",
      "SQLite",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/your-github/heartguard",
    liveDemoUrl: null,
    images: [
      heartGuardHome,
      heartGuardLogin,
      heartGuardRegistration,
      heartGuardRiskPrediction,
      heartGuardProfile,
      heartGuardHistory,
    ],
    imageAlt: "HeartGuard application home preview",
    reverse: false,
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description:
      "A responsive Amazon-style e-commerce interface built using pure HTML, CSS, and JavaScript that replicates the layout and core UI components of the original platform.",
    extraDescription:
      "Implemented interactive navigation menus, product sections, and responsive layouts while strengthening frontend development skills including DOM manipulation and responsive design principles.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/charanramagiri/Amazon_Clone_Project",
    liveDemoUrl: null,
    images: [
      amazonCloneHome,
      amazonCloneCart,
      amazonCloneOrders,
      amazonCloneTracking,
    ],
    imageAlt: "Amazon clone home preview",
    reverse: true,
  },
];

export default projects;
