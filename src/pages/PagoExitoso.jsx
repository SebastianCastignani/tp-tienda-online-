export default function PagoExitoso() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
          Pago realizado
        </h1>

        <p className="text-xl text-text-light dark:text-text-dark">
          ¡Que lo disfrutes!
        </p>
      </div>
    </main>
  );
}