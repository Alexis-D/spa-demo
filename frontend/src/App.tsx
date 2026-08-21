import { useQuery } from '@tanstack/react-query';
import './App.css';
import { useState } from 'react';
import {
  helloOptions,
  repeatOptions,
} from './client/@tanstack/react-query.gen';

const Upper = () => {
  const [text, setText] = useState('test');
  const [count, setCount] = useState(3);
  const { isLoading, data, error } = useQuery({
    retry: false, // we want errors immediately
    ...repeatOptions({
      query: {
        text,
      },
      path: {
        count,
      },
    }),
  });

  return (
    <div>
      <p>Inefficiently repeating text by asking the backend API to do it:</p>
      <input
        type="text"
        defaultValue="test"
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100px' }}
      />
      <input
        type="number"
        defaultValue={count}
        onChange={(e) => setCount(parseInt(e.target.value, 10))}
        style={{ width: '100px' }}
      />
      {error === null && isLoading ? (
        <p>'WAITING ON BACKEND'</p>
      ) : (
        <p>{data?.message}</p>
      )}
      {error !== null && 'details' in error ? (
        <p style={{ color: 'red' }}>{error.details}</p>
      ) : null}
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
