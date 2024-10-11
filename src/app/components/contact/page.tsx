import css from "./page.module.css"
import image from "./contact.png"
import github from "./github (1).png"
import linkedin from "./linkedin (1).png"
import email from "./email (1).png"
import contact from "./telephone.png"

import Image from "next/image"
import Link from "next/link"


export default function Contact(){
    return(
        <>
            <h2 className={css.h2}>contacts</h2>
            <div className={css.contact_container}>
                <div className={css.contact_item1}>
                    <Image
                    src={image}
                    alt="image"
                    />
                </div>
                <div className={css.contact_item2}>
                    <Link href="https://github.com/MuhammadMuneebSiddique" target="_blank">
                        <div>
                            <Image
                            src={github}
                            alt="icon"
                            />
                            <p>MuhammadMuneebSiddique</p>
                        </div>
                    </Link>
                    <Link href="mailto:siddiquimuneeb894@gmail.com" target="_blank">
                        <div>
                            <Image
                            src={email}
                            alt="icon"
                            />
                            <p>siddiquimuneeb894@gmail.com</p>
                        </div>
                    </Link>
                    <Link href="https://linkedin.com/in/muhammad-muneeb-6a5a86323" target="_blank">
                        <div>
                            <Image
                            src={linkedin}
                            alt="icon"
                            />
                            <p>Muhammad-Muneeb</p>
                        </div>
                    </Link>
                    <Link href="tel:+923152040559" target="_blank">
                        <div>
                            <Image
                            src={contact}
                            alt="icon"
                            />
                            <p>+923152040559</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}