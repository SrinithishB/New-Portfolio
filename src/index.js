import {createRoot} from 'react-dom/client'
// import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Suspense, lazy } from 'react'
import running from './image/running.gif'
const App=lazy(()=>delayForDemo(import('./App')))
function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
createRoot(document.getElementById('root')).render(
<Suspense fallback={
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <img src={running}/>
    </div>}>
    <Provider store={store}>
            <App/>
    </Provider>
</Suspense>)