import { DEPENDENCIES } from "@/utils";

export const Dependencies = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-200 rounded-xl shadow-md">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3 border-b">No</th>
            <th className="px-4 py-3 border-b">Director(a)</th>
            <th className="px-4 py-3 border-b">Dependencia</th>
            <th className="px-4 py-3 border-b">Teléfono</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {DEPENDENCIES.map((dep) => (
            <tr key={dep.no} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{dep.no}</td>
              <td className="px-4 py-2 border-b">{dep.name}</td>
              <td className="px-4 py-2 border-b">{dep.department}</td>
              <td className="px-4 py-2 border-b">{dep.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
