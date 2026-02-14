import "./Skills.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaBolt,
  FaBrain,
  FaCodeBranch,
  FaCubesStacked,
  FaFireFlameCurved,
} from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import {
  SiC,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVscodium,
} from "react-icons/si";

const skillCategories = [
  {
    category: "LANGUAGES",
    items: [
      { name: "Java", Icon: FaJava, colorClass: "icon-java" },
      { name: "Python", Icon: SiPython, colorClass: "icon-python" },
      { name: "C", Icon: SiC, colorClass: "icon-c" },
    ],
  },
  {
    category: "FRONTEND",
    items: [
      { name: "React", Icon: SiReact, colorClass: "icon-react" },
      { name: "JavaScript", Icon: SiJavascript, colorClass: "icon-javascript" },
      { name: "HTML", Icon: SiHtml5, colorClass: "icon-html" },
      { name: "CSS", Icon: SiCss3, colorClass: "icon-css" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "icon-tailwind" },
      { name: "Framer Motion", Icon: SiFramer, colorClass: "icon-framer" },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, colorClass: "icon-node" },
      { name: "Express", Icon: SiExpress, colorClass: "icon-express" },
      { name: "Spring Boot", Icon: SiSpringboot, colorClass: "icon-spring" },
      { name: "RESTful APIs", Icon: FaCodeBranch, colorClass: "icon-rest" },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", Icon: SiMysql, colorClass: "icon-mysql" },
      { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "icon-postgresql" },
      { name: "MongoDB", Icon: SiMongodb, colorClass: "icon-mongodb" },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", Icon: SiGit, colorClass: "icon-git" },
      { name: "GitHub", Icon: SiGithub, colorClass: "icon-github" },
      { name: "VS Code", Icon: SiVscodium, colorClass: "icon-vscode" },
      { name: "Cursor", Icon: FaBolt, colorClass: "icon-cursor" },
    ],
  },
  {
    category: "CORE",
    items: [
      { name: "DSA", Icon: FaBrain, colorClass: "icon-dsa" },
      { name: "MERN Stack", Icon: FaFireFlameCurved, colorClass: "icon-mern" },
      { name: "Java Full Stack", Icon: FaCubesStacked, colorClass: "icon-fullstack" },
    ],
  },
];

function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  const rowVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
            staggerChildren: 0,
            delayChildren: 0,
          },
        },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.14,
            delayChildren: 0.06,
          },
        },
      };

  const skillItemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.58,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <MotionSection className="skills" id="skills">
      <div className="skills-wrapper">
        <h2>Skills</h2>

        <div className="skills-matrix">
          {skillCategories.map((group) => (
            <MotionDiv
              className="skills-row"
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={rowVariants}
            >
              <h3 className="skills-category">{group.category}</h3>

              <div className="skills-items">
                {group.items.map((skill) => (
                  <MotionSpan className="skill-item" key={skill.name} variants={skillItemVariants}>
                    <skill.Icon className={`skill-icon ${skill.colorClass}`} aria-hidden="true" focusable="false" />
                    <span>{skill.name}</span>
                  </MotionSpan>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export default Skills;
