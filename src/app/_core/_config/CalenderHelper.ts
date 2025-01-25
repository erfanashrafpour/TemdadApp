import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import * as moment from "jalali-moment";

export const e2p = (s:any) => s.replace(/\d/g, (d:any) => '۰۱۲۳۴۵۶۷۸۹'[d])
const e2a = (s:any) => s.replace(/\d/g, (d:any) => '٠١٢٣٤٥٦٧٨٩'[d])

export const p2e = (s:any) => s.replace(/[۰-۹]/g, (d:any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
const a2e = (s:any) => s.replace(/[٠-٩]/g, (d:any) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))

const p2a = (s:any) => s.replace(/[۰-۹]/g, (d:any) => '٠١٢٣٤٥٦٧٨٩'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)])
const a2p = (s:any) => s.replace(/[٠-٩]/g, (d:any) => '۰۱۲۳۴۵۶۷۸۹'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)])
export class CalenderHelper {


  NgbToDate(ngbDate:any) {
    if (!ngbDate) {
      return null;
    }
    //debugger
    return this.shortGregorianDate(ngbDate.year + '/' + ngbDate.month + '/' + ngbDate.day);
  }

  NgbToDateStr(ngbDate:any) {
    if (!ngbDate) {
      return null;
    }
    return this.shortGregorianDateStr(ngbDate.year + '/' + ngbDate.month + '/' + ngbDate.day);
  }

  DateToNgb(date:any) {

    if (!date) {
      return null
    }
    const perisanDate =this.shortPersianDate(date)
    const mom = p2e(perisanDate).split('/').map((x:any) => Number(x));

    const p = {
      year: (mom[0]),
      month: (mom[1]),
      day: (mom[2])
    } as NgbDate;

    return p;
  }


  shortGregorianDate(persianDate: any): Date {
    if (!persianDate) {
      return persianDate;
    }

    const nowDate = moment(persianDate, 'jYYYY/jMM/jDD');


    const  t =  new Date(p2e(nowDate.clone().format("YYYY-MM-DD")));

    return t
  }

  shortGregorianDateStr(persianDate: any): string {
    if (!persianDate) {
      return persianDate;
    }
    const nowDate = moment(persianDate, 'jYYYY/jMM/jDD');
    return nowDate.clone().format("YYYY-MM-DD");
  }

  shortPersianTime(gregorianDate: any): string {
    if (!gregorianDate) {
      return gregorianDate;
    }
    const nowDate = moment(new Date(gregorianDate));
    return nowDate.clone().doAsGregorian().format("HH:mm");
  }
  shortPersianDateTime(gregorianDate: any): string {
    if (!gregorianDate) {
      return gregorianDate;
    }
    const nowDate = moment(new Date(gregorianDate));
    return nowDate.clone().doAsGregorian().format("jYYYY/jMM/jDD");
  }

  shortPersianDate(gregorianDate: any): string {
    if (!gregorianDate) {
      return gregorianDate;
    }

    const nowDate = moment(new Date(gregorianDate));
    const r =  nowDate.clone().doAsGregorian().format("jYYYY/jMM/jDD");
    return r;
  }
}
