import { products } from '@/data/products'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='size-screen bg-zinc-950 text-slate-100 flex flex-col gap-3 justify-center items-center'>
     {products.map((product) => {
      return <h1>{product.categoria}</h1>
     })}
    </div>
  )
}
