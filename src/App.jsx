import ContactForm from "./components/ContactForm";

// className="my-8 mx-4 p-6 rounded-2xl bg-white"

function App() {


  return (
    // app wrapper
    <main className="max-w-3xl mx-auto p-6 bg-white rounded-2xl">
      <h1 className="text-heading font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </main>
  );
}

export default App
