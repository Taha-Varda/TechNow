"use client"

import ContentSection from '@/components/ContentSection/ContentSection';
import BlurCta from '@/components/BlurCta/BlurCta';
import UniversalCTA from '@/components/UniversalCTA/UniversalCTA';
import './about.css'

export default function About_DE() {
  

  return (
    <div className="About-DE">

      <section className="about-hero py-6 px-4 flex-col align-center">
        <div className="about-hero-content flex-col align-center text-center gap20">
          <h3 className="subhead12">ÜBER UNS</h3>
          <h1 className='head88 darkGrey'>Deutschlands <br /> <span className='white'>modernste Boutique Beratung</span></h1>
          <p className="para20 darkGrey width60">Wir stehen unseren Kunden als Berater, Partner und Entwickler zur Seite, um Projekte und Ideen in Erfolgsgeschichten zu verwandeln.</p>
        </div>
      </section>
        <br /> <br />
      <ContentSection
        sectionTitle="UNSER GEHEIMNIS"
        mainHeading="Ihre Vision ist unsere Vision"
        paragraph1="Wir unterscheiden uns von anderen Beratungsfirmen durch unseren Boutique-Ansatz. Wir wissen, dass jedes Unternehmen einzigartig ist, und glauben, dass die Lösungen es auch sein sollten. Unsere maßgeschneiderten Strategien sind speziell auf Ihre Ziele, Ihre Branche und Ihre Herausforderungen zugeschnitten. Mit TechNow erhalten Sie nicht nur einen Dienstleister, sondern einen strategischen Partner, der sich Ihrem Erfolg verpflichtet fühlt."
        paragraph2="Wir bieten eine Partnerschaft, die auf Vertrauen, Transparenz und gemeinsamem Erfolg basiert. Unsere maßgeschneiderten Ansätze garantieren, dass Sie nicht nur heute erfolgreich sind, sondern auch für die Zukunft gerüstet sind."
        showContactInfo={false}
      />

        {/* Statistics Section */}
      <ContentSection
        sectionTitle="STATS"
        sectionTitleWidth="width20"
        isStatsSection={true}
        mainHeading=""
        paragraph1=""
        paragraph2=""
        stats={[
          {
            title: "Experten",
            value: "30+",
            description: "Unser Team von über 30 Experten setzt neue Branchenstandards."
          },
          {
            title: "Projekte",
            value: "60+",
            description: "Über 60 erfolgreich abgeschlossene Projekte in 12 Monaten."
          },
          {
            title: "Kunden",
            value: "50+",
            description: "Über 50 zufriedene Kunden vertrauen auf unsere Expertise."
          },
          {
            title: "Zufriedenheit",
            value: "100%",
            description: "Wir sind stolz auf eine 100% Zufriedenheitsrate bei unseren Kunden."
          },
          {
            title: "Zeilen Code",
            value: "1M+",
            description: "Unsere Entwickler haben über 1 Million Zeilen Code geschrieben."
          },
          {
            title: "Erreichbarkeit",
            value: "24/7",
            description: "Unsere Kunden können uns 24/7 erreichen."
          }
        ]}
      />

      <BlurCta />
      <br /><br /><br /><br />

      <ContentSection
        sectionTitle="TEAM"
        mainHeading="Das Herz von TechNow"
        paragraph1="Das Herz von TechNow sind unsere Mitarbeitenden – ein Team aus 30+ KI-Experten, Software Entwicklern, Systemadministratoren, Designern und Business-Experten, die an der Vision arbeiten, jedes Unternehmen zu einem KI-geführten Unternehmen zu machen."
        paragraph2="Mit einer Kombination aus Fachwissen, Kreativität und einem unermüdlichen Engagement für den Erfolg unserer Kunden setzen wir uns dafür ein, nicht nur Ihre Erwartungen zu erfüllen, sondern diese zu übertreffen."
        showContactInfo={false}
      />
  
      <UniversalCTA />

    </div>
  );
}