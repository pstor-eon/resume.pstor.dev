import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { isDark, lang } = useTheme();

  const content = {
    ko: {
      title: "자기소개",
      backButton: "돌아가기",
      sections: [
        {
          title: "저는 이런 사람입니다",
          content: `안녕하세요, 김철언입니다. 어린 시절부터 컴퓨터와 함께해온 경험은 저를 자연스럽게 사이버보안공학 전공으로 이끌었습니다. 학문적 탐구를 넘어 다양한 활동에 참여하며 사이버보안의 넓은 영역을 체험하고 실질적인 경험을 쌓아왔습니다.

케이쉴드(K-Shield)에서의 교육은 제 인생에 있어 중요한 전환점이 되었습니다. 교육 과정을 통해 차량 보안의 가능성과 필요성을 깊이 깨달았고, 이를 계기로 차량 보안을 주제로 한 프로젝트를 진행하게 되었습니다.

당시 실제 차량 데이터를 활용할 수 없는 한계가 있었지만, 가상의 데이터를 제작하여 문제를 해결하였습니다. 이를 기반으로 차량 보안 CTF(Capture the Flag)를 직접 개최하며 관련 기술을 실질적으로 적용하고 학습할 기회를 만들었습니다. 이러한 경험은 제게 차량 보안에 대한 깊은 관심을 심어주었고, 직접적인 데이터를 다루고자 하는 열망을 더욱 키우게 되었습니다.

저는 대학원에서 차량 보안 기술에 대한 첨단 연구를 수행하며 이 분야의 전문가로 성장하고자 합니다. 제 연구 관심사는 다음과 같습니다.

데이터 프라이버시 보호
차량에서 생성되는 다양한 데이터를 보호하는 것은 매우 중요한 이슈입니다. 주요 연구 분야는 다음과 같습니다:
- 위치 정보 및 운전 패턴 데이터의 익명화
- 차량 블랙박스 데이터의 암호화 및 무결성 보장
- 개인정보 보호법을 준수하는 데이터 수집 및 처리

차량 통신 보안
지능형 교통 시스템(ITS)에서 차량 간 통신(V2V) 및 차량과 인프라 간 통신(V2I)의 보안을 확보하는 것은 또 다른 중요한 연구 주제입니다. 주요 연구 분야는 다음과 같습니다:
- 차량 간 안전한 통신 프로토콜 개발
- 프라이버시를 보장하는 인증 기술 설계
- 차량 네트워크(VANET)의 보안 방법론 탐구

저는 이러한 연구를 통해 자동차 산업이 직면한 보안 문제를 해결하고, 보다 안전하고 신뢰할 수 있는 교통 환경을 만드는 데 기여하고자 합니다.

저의 열정과 경험, 그리고 구체적인 목표를 바탕으로 대학원에서 제 역량을 최대한 발휘할 것입니다. 귀교의 우수한 연구 환경과 교수님의 지도 아래 제 비전은 더욱 구체화되고 실현될 것이라 확신합니다. 귀교의 대학원 과정에 합류할 기회를 주신다면, 제 노력과 헌신을 통해 가치 있는 성과를 만들어가겠습니다.

감사합니다.`
        },
        {
          title: "성적 그 너머",
          content: `저는 학부 시절 동안 학업에 꾸준히 전념하지 못했던 점이 아쉽게 느껴집니다. 이는 저의 부족함에서 비롯된 결과임을 인정합니다. 한때 진로에 대한 명확한 방향성을 찾지 못해 방황했고, 이 과정에서 여러 가지를 시도하면서 학점 관리가 소홀해졌습니다. 하지만 이러한 시행착오는 제가 진정으로 원하는 분야를 발견하는 데 중요한 밑거름이 되었습니다.

학부 시절 저는 통신 보안, 네트워크 프로토콜, 악성코드 분석, 시스템 보안 등 다양한 세부 분야를 접하며 많은 경험을 쌓았습니다. 여러 프로젝트와 동아리 활동에 참여하면서 실무 중심의 학습을 이어갔고, 온라인 강의를 통해 부족한 부분을 보완하며 스스로 학습해 나갔습니다. 또한, 여러 컨퍼런스에 참석해 최신 기술 동향을 익히고, 전문가들과의 교류를 통해 인사이트를 얻었습니다. 이러한 경험들은 제게 단순히 '학점을 잘 받기 위한 공부' 이상의 가치를 깨닫게 했습니다.

특히, 다양한 분야를 탐구하던 중 차량 보안이라는 목표를 확립하게 되었습니다. 차량 보안은 끊임없는 학습과 실질적인 경험이 요구되는 분야이며, 이를 선택한 이후 저는 더 이상 방황하지 않고 꾸준히 노력하며 목표를 향해 나아가고 있습니다. 비록 학점이 낮아 보일 수 있지만, 저는 그동안 쌓아온 경험과 실질적인 지식을 기반으로 학업 성취 이상의 역량을 갖추었다고 자부합니다.

저는 대학원 과정을 통해 이러한 역량을 구체적 연구 성과로 연결하고자 합니다. 귀교의 훌륭한 교수님들과 함께 배우고 연구하며, 기술적으로나 인격적으로 성장하고 싶습니다. 학부 시절의 시행착오를 통해 얻은 깨달음은 제가 진정으로 열정을 쏟을 수 있는 분야를 찾는 데 큰 도움이 되었으며, 이를 바탕으로 차량 보안 분야에서 의미 있는 성과를 이루고자 하는 동기가 되었습니다.

제게 주어진 기회를 통해 학문적으로나 개인적으로 한 단계 더 성장하고 싶습니다. 차량 보안이라는 목표를 이루기 위해 흔들림 없이 최선을 다할 준비가 되어 있으며, 이 분야에서의 도전을 통해 저 자신을 증명해 보이고자 합니다.`
        },
        {
          title: "진짜 어른",
          content: `저는 제 삶에서 진정한 멘토와 스승의 필요성을 깊이 깨닫고 있습니다. 지금까지 스스로 많은 시행착오를 겪으며 배움을 쌓아왔지만, 이제는 저를 올바른 방향으로 이끌어 줄 지도자가 필요하다고 느낍니다. 특히 차량 보안이라는 도전적인 분야에서 성공하기 위해서는 기술적 지식뿐 아니라 올바른 가치관과 방향성을 제시해 줄 스승의 존재가 반드시 필요하다고 믿습니다.

저는 독학과 다양한 시도를 통해 많은 경험을 쌓아왔습니다. 하지만 제가 목표로 하는 높은 수준의 기술적 전문성과 책임감 있는 전문가로 성장하기 위해서는, 경험 많고 지혜로운 지도자의 가르침이 절실합니다. 귀교의 학문적 환경과 교수님들의 지도는 단순한 학문적 성취를 넘어, 제 인생의 새로운 전환점을 마련해 줄 소중한 기회라고 확신합니다.

저는 자율주행차와 커넥티드카 등 미래 모빌리티의 발전과 그에 따른 보안 문제를 접하면서, 이 분야야말로 제 열정을 쏟아부을 만한 가치가 있다고 확신하게 되었습니다. 자동차와 로봇이 단순한 이동 수단을 넘어 데이터가 오가는 플랫폼으로 변화하고 있다는 사실은 저에게 강한 영감을 주었습니다. 이러한 변화 속에서, 저는 차량 보안 분야에서 기술적 전문성을 갖춘 전문가로 성장하여 안정적이고 안전한 모빌리티 환경을 만들어가는 데 기여하고 싶습니다.

장기적으로는 국내외 완성차 업체, 보안 솔루션 기업, 혹은 연구기관에서 차량 보안 전문가로 활동하며, 이 분야에서 중요한 역할을 수행하는 것이 제 목표입니다. 이를 위해 대학원 과정은 제게 필수적인 발판이며, 단순히 학문을 배우는 것을 넘어 저의 열정과 잠재력을 연구 성과로 증명해내는 기회가 될 것입니다.

물론 제 학부 성적은 뛰어나지 않았습니다. 하지만 시행착오 속에서 꾸준히 학습하며 제 진로를 명확히 찾았다는 점은 제 스스로 자부할 만한 성과입니다. 학부 시절 부족했던 점을 교훈 삼아, 대학원에서는 한층 더 발전된 모습으로 연구와 학업에 매진할 준비가 되어 있습니다. 이 과정에서 교수님의 지도와 가르침은 저에게 큰 원동력이 될 것이라 확신합니다.

저는 저의 열정과 성실함을 바탕으로 차량 보안 분야에서 의미 있는 성과를 이루고, 책임감 있는 전문가로 성장하겠다는 각오로 지원합니다. 저의 가능성을 믿어주신다면, 이를 반드시 입증해 보이겠습니다. 감사합니다.`
        },
        {
          title: "목표",
          content: `저는 차량 보안 분야에서 구체적인 목표를 가지고 있습니다. 우선, 대학원에서는 차량의 전자 제어 시스템과 커넥티드카 보안과 같은 현대 자동차의 핵심 기술을 보호하는 방법에 대해 깊이 있는 연구를 수행하고자 합니다. 특히, 자율주행차와 전기차의 보안 문제를 해결하는 기술을 개발하여 안전한 교통 환경을 조성하는 데 기여하고 싶습니다.

대학원 졸업 후에는 연구와 실무를 겸비한 전문가로 성장하여 자동차 제조업체, 특히 현대자동차와 같은 글로벌 기업에서 차량 보안 분야의 선도적인 역할을 수행하고 싶습니다. 이와 함께, 사이버 보안 기술을 바탕으로 차량 설계 단계부터 보안을 내재화하는 프로세스를 연구하고 적용하며, 실제 차량의 보안을 강화하는 데 기여하고자 합니다.

더 나아가, 먼 훗날 현대자동차가 F1에 진출하게 된다면, 저는 그 팀의 일원으로서 차량의 기술적 안전성과 성능을 극대화하는 데 기여하고 싶습니다. F1은 기술 혁신의 정점에 있는 분야로, 이곳에서의 경험은 제가 꿈꾸는 차량 보안 기술의 발전과 실질적인 적용을 이루는 데 있어 최상의 기회가 될 것입니다.

이러한 목표를 이루기 위해 저는 귀교에서의 학업과 연구를 통해 차량 보안 기술의 전문성을 쌓고, 글로벌 시장에서 인정받는 전문가로 성장할 것을 다짐합니다. 귀교에서의 시간은 제 꿈을 실현하는 데 있어 중요한 발판이 될 것입니다. 저를 귀교의 일원으로 받아주신다면, 제 열정과 성실함으로 의미 있는 성과를 만들어가겠습니다.`
        }
      ]
    },
    en: {
      title: "About Me",
      backButton: "Go Back",
      sections: [
        {
          "title": "Who I Am",
          "content": "Hello, my name is Cheol-eon Kim. Ever since I was young, I have been deeply fascinated by computers, which naturally led me to pursue a major in Cybersecurity Engineering. Beyond academic studies, I have participated in various activities that allowed me to explore the broad scope of cybersecurity and gain practical experience.\n\nMy training at K-Shield was a pivotal turning point in my life. Through this program, I realized both the potential and necessity of automotive security, which inspired me to undertake a project on vehicle security. Although I was unable to use real vehicle data at the time, I addressed this limitation by creating simulated data. Building on that, I hosted my own vehicle security Capture the Flag (CTF) competition, which provided an opportunity to apply and learn relevant technologies in a hands-on setting. This experience kindled my strong interest in vehicle security and further fueled my desire to work with real-world data.\n\nIn graduate school, I aim to conduct advanced research on vehicle security technologies and become a leading expert in this field. My research interests include:\n\nData Privacy Protection\nProtecting the wide range of data generated within vehicles is extremely important. My key research areas in this field are:\n- Anonymizing location information and driving patterns\n- Encrypting and ensuring the integrity of vehicle black box data\n- Complying with privacy regulations in data collection and processing\n\nVehicle Communication Security\nSecuring communications between vehicles (V2V) and between vehicles and infrastructure (V2I) in Intelligent Transportation Systems (ITS) is another critical research area. My main interests here include:\n- Developing secure communication protocols for vehicle-to-vehicle communication\n- Designing authentication technologies that protect privacy\n- Exploring security methodologies for vehicle ad hoc networks (VANETs)\n\nThrough my research, I hope to tackle the security challenges faced by the automotive industry and contribute to creating a safer, more reliable transportation environment. With my passion, experience, and clear objectives, I believe I will be able to perform at my best in graduate school. Under the guidance of outstanding faculty and within your excellent research environment, I am confident that my vision will take shape and be successfully realized.\n\nThank you for your consideration. I look forward to the opportunity to join your graduate program and devote myself to producing valuable results."
        },        
        {
          "title": "Beyond Grades",
          "content": "I regret not being able to fully dedicate myself to academics during my undergraduate years. I acknowledge that this outcome stems from my own shortcomings. At one point, I struggled to find a clear career path, and during this period of exploration, my focus on managing my grades diminished. However, these trials and errors became a valuable foundation for discovering the field I am truly passionate about.\n\nDuring my undergraduate years, I explored various subfields such as communication security, network protocols, malware analysis, and system security, gaining a wide range of experiences. I participated in numerous projects and club activities, pursuing hands-on learning while supplementing my knowledge through online courses. Additionally, I attended various conferences to stay updated on the latest technological trends and gained insights through interactions with experts. These experiences taught me the value of learning beyond merely striving for good grades.\n\nAmong the diverse fields I explored, I eventually identified my goal in automotive security. This field demands continuous learning and practical experience, and since setting this goal, I have remained focused and consistently worked toward it. While my grades may appear modest, I take pride in the experience and practical knowledge I have accumulated, which I believe demonstrate my capabilities beyond academic achievements.\n\nThrough the graduate program, I aim to translate these capabilities into tangible research outcomes. I hope to learn and collaborate with the esteemed professors at your institution, growing both technically and personally. The lessons I learned from my undergraduate challenges have been instrumental in helping me find a field I am genuinely passionate about, and they motivate me to achieve meaningful results in automotive security.\n\nI am eager to seize this opportunity to further develop academically and personally. I am prepared to commit wholeheartedly to achieving my goals in automotive security and to proving myself through the challenges in this field."
        },
        {
          "title": "A True Mentor",
          "content": "I have come to deeply realize the necessity of a true mentor and teacher in my life. While I have learned and grown through countless trials and errors on my own, I now feel the need for a guide who can lead me in the right direction. Particularly in the challenging field of automotive security, I believe the presence of a mentor who can provide not only technical knowledge but also the right values and guidance is essential for success.\n\nThrough self-study and diverse experiences, I have gained a wealth of knowledge. However, to achieve the high level of technical expertise and to grow into a responsible professional that I aspire to be, I am in need of the teachings of an experienced and wise leader. I am confident that the academic environment of your institution and the guidance of your esteemed professors will provide not only academic achievements but also a pivotal turning point in my life.\n\nAs I encountered the development of future mobility, such as autonomous vehicles and connected cars, and the accompanying security challenges, I became convinced that this field is truly worth devoting my passion to. The transformation of cars and robots from mere means of transportation into platforms for data exchange has deeply inspired me. In this evolving landscape, I aim to grow into a technically proficient expert in automotive security, contributing to creating a safe and secure mobility environment.\n\nIn the long term, my goal is to work as a vehicle security specialist at major automotive companies, security solution firms, or research institutions, both domestically and internationally. To achieve this, a graduate program is an essential stepping stone for me, offering an opportunity not only to learn but also to prove my passion and potential through meaningful research outcomes.\n\nAlthough my undergraduate grades were not outstanding, I take pride in the fact that I consistently learned from my mistakes and ultimately identified a clear career path. Reflecting on my shortcomings during my undergraduate years, I am now ready to fully dedicate myself to research and academics in graduate school. I am confident that the guidance and mentorship from your professors will serve as a tremendous source of motivation for me.\n\nWith my passion and dedication, I am determined to achieve significant results in the field of automotive security and to grow into a responsible professional. If given the opportunity, I will prove my potential and make the most of this chance. Thank you."
        },
        {
          "title": "Goals",
          "content": "I have specific goals in the field of automotive security. In graduate school, I aim to conduct in-depth research on protecting key technologies of modern vehicles, such as electronic control systems and connected car security. In particular, I want to develop technologies that address security issues in autonomous and electric vehicles, contributing to the creation of a safer transportation environment.\n\nAfter graduating, I aspire to grow into a professional who combines research and practical expertise, playing a leading role in the automotive security field at global companies like Hyundai Motor Company. Additionally, I plan to research and implement processes that embed cybersecurity into the vehicle design stage, strengthening the security of actual vehicles.\n\nLooking further ahead, if Hyundai Motor Company eventually enters Formula 1, I dream of being part of that team, contributing to maximizing the technical safety and performance of the vehicles. Formula 1 represents the pinnacle of technological innovation, and the experience gained in this arena would provide the ultimate opportunity to advance and apply the automotive security technologies I envision.\n\nTo achieve these goals, I am committed to building expertise in vehicle security technologies through academic and research opportunities at your esteemed institution. My time at your university will be a crucial stepping stone toward realizing my dreams. If given the chance to join your institution, I will bring my passion and dedication to achieving meaningful outcomes."
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <>
      <Helmet>
        <title>PSTOR CV - About</title>
      </Helmet>
      <div className="page">
        <Header />
        <main className={`about ${isDark ? 'dark' : ''}`}>
          <div className="about-content">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              {text.backButton}
            </Link>
            <h1>{text.title}</h1>
            {text.sections.map((section, index) => (
              <section key={index} className="about-section">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About; 