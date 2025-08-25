"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button, Divider, Card, Typography } from "antd";
import { CodeOutlined, RadarChartOutlined, AntDesignOutlined } from "@ant-design/icons";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { Content } from 'next/font/google';


const { Content } = Layout

export default function Service() {



    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


        gsap.fromTo(".title", { x: -100, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                trigger: ".title",

                //   markers: true,
                start: "-300px 100px",
                end: "-200px 100px"
            }
        })

        gsap.fromTo(".isi", { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                trigger: ".isi",

                // markers: true,
                start: "-400px 100px",
                end: "-200px 100px"
            }
        })


        gsap.fromTo(".fashion", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })


        gsap.fromTo(".divService .ant-card", { y: 100, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.2, stagger: {
                amount: 1,
                grid: "auto",
                // from: "center"
            }, scrollTrigger: {
                trigger: ".isi",
                // markers:true,
                start:"460 100"

                
            }
        })


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





            <div className='firstText' style={{
                display: "flex", marginTop: "50px", fontSize: "50px", justifyContent: "center"

            }}>
                <p><span style={{ color: "#7a6200", }}>Our </span> Services</p>
            </div>


            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} className='fashion'>

                <Image style={{ border: "solid black 3px", borderRadius: "10px", position: "absolute" }} src="/fashionPic2.jpg" width={1000} height={10}
                    className='fashion2' />
            </div>



            <div style={{ display: "flex", gap: "100px", justifyContent: "center", marginTop: "600px" }} className='divService'>



                <Card className='cardService' >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <CodeOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "70px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />
                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            Website <span style={{ color: "#7a6200" }}><br />Development</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Pembuatan website profesional<br />
                        mulai dari landing page,<br /> company profile, hingga portal<br />
                        khusus sesuai kebutuhan.
                    </Typography>
                </Card>
                <Card className='cardService'>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <RadarChartOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "55px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />
                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            E-Commerce <span style={{ color: "#7a6200" }}><br />Development</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Pembuatan toko online<br />
                        dengan fitur keranjang,<br />
                        pembayaran online,<br />
                        dan integrasi pengiriman.

                    </Typography>
                </Card>
                <Card className='cardService'>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <AntDesignOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "50px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />

                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            UI/UX <span style={{ color: "#7a6200" }}><br />Design</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Desain tampilan<br />
                        website yang modern,<br />
                        responsif, dan mudah<br />
                        digunakan.

                    </Typography>
                </Card>

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