import Image from "next/image";
import css from "./page.module.css"
import github from "./github (1).png"
import linkedin from "./linkedin (1).png"
import email from "./email (1).png"


export default function Foooter(){
    return(
        <div className={css.footer}>
            <div className={css.container}>
                <div className={css.item1}>
                    <h2>tech wire</h2>
                    <div className={css.links}>
                        <a href="https://linkedin.com/in/muhammad-muneeb-6a5a86323" target="_blank"><Image
                        src={linkedin}
                        alt="image"
                        /></a>
                        <a href="https://github.com/MuhammadMuneebSiddique" target="_blank"><Image
                        src={github}
                        alt="image"
                        /></a>
                        <a href="mailto:siddiquimuneeb894@gmail.com" target="_blank"><Image
                        src={email}
                        alt="image"
                        /></a>
                    </div>
                </div>
                <div className={css.item2}>
                    <h3>company</h3>
                    <div  className={css.option1}>
                        <a href="/">home</a>
                        <a href="./components/about">about</a>
                        <a href="./components/contact">contact</a>
                        <a href="/#technology">technology</a>
                    </div>
                </div>
                <div className={css.item3}>
                <h3>tech news</h3>
                    <div className={css.option2}>
                        <a href="/#technology">technology</a>
                        <a href="/#app">app</a>
                        <a href="/#software">software</a>
                    </div>
                </div>
            </div>
            <p>Copyright © 2024 Tech Wire.</p>
        </div>
    )
}