import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaBrain, FaGlobe } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-6">
        <header className="space-y-1">
          <h1 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">Ера</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt /> Алматы
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FaEnvelope /> your@email.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FaGithub /> @yourhandle
          </div>
        </header>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300"><FaGraduationCap /> Образование</h2>
          <p>КазНУ им. Аль-Фараби, ИТ факультет (2 курс)</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300"><FaBriefcase /> Опыт работы</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Установщик линз, детейлинг-центр (2023)</li>
            <li>Специалист отдела продаж (2023)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300"><FaCode /> Проекты</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>2-3 сайта: HTML, CSS, JavaScript</li>
            <li>Telegram-боты на Python</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300"><FaBrain /> Навыки</h2>
          <p>Python, Java, C++, HTML, CSS, JavaScript, SQL, Git</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300"><FaGlobe /> Языки</h2>
          <p>Казахский (родной), Русский (свободно), Английский (Pre-Intermediate)</p>
          <p>Готов к работе онлайн и офлайн (график 2/2)</p>
        </section>
      </div>
    </div>
  );
}
