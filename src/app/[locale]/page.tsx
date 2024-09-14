import { AllPage } from '@/components/shared/allpage'
import { unstable_setRequestLocale } from 'next-intl/server'

export async function generateStaticParams() {
	// Укажите все возможные значения для параметра [locale]
	const locales = ['en', 'ru'] // Пример локалей

	// Верните массив объектов с параметрами
	return locales.map(locale => ({
		locale,
	}))
}

type Locale = 'en' | 'ru'

interface HomeProps {
	params: {
		locale: Locale
	}
}

export default function Home({ params: { locale } }: HomeProps) {
	unstable_setRequestLocale(locale)

	return <AllPage />
}
