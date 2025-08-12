import "./Timeline.scss";
import img1983 from "../assets/1983.png";
import img2021 from "../assets/2021.png";
import img2022 from "../assets/2022.png";
import img2023 from "../assets/2023.png";
import img2024 from "../assets/2024.png";
export default function Timeline() {
  return (
    <main>
      <section id="timeline">
        <div className="poezia-section">
          <h1>Vaqif Poeziya günləri</h1>
          <p>
            Azərbaycanın zəngin ədəbi irsinin təbliğində və klassik poeziyanın
            yaşadılmasında mühüm rol oynayan Vaqif Poeziya Günləri <br />
            XVIII əsr Azərbaycan ədəbiyyatının görkəmli nümayəndəsi, şair və
            dövlət xadimi Molla Pənah Vaqifin xatirəsinə həsr <br />
            olunmuşdur. Bu ənənəvi ədəbi-mədəni tədbir Heydər Əliyev Fondu,
            Azərbaycan Respublikasının Mədəniyyət Nazirliyi və <br />
            Azərbaycan Yazıçılar Birliyinin təşkilatçılığı ilə həyata keçirilir.
            Azərbaycan ədəbiyyatının görkəmli nümayəndəsi Molla Pənah <br />
            Vaqif Qazaxda dünyaya göz açsa da, Şuşada məşhurlaşmış, ömrünün çox
            hissəsini yaşamış və burada dəfn edilmişdir. Vaqifin <br />
            Şuşada yaşadığı dövrdə də hər bir azərbaycanlı üçün əziz olan bu
            şəhər Azərbaycanın mədəniyyət mərkəzi sayılırdı. <br /> <br />
            Vaqif Poeziya Günlərinin keçirilməsinə başlanması və bu tədbirin
            ənənəvi xarakter alması Ümummilli Lider Heydər Əliyevin adı <br />
            ilə bağlıdır. 1967-ci ildə Şuşada olarkən Ümummilli Lider Vaqifin
            məzarını ziyarət etmək istəmiş, lakin məzarı tapa bilməmişdir.{" "}
            <br />
            Sonradan onun göstərişi ilə dahi şairin məzarı tapılmış və məzarın
            üzərində 1980-81-ci illərdə abidə və türbə tikilmişdir.
          </p>
        </div>
        <div className="years-container">
          <div className="year-item">
            <p>1982</p>
            <div>
              <img src={img1983} alt="1983" />
            </div>
          </div>
          <div className="year-item">
            <p>2021</p>
            <div>
              <img src={img2021} alt="2021" />
            </div>
          </div>
          <div className="year-item">
            <p>2022</p>
            <div>
              <img src={img2022} alt="2022" />
            </div>
          </div>
          <div className="year-item">
            <p>2023</p>
            <div>
              <img src={img2023} alt="2023" />
            </div>
          </div>
          <div className="year-item">
            <p>2024</p>
            <div>
              <img src={img2024} alt="2024" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
