function calculateTotalSpentByCategory(transactions) {
    const categoryMap = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (categoryMap[category]) {
      categoryMap[category] += price;
      console.log(category +" "+ categoryMap[category])
    } else {
        categoryMap[category] = price;
        console.log(category +" "+ categoryMap[category])
    }
  });

  const result = Object.keys(categoryMap).map(category => ({
    category,
    totalSpent: categoryMap[category],
  }));

  return result;
}


  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656176800000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656276800000,
      price: 15,
      category: 'Clothing',
      itemName: 'T-shirt',
    },
    // Add more transactions with different categories
  ];
  
const result = calculateTotalSpentByCategory(transactions);

console.log(result)
