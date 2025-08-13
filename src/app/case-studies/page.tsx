import casebg1 from '@/assets/case study/CustomGPT.jpg'
import Image from 'next/image'

import './caseStudy.css'
import Button from '@/components/Button/Button'

export default function CaseStudy_DE() {
    return (
    <div className="CaseStudy-DE">
        <section className="about-hero py-6 px-4 flex-col align-center">
            <div className="about-hero-content flex-col align-center text-center gap20 width60">
            <h3 className="subhead12 subhead12-dark">CASE STUDIES</h3>
            <h1 className='head75 mirage'>Echte Lösungen, greifbare Ergebnisse</h1>
            <p className="para20 darkGrey width80">Tauchen Sie ein in unsere Fallstudien – Lösungen aus der Praxis, greifbare Ergebnisse und Erfolgsgeschichten, die darauf warten, enthüllt zu werden.</p>
            </div>
      </section>

      <section className="cases-list flex-col">
            <div className="case-item">
                <Image src={casebg1} alt="Custom GPT" />
                <div className="case-content pxy-6 flex-col gap20 align-start">
                    <h3 className="head75 white width80">CustomGPT Chatbot</h3>
                    <p className="para20 darkGrey width50">Für eine führende deutsche Unternehmensberatung haben wir einen maßgeschneiderten GPT-Chatbot als Wissensmanager implementiert.</p>
                    <Button text='Case Study ansehen' href='https://tech-now.io/case-study/custom-gpt' className='trans-btn'/>
                </div>                
            </div>
            <div className="case-item">
                <Image src={casebg1} alt="Custom GPT" />
                <div className="case-content pxy-6 flex-col gap20 align-start">
                    <h3 className="head75 white width80">CustomGPT Chatbot</h3>
                    <p className="para20 darkGrey width50">Für eine führende deutsche Unternehmensberatung haben wir einen maßgeschneiderten GPT-Chatbot als Wissensmanager implementiert.</p>
                    <Button text='Case Study ansehen' href='https://tech-now.io/case-study/custom-gpt' className='trans-btn'/>
                </div>                
            </div>
      </section>

    </div>
    )
}