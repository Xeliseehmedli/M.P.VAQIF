import "./Home.scss";
import { useEffect, useState } from "react";
import background from "../assets/background.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "timeline"];
      let current = activeSection;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <div className="header-top">
        <div className="logo">
          <p>MPV</p>
        </div>
        <div className="nav">
          <ul>
            <li className={activeSection === "timeline" ? "active" : ""}>
              <a href="#timeline">Timeline</a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-content">
        <p>
          Molla <br /> Pənah <br /> Vaqif
        </p>
        <p className="poem">
          Ala gözlü, sərv boylu dilbərim, <br />
          Həsrətin çəkdiyim canan, bəri bax! <br />
          Gecə-gündüz fikrim, zikrim, əzbərim, <br />
          Üzüldü taqətim, aman, bəri bax!
        </p>
      </div>
    </header>
  );
}
