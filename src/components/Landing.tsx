import React from "react";
import Loading from "./loade.tsx";
import Nav from "./nav_component.tsx"

const Landing: React.FC = () => {
  return (
    <div className=" lg:overflow-hidden">
      {/* <Loading/> */}
      <Nav/>
      <div className="w-full flex justify-center p-20 drop-shadow-2xl flex-col items-center xl:mt-2 lg:flex-row">
          <div className=" h-80 w- lg:w-4/5">
              <p className="text-6xl mb-4"><p className="text-b_g-gray">We Are</p> <p className="text-b_g-red">Confidence For you.</p></p>
              <p className=" text-sm md:text-lg lg:text-sm xl:text-lg ">
                  ทีมสนับสนุนลูกค้าของเราพร้อมให้บริการตลอด 24 ชั่วโมง 
                  คุณสามารถติดต่อเราได้ผ่าน อีเมล หรือ เพจ facebook 
                  เราพร้อมตอบคำถามและ แก้ไขปัญหาของคุณ ติดปัญหาหรือคนกลางพูดไม่สุภาพ แจ้งเราได้เลย เราถือว่าลูกค้าสำคัญที่สุด!
              </p>
              <button className="text-2xl text-b_g-red mt-6">มาเริ่มกันเลย!</button>
          </div>
          <div className="w-full ml-10 drop-shadow-xl md:w-4/5 mt-16 md:mt-0 xl:w-4/5">
            <img src={`${process.env.PUBLIC_URL}/image/money_lan.jpeg`} alt="" className="rounded-xl w-full md:h-72 xl:h-96 lg:h-60 xl:w-4/5"  />
          </div>
      </div>
      <div className="w-full h-20 flex justify-center xl:h-60 xl:mt-10">
        <div className="h-80  relative bottom-4 w-full xl:w-4/5 xl:bottom-10 lg:bottom-10">
            <div className="bg-transparent w-full h-32 flex flex-col items-center justify-center ">
                <p className="text-lg mb-4 text-b_g-red shadow-xl p-4 w-auto md:w-auto xl:text-5xl xl:p-6 lg:text-3xl md:text-2xl">สำเร็จไปแล้ว 0 คน</p>
                <p className="text-sm text-b_g-gray shadow-sm xl:text-xl lg:text-lg">ขอบคุณผู้คนที่ไว้ว่างใจเรา</p>
            </div>
        </div>
      </div>
      <div className=" w-full h-auto mt-20 flex flex-col items-center">
        <div className="w-4/5">
          <p className="text-4xl"><p className="text-6xl text-b_g-red">"Role"</p><p className="text-gray-600"> 3 บทบาทหน้าที่ที่คุณต้องรู้?</p></p>
        </div>
        <div className="w-full flex items-center flex-col mt-12 space-y-4 md:flex-row md:justify-center md:space-x-4 mb-5">
          <div className="w-60 bg-white h-80 flex flex-col items-center xl:w-96 rounded-lg border  lg:w-72 drop-shadow-xl mt-4">
            <div className="w-full h-auto  flex justify-center mt-4">
              <img src={`${process.env.PUBLIC_URL}/image/role1.png`} alt="" className="w-20 h-20" />
            </div>
            <div className="w-4/5 h-auto flex flex-col items-center">
              <p className="text-lg mt-1 text-b_g-staff xl:text-2xl">Intermediary (Staff)</p>
            </div>
            <div className="w-4/5 h-auto flex flex-col mt-1">
              <p className="text-gray-500 text-sm xl:text-base">"Intermediary" ทำหน้าที่กลางสินค้าดูแลและพุดคุยผู้ชื้อและผู้ขาย เพื่อให้เกิดข้อตกลงการชื้อขายได้อย่างราบรื่น และคนกลางต้องเช็คสินค้าก่อนส่งให้ลูกค้าอีกด้วยเพื่อป้องกันของไม่ตรงปกอีกด้วย หากสนใจติดต่อทีมงานเพื่อสมัครคุณจะได้รับผลตอบแทนแน่นอน</p>
            </div>
          </div>
          <div className="w-60 bg-white h-80 flex flex-col items-center xl:w-96 rounded-lg border  lg:w-72 drop-shadow-xl">
            <div className="w-full h-auto  flex justify-center mt-4">
              <img src={`${process.env.PUBLIC_URL}/image/role2.png`} alt="" className="w-20 h-20" />
            </div>
            <div className="w-4/5 h-auto flex flex-col items-center">
              <p className="text-lg mt-1 text-green-600 xl:text-2xl">Customer (Buyer and Seller)</p>
            </div>
            <div className="w-4/5 h-auto flex flex-col mt-1">
              <p className="text-gray-500 text-sm xl:text-base">"Customer" คุณคือลูกค้าของเราที่สนใจจะขายสินค้าหรือชื้อสินค้าแต่กลัวสินค้าไม่ตรงปกกลัวว่าอีกฝ่ายจะเป็นมิจฉาชีพได้รับสินค้าแล้วไม่จ่ายเงินเราคือคำตอบที่ท่านสามารถไว้ว่างใจได้ครับไม่จำเป็นต้องเสียเวลาแค่ 5 ขั้นตอนง่ายๆ</p>
            </div>
          </div>
          <div className="w-60 bg-white h-80 flex flex-col items-center xl:w-96 rounded-lg border  lg:w-72 drop-shadow-xl">
            <div className="w-full h-auto  flex justify-center mt-4">
              <img src={`${process.env.PUBLIC_URL}/image/admin.png`} alt="" className="w-20 h-20" />
            </div>
            <div className="w-4/5 h-auto flex flex-col items-center">
              <p className="text-lg mt-1 text-green-600 xl:text-2xl">Admin (Administer)</p>
            </div>
            <div className="w-4/5 h-auto flex flex-col mt-1">
            <p className="text-gray-500 text-sm xl:text-base">"Admin" ทำหน้าที่ดูแลระบบทั้งหมด ตรวจสอบความถูกต้องของข้อมูลและการทำงานของระบบ รวมถึงการจัดการกับปัญหาที่เกิดขึ้น เพื่อให้การซื้อขายเป็นไปอย่างราบรื่นและปลอดภัย</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-auto mt-20 flex flex-col items-center">
      <div className="w-4/5 mt-32 text-right">
          <p className="text-4xl"><p className="text-6xl text-b_g-red">"Step"</p><p className="text-gray-600"> 4 ขั้นตอนการกลางที่คุณต้องรู้?</p></p>
        </div>
      </div>
      <div className="w-full h-96">

      </div>
    </div>
  );
};

export default Landing;
