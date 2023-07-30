import Image from 'next/image'
import Link from 'next/link';
import './globals.css'



export default function Home() {
  return (
    <div>
    <h1>Welcome to the Paint App</h1>
    <Link href="/paint">Go to Paint App</Link>
    </div>
    
  )
}
