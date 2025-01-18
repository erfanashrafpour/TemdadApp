import {environment} from "@environments/environment";

export  class  UserRepository {


  private  static userModel;

     public constructor() {

        UserRepository.SetUserModel();

  }
  public static GetFirstName()
  {
    return this.userModel.FirstName

  }

  public static GetLastName()
  {
    return this.userModel.LastName

  }


  public static GetFullName()
  {
    return this.GetFirstName()+" "+this.GetLastName();
  }

  private static SetUserModel()
  {
    let userJson = localStorage.getItem(environment.USER_PASS);

    if (userJson?.length>0) {

      //  const  userModel = JSON.parse(userJson);
      this.userModel = JSON.parse(userJson);

      // this.fullUserName = userModel.FirstName+' '+userModel.LastName
    }
  }










}
