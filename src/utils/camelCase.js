export const camelCaseFormat = (str) => {
// works for / _ - and space characters only
  const pattern = /[_\-\s/]+/;
  const parts = str.split(pattern);  
   let result = parts[0].toLowerCase();
   for (let i = 1; i < parts.length; i++) {
       result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);       
   }
   
   return result
}