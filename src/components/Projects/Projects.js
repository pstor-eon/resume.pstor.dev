import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FolderGit2, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const { isDark, lang } = useTheme();
  
  const content = {
    ko: {
      title: "프로젝트",
      projects: [
        {
          title: "Linux Vulnerability Scanner",
          description: "리눅스 취약점을 진단할 수 있는 쉘 스크립트를 제작했습니다. 취약점 점검이 가능하며, 점검이 완료되면 txt 파일로 추출됩니다.",
          details: [
            "Language: Shell",
            "OS: Ubuntu 22.XX LTS, CentOS 7-2009",
            "Development period: 3 weeks",
            "Tags: Shell script, Linux"
          ],
          links: [
            {
              label: "Github",
              url: "https://github.com/pstor-eon/linux_script"
            }
          ]
        },
        {
          title: "PSTOR Vehicle CTF (PVC)",
          description: "K-Shield에서 차량 보안 CTF를 개최했습니다. 포렌식과 암호학 분야의 차량 CTF 문제를 제작하고 운영했습니다.",
          details: [
            "Category: Vehicle Security",
            "Focus: Forensics, Cryptography",
            "Role: Challenge Creator & Operator"
          ],
          links: [
            {
              label: "프로젝트 이야기",
              url: "https://pstor.dev/pvc/"
            },
            {
              label: "문제 보기",
              url: "https://pstor.dev/pvc/"
            }
          ]
        }
      ]
    },
    en: {
      title: "Projects",
      projects: [
        {
          title: "Linux Vulnerability Scanner",
          description: "Created a shell script that can diagnose Linux vulnerabilities. The script performs vulnerability checks and exports results to a txt file.",
          details: [
            "Language: Shell",
            "OS: Ubuntu 22.XX LTS, CentOS 7-2009",
            "Development period: 3 weeks",
            "Tags: Shell script, Linux"
          ],
          links: [
            {
              label: "Github",
              url: "https://github.com/pstor-eon/linux_script"
            }
          ]
        },
        {
          title: "PSTOR Vehicle CTF (PVC)",
          description: "Hosted a vehicle security CTF at K-Shield. Created and operated CTF challenges in forensics and cryptography for vehicle security.",
          details: [
            "Category: Vehicle Security",
            "Focus: Forensics, Cryptography",
            "Role: Challenge Creator & Operator"
          ],
          links: [
            {
              label: "Project Story",
              url: "https://pstor.dev/pvc/"
            },
            {
              label: "More Challenges",
              url: "https://pstor.dev/pvc/"
            }
          ]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className={`projects ${isDark ? 'dark' : ''}`}>
      <h2>
        <FolderGit2 size={20} />
        {text.title}
      </h2>
      <div className="projects-content">
        {text.projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-details">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 