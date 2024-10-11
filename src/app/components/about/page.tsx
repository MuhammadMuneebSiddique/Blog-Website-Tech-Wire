import css from "./page.module.css"

export default function About(){
    return(
        <div>
            <div className={css.about}>
                <h2>about</h2>
                <p>At Tech Wire, we want to give our visitors everything there is to know about the latest, cutting-edge technologies, trends, and insights. Our community of avid tech enthusiasts and industry leaders will follow the evolution of artificial intelligence, gadgets, software, cybersecurity, and all of the next big innovations that can shape its future.</p>
                <h3>our mission</h3>
                <p>Our mission will be to report accurately, and in due time, a comprehensive account of technological evolution with great depth so that tech-savvy readers and curious minds would gain insight into the impact of technology on their world. Whether you are a professional, hobbyist, or simply a tech enthusiast, we are here to guide you through this ever-evolving world of technology with confidence.</p>
                <h4>Stay tuned as we bring you the future of tech, today.</h4>
            </div>
        </div>
    )
}