


"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button, Typography, Space, Divider, Card, } from "antd";
import { CheckCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import "../app/globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const { Content } = Layout
export default function Home() {









  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
    gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
    gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


    gsap.fromTo(".text2",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".text2",
          scrub: true,
          // markers: true,
          start: "-400px 100px",
          end: "-200px 100px"
        }
      }
    );


    gsap.fromTo(".About .cont", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, stagger: {
        amount: 1,
        grid: "auto"
      }, scrollTrigger: {
        trigger: ".About",

        // markers: true,
      }
    })


    gsap.fromTo(".A", { x: 80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".A",
        // scrub: true,
        // markers: true,
        // start: "-300px 100px",
        // end: "-50px 100px"

      }
    })
    gsap.fromTo(".R", { x: -80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".R",
        // scrub: true,
        // markers: true,
        // start: "-300px 100px",
        // end: "-50px 100px"

      }
    })
    gsap.fromTo(".com", { x: 80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".com",
        scrub: true,
        // markers: true,


      }
    })

    gsap.fromTo(".allDivCard .divPaket", { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
      }, scrollTrigger: {
        trigger: ".allDivCard",
        // markers:true,
        start: "-300px 300px"
      }
    })
    gsap.fromTo(".paket", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".paket",
        // markers:true,
        scrub: true
      }
    })






  }, [gsap])


  const buy = () => {
    alert("You have but the Packet, wait for the respond")
  }


  const swiperRef = useRef();
  return (
    <div className="pageBackground">



      <Layout className='layoutt' style={{ backgroundColor: "black" }}>
        <Flex align="center">
          <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
          <p style={{ fontWeight: "bold", fontSize: "30px" }}>
            <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
            </span></p>

          <div className='isilayout' style={{ display: "flex", }}>

            <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
            <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
            <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
            <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
          </div>


        </Flex>
      </Layout>



      <Content className='contentt' style={{ fontSize: "60px", }}>


        <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>

          <div className='firstText' style={{ display: "flex", flexDirection: "column" }}>
            <p>Web fashion</p>
            <p><span style={{ color: "#7a6200" }}>SPURS <br /></span> IDEA TO REALITY</p>
          </div>




          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="swiper"

          >
            <SwiperSlide>
              <Image src='/fash1.avif' width={700} height={300} alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src='/fash2.avif' width={700} height={300} alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src='/fash3.avif' width={700} height={300} alt="3" />
            </SwiperSlide>
          </Swiper>

        </div>




      </Content>

      <div>


        <p className='text2' style={{
          marginTop: "200px", display: "flex", justifyContent: "center",
          fontSize: "50px",
        }}>Our <span style={{ color: "#7a6200", marginLeft: "10px" }}>Mission</span></p>


      </div>

      <Divider />


      <div className='About' >

        <Card className='cont' style={{

          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          borderRadius: "10px"
        }}>

          <Typography.Text style={{ fontSize: "40px", color: "#7a6200", display: "flex", justifyContent: "center" }}>
            About us
          </Typography.Text>
          <Divider />
          <Typography>Sebuah perusahaan pengembangan<br /> web yang bersemangat<br />
            membangun situs web<br /> yang memukau secara visual,<br />
            ramah pengguna<br /> yang menghasilkan hasil.
          </Typography>
        </Card>

        <Card className='cont' style={{
          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          borderRadius: "10px",
        }}>


          <Typography.Text style={{ fontSize: "40px", color: "#7a6200", display: "flex", justifyContent: "center" }}>
            Vission
          </Typography.Text>

          <Divider />

          <Typography>Menjadi mitra digital<br /> terkemuka melalui solusi,<br /> web inovatif dan desain kelas dunia.
          </Typography>
        </Card>

        <Card className='cont' style={{
          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          borderRadius: "10px",
        }}>

          <Typography.Text style={{ fontSize: "40px", color: "#7a6200", display: "flex", justifyContent: "center" }}>
            Mission
          </Typography.Text>

          <Divider />

          <Typography>Berkolaborasi secara proaktif,<br /> mendengarkan kebutuhan, dan<br /> memberikan pendidikan<br /> sehingga klien
            dapat mengelola<br /> situs mereka secara mandiri.
          </Typography>
        </Card>

      </div>


      <div className='paket' style={{ display: "flex", justifyContent: "center", marginTop: "250px", }}>
        <Typography.Title style={{ fontWeight: "bold", fontSize: "50px" }}>Packet</Typography.Title>
      </div>
      <Divider />

      <div className='allDivCard' style={{ display: "flex", justifyContent: "center", gap: "70px", marginTop: "50px" }}>

        <Card className='divPaket' style={{
          border: "solid black ", padding: "20px", marginTop: "30px",
          borderRadius: "10px"
        }}>
          <div >
            <p style={{ fontSize: "30px", color: "#7a6200" }}>Packet 1</p>
            <Typography>
              Website E-commerce dengan<br />
              desain yang simple
            </Typography>
            <Divider />
            <Typography.Text style={{ fontSize: "20px" }}>
              <p>Rp.5.000.000</p>
            </Typography.Text>

            <Typography.Paragraph>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Space>
                  <CheckCircleOutlined />
                  Desain UI/UX responsif
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Formulir kontak terintegrasi email
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Hosting & domain 1 tahun
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Formulir kontak terintegrasi email
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Pembuatan 5 halaman
                </Space>
              </div>


            </Typography.Paragraph>
            <Button onClick={buy} icon={<DownloadOutlined />} style={{ backgroundColor: "black" }} type="primary">Buy Now</Button>
          </div>
        </Card>


        <Card className='divPaket' style={{
          border: "solid black ", position: "relative", padding: "20px", marginTop: "30px",
          borderRadius: "10px"
        }}>
          <div>
            <p style={{ fontSize: "30px", color: "#7a6200" }}>Packet 2</p>
            <Typography>
              Website E-commerce dengan<br />
              Fitur tambahan
            </Typography>
            <Divider />
            <Typography.Text style={{ fontSize: "20px" }}>
              <p>Rp.6.000.000</p>
            </Typography.Text>

            <Typography.Paragraph>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Space>
                  <CheckCircleOutlined />
                  Desain UI/UX responsif
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Formulir kontak terintegrasi email
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Hosting & domain 1 tahun
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Fitur laporan penjualan sederhana
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Optimasi SEO dasar
                </Space>
              </div>


            </Typography.Paragraph>
            <Button onClick={buy} icon={<DownloadOutlined />} style={{ backgroundColor: "black" }} type="primary">Buy Now</Button>
          </div>
        </Card>

        <Card className='divPaket' style={{
          border: "solid black ", position: "relative", padding: "20px", marginTop: "30px",
          borderRadius: "10px"
        }}>
          <div>
            <p style={{ fontSize: "30px", color: "#7a6200" }}>Packet 3</p>
            <Typography>
              Website E-commerce dengan<br />
              Fitur tambahan + Desain yang elegan

            </Typography>
            <Divider />
            <Typography.Text style={{ fontSize: "20px" }}>
              <p>Rp.8.500.000</p>
            </Typography.Text>

            <Typography.Paragraph>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <Space>
                  <CheckCircleOutlined />
                  Desain UI/UX responsif
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Formulir kontak terintegrasi email
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Hosting & domain 1 tahun
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Integrasi media sosial
                </Space>
                <Space>
                  <CheckCircleOutlined />
                  Panduan penggunaan website
                </Space>
              </div>


            </Typography.Paragraph>
            <Button onClick={buy} icon={<DownloadOutlined />} style={{ backgroundColor: "black" }} type="primary">Buy Now</Button>
          </div>
        </Card>


      </div>




      <div style={{
        display: "flex", marginTop: "250px", border: "solid black 3px",
        backgroundColor: "#d7d7d7"
      }}>

        <p className='com' style={{
          display: "flex", justifyContent: "center",
          fontSize: "50px", marginLeft: "50px"
        }}>Companny <span style={{ color: "#7a6200", marginLeft: "10px" }}>CEO</span></p>

      </div>




      <div className='divGambar' >

        <Image className='R' src="/rico.png" width={320} height={300} alt='4' />
        <Image className='A' src="/Abhi.png" width={320} height={300} alt='5' />

      </div>

      <div style={{
        display: "flex", justifyContent: "center", fontSize: "20px",
        backgroundColor: "black", marginTop: "150px"
      }}>

        <p style={{ color: 'white' }}>Thank You</p>
      </div>
    </div>
  );
}
