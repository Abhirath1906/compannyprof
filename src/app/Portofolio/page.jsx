"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Divider, Avatar, Card, Typography, Row, Col, Spin } from "antd";
import { FacebookOutlined, InstagramOutlined, XOutlined } from "@ant-design/icons";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'



export default function Portofolio() {

    const [loading, setloading] = useState(true)

    useEffect(() => {
        const Timer = setTimeout(() => setloading(false), 1500)
        return () => clearTimeout(Timer)
    })


    useEffect(() => {

        if (!loading) {

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


            gsap.fromTo(".alldivCard .testiCard", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, stagger: {
                    amount: 1.2,
                    grid: "auto"
                }, scrollTrigger: {
                    trigger: ".alldivcard",
                    // markers:true,
                    start: "800 100"
                }
            })

            gsap.fromTo(".testiText", { y: -100, opacity: 0 }, {
                y: 0, opacity: 1, scrollTrigger: {
                    trigger: ".testiText",
                    // markers:true,
                    scrub: true,
                    start: "-600 100"
                }
            })



            gsap.fromTo(".footerr", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.3, scrollTrigger: {
                    trigger: ".footerr",
                    // markers: true,
                    start: "-520 500"
                }
            })
        }
    }, [gsap, loading])


    if (loading) {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#cbc7c7"
            }}>
                <Spin size="large" tip="Loading..." style={{ color: "black" }} />
            </div>
        )
    }

    return (
        <div className="pageBackground">






            <div className='porto' style={{
                display: "flex", justifyContent: "center", marginTop: "90px", fontSize: "50px",
                padding: '50px'
            }}>

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
                        style={{ marginRight: "25px" }}
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

            <Layout className='layoutt' style={{ backgroundColor: "black" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                        <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
                        </span></p>

                    <div className='isilayout' style={{ display: "flex", marginLeft: "550px", fontWeight: "700" }}>

                        <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                        <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
                        <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                        <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
                    </div>


                </div>
            </Layout>
            <div className='footerr' style={{
                display: "flex",
                backgroundColor: "black",
                marginTop: "150px",
                padding: "80px"

                }}>

                <div>
                    <Typography className='footerText' style={{ color: "white", fontSize: "30px", fontWeight: "700" }}>
                        Web fashion,<br />
                        Make idea to<br />
                        reality
                    </Typography>
                </div>

                <div style={{ marginLeft: "100px", marginTop: "5px", display: "flex", }}>
                    <div className='isiFooter' style={{ display: 'flex', gap: "200px" }} >



                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Companny
                            </Typography.Text>
                            <div>
                                <Typography.Text style={{
                                    color: "white", fontSize: "20px", fontWeight: "200", display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                                    <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
                                    <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                                </Typography.Text>
                            </div>

                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Location
                            </Typography.Text>

                            <div>
                                <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "200" }}>
                                    Indonesia,<br />
                                    Jakarta<br />
                                    Green Lake City

                                </Typography.Text>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Contact us
                            </Typography.Text>


                            <div>
                                <Typography style={{ color: "white", fontSize: "20px", fontWeight: "200" }}>
                                    <div style={{ fontSize: "20px", display: "flex", gap: "20px", marginTop: "10px" }}>
                                        <a className='linkApp' href="https://www.facebook.com/?locale=id_ID" target="_blank" rel="noopener noreferrer">
                                            <FacebookOutlined />
                                        </a>
                                        <a className='linkApp' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <InstagramOutlined />
                                        </a>
                                        <a className='linkApp' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <XOutlined />
                                        </a>
                                    </div>
                                    <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
                                </Typography>
                            </div>
                        </div>

                    </div>






                </div>

            </div>



        </div>
    )
}