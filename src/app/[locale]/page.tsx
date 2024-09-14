import {AllPage} from "@/components/shared/allpage";

export async function generateStaticParams() {
    // Укажите все возможные значения для параметра [locale]
    const locales = ['en', 'ru']; // Пример локалей

    // Верните массив объектов с параметрами
    return locales.map((locale) => ({
        locale,
    }));
}


export default function Home({ params }: { params: { locale: string } }) {

    return (
        <AllPage/>
    )
}
