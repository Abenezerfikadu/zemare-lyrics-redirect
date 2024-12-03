'use client'
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('songid');

    if (songId) {
  
      window.location.href = `zemare://lyrics?songid=${songId}`;

    
      setTimeout(() => {
        window.location.href = "https://onelink.to/bgxpr5";
      }, 1500);
    } else {

      window.location.href = "https://onelink.to/bgxpr5";
    }
  }, []); 

  return (
    <div className={styles.page}>
      <p>Redirecting...</p>
    </div>
  );
}
