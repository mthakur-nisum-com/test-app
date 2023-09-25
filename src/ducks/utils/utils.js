
export const serviceCall = async (url='',method) => fetch(url, {
    headers: {
      "accepts": "application/json"
    },
    method
  }).then((res) => res.json());



export const formatDate = (date) => {
  const d= new Date(date);
  return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
}
