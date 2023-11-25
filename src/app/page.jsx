import Hero from '../components/Hero'
import Navbar from "../components/Navbar"
import PopularProducts from "../components/PopularProducts"
import Items from "../components/items"
export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/*  Categories */}
      <PopularProducts />

      {/* Items */}
      <Items />

    </main>
  )
}
