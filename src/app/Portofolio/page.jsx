"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button, Divider, Avatar, Card, Typography } from "antd";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'



export default function Portofolio() {



    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


        gsap.fromTo(".porto", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })

        gsap.fromTo(".gam1", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })

        gsap.fromTo(".gam2", { x: -100, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                trigger: ".gam2",
                // markers: true,
                start: "-400px 100px",
                end: "-200px 100px"
            }
        })


        gsap.fromTo(".alldivCard .testiCard",{y:100,opacity:0},{y:0,opacity:1,stagger:{
            amount:1.2,
            grid:"auto"
        },scrollTrigger:{
            trigger:".alldivcard",
            // markers:true,
            start:"800 100"
        }})

        gsap.fromTo(".testiText",{y:-100,opacity:0},{y:0,opacity:1,scrollTrigger:{
            trigger:".testiText",
            scrub:true
        }})
    }, [gsap])

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
                        <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
                        <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                        <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
                    </div>


                </Flex>
            </Layout>


            <div className='porto' style={{ display: "flex", justifyContent: "center", marginTop: "80px", fontSize: "50px" }}>

                <p>Porto<span style={{ color: "#7a6200" }}>folio</span></p>
            </div>

            <div className='gam1' style={{ display: "flex", justifyContent: "center", gap: "200px", marginTop: "100px" }}>

                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por1.png" width={400} height={400} alt='1' />
                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por2.png" width={400} height={400} alt='2' />
            </div>

            <div className='gam2' style={{ display: "flex", justifyContent: "center", gap: "200px", marginTop: "50px" }}>

                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por3.png" width={400} height={400} alt='3' />
                <Image className='gam' style={{ border: 'solid black 5px', borderRadius: "10px" }} src="/por4.png" width={400} height={400} alt='4' />
            </div>



            <Divider />

            <div className='testiText' style={{ display: "flex", justifyContent: "center", marginTop: "150px", fontSize: "50px" }}>

                <p>Client <span style={{ color: "#7a6200" }}>Testimonials</span></p>

            </div>


            <div className='alldivCard' style={{ display: "flex", justifyContent: "center", marginTop: "150px", gap: "100px" }}>

                <Card className='testiCard' style={{ height: "250px" }}>
                    <Typography.Text style={{
                        fontWeight: "900", display: "flex", justifyContent: "center",
                        fontSize: "23px", marginTop: "30px"
                    }}>
                        Rian Cummins
                    </Typography.Text>

                    <Typography.Paragraph style={{ marginTop: "30px" }}>
                        Layanan Silver Spurs sangat luar biasa, <br />
                        hingga saya merasakan kebahagiaan <br />
                        mengalir dalam diri saya.
                    </Typography.Paragraph>
                </Card>
                <Card className='testiCard'>
                    <Typography.Text style={{
                        fontWeight: "900", display: "flex", justifyContent: "center",
                        fontSize: "23px", marginTop: "30px"
                    }}>
                        Iriana Morgana
                    </Typography.Text>

                    <Typography.Paragraph style={{ marginTop: "30px" }}>
                        Silver Spurs mungkin memerlukan waktu cukup<br />
                        lama untuk menyelesaikan sebuah komisi. Tapi,<br />
                        ini bukan soal kecepatan, tapi hasil.
                    </Typography.Paragraph>
                </Card>
                <Card className='testiCard'>
                    <Typography.Text style={{
                        fontWeight: "900", display: "flex", justifyContent: "center",
                        fontSize: "23px", marginTop: "30px"
                    }}>
                        Rian Cummins
                    </Typography.Text>

                    <Typography.Paragraph style={{ marginTop: "30px" }}>
                        Saya sangat mencintai Silver Spurs.<br />
                        Kecepatan dan ketangkasan respons<br />
                        mereka selalu sangat memuaskan.

                    </Typography.Paragraph>
                </Card>

                <div style={{
                    display: "flex", justifyContent: "center", position: "absolute",
                    gap: "320px", marginTop: "-30px"
                }}>
                    <Avatar
                    style={{marginRight:"25px"}}
                        className='testiCard'
                        shape="circle"
                        size={80}
                        src={<Image src={"/Stockman1.jpg"} width={300} height={300} />}
                    />
                    <Avatar
                        className='testiCard'
                        shape="circle"
                        size={80}
                        src={<Image src={"/Stockman3.jpg"} width={300} height={300} />}
                    />
                    <Avatar
                        className='testiCard'
                        shape="circle"
                        size={80}
                        src={<Image src={"/Stockman2.jpg"} width={300} height={300} />}
                    />
                </div>
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