import '../src/components/app/App.scss'
import Menu from './components/menu/menu';
import {useState} from 'react';

function App() {

const items = [{value: 'Главная', href: '/main', icon: 'anchor'},{value: 'Услуги', href: '/service', icon: 'service'},{value: 'Як ми працюємо', href: '/info', icon: 'info'},{value: 'Доставка', href: '/post', icon: 'anchor'}]

const [open, setOpen] = useState(true)

  return (
    <div className="app">
      <div className='header'>
        <div className='burger' onClick={() => setOpen(!open)}><span/></div>
      </div>
       <div className='main'>
          <h2>Ошибка 400 (Bad Request)</h2> - <span>означает, что сервер по указанной ссылке не смог корректно обработать запрос на получение изображения. Это может произойти по нескольким причинам:</span> 
          <p>Неверная ссылка:</p>
          Проверьте, что ссылка на изображение действительно ведет к изображению и записана правильно. Убедитесь, что вы используете прямую ссылку на изображение, а не на страницу, на которой оно размещено.

          <p>Доступ к изображению ограничен:</p> Некоторые веб-сайты ограничивают доступ к изображениям через прямые ссылки для предотвращения внешнего встраивания или гораздо чаще для экономии пропускной способности. Это может вызвать ошибку 400. Попробуйте загрузить изображение с другого источника или проверьте настройки доступности на сервере, где хранится изображение.

          <p>Проблемы на стороне сервера:</p> Ошибка 400 также может быть вызвана сервером, на котором хранится изображение, из-за его неполадок или неправильной конфигурации. В этом случае вам могут потребоваться дополнительные действия, такие как связь с администратором сервера.

          Если у вас есть контроль над изображением, попробуйте загрузить его на другой хостинг или сервер и использовать новую прямую ссылку. В противном случае, если вы используете сторонний ресурс для изображения, удостоверьтесь, что у вас есть разрешение на доступ к этому ресурсу.
          Добро пожаловать на курс, который должен сделать с вас опытного программиста на JavaScript. Во всех уроках атор курса постарается рассказать и показать вам о всех возможностях javascript, которые вам пригодятся в современной веб-разработке. Этот курс предполагает что у вас уже есть хоть минимальный опыт работы с javascript, так как он рассчитан на более продвинутых пользователей.
       </div>
      {/* {open ? <Menu header={'Бургер меню'} items={items}/> : ''} */}
     
    </div>
  );
}

export default App;