export const coffeeType = [
    { id: "5b21ca3eeb7f6fbccd471818", name: "Latte" },
    { id: "5b21ca3eeb7f6fbccd471814", name: "Milk Tea" },
    { id: "5b21ca3eeb7f6fbccd471820", name: "Mixed" }
  ];
  
  export function getCoffeeType() {
    return coffeeType.filter(g => g);
  }