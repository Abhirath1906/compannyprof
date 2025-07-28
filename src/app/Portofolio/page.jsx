"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button } from "antd";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'




export default function Portofolio() {

    const [TheSearch, setTheSearch] = useState('')

    const Result = () => {
        alert(TheSearch)
    }
    const swiperRef = useRef();

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


       gsap.fromTo(".porto",{y:100,opacity:0},{y:0,opacity:1,duration:1.2})

       gsap.fromTo(".gam1",{x:-100,opacity:0},{x:0,opacity:1,duration:1.2})

       gsap.fromTo(".gam2",{x:-100,opacity:0},{x:0,opacity:1,duration:1.2,scrollTrigger:{
        trigger:".gam2",
        scrub: true,
        // markers: true,
        start: "-400px 100px",
        end: "-200px 100px"
       }})
    },[gsap])

    return (
        <div className="pageBackground">



            <Layout className='layoutt' style={{ backgroundColor: "black" }}>
                <Flex align="center">
                    <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                        <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
                        </span></p>

                    <div style={{ display: "flex", marginLeft: "70px", gap: "20px", fontSize: "15px" }}>

                        <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                        <Link href="/Service" style={{ color: "#c8c4c4" }}>Our service</Link>
                        <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                    </div>

                    <div style={{ marginLeft: "150px", }}>
                        <Input
                            value={TheSearch}
                            onChange={(e) => setTheSearch(e.target.value)}
                            style={{ width: "400px", marginRight: "20px" }} placeholder="type a text" />
                        <Button onClick={Result}>Enter</Button>
                    </div>
                </Flex>
            </Layout>


            <div className='porto' style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontSize: "50px" }}>

                <p>Our <span style={{ color: "#7a6200" }}>Portofolio</span></p>
            </div>

            <div className='gam1' style={{ display: "flex", justifyContent: "center", gap: "200px", marginTop: "100px" }}>

                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por1.png" width={400} height={400} alt='1' />
                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por2.png" width={400} height={400} alt='2' />
            </div>

            <div className='gam2' style={{ display: "flex", justifyContent: "center", gap: "200px", marginTop: "50px" }}>

                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por3.png" width={400} height={400} alt='3' />
                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por4.png" width={400} height={400} alt='4' />
            </div>


            <div style={{
                display: "flex", justifyContent: "center", fontSize: "20px",
                backgroundColor: "black", marginTop: "150px"
            }}>

                <p style={{ color: 'white' }}>...</p>
            </div>

        </div>
    )
}