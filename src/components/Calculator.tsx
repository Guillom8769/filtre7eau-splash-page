
import { useState, useEffect } from "react";
import Button from "./Button";

const Calculator = () => {
  const [bottlesPerDay, setBottlesPerDay] = useState(3);
  const [annualCost, setAnnualCost] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);
  const [plasticBottlesSaved, setPlasticBottlesSaved] = useState(0);
  
  // Constants
  const BOTTLE_PRICE = 0.50; // € per bottle
  const CO2_PER_BOTTLE = 82.8; // grams of CO2 per 1.5L plastic bottle
  
  useEffect(() => {
    // Calculate annual cost of bottled water
    const dailyCost = bottlesPerDay * BOTTLE_PRICE;
    const yearCost = dailyCost * 365;
    setAnnualCost(yearCost);
    
    // Calculate annual CO2 savings
    const annualBottles = bottlesPerDay * 365;
    setPlasticBottlesSaved(annualBottles);
    const co2GramsSaved = annualBottles * CO2_PER_BOTTLE;
    setCo2Saved(co2GramsSaved / 1000); // Convert to kg
  }, [bottlesPerDay]);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBottlesPerDay(parseInt(e.target.value));
  };
  
  const handleIncrease = () => {
    if (bottlesPerDay < 10) {
      setBottlesPerDay(bottlesPerDay + 1);
    }
  };
  
  const handleDecrease = () => {
    if (bottlesPerDay > 1) {
      setBottlesPerDay(bottlesPerDay - 1);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Calculez vos économies</h3>
      <div className="mb-6">
        <label className="block mb-2">
          Nombre de bouteilles plastiques par jour:
        </label>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleDecrease}
            className="w-8 h-8 rounded-full bg-water text-white flex items-center justify-center"
          >
            -
          </button>
          <input
            type="range"
            min="1"
            max="10"
            value={bottlesPerDay}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <button 
            onClick={handleIncrease}
            className="w-8 h-8 rounded-full bg-water text-white flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="text-center mt-2 text-2xl font-bold text-water">{bottlesPerDay}</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-water-light rounded-lg text-center">
          <p className="text-sm mb-1">Économies annuelles</p>
          <p className="text-2xl font-bold text-water">{annualCost.toFixed(2)} €</p>
        </div>
        <div className="p-4 bg-eco-light rounded-lg text-center">
          <p className="text-sm mb-1">CO₂ évité par an</p>
          <p className="text-2xl font-bold text-eco-dark">{co2Saved.toFixed(1)} kg</p>
        </div>
      </div>
      
      <div className="text-center p-4 bg-sand-light rounded-lg mb-6">
        <p className="text-sm mb-1">Bouteilles plastiques évitées</p>
        <p className="text-2xl font-bold text-gray-700">{plasticBottlesSaved}</p>
      </div>
      
      <div className="text-center">
        <p className="mb-3 text-gray-600">Filtre7Eau : 299€ + recharge 159€/an</p>
        <Button variant="primary" size="lg" className="w-full">
          Acheter maintenant
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
