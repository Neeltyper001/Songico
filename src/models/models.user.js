export  class User {
     
    constructor(userObj){
        this.userId = userObj.userId;
        this.profileImage = userObj.profileImage;
        this.profileImageId = userObj.profileImageId;
        this.docId = userObj.$id
    }
}