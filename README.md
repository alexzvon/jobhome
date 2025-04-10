# 🧪 Тестовое задание

## 📌 Цель

Создать небольшое SPA-приложение на **Vue**, которое:

- Загружает список задач из JSON-файла
- Позволяет отмечать задачи как выполненные (чекбоксы)
---

## ✅ Требования к функциональности

- При первом запуске данные подгружаются асинхронно из файла `tasks.json`
- При перезагрузке страницы, состояние списка задач сохраняется
---

## 📁 Пример структуры JSON

Пример файла `tasks.json`:

```json
[
  { "id": 1, "title": "Задача 1", "done": false },
  { "id": 2, "title": "Задача 2", "done": false },
  { "id": 3, "title": "Задача 3", "done": false },
  { "id": 4, "title": "Задача 4", "done": false },
  { "id": 5, "title": "Задача 5", "done": false }
]
```

## 📘 По завершении задания

- Создать `README.md` и описать как запустить приложение
- Запушить задание на GitHub
- Прислать ссылку на репозиторий





# Запуск приложения
> git clone git@github.com:alexzvon/jobhome.git

> cd jobhome

> composer install

> cat .env.example > .env

> php artisan key:generate

> php artisan migrate

## На вопрос - Would you like to create it? - отвечеам Yes

> pnpm install

> pnpm build

> php artisan serve

## Набираем в браузере "localhost:8000"


