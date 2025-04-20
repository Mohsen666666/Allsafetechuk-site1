
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/logo-full-shield.png"
          alt="AllSafeTechUK Logo"
          width={120}
          height={120}
        />
        <h1 style={{ fontSize: 32, color: '#0070f3', marginTop: 20 }}>
          Welcome to AllSafeTechUK
        </h1>
        <p style={{ marginTop: 15, fontSize: 18, color: '#333' }}>
          Smart. Secure. Connected.
        </p>
        <p style={{ marginTop: 10, fontSize: 16, color: '#555', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          We deliver cutting-edge security systems, IT infrastructure, and electrical solutions for modern homes and businesses across the UK.
        </p>
      </div>
    </div>
  );
}
