
import { cn } from "@/lib/utils";

interface ComparisonFeature {
  name: string;
  filtre7eau: string | number;
  standard: string | number;
  unit?: string;
  isHighlighted?: boolean;
}

interface ComparisonTableProps {
  features: ComparisonFeature[];
  className?: string;
}

const ComparisonTable = ({ features, className }: ComparisonTableProps) => {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-water text-white">
            <th className="p-3 text-left">Caractéristiques</th>
            <th className="p-3 text-center">Filtre7Eau</th>
            <th className="p-3 text-center">Filtres standards</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className={cn(
                index % 2 === 0 ? "bg-white" : "bg-gray-50",
                feature.isHighlighted && "bg-water-light"
              )}
            >
              <td className="p-3 border-b border-gray-200">{feature.name}</td>
              <td className="p-3 border-b border-gray-200 text-center font-bold">
                {feature.filtre7eau}
                {feature.unit && <span className="text-sm ml-1">{feature.unit}</span>}
              </td>
              <td className="p-3 border-b border-gray-200 text-center text-gray-600">
                {feature.standard}
                {feature.unit && <span className="text-sm ml-1">{feature.unit}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
