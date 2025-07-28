


"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button } from "antd";
import "../app/globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default function Home() {





  const [TheSearch, setTheSearch] = useState('')

  const Result = () => {
    alert(TheSearch)
  }



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


    gsap.fromTo(".title", { x: -100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".title",
        // scrub: true,
        // markers: true,
        start: "-350px 100px",
        end: "-100px 100px"
      }
    })
    gsap.fromTo(".About", { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, scrollTrigger: {
        trigger: ".About",
        scrub: true,
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






  },[gsap])


  const swiperRef = useRef();
  return (
    <div className="pageBackground">



      <Layout className='layoutt' style={{ backgroundColor: "black" }}>
        <Flex align="center">
          <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
          <p style={{ fontWeight: "bold", fontSize: "30px" }}>
            <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
            </span></p>

          <div className='isilayout' style={{ display: "flex",  }}>

            <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
            <Link href="/Service" style={{ color: "#c8c4c4" }}>Our service</Link>
            <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
          </div>

          <div className='inputt'>
            <Input
            className='isiInput'
              value={TheSearch}
              onChange={(e) => setTheSearch(e.target.value)}
              placeholder="type a text" />
            <Button onClick={Result}>Enter</Button>
          </div>
        </Flex>
      </Layout>


      <div style={{ fontSize: "60px", marginTop: "150px", marginLeft: "50px" }}>


        <div style={{ display: "flex",alignItems:"center" }}>

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




      </div>

      <div>


        <p className='text2' style={{
          marginTop: "200px", display: "flex", justifyContent: "center",
          fontSize: "50px",
        }}>Our <span style={{ color: "#7a6200", marginLeft: "10px" }}>Mission</span></p>


      </div>

      <div className='title'>

        <p style={{ fontSize: "40px", color: "#7a6200" }}>About us</p>
        <p style={{ fontSize: "40px", color: "#7a6200" }}>Vision</p>
        <p style={{ fontSize: "40px", color: "#7a6200" }}>Mission
        </p>
      </div>

      <div className='About' >

        <div className='cont' style={{
          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          padding: "30px", borderRadius: "10px"
        }}>

          <p>Sebuah perusahaan pengembangan<br /> web yang bersemangat<br />
            membangun situs web<br /> yang memukau secara visual,<br />
            ramah pengguna<br /> yang menghasilkan hasil.
          </p>
        </div>

        <div className='cont' style={{
          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          padding: "10px", borderRadius: "10px", padding: "30px"
        }}>

          <p>Menjadi mitra digital<br /> terkemuka melalui solusi,<br /> web inovatif dan desain kelas dunia.
          </p>
        </div>

        <div className='cont' style={{
          display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
          padding: "10px", borderRadius: "10px", padding: "30px"
        }}>

          <p>Berkolaborasi secara proaktif,<br /> mendengarkan kebutuhan, dan<br /> memberikan pendidikan<br /> sehingga klien
            dapat mengelola<br /> situs mereka secara mandiri.
          </p>
        </div>

      </div>

      <div style={{
        display: "flex", marginTop: "200px", border: "solid black 3px",
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

      <div style={{display:"flex",justifyContent:"center",fontSize:"20px",
        backgroundColor:"black",marginTop:"150px"}}>

        <p style={{color:'white'}}>Thank You</p>
      </div>
    </div>
  );
}
