import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ResumeLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-wide leading-tight drop-shadow-lg">
            Привет, я Era! 👋
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed tracking-wide">
            Веб-разработчик • Программист • Начинающий фрилансер
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <Card className="bg-gray-800 border-none">
          <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide drop-shadow-md">
                Обо мне
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide">
                Я студент 3 курса факультета информационных технологий КазНУ. Умею создавать сайты, Telegram-ботов, знаю C++, Python, JavaScript, SQL.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-none">
          <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide drop-shadow-md">
                Навыки
              </h2>
              <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed tracking-wide">
                <li>HTML, CSS, Tailwind, React</li>
                <li>Node.js, Express, MongoDB</li>
                <li>Git, GitHub, Vercel, Railway</li>
                <li>Создание Telegram-ботов</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 tracking-wide drop-shadow-md">Связаться со мной</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed tracking-wide">Готов к новым проектам и предложениям!</p>
          <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-md transition duration-300">
            Написать в Telegram
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
