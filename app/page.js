import Image from 'next/image'
import Link from 'next/link';
import '../styles/Home.css'

import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
} from '../sections';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;


// export default function Home() {
//   return (
//     <div>
//     <h1>Welcome to the Paint App</h1>
//     <Link href="/paint">Go to Paint App</Link>
//     </div>
    
//   )
// }
