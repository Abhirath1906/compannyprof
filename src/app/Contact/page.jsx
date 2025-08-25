"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Button, Typography, Card, Input, Divider } from "antd";
import { FacebookOutlined, InstagramOutlined, XOutlined } from "@ant-design/icons";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'



export default function Portofolio() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mess, setMess] = useState("")

    const contactt = () => {
        if (Name, Email, Mess === "") {
            alert("Please type the text first")
            return
        }
        alert(`Name: ${Name}\nEmail:@ ${Email}\nMessage: ${Mess}\nNow Wait for the respond\nfrom your email.`)

        Name("")
        Email("")
        Mess("")
    }

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })



        gsap.fromTo(".gambarFas", { x: -100, opacity: 0 }, {x: 0, opacity: 1, duration: 1.2,})
        gsap.fromTo(".cardContact", { y:100, opacity: 0 }, {y: 0, opacity: 1, duration: 1.2,})
        gsap.fromTo(".ContactUs", { x:100, opacity: 0 }, {x: 0, opacity: 1, duration: 1.2,})
        
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

            <div style={{ display: "flex", }}>
                <div style={{ marginTop: "29px", marginLeft: "30px" }}>
                    <Image className='gambarFas' src="/ContactPic.png" width={400} height={400} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className='ContactUs'>
                        <Typography.Text style={{ fontSize: "70px", fontWeight: "600", marginLeft: "100px" }}>Contact <span style={{color:'#7a6200'}}>us</span></Typography.Text>
                    </div>

                    <Card className='cardContact' style={{ marginLeft: "100px" }}>

                        <div style={{ display: 'flex' }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Typography.Text>Full Name</Typography.Text>
                                <Input value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ marginTop: '10px', width: "300px", border: "solid black 1px" }} placeholder='Type Name' />
                                <Divider />
                                <Typography.Text>E-Mail</Typography.Text>
                                <Input value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ marginTop: '10px', border: "solid black 1px", borderRadius: "5px" }} type="email" addonBefore="@" placeholder='Type Email' />
                                <Divider />
                                <Typography.Text >Message</Typography.Text>
                                <Input value={Mess}
                                    onChange={(e) => setMess(e.target.value)}
                                    style={{ marginTop: '10px', border: "solid black 1px" }} placeholder='Type a Text'></Input>

                                <Button onClick={contactt} type="primary" shape="round" style={{
                                    backgroundColor: "black", marginTop: "23px",
                                    width: "300px"
                                }}>Contact us</Button>
                            </div>


                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
                                <Typography.Text style={{ fontSize: "30px", marginTop: "20px" }}>
                                    Contact
                                </Typography.Text>
                                <Typography.Text>
                                    silverspursbox@gmail.com
                                </Typography.Text>

                                < Typography.Text style={{ fontSize: "30px", marginTop: "50px" }}>
                                    Based in
                                </Typography.Text>
                                <Typography.Text>
                                    Indonesia,<br />
                                    Jakarta
                                </Typography.Text>

                                <div style={{ marginTop: "80px", fontSize: "20px", display: "flex", gap: "30px" }}>
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
                            </div>


                        </div>

                    </Card>

                </div>
            </div>

            <div style={{
                display: "flex", justifyContent: "center", fontSize: "20px",
                backgroundColor: "black", marginTop: "60px"
            }}>

                <p style={{ color: 'white' }}>...</p>
            </div>

        </div>
    )
}