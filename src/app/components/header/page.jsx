"use client"

import Link from "next/link";
import css from "./page.module.css"
import icon from "./images-removebg-preview (4).png";
import Image from "next/image";
import { useEffect } from "react";


export default function Header(){

      useEffect(() => {
        const categories = document.getElementById('categories');
        let item = document.getElementById('items');
    
          categories.addEventListener('mouseenter', () => {
              item.style.opacity=1;
          });

            categories.addEventListener('mouseleave', () => {
                setTimeout(()=>{
                    item.style.opacity=0;
                },7000);
          })

          item.addEventListener('mouseleave', () => {
              item.style.opacity=0;
          });
        }
    )

    return(
        <div>
            <header className={css.header}>
                <h1>tech wire</h1>
                <div className={css.nav_bar}>
                    <Link href={"/"}>home</Link>
                    <Link href={"/components/about"}>about</Link>
                    <div className={css.categories_container}>
                        <div className={css.categories_item}>
                            <Link href="/" id="categories">categories</Link>
                            <Image src={icon} alt="icon"/>
                        </div>
                        <div className={css.categories_item1} id="items">
                            <a href="/#technology">technology</a>
                            <a href="/#app">apps</a>
                            <a href="/#software">software</a>
                        </div>
                    </div>
                    <Link href={"/components/contact"}>contact-us</Link>
                </div>
            </header>
        </div>
    )
    click()
}
