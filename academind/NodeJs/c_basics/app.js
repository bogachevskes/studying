/**
 * если указать ./http - будет искать в папке,
 * без этого ищет глобальный компонент ноды
 */
const http = require('http');

/**
 * Обработчик запросов.
 * 
 * Все, что экспортируется через module.export
 * запрашивается через require
 */
const routes = require('./routes');

console.log(routes.someText);

/**
 * !!! ВАЖНО !!!
 * Чтобы не положить сервер, нужно использовать
 * события и замцкания для асинхронной обработки событий.
 */ 

/**
 * Чтобы перезапускался сервер,
 * нужно перезапускать выполнение кода.
 */

/**
 * Нода в работе использует единый поток для обработки
 * всех входящих запросов,
 * поэтому, что обрабатывать большие асинхронный запросы,
 * и программа не зависала, необходимо ответы оборачивать в коллбэки.
 */
const server = http.createServer(routes.requestHandler);

/**
 * Процесс обрабатывающий события,
 * которые вернут колбэки и завершатся.
 * 
 * Это событие никогда не заврешится по умолчанию, без особых указаний.
 */
server.listen(3000);

/**
 * Петля живет бесконечно,
 * чтобы ее заврешить необходимо событие process.exit();
 */