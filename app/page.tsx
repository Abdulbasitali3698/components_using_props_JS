import Image from 'next/image'
import Button from "./components/button/button"
import Card from "./components/card/card"
export default function Home() {
  return (
    <main>
      Hello World
      <Card/>
      <Button title="apply"/>
      <Button title="basic"/>
    </main>
  )
}
