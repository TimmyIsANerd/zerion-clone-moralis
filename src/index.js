import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

const appId = "SJJHcnAXTGNFDgHlG4fqBKzoOrUhHPab5ibESojQ";
const serverUrl = "https://k4ndogebvs4p.grandmoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
