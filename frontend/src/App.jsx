import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Vite } from 'appwrite';

const App = () => {
  return (
    <>
     <Sidebar />
     <Main />
    </>
  )
}

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f5896b0009f35b3a5e');

export default App