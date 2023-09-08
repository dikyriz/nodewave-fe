import React from "react";

export default function Testimony() {
  return (
    <section className="pl-8 mt-10 md:mt-15">
      <h3 className="font-semibold text-base md:text-xl">Testimony</h3>
      <div className="text-black mt-5 flex flex-col gap-6 md:flex-row">
        <div className="bg-white rounded-md xl:w-[422px] px-4 py-3 relative h-36 md:h-44">
          <p className="text-xs font-medium leading-relaxed xl:text-sm">
            Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang
            paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu
            udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih
            Nodewave.
          </p>
          <span className="text-[#00AD98] font-medium text-sm pt-5 block absolute bottom-3">
            Ahmad Prasetyo
          </span>
        </div>
        <div className="bg-white rounded-md xl:w-[422px] px-4 py-3 relative h-36 md:h-44">
          <p className="text-xs font-medium leading-relaxed xl:text-sm">
            Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
            ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal
            cerita aja lewat zoom maunya buat website seperti apa, langsung
            dibuatin dengan cepat sama Nodewave.
          </p>
          <span className="text-[#00AD98] font-medium text-sm pt-5 block absolute bottom-3">
            Laras Ratnadewi
          </span>
        </div>
        <div className="bg-white rounded-md xl:w-[422px] px-4 py-3 relative h-36 md:h-44">
          <p className="text-xs font-medium leading-relaxed xl:text-sm">
            Yang paling keren sih source codenya sekalian dikasih, pas pula bisa
            pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru
            untuk startup gw. Thanks a lot Nodewave supportnya!!
          </p>
          <span className="text-[#00AD98] font-medium text-sm pt-5 block absolute bottom-3">
            Yusuf Uwais
          </span>
        </div>
      </div>
    </section>
  );
}
