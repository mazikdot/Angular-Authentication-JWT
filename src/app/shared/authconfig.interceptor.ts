import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable()
//Interceptors เป็นหนึ่งในเครื่องมือในตัวที่ทรงพลังที่สุดใน Angular ที่ใช้จัดการคำขอ HTTP
// ที่ต้นทางจากส่วนกลางหรือในระดับโลก เนื่องจากพวกเขาเกี่ยวข้องกับคำขอ HTTP และรอบการตอบสนองดังนั้นจึงมักเรียกว่า HTTP interceptors การวางลอจิกที่ใช้
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}