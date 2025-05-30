export const createFile = (file,userId)=>{
    const renamedFile = new File([file], `${userId}-${file.name}`, {
    type: file.type,
    lastModified: file.lastModified,
  });  
  return renamedFile;
}