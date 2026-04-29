"use client";

import { useState } from "react";
import Image from "next/image";
import logoImg from "@/assets/images/logo.png"
import Footer from "@/components/Footer";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";

export default function Page() {
  //สร้างตัวแปร router เพื่อจัดการการเปลี่ยนหน้า
  const router = useRouter();

  //สร้าง state สำหรับ handle input secure code
  const [secureCode, setSecureCode] = useState("");

  //สร้างฟังก์ชัน handle การคลิกปุ่มเข้าใช้งาน
  const handleAccessClick = () => {
    //Validate input
    if(secureCode.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณากรอก Secure Code",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#e8b90e",
      })
      return;
    }

    //ตรวจสอบ Secure Code และเปิดไปหน้า /showalltask
    if(secureCode.toLocaleLowerCase() === "iotsau2026"){
      router.push("/showalltask");
    }else{
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "Secure Code ไม่ถูกต้องกรุณาป้อนใหม่...",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#e8b90e",
    })
  }
}

  return (
    <div>
      <div className="mt-10 border-2 border-gray-300 rounded-md
                      shadow-md w-3/5 mx-auto
                      flex flex-col items-center p-10">

        <Image src={logoImg} alt="logo" width={150} height={150} />

        <h1 className="text-2xl text-blue-700 font-bold mt-5">
          Manage Task App
        </h1>

        <input type="text" placeholder="Secure Code"
                className="mt-5 p-2 rounded-md border-2 border-gray-300"
                value={secureCode} onChange={(e) => setSecureCode(e.target.value)} />

        <button className="mt-5 p-2 rounded w-1/2 bg-orange-600 text-white
                            hover:bg-orange-800"
                onClick={handleAccessClick}>
          เข้าใช้งาน
        </button>

        <Footer />
      </div> 
    </div>
  );
}