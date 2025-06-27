import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import DataImage from "./data ";
import { listTools, listProyek } from "./data ";
import FileC from "../public/assets/CV_Krisna_.png";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Hasil yang indah lahir dari ketekunan🔥</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Krisnanda</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programing dan Designer,
            terutama pada pembuatan Website dan Desain.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={FileC}
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              download="CV_KRISNANDA.png"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto
          animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>
      {/* Hero Section */}

      {/* About Section */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg animate__animated animate__fadeInUp animate__delay-3s"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p
            className="text-base/loose mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Hi, perkenalkan saya I Dewa Gede Mas Bagus Krisnanda, biasa
            dipanggil Krisna, saya adalah seorang Mahasiswa Semester 4 di
            Primakara University saya memiliki ketertarikan dalam bidang Web
            Developer dan Designer tentunya saya sedang mendalami bidang
            Programing dan Design, Saya percaya bahwa desain dan fungsionalitas
            harus berjalan beriringan, sehingga setiap proyek saya yang saya
            kerjakan tidak hanya terlihat menarik tetapi powerfull yang dapat
            memberikan pengalaman yang optimal untuk pengguna.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  20 <span className="text-violet-500">+</span>
                </h1>
              </div>
              <p>Proyek Selesai</p>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32 ">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools yang biasa saya gunakan
          </p>
          <div className="tool-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md 
            hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
      </div>
      {/* About Section */}

      {/* Proyek Section */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                {/* link a href */}
                {/* <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek Section */}

      {/* Kontak Section */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.co/baguskrisna424@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak Section */}
    </>
  );
}

export default App;
