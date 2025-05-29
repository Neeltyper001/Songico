
export const renderImage = (file)=>{
    // if(fileI){
    //     console.log(true)
    // }

    // else{
    //     console.log(false)
    // }
    const fileReader = new FileReader();    
    fileReader.readAsDataURL(file);
        return new Promise((res,rej)=>{
            // events attached when fileReader reads the file
        
                // when it loads the file
                    fileReader.onloadend = ()=>{ 
                        res(fileReader.result)                               
                    }
                // in case if an error occurs during reading the file
                    fileReader.onerror = ()=>{
                        rej(fileReader.error)
                    }

        })
}