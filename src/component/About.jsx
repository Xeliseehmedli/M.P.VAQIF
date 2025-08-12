import "./About.scss";
import VaqifImage from "../assets/image 1.png";
import Vaqifimage from "../assets/image 2.png";

export default function About() {
  return (
    <main className="about-main">
      <section id="about">
        <div className="about-section">
          <h1>About</h1>
          <div className="about-text-image-wrapper">
            <div className="about-image-container">
              <img src={VaqifImage} alt="VaqifImage" />
            </div>
            <p>
              1717-ci ildə Qazax mahalının Salahlı kəndində doğulub. Əsl adı
              Pənah, atasının adı Mehdi,
              <br />
              təxəllüsü Vaqifdir. Ziyalı bir şəxs olduğuna görə ona xalq
              arasında «Molla» titulu verilib və o,
              <br />
              «Molla Pənah» ad ünvanı ilə tanınıb. Vaqif yüksək təhsil görmüş,
              doğma dilindən əlavə ərəb-fars
              <br />
              dillərini, bir sıra dini və dünyəvi elmləri kifayət qədər
              mənimsəyib. Onun dərs aldığı müəllimlərdən
              <br />
              dövrünün tanınmış alimlərindən olan Şəfi Əfəndinin adı məlumdur.
              Şairin həyatı təxminən 42
              <br />
              yaşına qədər Qazaxla bağlı olub.
            </p>
          </div>

          <div className="about-text-image-wrapper">
            <p>
              Vaqif kiçik yaşlarında mədrəsədə alim və müəllim Şəfi Əfəndinin
              yanında təhsil alır, ərəb və fars
              <br />
              dillərinə mükəmməl yiyələnib. O, həm də astronomiya, riyaziyyat,
              musiqi və poetika üzrə biliklərə də
              <br />
              malik idi. <br />
              <br />
              XVIII əsrin 50-ci illərinin sonlarında Qazax mahalında və qonşu
              Gürcüstan sərhədlərində feodal
              <br />
              münaqişələri nəticəsində təxminən 1759-cu ildə Qazax kəndlərinin
              sakinləri Qarabağ xanlığına
              <br />
              köçməli olurlar. Vaqifin ailəsi də köçürülən ailələr arasında idi.
              Ailə Cavanşir mahalının Tərtərbasar
              <br />
              kəndində yerləşir. Vaqif bu kənddə təhsil almağa başlayır. Və
              sonra özü məktəb açaraq buradakı
              <br />
              uşaqları öyrətməyə davam edir. Bir müddət sonra Vaqif Qarabağ
              xanlığının mərkəzi Şuşa şəhərinə
              <br />
              köçərək Saatlı məhəlləsində məktəb təsis edir. <br />
              <br />
              1769–1770-ci illərdə Molla Pənah Vaqifin alimlik və şöhrətlik
              nüfuzu Qarabağ xan sarayına da çatır.
              <br />
              Qarabağ xanı İbrahimxəlil xan Molla Pənah Vaqifi xan sarayına
              dəvət edir və Mirzə Vəli Baharlı bildirir
              <br />
              ki, Molla Pənah Vaqifin ay tutulması və zəlzələ barədə əvvəlcədən
              xəbər verdiyi zaman xan
              <br />
              təəccüblənir. Vaqiflə tanış olub, biliklərini yüksək
              qiymətləndirərək, onun xanlığın rəhbərliyinə cəlb
              <br />
              etmək qərarına gəlir. İbrahimxəlil xan Vaqifi əvvəlcə eşikağası,
              xarici işlər naziri, sonra isə onu özünün
              <br />
              baş vəziri, yəni daxili işlər üzrə vəzir təyin edir. Molla Pənah
              vəfatına qədər bu vəzifədə qalır.
            </p>
            <div>
              <img src={Vaqifimage} alt="Vaqifimage" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
