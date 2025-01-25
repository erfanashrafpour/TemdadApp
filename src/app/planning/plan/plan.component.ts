import {Component, Input, OnInit} from '@angular/core';
import {CalenderHelper} from "@app/_core/_config/CalenderHelper";
import {MatDialog} from "@angular/material/dialog";
import {UserRepository} from "@app/_core/Helper/UserRepository";
import {PlanService} from "@app/planning/services/plan.service";


interface IRequestPlan {
  /// <summary>
  /// تاریخ شروع برنامه ریزی
  /// </summary>
  Plan_From : Date;


  /// <summary>
  /// تاریخ پایان برنامه ریزی
  /// </summary>
  Plan_To : Date;


  Plan_Saturday : boolean;

  /// <summary>
  /// یک شنبه برنامه ریزی است؟
  /// </summary>
  Plan_Sunday : boolean;

  /// <summary>
  /// دوشنبه برنامه ریزی است؟
  /// </summary>
  Plan_Monday:boolean;

  /// <summary>
  /// سه شنبه برنامه ریزی است؟
  /// </summary>
  Plan_Tuesday:boolean;

  /// <summary>
  /// چهارشنبه برنامه ریزی است؟
  /// </summary>
  Plan_Wednesday:boolean;

  /// <summary>
  /// پنج شنبه برنامه ریزی است؟
  /// </summary>
  Plan_Thursday:boolean;

  /// <summary>
  /// جمعه برنامه ریزی است؟
  /// </summary>
  Plan_Friday:boolean;

  /// <summary>
  /// بسته هایی که کاربر برنامه ریزی کرده است
  /// </summary>
  PIds : number[];

  /// <summary>
  /// تعداد تکرار لایتنر
  /// </summary>
  LeitnerCounter:number;
}


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent  implements OnInit {
  user;
  private calendarhelper = new CalenderHelper();
  @Input()data:{userId:number}
  constructor( private matDialog:MatDialog , private planService:PlanService) {
    this.seUserPlan()

  }
  litnerList = [1,2,3,4,5]
  heads =[]

  startDate;
  endDate ;
  litnerCount;

  isSomeItemNotCheck(children:any[]) {

    const y = ! (children.every(item=>item.IsCheck==true))
    const x =  !(children.every(item=>item.IsCheck==false));


    return y && x;
  }



  isAllItemCheck(children: any) {
    return (children.every(item=>item.IsCheck==true))

  }

  onToggleHead($event: any, headeId) {


    if ($event.target.checked==true)
    {
      this.heads.forEach(item=>{
        if (item.Id==headeId){
          item.Children.forEach(child=>{
            child.IsCheck=true;
          })
        }

      })
    }
    if ($event.target.checked==false)
    {
      this.heads.forEach(item=>{
        if (item.Id==headeId){
          item.Children.forEach(child=>{
            child.IsCheck=false;
          })
        }

      })    }

  }


  ngOnInit(): void {


    this.planService.GetTreePlan().subscribe(res=>{
      if (res.statusCode==200)
      {
        this.heads = res.data;//.filter(item=>item.Id=6)
        this.heads.forEach(item=>item.hide=true)
      }
    })


   /* this.AdminUserService.getAccountUser(this.data.userId).subscribe(res=>{

      if (res.statusCode==200)
      {
        this.user=res.data
        this.startDate = this.calendarhelper.DateToNgb(this.user.Plan_From)
        this.endDate = this.calendarhelper.DateToNgb(this.user.Plan_To)
        this.litnerCount = res.data.LeitnerCounter
      }

    })
    this.AdminUserService.getTreePlan(this.data.userId).subscribe(res=>{
      if (res.statusCode==200)
      {
        this.heads = res.data;//.filter(item=>item.Id=6)
        this.heads.forEach(item=>item.hide=true)
      }
    })*/
  }


  save()
  {
    const pids =[];
    this.heads.forEach(item=>{

      item.Children.forEach(child=>{

        if (child.IsCheck)
        {
          pids.push(child.Id)
        }

      })

    })
    const req:IRequestPlan={
      LeitnerCounter: this.litnerCount,
      PIds: pids,
      Plan_From: this.calendarhelper.NgbToDate(this.startDate),
      Plan_To: this.calendarhelper.NgbToDate(this.endDate),
      Plan_Friday: this.user.Plan_Friday,
      Plan_Saturday: this.user.Plan_Saturday,

      Plan_Monday: this.user.Plan_Monday,
      Plan_Sunday: this.user.Plan_Sunday,
      Plan_Thursday: this.user.Plan_Thursday,
      Plan_Tuesday: this.user.Plan_Tuesday,
      Plan_Wednesday: this.user.Plan_Wednesday

    }


 /*   this.AdminUserService.planEdit(this.user.UserId,req).subscribe(res=>{

    })*/


  }

  showPlanTable() {

 /*   this.matDialog.open(PlanTableDialogComponent,
      {data:{userId:this.user.UserId , fullName:this.user.FirstName+" "+this.user.LastName},
        width:'80vh'

      }
    )
*/
  }

  private seUserPlan() {

    this.user = {

      Plan_Sunday : UserRepository.GetPlanSunday(),
    Plan_Monday : UserRepository.GetPlanMonday(),
    Plan_Tuesday : UserRepository.GetPlanTuesday(),
    Plan_Thursday : UserRepository.GetPlanThursday(),
    Plan_Wednesday : UserRepository.GetPlanWednesday(),
    Plan_Saturday : UserRepository.GetPlanSaturday(),
    Plan_Friday : UserRepository.GetPlanFriday(),
      Plan_From : UserRepository.GetPlanFrom(),
      Plan_To : UserRepository.GetPlanTo(),
    };

    this.startDate = this.calendarhelper.DateToNgb(this.user.Plan_From)
    this.endDate = this.calendarhelper.DateToNgb(this.user.Plan_To)
    this.litnerCount = UserRepository.GetLeitnerCounter()
    debugger

  }
}
