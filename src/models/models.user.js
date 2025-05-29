export  class User {
     // Not integerated
    constructor(userObj){
        this.userId = userObj.userId;
        this.profileImage = userObj.profileImage;
        this.userDocId = userObj.$id
    }
}