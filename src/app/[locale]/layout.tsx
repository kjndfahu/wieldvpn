import { routing } from '@/src/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { Montserrat } from 'next/font/google'
import { headers } from 'next/headers' // needed import
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import '../globals.css'

const montserrat = Montserrat({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'WieldVPN',
	description: 'Generated by create next app',
	icons: {
		icon: '/favicon/favicon.ico',
	},
}

type Props = {
	children: ReactNode
	params: { locale: string }
}

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export default async function RootLayout({
	children,
	params: { locale },
}: Props) {
	const messages = await getMessages()
	unstable_setRequestLocale(locale)

	const header = headers()
	const localeHeader = header.get('x-next-intl-locale')
	if (localeHeader === null) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={montserrat.className}>
				<main className='min-h-screen'>
					<NextIntlClientProvider locale={locale} messages={messages}>
						{children}
					</NextIntlClientProvider>
				</main>
			</body>
		</html>
	)
}
