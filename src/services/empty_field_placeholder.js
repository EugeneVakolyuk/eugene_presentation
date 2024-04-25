export const emptyFieldPlaceholder = (data, fields) => {
  data.forEach((item, index) => {
    fields.forEach((field) => {
      if (item[field] !== undefined && item[field] !== null && item[field] !== '') return;

      let found = false;

      if (index !== 0) {
        for (let j = index - 1; j >= 0; j--) {
          if (data[j][field] !== undefined && data[j][field] !== null && data[j][field] !== '') {
            item[field] = data[j][field];
            found = true;
            break;
          }
        }
      }

      if (!found) {
        for (let k = index + 1; k < data.length; k++) {
          if (data[k][field] !== undefined && data[k][field] !== null && data[k][field] !== '') {
            item[field] = data[k][field];
            found = true;
            break;
          }
        }
      }
    });
  });

  return data;
};