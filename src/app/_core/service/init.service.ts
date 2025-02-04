import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() {}

  // تابعی برای اجرای عملیات اولیه (مثلاً لود داده‌ها)
  loadAppSettings(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('در حال لود تنظیمات اولیه...');
      setTimeout(() => {
        console.log('تنظیمات اولیه لود شد!');
        resolve(); // وقتی عملیات تمام شد
      }, 100); // شبیه‌سازی تأخیر لودینگ
    });
  }
}
