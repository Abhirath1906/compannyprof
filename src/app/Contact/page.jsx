"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Button, Typography, Card, Input, Divider, Row, Col, Spin } from "antd";
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
    const [loading, setloading] = useState(true)

    // const contactt = () => {
    //     if (Name, Email, Mess === "") {
    //         alert("Please type the text first")
    //         return
    //     }
    //     alert(`Name: ${Name}\nEmail:@ ${Email}\nMessage: ${Mess}\nNow Wait for the respond\nfrom your email.`)

    //     Name("")
    //     Email("")
    //     Mess("")
    // }



    const contactt = async (e) => {
        e.preventDefault();

        if (!Name || !Email || !Mess) {
            alert("Please fill all fields first");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mzzadqbo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: Name,
                    email: Email,
                    message: Mess
                })
            });

            if (response.ok) {
                alert("Message sent successfully! Please check your email for a response.");
                setName("");
                setEmail("");
                setMess("");
            } else {
                alert("Failed to send message. Try again later.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };

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



            gsap.fromTo(".gambarFas", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, })
            gsap.fromTo(".cardContact", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, })
            gsap.fromTo(".ContactUs", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, })



            gsap.fromTo(".footerr", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.3, scrollTrigger: {
                    trigger: ".footerr"
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





            <div style={{ display: "flex", marginTop: "90px" }}>
                <div style={{ marginTop: "29px", marginLeft: "30px" }}>
                    <Image className='gambarFas' src="/ContactPic.png" width={400} height={400} />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className='ContactUs'>
                        <Typography.Text style={{ fontSize: "70px", fontWeight: "600", marginLeft: "100px" }}>Contact <span style={{ color: '#7a6200' }}>us</span></Typography.Text>
                    </div>

                    <Card className='cardContact' style={{ marginLeft: "100px" }}>

                        <form onSubmit={contactt}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <Typography.Text>Full Name</Typography.Text>
                                    <Input
                                     value={Name}
                                        onChange={(e) => setName(e.target.value)}
                                        name='name'
                                        required
                                        style={{ marginTop: '10px', width: "300px", border: "solid black 1px" }} placeholder='Type Name' />
                                    <Divider />
                                    <Typography.Text>E-Mail</Typography.Text>
                                    <Input value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name='email'
                                        required
                                        style={{ marginTop: '10px', border: "solid black 1px", borderRadius: "5px" }} type="email" addonBefore="@" placeholder='Type Email' />
                                    <Divider />
                                    <Typography.Text >Message</Typography.Text>
                                    <Input value={Mess}
                                        onChange={(e) => setMess(e.target.value)}
                                        name='message'
                                        required
                                        style={{ marginTop: '10px', border: "solid black 1px" }} placeholder='Type a Text'></Input>

                                    <Button htmlType='submit' type="primary" shape="round" style={{
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
                        </form>

                    </Card>

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