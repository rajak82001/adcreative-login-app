import React, { useContext } from 'react';
import ConnectTikTok from '../components/ConnectTikTok';
import AdForm from '../components/AdForm';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      {!token ? <ConnectTikTok /> : <AdForm />}
    </div>
  );
}
