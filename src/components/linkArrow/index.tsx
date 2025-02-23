"use client";

import Link from 'next/link'
import { useParams } from 'next/navigation'

import './link.scss'

interface LinkArrowProps {
  title: string;
  url: string;
  aos?: object;
}

export default function LinkArrow({ title, url, aos }: LinkArrowProps) {
  const params = useParams();
  return (
    <Link href={`/${params?.lang}${url}`} className='link link-after' {...aos}>
      {title}
    </Link>
        
  )
}