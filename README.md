Тестовое задание от «NewGen Vision»

Файлы:
JS_Test.png    - исходные данные;
index_start.js - исходный код;
index.js       - исправленный код;
index_TS.ts    - исправленный код с применением TypeScripte;
index_TS.js    - скомпилированный из TypeScript исправленный код;
index.html     - для запуска кода;
README         - описание проблем и исправлений в коде. Ответ на тестовое задание.

Исходные данные.
Некорректный код:
 
![](https://github.com/GragertVD/NewGen_Vision/blob/master/JS_Test.png)
 

Проблемы данного кода
1.	Переменные “username” и “password” должны создаваться и инициализироваться в конструкторе. 
Решение: удалить строки 2, 3.
2.	По соглашению среди программистов JS для приватных свойств в названии необходимо использовать нижнее подчеркивание, а для доступа к свойствам реализовывать сеттеры и геттеры. 
Решение: изменены названия свойств, дописаны сеттеры для свойств.  
3.	“var” не рекомендуется к использованию. 
Решение: заменить на “const” или "let".
4.	В геттере “username” возвращается значение поля класса, а не объекта, что является некорректным. 
Решение: заменить “UserService.username”  на “this.username”.
5.	Некорректная генерация ошибки. 
Решение: исправить “throw "You are not allowed get password";” на “throw new Error("You are not allowed get password");” 
6.	Функция “authenticate_user()” никогда не возвращает “false”, либо ответ либо “true”.
7.	Работу с запросами на сервер лучше реализовывать асинхронно. 
Решение: переписать функцию “authenticate_user()” так, чтобы она возвращала промис.
8.	Странное событие “click” вешается на логин в поле. Как понимаю, это событие нажатия на кнопку в форме.
Зависит сильно от контекста задачи и html страницы, но лучше вешать обработчик события “submit” на форму, и не забывать вызывать “ e.preventDefault()”.
Данный пункт не стал исправлять в коде, потому что действительно зависит от контекста за рамками приведенного кода.
9.	Для такой простой задачи лучше использовать чистый JS, и мне приятнее работать с чистым JS, поэтому убрал jQuery и переписал на чистом JS.

10. Так же реализовал данный код с использованием TypeScripte. Благодаря чему поля пароля и имени пользователя доступны только для чтения. И общая надежность кода с TypeScript увеличивается. 


[Моя версия кода](https://github.com/GragertVD/NewGen_Vision/blob/master/index.js)
[Моя версия кода на TypeScript](https://github.com/GragertVD/NewGen_Vision/blob/master/index_TS.ts)

P.S.
Точную концепцию класса не полностью понял. При разработке опирался на следующую концепцию:
Объект класса пользователь с именем и паролем, при этом пароль доступен только на запись.
У класса есть метод авторизации пользователей, параметром которому передается пользователь для авторизации.