"use client"

import Hero from '@/components/VideoHero/Hero';
import './home.css';
import LogoSlider from '@/components/LogoSlider/LogoSlider';
import ContentSection from '@/components/ContentSection/ContentSection';
import BlurCta from '@/components/BlurCta/BlurCta';
import FAQ from '@/components/FAQ/FAQ';
import Button from '@/components/Button/Button';
import { IoCheckmark } from "react-icons/io5";
import UniversalCTA from '@/components/UniversalCTA/UniversalCTA';
import ContactInfo from '@/components/ContactInfo/ContactInfo';
import KnowUsSection from '@/components/KnowUsCta/KnowUs';

export default function Home() {
  const faqs = [
    {
      question: "Was genau versteht man unter KI-Beratung?",
      answer: "KI-Beratung umfasst eine Reihe von Dienstleistungen, die darauf abzielen, Unternehmen bei der Integration und Nutzung künstlicher Intelligenz zu unterstützen. Dies beinhaltet die Bewertung der aktuellen Geschäftsprozesse, die Identifikation von Bereichen, die von KI profitieren könnten, die Entwicklung maßgeschneiderter KI-Lösungen, die Implementierung dieser Lösungen und die Schulung von Mitarbeitern im Umgang mit neuen KI-Technologien."
    },
    {
      question: "Wie kann mein Unternehmen von KI profitieren?",
      answer: "KI kann Unternehmen auf vielfältige Weise nutzen, darunter die Automatisierung routinemäßiger Aufgaben, die Verbesserung der Entscheidungsfindung durch datengetriebene Einblicke, die Steigerung der Effizienz, die Reduzierung von Betriebskosten und die Ermöglichung neuer oder verbesserter Produkte und Dienstleistungen. Der spezifische Nutzen hängt von Ihren individuellen Geschäftszielen und -prozessen ab."
    },
    {
      question: "Ist KI nur für große Unternehmen oder auch für KMUs geeignet?",
      answer: "Künstliche Intelligenz ist für Unternehmen aller Größen geeignet. Während große Unternehmen möglicherweise über mehr Ressourcen verfügen, um in KI zu investieren, gibt es zahlreiche skalierbare und zugängliche KI-Lösungen, die speziell für die Bedürfnisse und Budgets von KMUs entwickelt wurden. Unser Ansatz ist es, maßgeschneiderte Lösungen zu bieten, die auf die spezifischen Anforderungen und Kapazitäten jedes Unternehmens zugeschnitten sind."
    },
    {
      question: "Welche Arten von KI-Lösungen kann TechNow entwickeln?",
      answer: "Wir entwickeln eine breite Palette von KI-Lösungen, einschließlich, aber nicht beschränkt auf, automatisierte Kundenservice-Systeme, Chatbots, Empfehlungssysteme, Betrugserkennung, Prozessautomatisierung, Predictive Analytics und personalisierte Marketingstrategien. Unsere Lösungen sind branchenübergreifend einsetzbar, einschließlich Finanzdienstleistungen, Gesundheitswesen, Einzelhandel, Produktion und mehr."
    },
    {
      question: "Wie läuft der Implementierungsprozess einer KI-Lösung ab?",
      answer: "Der Implementierungsprozess beginnt mit einer gründlichen Bewertung Ihrer aktuellen Systeme und Geschäftsprozesse. Basierend auf dieser Analyse entwickeln wir einen maßgeschneiderten Plan für die Entwicklung und Einführung der KI-Lösung. Nach der Entwicklung sorgen wir für eine reibungslose Integration in Ihre bestehenden Systeme und bieten umfangreiche Schulungen für Ihre Teams, um sicherzustellen, dass Sie das volle Potenzial der neuen Technologie ausschöpfen können."
    },
    {
      question: "Was unterscheidet TechNow von anderen KI-Beratungsunternehmen?",
      answer: "Wir unterscheiden uns von anderen Beratungsfirmen durch unseren Boutique-Ansatz. Wir wissen, dass jedes Unternehmen einzigartig ist, und glauben, dass die Lösungen es auch sein sollten. Unsere maßgeschneiderten Strategien sind speziell auf Ihre Ziele, Ihre Branche und Ihre Herausforderungen zugeschnitten. Mit TechNow erhalten Sie nicht nur einen Dienstleister, sondern einen strategischen Partner, der sich Ihrem Erfolg verpflichtet fühlt."
    },

  ];

  return (
    <div className="homepage">
      <Hero 
        subtitle="KI Beratung"
        highlightText="Innovate Today,"
        title="Lead Tomorrow."
        description="Von der ersten Beratung bis zur vollständigen Implementierung – TechNow ist Ihr strategischer Partner für den erfolgreichen Einsatz von Künstlicher Intelligenz."
        buttons={[
          { text: "Kontakt", href: "/contact", className: "white-btn" },
          { text: "Über uns", href: "/about", className: "trans-btn" }
        ]}
      />

      <LogoSlider />

      <ContentSection
        sectionTitle="WAS WIR BIETEN"
        mainHeading="Kl Beratung Training Umsetzung"
        paragraph1="Unser Team aus branchenführenden Experten verbindet theoretisches Wissen mit praktischer Erfahrung, um maßgeschneiderte KI-Lösungen zu entwickeln, die auf die spezifischen Bedürfnisse und Herausforderungen Ihres Unternehmens zugeschnitten sind."
        paragraph2="Bei TechNow sehen wir unsere Kunden nicht als Kunden. Wir bieten eine Partnerschaft, die auf Vertrauen, Transparenz und gemeinsamem Erfolg basiert. Unsere maßgeschneiderten Ansätze garantieren, dass Sie nicht nur heute erfolgreich sind, sondern auch für die Zukunft gerüstet sind."
        showContactInfo={true}
      />

        {/* Statistics Section */}
      <ContentSection
        sectionTitle="TECHNOW IN ZAHLEN"
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

      <section className="leftRightImgTxt flex-row justify-between align-center">
        <div className="left width50 flex-col justify-end pxy-4">
          <h3 className='head75 white'>KI Beratung</h3>
        </div>
        <div className="right width50 pxy-6 flex-col align-start justify-start gap20">
          <h3 className="subhead12 subhead12-dark">KI BERATUNG</h3>
          <h2 className='head44 mirage'>Maßgeschneiderte KI-Strategie für Ihre Zukunft</h2>
          <p className='para16 lightPara'>Unser KI-Beratungsangebot zielt darauf ab, Ihr Unternehmen an der Schnittstelle von Technologie und Strategie zu stärken. Wir beginnen mit einer tiefgehenden Analyse Ihrer geschäftlichen Anforderungen und Ziele, um zu verstehen, wo KI den größten Einfluss haben kann. Unsere Experten entwickeln dann eine klare und umsetzbare KI-Strategie, die auf Ihre spezifischen Bedürfnisse zugeschnitten ist, und begleiten Sie bei jedem Schritt des Transformationsprozesses. Von der Identifizierung der richtigen KI-Technologien bis hin zur Ausarbeitung eines Implementierungsplans – wir stellen sicher, dass Sie die KI-Innovationen optimal nutzen können, um Ihr Unternehmen voranzubringen.</p>

          <h3 className="sectionHead13 width100 mirage">CONSULTING SERVICES</h3>
          <ul className='sevicesList para16 mirage flex-col gap10 align-start'>
            <li><IoCheckmark /> Status Quo Analyse (IST)</li>
            <li><IoCheckmark /> Definition der KI Strategie (SOLL)</li>
            <li><IoCheckmark /> Ableitung einer KI-Roadmap (GAP)</li>
            <li><IoCheckmark /> Identifikation von KI-Anwendungsfällen</li>
          </ul>
        </div>
      </section>

      <ContentSection
        sectionTitle="UNSER VERSPRECHEN"
        mainHeading="Erfolgsgeschichten, die inspirieren"
        paragraph1="Entdecken Sie, wie wir Unternehmen aus verschiedenen Branchen geholfen haben, durch den Einsatz von Künstlicher Intelligenz noch nie dagewesene Effizienzen zu erzielen. Von der Automatisierung interner Prozesse bis hin zur Entwicklung neuer, datengetriebener Produkte – unsere Case Studies zeigen die Vielfalt und Wirksamkeit von KI-Lösungen."
        paragraph2="Interessiert an einer Partnerschaft? Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch. Unser Team freut sich darauf, mehr über Ihre Herausforderungen zu erfahren und zu diskutieren, wie wir Ihnen helfen können, Ihre Ziele mit Hilfe von KI zu erreichen. Kontaktieren Sie uns gerne einfach via E-Mail, Kontaktformular oder rufen Sie uns direkt an, um ein persönliches Gespräch zu vereinbaren."
        showContactInfo={true}
      />

      <section className='case-study pxy-4 gap60 flex-row justify-between align-start'>
        <h3 className="sectionHead13 width20 mirage">CASE STUDIES</h3>
        <div className="case-grid width80">
        </div>
      </section>

      <ContentSection
        sectionTitle="UNSERE WERTE"
        mainHeading="Erleben Sie neue Wege der Arbeit"
        paragraph1="Unsere Leidenschaft für Innovation sowie unser Engagement für erstklassige Qualität bilden das Rückgrat unseres Unternehmens und treiben uns voran. Wir lösen reale Probleme und helfen unseren mittelständischen Kunden, digitale Pioniere in ihrer jeweiligen Branche zu werden."
        paragraph2="Wir leben nach dem, was wir glauben. Unsere Werte treiben uns in unserer täglichen Arbeit voran und tragen zu unserem gemeinsamen Ziel bei, KI für Menschen zu entwickeln. Unsere Unternehmenskultur basiert auf langfristiger Entwicklung, Unternehmertum und ehrgeizigen Wachstumsplänen."
        showContactInfo={false}
      />

      <section className='blog-section pxy-4 gap60 flex-row justify-between align-start'>
        <h3 className="sectionHead13 width20 mirage">UNSER BLOG</h3>
        <div className="blog-grid width80">
        </div>
      </section>
      
      <section className='faq-section pxy-4 gap60 flex-row justify-between align-start'>
        <h3 className="sectionHead13 width20 mirage">FAQ</h3>
        <div className="faq-content width80">
          <h3 className='head44 mirage'>Frequently <br />Asked Questions</h3><br />
          <FAQ faqs={faqs} />
        </div>
      </section>

      <section className='services-section pxy-4 gap60 flex-row justify-between align-start'>
        <h3 className="sectionHead13 width20 mirage">WEITERE SERVICES</h3>
        <div className="service-grid width80">
        </div>
      </section>

      <UniversalCTA />

      <KnowUsSection />
    </div>
  );
}