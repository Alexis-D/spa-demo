import { useQuery } from '@tanstack/react-query';
import './App.css';
import { useState } from 'react';
import { helloOptions, upOptions } from './client/@tanstack/react-query.gen';

const Upper = () => {
  const [text, setText] = useState('');
  const { isLoading, data } = useQuery({
    enabled: text !== '',
    ...upOptions({
      path: {
        text: text,
      },
    }),
  });

  return (
    <div>
      <p>Inefficiently uppercasing text by asking the backend API to do it:</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100px' }}
      />
      <p>{isLoading ? 'WAITING ON BACKEND' : data?.message}</p>
    </div>
  );
};

const App = () => {
  const { isLoading, data } = useQuery({
    ...helloOptions(),
  });

  return (
    <div className="content">
      <h1>SPA E2E demo</h1>

      <div>
        Fetching something from slow endpoint:
        {isLoading && <p>LOADING</p>}
        {data && <p>LOADED: {data.message}</p>}
      </div>

      <Upper />
    </div>
  );
};

export default App;
