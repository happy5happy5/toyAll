village = [
    '1001212',
    '1201011',
    '1102001',
    '2111102',
    '0012111',
    '1111101',
    '2121102',
  ];

  const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(Number(line[i]));
      matrix.push(row);
    });
    return matrix;
  };

  let rumorMap=createMatrix(village)

  