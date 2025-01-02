import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  ArrowLeft, Shield, Server, BrainCircuit, 
  Car, Lock, Network, FileKey, Target, Book, 
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import './Research.css';

const Research = () => {
  const { isDark, lang } = useTheme();

  const content = {
    ko: {
      title: "연구 계획서",
      subtitle: "데이터 프라이버시와 차량 통신 보안",
      backButton: "돌아가기",
      intro: "저는 자동차 보안 분야, 특히 데이터 프라이버시와 차량 통신 보안에 대한 연구를 진행하고자 합니다.",
      sections: [
        {
          icon: <Book size={24} />,
          title: "연구 배경 및 동기",
          content: [
            {
              text: "사이버보안공학과를 졸업하며 정보 보안의 다양한 분야를 학습했습니다. 특히 포렌식 기술을 통해 데이터를 분석하고 복원하는 과정에서 개인의 프라이버시와 데이터 보호의 중요성을 깨닫게 되었습니다. 이러한 경험은 저로 하여금 보안의 기술적 측면뿐만 아니라 윤리적 관점에서도 깊이 고민하게 만들었습니다."
            }
          ],
          tags: ["포렌식", "데이터 보호", "프라이버시"]
        },
        {
          icon: <Target size={24} />,
          title: "연구 목표",
          content: [
            {
              text: "차량 데이터 보호 및 통신 보안을 중심으로 연구를 진행 하려고합니다. 데이터 프라이버시 강화, 차량 통신 보안 개선, 법률 및 윤리적 기준 준수를 주요 목표로 설정했습니다."
            }
          ],
          tags: ["데이터 보호", "통신 보안", "윤리적 기준"]
        },
        {
          icon: <Lock size={24} />,
          title: "데이터 프라이버시 강화",
          content: [
            {
              text: "차량에서 수집되는 위치 정보 및 운전 패턴 데이터를 익명화하는 알고리즘을 설계하고, 차량 블랙박스 데이터의 암호화 및 무결성을 보장하는 시스템을 개발합니다."
            }
          ],
          tags: ["데이터 익명화", "암호화", "무결성 보장"]
        },
        {
          icon: <Shield size={24} />,
          title: "데이터 프라이버시",
          sections: [
            {
              title: "기술 발전의 양면성",
              content: [
                {
                  text: "우리는 하루가 다르게 발전하는 기술의 시대에 살고 있습니다. 차량은 더 이상 단순히 이동 수단이 아니라, 데이터를 생성하고 처리하며 우리의 일상과 연결된 거대한 디지털 플랫폼이 되었습니다. 하지만 이런 발전 뒤에는 보이지 않는 위험도 함께합니다. 바로 우리의 정보가 누군가에 의해 쉽게 노출되고 오용될 수 있다는 점입니다."
                }
              ]
            },
            {
              title: "연구의 시작점",
              content: [
                {
                  text: "제가 ",
                  highlight: "데이터 프라이버시 강화",
                  text2: "라는 주제를 선택한 이유는 단순히 기술을 발전시키기 위해서가 아닙니다. 이 연구는 사람들의 권리를 보호하고, 기술이 인간에게 진정으로 유익한 방향으로 나아가게 하기 위한 작은 발걸음입니다."
                }
              ]
            },
            {
              title: "차량 데이터, 누가 지켜야 할까?",
              content: [
                {
                  text: "차량은 우리의 위치, 이동 경로, 심지어 운전 습관까지도 기록합니다. 이 모든 정보는 개인의 삶을 고스란히 드러낼 수 있는 민감한 데이터입니다. 이 데이터를 보호하지 않는다면, 기술의 편리함은 곧 개인의 사생활 침해로 이어질 수 있습니다. 저는 차량 데이터를 다룰 때 '이 데이터는 누구의 것인가?'라는 질문에서 출발합니다. 답은 분명합니다. 이 데이터는 오롯이 개인의 것입니다."
                }
              ]
            },
            {
              title: "신뢰의 기반을 만들기 위해",
              content: [
                {
                  text: "데이터는 오늘날의 새로운 자원이라고 하지만, 개인의 프라이버시를 침해하면서까지 이를 활용해서는 안 됩니다. 기술은 투명하고 신뢰할 수 있어야 하며, 누구에게나 안심할 수 있는 환경을 제공해야 합니다."
                },
                {
                  text: "저는 차량에서 발생하는 모든 데이터가 ",
                  highlight: "익명화",
                  text2: "와 ",
                  highlight2: "암호화",
                  text3: "를 통해 안전하게 관리되도록 만들고 싶습니다. 데이터를 보호한다는 것은 단순히 해킹을 막는 것을 넘어, 사용자가 안심하고 기술을 믿을 수 있도록 보장하는 과정이라고 생각합니다."
                }
              ]
            },
            {
              title: "왜 이 일을 하고 싶은가",
              content: [
                {
                  text: "제가 데이터 프라이버시에 관심을 가진 이유는, 기술이 사람을 위해 존재해야 한다는 철학 때문입니다. 우리는 기술이 발전할수록 인간다움을 잃어가서는 안 됩니다. 예를 들어, 차량 블랙박스에 저장된 정보는 사고 조사에 중요한 역할을 하지만, 그것이 내 사생활을 위협하는 도구가 되어서는 안 됩니다. 제 연구는 이런 '균형'을 찾는 여정입니다. 데이터를 활용하면서도 개인의 권리를 침해하지 않는, 기술과 인간의 공존을 목표로 하고 있습니다."
                }
              ]
            },
            {
              title: "기술은 철학에서 출발해야 한다",
              content: [
                {
                  text: "기술 개발은 단순히 빠르고 강력한 시스템을 만드는 데서 끝나는 것이 아니라, 그것이 사람들에게 어떤 영향을 미칠지를 고민하는 데서 시작해야 합니다. 저는 데이터 보호 기술을 개발하면서 이런 질문을 항상 품고 있습니다.",
                  list: [
                    "이 기술이 사람들에게 어떤 가치를 줄 수 있을까?",
                    "이 시스템이 개인의 권리를 충분히 존중하고 있을까?"
                  ]
                }
              ]
            },
            {
              title: "나아가는 길",
              content: [
                {
                  text: "이 연구는 끝이 아니라 시작입니다. 데이터를 안전하게 보호하는 기술이 점차 표준이 되어야 하며, 나아가 기술을 사용하는 모든 사람이 그 가치를 이해하고 누릴 수 있는 환경을 만들고 싶습니다. 결국 제가 하고 싶은 일은 단순히 기술을 발전시키는 것이 아니라, 기술을 통해 사람들에게 더 나은 삶과 신뢰를 선사하는 것입니다."
                }
              ]
            },
            {
              title: "결론",
              content: [
                {
                  text: "기술은 인간을 위한 도구여야 하며, 데이터 보호는 단순한 선택이 아니라 필수적인 책임입니다. 제가 이 연구를 통해 이루고 싶은 것은, 누구나 안심하고 기술을 사용할 수 있는 세상을 만드는 것입니다. 이 여정을 통해 제가 작은 변화를 만들 수 있다면, 그것이 곧 제가 이 연구를 선택한 이유가 될 것입니다."
                }
              ]
            }
          ],
          tags: ["프라이버시", "기술", "데이터 보호", "사이버보안"]
        },
        {
          icon: <Network size={24} />,
          title: "차량 통신 보안",
          content: [
            {
              text: "차량 간 통신(V2V)과 차량-인프라 간 통신(V2I)에서 안전한 통신 프로토콜을 설계하고, 지능형 교통 시스템에서 프라이버시를 보장하는 인증 기술을 탐구합니다."
            }
          ],
          tags: ["V2V", "V2I", "프로토콜 설계"]
        },
        {
          icon: <FileKey size={24} />,
          title: "연구 계획",
          sections: [
            {
              title: "1단계: 이론 연구 및 배경 지식 습득",
              content: [
                {
                  text: "연구의 첫 단계에서는 기본적인 이론과 배경지식을 쌓는 데 집중하려고 합니다. 차량 데이터 프라이버시와 통신 보안 분야에서 기존에 어떤 연구가 있었는지 조사하고, 암호화와 익명화 같은 기술이 실제로 어떻게 적용되는지 배우고 싶습니다. 이를 통해 제가 다루는 연구가 더 명확하고 의미 있는 방향으로 나아갈 수 있을 것이라고 생각합니다."
                }
              ]
            },
            {
              title: "2단계: 실험 및 프로토타입 개발",
              content: [
                {
                  text: "이론을 바탕으로 간단한 실험과 프로토타입을 만들어 볼 계획입니다. 예를 들어, 차량 블랙박스 데이터를 안전하게 보호하는 방법이나 차량 간 통신에서 데이터를 안전하게 주고받는 방법을 설계하고, 작동하는지 테스트해보려고 합니다. 이 과정에서 제가 만든 아이디어가 실제로 어떻게 작동하는지 직접 확인하고, 부족한 부분을 개선하는 경험을 쌓고 싶습니다."
                }
              ]
            },
            {
              title: "3단계: 연구 결과 공유 및 발전",
              content: [
                {
                  text: "이런 과정을 통해 얻은 결과를 정리해서 논문이나 발표 형태로 공유하고 싶습니다. 제가 배우고 연구한 내용이 다른 사람들에게도 도움이 된다면, 연구를 더 발전시키는 데 중요한 계기가 될 것 같습니다. 석사 과정에서는 이 아이디어를 실제 환경에 적용하거나 더 발전시키는 방법을 배우고 싶습니다."
                }
              ]
            },
            {
              title: "기대 효과",
              content: [
                {
                  text: "이 연구는 제가 지금까지 배운 것을 실제로 활용해보는 좋은 기회가 될 것이며, 석사 과정에서 더 깊이 있는 연구를 할 수 있는 발판이 될 거라고 생각합니다."
                }
              ]
            }
          ],
          tags: ["이론 연구", "프로토타입", "논문 발표"]
        },
        {
          icon: <Car size={24} />,
          title: "기대 효과 및 포부",
          content: [
            {
              text: "차량 데이터 보호와 통신 보안 기술의 발전에 기여하여, 사용자가 안심하고 차량을 이용할 수 있는 환경을 만들고자 합니다. 나아가 이 분야의 전문가로 성장하여 기술과 윤리가 조화롭게 공존하는 세상을 만드는 데 일조하고 싶습니다."
            }
          ],
          tags: ["보안 기술", "사용자 보호", "기술 윤리"]
        }
      ]
    },
    en: {
      title: "Research Proposal",
      subtitle: "Data Privacy and Vehicle Communication Security",
      backButton: "Go Back",
      intro: "I aspire to conduct research in the field of automotive security, with a particular focus on data privacy and vehicle communication security.",
      sections: [
        {
          icon: <Book size={24} />,
          title: "Research Background and Motivation",
          content: [
            {
              text: "Graduating from the Department of Cybersecurity Engineering, I gained knowledge across various fields of information security. In particular, analyzing and restoring data through forensic technologies made me realize the importance of data protection and personal privacy. This experience led me to deeply reflect on security not only from a technical perspective but also from an ethical standpoint."
            }
          ],
          tags: ["Forensics", "Data Protection", "Privacy"]
        },
        {
          icon: <Target size={24} />,
          title: "Research Objectives",
          content: [
            {
              text: "I aim to focus my research on vehicle data protection and communication security. My primary objectives include enhancing data privacy, improving vehicle communication security, and ensuring compliance with legal and ethical standards."
            }
          ],
          tags: ["Data Protection", "Communication Security", "Ethical Standards"]
        },
        {
            icon: <Lock size={24} />,
            title: "Data Privacy Enhancement",
            content: [
              {
                text: "Designing algorithms to anonymize location information and driving pattern data collected from vehicles, and developing systems to ensure encryption and integrity of vehicle black box data."
              }
            ],
            tags: ["Data Anonymization", "Encryption", "Integrity"]
          },
        {
          icon: <Shield size={24} />,
          title: "Data Privacy",
          sections: [
            {
              title: "Technology Evolution",
              content: [
                {
                  text: "We live in an era of rapidly evolving technology. Vehicles are no longer just means of transportation; they have become vast digital platforms that generate and process data, connecting to our daily lives. However, behind this advancement lies an invisible risk - the potential exposure and misuse of our information."
                }
              ]
            },
            {
              title: "Research Motivation",
              content: [
                {
                  text: "My choice to focus on data privacy enhancement isn't merely about advancing technology. This research represents a small step toward protecting people's rights and ensuring technology progresses in a direction that truly benefits humanity."
                }
              ]
            },
            {
              title: "Vehicle Data Sensitivity",
              content: [
                {
                  text: "Vehicles record our location, travel patterns, and even driving habits. All this information is sensitive data that can reveal an individual's life in detail. Without proper protection, the convenience of technology can lead to privacy invasion."
                }
              ]
            },
            {
              title: "Data Sovereignty",
              content: [
                {
                  text: "When dealing with vehicle data, I start with the question: 'Who owns this data?' The answer is clear - it belongs to the individual. Therefore, my goal isn't simply to 'protect' data, but to ensure all technology is designed with individual rights at its core."
                }
              ]
            },
            {
              title: "Technology and Trust",
              content: [
                {
                  text: "While data is considered a new resource in today's world, it shouldn't be utilized at the expense of personal privacy. Technology must be transparent and trustworthy, providing a secure environment for everyone."
                }
              ]
            },
            {
              title: "Balance of Technology and Humanity",
              content: [
                {
                  text: "My interest in data privacy stems from the philosophy that technology should exist to serve people. We shouldn't lose our humanity as technology advances. For example, while vehicle black box data plays a crucial role in accident investigation, it shouldn't become a tool that threatens our privacy."
                }
              ]
            },
            {
              title: "Vision for the Future",
              content: [
                {
                  text: "This research is not an end but a beginning. Technologies for secure data protection should become standard, and I want to create an environment where everyone using technology can understand and enjoy its value. Ultimately, my goal isn't simply to advance technology, but to use it to provide people with a better life and trust."
                }
              ]
            }
          ],
          tags: ["Privacy", "Technology", "Data Protection", "Cybersecurity"]
        },
        {
          icon: <Network size={24} />,
          title: "Vehicle Communication Security",
          content: [
            {
              text: "Designing secure communication protocols for Vehicle-to-Vehicle (V2V) and Vehicle-to-Infrastructure (V2I) communications, and exploring authentication technologies that ensure privacy in intelligent transportation systems."
            }
          ],
          tags: ["V2V", "V2I", "Protocol Design"]
        },
        {
          icon: <FileKey size={24} />,
          title: "Research Plan",
          sections: [
            {
              title: "Phase 1: Theoretical Research and Background",
              content: [
                {
                  text: "In the first phase, I will focus on building theoretical foundations and background knowledge. I plan to investigate existing research in vehicle data privacy and communication security, and learn how encryption and anonymization technologies are practically applied. This will help ensure my research moves in a clear and meaningful direction."
                }
              ]
            },
            {
              title: "Phase 2: Experimentation and Prototype Development",
              content: [
                {
                  text: "Based on theoretical foundations, I plan to conduct experiments and develop prototypes. For example, I will design and test methods for securely protecting vehicle black box data and implementing secure data exchange in vehicle-to-vehicle communications. Through this process, I want to verify how my ideas work in practice and gain experience in improving areas that need enhancement."
                }
              ]
            },
            {
              title: "Phase 3: Research Sharing and Development",
              content: [
                {
                  text: "I aim to share the results through academic papers and presentations. If my research and findings can help others, it will be a significant stepping stone for advancing the research further. In graduate studies, I hope to learn how to apply and develop these ideas in real-world environments."
                }
              ]
            },
            {
              title: "Expected Outcomes",
              content: [
                {
                  text: "This research will be an excellent opportunity to practically apply what I've learned so far and will serve as a foundation for more in-depth research during my graduate studies."
                }
              ]
            }
          ],
          tags: ["Theoretical Research", "Prototype", "Publication"]
        },
        {
            icon: <Car size={24} />, 
            title: "Expected Impact and Aspirations", 
            content: [
              {
                text: "I aim to contribute to the advancement of vehicle data protection and communication security technologies, creating an environment where users can feel safe and confident while using their vehicles. Furthermore, I aspire to grow as an expert in this field and play a role in building a world where technology and ethics harmoniously coexist."
              }
            ], 
            tags: ["Security Technology", "User Protection", "Tech Ethics"]
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <>
      <Helmet>
        <title>PSTOR CV - Research</title>
      </Helmet>
      <div className="page">
        <Header />
        <main className={`research-page ${isDark ? 'dark' : ''}`}>
          <div className="research-page-content">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              {text.backButton}
            </Link>
            <div className="research-header">
              <h1>{text.title}</h1>
              <h2>{text.subtitle}</h2>
            </div>
            <p className="research-intro">{text.intro}</p>
            <div className="research-grid">
              {text.sections.map((section, index) => (
                <section key={index} className="research-section">
                  <div className="section-header">
                    {section.icon}
                    <h3>{section.title}</h3>
                  </div>
                  {section.sections ? (
                    section.sections.map((subsection, i) => (
                      <div key={i} className="research-subsection">
                        <h4 className="subsection-title">{subsection.title}</h4>
                        {subsection.content.map((item, j) => (
                          <p key={j}>
                            {item.text}
                            {item.highlight && <strong>{item.highlight}</strong>}
                            {item.text2}
                            {item.highlight2 && <strong>{item.highlight2}</strong>}
                            {item.text3}
                            {item.list && (
                              <ul>
                                {item.list.map((listItem, k) => (
                                  <li key={k}>{listItem}</li>
                                ))}
                              </ul>
                            )}
                          </p>
                        ))}
                      </div>
                    ))
                  ) : section.content ? (
                    section.content.map((item, i) => (
                      <p key={i}>{item.text}</p>
                    ))
                  ) : null}
                  <div className="tags">
                    {section.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Research; 