import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Contact <span>me</span></h1>
        <div className="bg-blue">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar</p>
        </div>

        <form>
          <input type="text" placeholder="Nom"></input>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button className="submit">Soumettre</button>
        </form>

      </main>
    </>
  );
}
