
import { useState } from "react";
import Button from "./Button";

interface WaterQualityResult {
  quality: "excellent" | "good" | "average" | "poor";
  hardness: "soft" | "medium" | "hard" | "very-hard";
  pollutants: string[];
}

const WaterQualityCheck = () => {
  const [postalCode, setPostalCode] = useState("");
  const [result, setResult] = useState<WaterQualityResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Mock function to simulate API call
  // In the real implementation, this would fetch data from a water quality API
  const checkWaterQuality = (code: string): Promise<WaterQualityResult> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple mock logic based on first digit of postal code
        const firstDigit = parseInt(code[0]);
        
        if (isNaN(firstDigit)) {
          reject(new Error("Code postal invalide"));
          return;
        }
        
        let quality: "excellent" | "good" | "average" | "poor";
        let hardness: "soft" | "medium" | "hard" | "very-hard";
        let pollutants: string[] = [];
        
        // Mock logic to determine water quality
        if (firstDigit <= 2) {
          quality = "excellent";
          hardness = "soft";
          pollutants = [];
        } else if (firstDigit <= 5) {
          quality = "good";
          hardness = "medium";
          pollutants = ["chlore"];
        } else if (firstDigit <= 8) {
          quality = "average";
          hardness = "hard";
          pollutants = ["chlore", "nitrates"];
        } else {
          quality = "poor";
          hardness = "very-hard";
          pollutants = ["chlore", "nitrates", "microplastiques", "pesticides"];
        }
        
        resolve({ quality, hardness, pollutants });
      }, 1000); // Simulate network delay
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (postalCode.length !== 5 || !/^\d+$/.test(postalCode)) {
      setError("Veuillez entrer un code postal français valide (5 chiffres)");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const data = await checkWaterQuality(postalCode);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };
  
  const getQualityInfo = () => {
    if (!result) return null;
    
    const qualityMap = {
      excellent: {
        title: "Excellente",
        color: "text-green-600",
        bg: "bg-green-100",
        message: "Votre eau est de très bonne qualité. Le Filtre7Eau améliorera davantage son goût et éliminera toute trace restante de chlore."
      },
      good: {
        title: "Bonne",
        color: "text-blue-600",
        bg: "bg-blue-100",
        message: "Votre eau est de bonne qualité. Le Filtre7Eau éliminera le chlore et les éventuels microplastiques pour une eau plus pure."
      },
      average: {
        title: "Moyenne",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
        message: "Votre eau contient plusieurs polluants. Le Filtre7Eau est particulièrement recommandé pour améliorer significativement sa qualité."
      },
      poor: {
        title: "Préoccupante",
        color: "text-red-600",
        bg: "bg-red-100",
        message: "Votre eau contient de nombreux polluants. Le Filtre7Eau est fortement recommandé pour protéger votre santé et celle de votre famille."
      }
    };
    
    const hardnessMap = {
      "soft": "Douce",
      "medium": "Moyenne",
      "hard": "Dure",
      "very-hard": "Très dure"
    };
    
    const info = qualityMap[result.quality];
    
    return (
      <div className={`mt-6 p-4 rounded-lg ${info.bg}`}>
        <h4 className={`text-lg font-bold ${info.color} mb-2`}>
          Qualité: {info.title}
        </h4>
        <p className="mb-3">{info.message}</p>
        
        <div className="mb-3">
          <span className="font-medium">Dureté de l'eau: </span>
          <span>{hardnessMap[result.hardness]}</span>
        </div>
        
        {result.pollutants.length > 0 && (
          <div>
            <span className="font-medium">Polluants détectés: </span>
            <span>{result.pollutants.join(", ")}</span>
          </div>
        )}
        
        <div className="mt-4">
          <Button variant="primary" className="w-full">
            Commander Filtre7Eau
          </Button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">
        Vérifiez la qualité de l'eau dans votre région
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-2">
            Entrez votre code postal:
          </label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-water"
            placeholder="Ex: 75001"
            maxLength={5}
          />
          {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
        </div>
        
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
        >
          {isLoading ? "Chargement..." : "Vérifier"}
        </Button>
      </form>
      
      {result && getQualityInfo()}
    </div>
  );
};

export default WaterQualityCheck;
