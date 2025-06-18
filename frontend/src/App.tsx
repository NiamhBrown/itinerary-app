import "./App.css";
import { Header } from "./components/Header";
import { TripForm } from "./features/tripForm/TripForm";

function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-stone-900 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <Header />
      <main className="w-full max-w-4xl">
        <TripForm />
      </main>
      <footer className="w-full max-w-4xl mt-12 text-center text-sm text-stone-500 pb-8">
        <p>&copy; {new Date().getFullYear()} Travel planner</p>
      </footer>
    </div>
  );
}

export default App;
