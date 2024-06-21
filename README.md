# books_counter
Счётчик книг для приложения library
## Как запустить
Есть только Dev версия(использовалась для разработки и отладки):


*docker compose -f docker-compose.dev.yml up*
***


Создано приложение Node.js, c двумя роутами(приложение контейнеризировано):

- увеличить счётчик POST /counter/:bookId/incr
- получить значение счётчика GET /counter/:bookId

Приложение хранит count в Redis

Единственный клиент этого приложения другое приложение
 [Library](https://github.com/Moonelpy/NDSE_Homework/tree/docker_2.5_hw)

Сервис завернут в докер и лежит так же на [докер хаб](https://hub.docker.com/layers/moonelpy/ndse/counter/images/sha256-f1d21a1f9f47ff8b3bca4a8b9a906c6babd148259ec6c98de70bb068a60c2e50?context=repo) moonelpy/ndse:counter