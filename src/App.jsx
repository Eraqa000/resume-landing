import React from 'react';
import { FaMapMarkerAlt, FaTelegramPlane, FaEnvelope, FaBriefcase, FaCode, FaUniversity, FaLanguage } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-4xl font-bold text-indigo-700">Ера</h1>
          <p className="text-gray-600 flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2" /> Алматы
          </p>
          <p className="text-gray-600 flex items-center">
            <FaEnvelope className="mr-2" /> your@email.com
          </p>
          <p className="text-gray-600 flex items-center">
            <FaTelegramPlane className="mr-2" /> @yourhandle
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-2">
            <FaUniversity className="mr-2" /> Образование
          </h2>
          <p>КазНУ им. Аль-Фараби, ИТ факультет (2 курс)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-2">
            <FaBriefcase className="mr-2" /> Опыт работы
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Установщик линз, детейлинг-центр (2023)</li>
            <li>Специалист отдела продаж (2023)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-2">
            <FaCode className="mr-2" /> Проекты
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>2-3 сайта: HTML, CSS, JavaScript</li>
            <li>Telegram-боты на Python</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-2">
            <FaCode className="mr-2" /> Навыки
          </h2>
          <p className="leading-relaxed">
            Python, Java, C++, HTML, CSS, JavaScript, SQL, Git
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-2">
            <FaLanguage className="mr-2" /> Языки
          </h2>
          <p>Казахский (родной), Русский (свободно), Английский (Pre-Intermediate)</p>
        </section>

        <footer className="pt-4 border-t mt-6">
          <p className="text-center text-gray-500">
            Готов к работе онлайн и оффлайн (график 2/2)
          </p>
        </footer>
      </div>
    </div>
  );
}
