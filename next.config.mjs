import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Включаем строгий режим React
	swcMinify: true, // Включаем SWC для минимизации
	// Добавьте другие настройки Next.js по необходимости
	experimental: {
		serverActions: true, // Включаем экспериментальные возможности, если нужно
	},
}

export default withNextIntl(nextConfig)
