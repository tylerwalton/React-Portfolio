import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div> 
      <Head>
          <title>Tyler | Full-Stack Developer</title>
        <meta
          name="description"
          content="I’m a full stack web developer specializing in Javascript, SQL, React, CSS, HTML and Node"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
    </div>
  )
}

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });