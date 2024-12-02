function maxProfit(x, y, z) {
    const profitA = 50000;  
    const profitB = 30000;  
    const profitC = 60000;  
    const timeA = 1;
    const timeB = 1;
    const timeC = 1.5; 
    const materialA = 3;
    const materialB = 3;
    const materialC = 4; 
    const maxTime = 12; 
    const maxMaterial = 50; 

    const totalTime = x * timeA + y * timeB + z * timeC;
    const totalMaterial = x * materialA + y * materialB + z * materialC;
    const totalProfit = x * profitA + y * profitB + z * profitC;

    if (totalTime > maxTime || totalMaterial > maxMaterial) {
        return 0;
    } else {
        return totalProfit; 
    }
}

export { maxProfit };
