import { Header, Keyboard, KeyGrid } from '@molecules';

const App = () => {
  return (
    <div className="flex min-h-screen bg-cultured-100">
      <div className="container mx-auto flex-1">
        <Header />
        <KeyGrid />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
