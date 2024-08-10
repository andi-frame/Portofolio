import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="h-fit w-full px-32 py-5">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Projects</span>
        <hr />
        <div className="">
          <div className="text-lg font-semibold">
            MACA: Advanced Interactive Digital Book Web App Utilizing Generative
            AI
          </div>
          <div className="pt-2">Web-App with MERN framework</div>
          <Image
            src="/maca.png"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-lg"
          />
        </div>
        <hr />
        <div className="">
          <div className="text-normal font-semibold">
            PENGOPTIMALAN SISTEM IRIGASI PERTANIAN PRESISI MELALUI INTEGRASI
            DATA CUACA DAN SENSOR SUHU-KELEMBABAN UNTUK MENINGKATKAN EFISIENSI
            SUMBER DAYA AIR
          </div>
          <div className="pt-2">Inovasi Teknologi IoT</div>
        </div>
        <hr />
        <div className="">
          <div className="text-normal font-semibold">
            Teman Kelas: Aplikasi Pendamping Kegiatan Belajar-Mengajar untuk
            Pendidikan yang Lebih Inklusif dan Berkualitas
          </div>
          <div className="pt-2">Inovasi Teknologi</div>
        </div>
        <hr />
        <div className="">
          <div className="text-normal font-semibold">
            Video Meme sebagai Alternatif Teknik Relaksasi untuk Siswa Kelas 10
            SMA Pradita Dirgantara
          </div>
          <div className="pt-2">Jurnal Ilmu Sosial Humaniora </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Projects;
