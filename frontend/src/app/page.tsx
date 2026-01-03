export default async function Home() {
  // We fetch directly in the Server Component
  const response = await fetch("http://127.0.0.1:8000/api/hello");
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Portfolio Project</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Backend says:{" "}
        <span className="text-primary font-mono">{data.message}</span>
      </p>
    </main>
  );
}
