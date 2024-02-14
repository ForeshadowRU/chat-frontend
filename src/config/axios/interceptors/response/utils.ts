//Здесь действительно может вернуться any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prepareResponse = (responseObject: {
  data?: any;
  reviews?: any;
  partners?: any;
}): any => {
  if (typeof responseObject !== 'object') throw new Error('В ответ пришел не объект');
  if (!('data' in responseObject)) return responseObject;

  //обработка запросов с пагинацией
  if ('pagination' in responseObject) {
    return { pagination: responseObject.pagination, data: responseObject.data };
  }

  return responseObject.data;
};
