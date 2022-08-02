import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import FeedScreen from './screens/FeedScreen';
import Message from './screens/Message';
import Comunidades from './screens/Comunidades';
import Explorar from './screens/Explorar';
import Notificaciones from './screens/Notificiaciones';
import Guardados from './screens/Guardados';
import Perfil from './screens/Perfil';
import Opciones from './screens/Opciones';



const App = () => {
  return <Layout>
    <Routes>
      <Route path='/' element={<FeedScreen />} />
      < Route path='Comunidades' element={<Comunidades />} />
      < Route path='Explorar' element={<Explorar />} />
      < Route path='Notificaciones' element={<Notificaciones />} />
        < Route path='Message' element={<Message />} />
      < Route path='Guardados' element={<Guardados />} />
      < Route path='Perfil' element={<Perfil />} />
      < Route path='Opciones' element={<Opciones />} />

    
    </Routes>

  </Layout>
};

export default App;
