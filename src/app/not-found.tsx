'use client'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { DoorOpen } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import err from '../../assets/404.png'

export default function NotFound() {
	gsap.registerPlugin(ScrollToPlugin)
	const aboutus = React.useRef(null)
	const reviews = React.useRef(null)
	const price = React.useRef(null)
	const adaptiveabout = React.useRef(null)
	const scrollTo = (target: any) =>
		gsap.to(window, { duration: 1, scrollTo: target })
	const [isReviews, setReviews] = useState<boolean>(false)
	// const t = useTranslations("Error")
	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	return (
		<div className='text-white text-[100px] '>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					marginTop: '250px',
					gap: '50px',
				}}
			>
				<Image
					style={{ width: '250px', height: '100px' }}
					src={err}
					alt='err'
				/>
				<DoorOpen
					onClick={handleClick}
					style={{ cursor: 'pointer' }}
					width={50}
					height={50}
					color='#ffffff'
				/>
			</div>
		</div>
	)
}
