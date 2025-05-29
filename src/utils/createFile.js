export const createFile = (file,userId)=>{
    console.log(file)
    console.log(userId)
    const renamedFile = new File([file], `${userId}-${file.name}`, {
    type: file.type,
    lastModified: file.lastModified,
  });
  console.log(renamedFile)
  return renamedFile;
}