import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
//paginas
import App from './App';
import News from './screens/News//index.jsx';
import Register from './screens/Register/index.jsx';
import Login from './screens/Login/index.jsx';
//rotas
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//Css
const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      padding: 0;
      box-sizing: border-box;
  }

  code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  li{
    list-style: none;
}
body{
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none; /* Remove o sublinhado */
  color: inherit; /* Mantém a cor padrão do texto */
  cursor: pointer; /* Altera o cursor para indicar que é clicável */
}
`
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"News",
        element: <News/>,
      },
      {
        path:"Login",
        element: <Login/>,
      },
      {
        path:"Register",
        element: <Register/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
