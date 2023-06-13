# Книга контактів

Виконай рефакторинг коду застосунку «Книга контактів», додавши управління станом за допомогою бібліотеки Redux Toolkit. <br>
Нехай Redux-стан виглядає наступним чином.  

`{` 
`  contacts: [],` 
`  filter: ""`
`}`

Створи сховище з `configureStore()`  
Використовуй функцію `createSlice()`  
Створи дії збереження та видалення контакту, а також оновлення фільтра  
Зв'яжи React-компоненти з Redux-логікою за допомогою хуків [бібліотеки react-redux]([https://www.example.com](https://react-redux.js.org/))
Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі
