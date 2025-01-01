import React from "react";
import Loading from "./loade.tsx";

const Navbar: React.FC = () =>{
    return (
        <>
            <nav className="flex flex-row w-full h-16 items-center p-10 space-x-20 pl-20 pr-20 ">
              
                <p className="text-2xl font-medium ">Twm.com</p>
                <div className=" space-x-6 absolute right-1/3 md:right-80 hidden md:flex">
                    <p className="text-lg">รายละเอียด</p>
                    <p className="text-lg">เครดิต</p>
                    <p className="text-lg">ติดต่อเรา</p>
                </div>
                <div className="flex  w-auto md:right-20 md:absolute">
                    <button className="transition delay-150 duration-300 ease-in-out p-3 bg-none mr-4 rounded-md md:block bg-[#E0324B] text-white hover:border-2 border-[#E0324B] hover:bg-transparent hover:text-[#E0324B] hidden">
                        <a href="">สมัครสมาชิก</a>
                    </button>
                    <button className="transition delay-150 duration-300 ease-in-out p-3 bg-none rounded-md w-32 md:w-auto  bg-[#E0324B] text-white hover:border-2 border-[#E0324B] hover:bg-transparent hover:text-[#E0324B]">
                       <a href="">เข้าสุ่ระบบ</a>
                    </button>
                </div>
                 
            </nav>
        </>
    )
}

export default Navbar;