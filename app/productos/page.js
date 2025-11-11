"use client";

import Footer from "@/components/footerProductos";
import Nav from "@/components/navProductos";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Productos() {
  const [fuenteIndex, setFuenteIndex] = useState(1);
  const [vajillaIndex, setVajillaIndex] = useState(1);
  const [ramekinIndex, setRamekinIndex] = useState(1);
  const [panIndex, setPanIndex] = useState(1);
  const [complementosIndex, setComplementosIndex] = useState(1);
  const [cacerolasIndex, setCacerolasIndex] = useState(1);

  const [vajillaFade, setVajillaFade] = useState(true);
  const [fuenteFade, setFuenteFade] = useState(true);
  const [ramekinFade, setRamekinFade] = useState(true);
  const [cacerolasFade, setCacerolasFade] = useState(true);
  const [complementosFade, setComplementosFade] = useState(true);
  const [panFade, setPanFade] = useState(true);

  useEffect(() => {
  // Detectar ancho de pantalla
  const isDesktop = window.innerWidth > 1024;

  if (!isDesktop) return; // si no es desktop, no correr animaciones

  let vajillaInterval,
    fuenteInterval,
    ramekinInterval,
    panInterval,
    cacerolasInterval,
    complementosInterval;

  const vajillaTimeout = setTimeout(() => {
    setVajillaFade(false);
    setTimeout(() => {
      setVajillaIndex((prev) => (prev % 6) + 1);
      setVajillaFade(true);
    }, 300);

    vajillaInterval = setInterval(() => {
      setVajillaFade(false);
      setTimeout(() => {
        setVajillaIndex((prev) => (prev % 6) + 1);
        setVajillaFade(true);
      }, 300);
    }, 3000);
  }, 500);

  const fuenteTimeout = setTimeout(() => {
    setFuenteFade(false);
    setTimeout(() => {
      setFuenteIndex((prev) => (prev % 6) + 1);
      setFuenteFade(true);
    }, 300);

    fuenteInterval = setInterval(() => {
      setFuenteFade(false);
      setTimeout(() => {
        setFuenteIndex((prev) => (prev % 6) + 1);
        setFuenteFade(true);
      }, 300);
    }, 3000);
  }, 1300);

  const ramekinTimeout = setTimeout(() => {
    setRamekinFade(false);
    setTimeout(() => {
      setRamekinIndex((prev) => (prev % 5) + 1);
      setRamekinFade(true);
    }, 300);

    ramekinInterval = setInterval(() => {
      setRamekinFade(false);
      setTimeout(() => {
        setRamekinIndex((prev) => (prev % 5) + 1);
        setRamekinFade(true);
      }, 300);
    }, 3000);
  }, 2100);

  const panTimeout = setTimeout(() => {
    setPanFade(false);
    setTimeout(() => {
      setPanIndex((prev) => (prev % 6) + 1);
      setPanFade(true);
    }, 300);

    panInterval = setInterval(() => {
      setPanFade(false);
      setTimeout(() => {
        setPanIndex((prev) => (prev % 6) + 1);
        setPanFade(true);
      }, 300);
    }, 3000);
  }, 2900);

  const complementosTimeout = setTimeout(() => {
    setComplementosFade(false);
    setTimeout(() => {
      setComplementosIndex((prev) => (prev % 6) + 1);
      setComplementosFade(true);
    }, 300);

    complementosInterval = setInterval(() => {
      setComplementosFade(false);
      setTimeout(() => {
        setComplementosIndex((prev) => (prev % 6) + 1);
        setComplementosFade(true);
      }, 300);
    }, 3000);
  }, 3600);

  const cacerolasTimeout = setTimeout(() => {
    setCacerolasFade(false);
    setTimeout(() => {
      setCacerolasIndex((prev) => (prev % 7) + 1);
      setCacerolasFade(true);
    }, 300);

    cacerolasInterval = setInterval(() => {
      setCacerolasFade(false);
      setTimeout(() => {
        setCacerolasIndex((prev) => (prev % 7) + 1);
        setCacerolasFade(true);
      }, 300);
    }, 3000);
  }, 4200);

  return () => {
    clearTimeout(vajillaTimeout);
    clearTimeout(fuenteTimeout);
    clearTimeout(ramekinTimeout);
    clearTimeout(panTimeout);
    clearTimeout(complementosTimeout);
    clearTimeout(cacerolasTimeout);
    clearInterval(vajillaInterval);
    clearInterval(fuenteInterval);
    clearInterval(ramekinInterval);
    clearInterval(panInterval);
    clearInterval(complementosInterval);
    clearInterval(cacerolasInterval);
  };
}, []);


  return (
    <>
      <Nav />
      <section className={style.main}>
        <div className={`${style.item} ${style.item1}`}>
          <Link href="fuente">
            <Image
              src={`/img/fuentes/${fuenteIndex}.webp`}
              fill
              alt="fuente"
              className={`${style.img} ${
                fuenteFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Fuentes</span>
          </Link>
        </div>
        <div className={`${style.item} ${style.item2}`}>
          <Link href="vajilla">
            <Image
              src={`/img/vajilla/${vajillaIndex}.webp`}
              fill
              alt="vajilla"
              className={`${style.img} ${
                vajillaFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Vajilla</span>
          </Link>
        </div>
        <div className={`${style.item} ${style.item3}`}>
          <Link href="ramekin">
            <Image
              src={`/img/ramekin/${ramekinIndex}.webp`}
              fill
              alt="ramekin"
              className={`${style.img} ${
                ramekinFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Ramekin</span>
          </Link>
        </div>
        <div className={`${style.item} ${style.item4}`}>
          <Link href="pan">
            <Image
              src={`/img/pan/${panIndex}.webp`}
              fill
              alt="pan"
              className={`${style.img} ${
                panFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Pan</span>
          </Link>
        </div>
        <div className={`${style.item} ${style.item5}`}>
          <Link href="complementos">
            <Image
              src={`/img/complementos/${complementosIndex}.webp`}
              fill
              alt="complementos"
              className={`${style.img} ${
                complementosFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Complementos</span>
          </Link>
        </div>
        <div className={`${style.item} ${style.item6}`}>
          <Link href="cacerolas">
            <Image
              src={`/img/cacerolas/${cacerolasIndex}.webp`}
              fill
              alt="cacerolas"
              className={`${style.img} ${
                cacerolasFade ? style.fadeIn : style.fadeOut
              }`}
            />
            <div className={style.overlay} />
            <span className={style.text}>Cacerolas</span>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
