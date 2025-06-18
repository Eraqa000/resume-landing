import React from 'react';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Ера — Веб-разработчик / Кассир</h1>
        <p>Город: Алматы | Email: your@email.com | Telegram: @yourhandle</p>
      </header>
      <section>
        <h2>Образование</h2>
        <p>КазНУ им. Аль-Фараби, факультет информационных технологий (2 курс)</p>
      </section>
      <section>
        <h2>Опыт работы</h2>
        <ul>
          <li>Установщик линз, детейлинг-центр (2023)</li>
          <li>Отдел продаж (2023)</li>
        </ul>
      </section>
      <section>
        <h2>Проекты</h2>
        <ul>
          <li>2-3 сайта: HTML, CSS, JavaScript</li>
          <li>Telegram-боты на Python</li>
        </ul>
      </section>
      <section>
        <h2>Навыки</h2>
        <p>Python, Java, C++, HTML, CSS, JavaScript, SQL, Git</p>
      </section>
      <section>
        <h2>Языки</h2>
        <p>Казахский (родной), Русский (свободно), Английский (Pre-Intermediate)</p>
      </section>
      <footer>
        <p>Готов к работе онлайн и оффлайн (график 2/2)</p>
      </footer>
    </div>
  );
};

export default App;