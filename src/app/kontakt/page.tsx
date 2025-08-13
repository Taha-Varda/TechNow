// icons
import { AiOutlineFacebook } from "react-icons/ai"; 
import { CgInstagram } from "react-icons/cg"; 
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai"; 

// css
import "./contact.css"

// office img
import office1 from'@/assets/office/prague.webp'
import Image from "next/image";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import KnowUsSection from "@/components/KnowUsCta/KnowUs";

export default function About_DE() {
    return (
        <div className="contact-DE">
            <section className="px-4 py-8 bg-cultured flex-row justify-between align-center">
                <div className="width31 flex-col gap20">
                    <h3 className="subhead12 subhead12-dark bg-white">KONTAKT</h3>
                    <h1 className="head75 mirage">Lernen Sie uns kennen</h1>
                    <p className="para18 lightPara">Sprechen Sie uns an, wenn Sie Fragen haben, mit uns zusammenarbeiten oder einfach nur Hallo sagen möchten. Wir freuen uns auf den Kontakt!</p>

                    <ul className="social-links flex-col gap20 mirage">
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin /> Linkedin
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter /> X/Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                <AiOutlineFacebook /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                <CgInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="width40">
                    <div className="calendly-inline-widget" data-url="https://calendly.com/lenamenke/30min" style={{ width: "auto", height: "750px" }}></div>
                    <script type="text/javascript" rel="nofollow" src="https://assets.calendly.com/assets/external/widget.js" async>
                    </script>
                </div>
            </section>

            <section className='offices-section pxy-4 gap60 flex-row justify-between align-start'>
                <h3 className="sectionHead13 width20 mirage">OFFICES</h3>
                <div className="office-grid width80 flex-row justify-between align-start gap40">
                    <div className="office-card width31 flex-col gap10">
                        <Image src={office1} alt="Office 1"/>
                        <h3 className="head24 mirage">Berlin</h3>
                        <p className="para16 lightPara">Immanuelkirchstraße 34 D-10405 Berlin Germany</p>
                        <ContactInfo />
                    </div>
                </div>
            </section>

            <KnowUsSection />
        </div>
    )
}