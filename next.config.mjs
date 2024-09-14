import createNextIntlPlugin from 'next-intl/plugin.js';

// Указываем путь к конфигурационному файлу next-intl
const withNextIntl = createNextIntlPlugin('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,   // Включаем строгий режим React
    swcMinify: true,         // Включаем SWC для минимизации
    // Добавьте другие настройки Next.js по необходимости
    experimental: {
        serverActions: true,  // Включаем экспериментальные возможности, если нужно
    }
};

export default withNextIntl(nextConfig);