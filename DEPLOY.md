# Инструкция по деплою ColdHub на сервер

## Требования

- Docker
- Docker Compose
- Git

## Установка Docker и Docker Compose на сервере

Если Docker еще не установлен на вашем сервере, выполните следующие команды:

```bash
# Обновление пакетов
sudo apt update

# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Добавление пользователя в группу docker (чтобы не использовать sudo)
sudo usermod -aG docker $USER

# Установка Docker Compose
sudo apt install docker-compose-plugin -y

# Перезагрузка сессии или выход и повторный вход
```

## Деплой приложения

1. **Подключитесь к серверу по SSH:**

```bash
ssh user@your-server-ip
```

2. **Клонируйте репозиторий:**

```bash
git clone https://github.com/your-username/black_version.git
cd black_version
```

3. **Запустите приложение:**

```bash
docker compose up --build -d
```

Флаги:
- `--build` - собирает образ перед запуском
- `-d` - запускает контейнеры в фоновом режиме

4. **Проверьте статус контейнеров:**

```bash
docker compose ps
```

5. **Приложение будет доступно по адресу:**

```
http://your-server-ip:3000
```

## Полезные команды

### Просмотр логов

```bash
# Все логи
docker compose logs

# Логи в реальном времени
docker compose logs -f

# Логи конкретного сервиса
docker compose logs app
```

### Остановка приложения

```bash
docker compose down
```

### Перезапуск приложения

```bash
docker compose restart
```

### Обновление приложения

```bash
# Получить последние изменения
git pull

# Пересобрать и перезапустить
docker compose up --build -d
```

### Полная очистка (удаление контейнеров и образов)

```bash
docker compose down --rmi all -v
```

## Настройка порта

По умолчанию приложение запускается на порту 3000. Если вы хотите изменить порт, отредактируйте файл `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # Изменить 8080 на нужный вам порт
```

## Troubleshooting

### Порт уже занят

Если порт 3000 уже используется, измените порт в `docker-compose.yml` или остановите процесс, использующий порт:

```bash
# Найти процесс на порту 3000
sudo lsof -i :3000

# Остановить процесс
sudo kill -9 <PID>
```

### Проблемы с правами доступа

Если возникают проблемы с правами доступа к Docker:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Контейнер не запускается

Проверьте логи:

```bash
docker compose logs app
```

