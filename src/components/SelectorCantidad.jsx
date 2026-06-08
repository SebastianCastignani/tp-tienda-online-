import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function SelectorCantidad({
  cantidad,
  setCantidad,
  min = 1,
  max,
}) {
  const incrementar = () => {
    if (cantidad < max) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > min) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900">
      <span className="px-4 font-semibold text-text-light dark:text-text-dark">
        {cantidad}
      </span>

      <div className="flex flex-col border-l border-slate-300 dark:border-slate-700">
        <button
          type="button"
          onClick={incrementar}
          className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FiChevronUp />
        </button>

        <button
          type="button"
          onClick={decrementar}
          className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
}