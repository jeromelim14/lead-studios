export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl">Test Page - {new Date().toISOString()}</h1>
      <p>This page was created to test if Vercel is deploying new changes.</p>
    </div>
  );
}