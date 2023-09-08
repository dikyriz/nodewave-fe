import React from "react";
import Image from "next/image";

export default function Applications() {
  return (
    <section className="mt-10 py-3 md:mt-15">
      <h3 className="font-semibold text-lg text-center pb-3 xl:text-3xl">
        Applications that can be made
      </h3>
      <div className="flex flex-col px-4 gap-4 md:flex-row md:mt-4 mt-0 xl:px-20 xl:mt-10 ">
        <div>
          <div className="flex gap-2 items-center pb-3">
            <Image
              src="/assets/icons/material-symbols_list.svg"
              width={50}
              height={50}
              className="w-8"
            />
            <h4 className="font-semibold">Online Attendance</h4>
          </div>
          <p>
            With the times, your team may be able to work in the office or
            outside the office. Get the accuracy of your team's work hours with
            your own company's special online attendance feature with features
            such as:
          </p>
          <ul className="list-inside list-disc pt-3">
            <li>Clock in and Clock Out attendance</li>
            <li>Face Photo</li>
            <li>Face Recognition</li>
            <li>Accurate time stamp down to seconds</li>
            <li>GPS location of employees</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-2 items-center pb-3">
            <Image
              src="/assets/icons/sport-basketball.svg"
              width={50}
              height={50}
              className="w-8"
            />
            <h4 className="font-semibold">Sport Center</h4>
          </div>
          <p>
            Create your sports center field booking application. Suitable for
            futsal, mini soccer, badminton, tennis, golf, basketball, to table
            tennis. Give your customers the freedom to
          </p>
          <ul className="list-inside list-disc pt-3">
            <li>Choose a booking schedule</li>
            <li>Online payments</li>
            <li>Automatic scheduling system</li>
            <li>Search for Friends feature</li>
            <li>Split Payment with team members</li>
            <li>Information and announcements from you</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-2 items-center pb-3">
            <Image
              src="/assets/icons/ph_book-bold.svg"
              width={50}
              height={50}
              className="w-8"
            />
            <h4 className="font-semibold">Booking</h4>
          </div>
          <p>
            Offer your services in your own application to place orders to
            delivery directly to the client's house. Suitable for ac service,
            cleaning, cleaning service, CCTV, massage, and even other digital
            services. Features that can be made:
          </p>
          <ul className="list-inside list-disc pt-3">
            <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
            <li>
              Melakukan reservasi online dan pembayaran dengan metode pembayaran
              digital
            </li>
            <li>Penjadwalan dengan tim lapangan</li>
            <li>Aplikasi khusus untuk tim</li>
            <li>Promosi dan Kode voucher khusus</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3 py-6 px-4 items-center flex-wrap md:gap-5 md:mt-3 mt-0 xl:px-20 xl:gap-8 ">
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/shop-outlined.svg"
            width={50}
            height={50}
            className="w-8"
          />
          <h4 className="font-semibold text-lg">E-commerce</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/mdi_company.svg"
            width={50}
            height={50}
            className="w-8"
          />
          <h4 className="font-semibold text-lg">Company Profile</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/cashier-shop.svg"
            width={50}
            height={50}
            className="w-8"
          />
          <h4 className="font-semibold text-lg">Cashier</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/ph_chat-bold.svg"
            width={50}
            height={50}
            className="w-8"
          />
          <h4 className="font-semibold text-lg">Chat</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/man-mechanic.svg"
            width={50}
            height={50}
            className="w-8"
          />
          <h4 className="font-semibold text-lg">Workshop</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/icons/construction-outline.svg"
            width={50}
            height={50}
          />
          <h4 className="font-semibold text-lg">Construction</h4>
        </div>
        <div className="flex gap-2">
          <h4 className="font-semibold text-lg">and many others</h4>
        </div>
      </div>
    </section>
  );
}
