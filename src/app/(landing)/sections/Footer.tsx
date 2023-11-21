import React from 'react'

type Props = {}

export function Footer({ }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-zinc-900 text-zinc-300 text-lg'>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between py-11 border-b border-zinc-500/30">
          <div className=''>
            <h1 className='text-4xl'>DiogoPassos.pt</h1>
          </div>
          <div className='flex flex-col justify-center'>Social Links</div>
        </div>
        <div className="py-14 flex">
          <div className="flex-auto flex flex-row flex-wrap gap-x-12">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
          <div className='flex-inital'>
            © {year} DiogoPassos.pt - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}