# Сравнение производительности синхронного и асинхронного приложений

Этот проект создан, чтобы изучить работу с Prometheus и Grafana для мониторинга приложений на ASP.NET Core.  
В нём сравниваются синхронная и асинхронная (async/await) обработки запросов с выводом метрик и настройкой уведомлений.

<img width="1148" height="702" alt="image_2025-07-22_11-20-57" src="https://github.com/user-attachments/assets/4f17f22c-4331-428c-954f-6aad7ed88839" />

---

## Что внутри

- **Sync App** — приложение с синхронная обработка запросов.  
- **Async App** — асинхронная обработка (async/await). 
- **Prometheus** — сбор метрик.  
- **Grafana** — визуализация метрик.
- **Alertmanager** — отправка уведомлений (например, в Telegram).
- **k6** — инструмент для нагрузочного тестирования.

---

## Запуск проекта

### Шаг 1: Клонирование репозитория
```bash
git clone https://github.com/xorty-v/AsyncMonitoring.git
cd AsyncMonitoring
```

### Шаг 2: Сборка и запуск контейнеров
```bash
docker compose up --build
```

### Доступ к сервисам:
- Sync API: http://localhost:5000
- Async API: http://localhost:5001
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000 (логин: admin / пароль: admin)
- Alertmanager: http://localhost:9093

---

## Примечания
- Метрики доступны по эндпоинту /metrics у каждого приложения.
- Alertmanager настроен для отправки уведомлений в Telegram. Для корректной работы необходимо указать в [alertmanager.yml](https://github.com/xorty-v/AsyncMonitoring/blob/master/alertmanager/alertmanager.yml) свой Bot_Token и Chat_ID.
