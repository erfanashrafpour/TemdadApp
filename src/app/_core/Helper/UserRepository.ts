import {environment} from "@environments/environment";
import {AuthService} from "@app/auth-module/service/auth.service";

export  class  UserRepository {


  private  static userModel;
  private static authService: AuthService;

     public constructor(private  authService:AuthService) {

        UserRepository.authService = authService;
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


  static GetPlanActive() {
    return this.userModel.Plan_Active
  }
  static GetRandomActive() {
    return this.userModel.Random_Active
  }
static GetMobile()
{
  return this.userModel.Mobile
}
  static GetPassword()
  {
    return this.userModel.Password
  }



  static GetPlanFrom() {
    return this.userModel.Plan_From;
  }

  static GetPlanTo() {
    return this.userModel.Plan_To;
  }

  static GetPlanSaturday() {
    return this.userModel.Plan_Saturday;
  }

  static GetPlanSunday() {
    return this.userModel.Plan_Sunday;
  }

  static GetPlanMonday() {
    return this.userModel.Plan_Monday;
  }

  static GetPlanTuesday() {
    return this.userModel.Plan_Tuesday;
  }

  static GetPlanWednesday() {
    return this.userModel.Plan_Wednesday;
  }

  static GetPlanThursday() {
    return this.userModel.Plan_Thursday;
  }

  static GetPlanFriday() {
    return this.userModel.Plan_Friday;
  }


  static GetLeitnerCounter() {
    return this.userModel.LeitnerCounter;
  }




  static  GetNewUserModel()
  {
    UserRepository.authService.Login(this.GetMobile(),this.GetPassword()).subscribe(res=>{

      if (res.statusCode==200)
      {

        localStorage.setItem(environment.USER_PASS,JSON.stringify(res.data))
        localStorage.setItem(environment.TOKEN_KEY,res.data.Token)
      }


    })


  }








}
