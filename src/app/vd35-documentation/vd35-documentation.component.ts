import { Component } from '@angular/core';

@Component({
  selector: 'app-vd35-documentation',
  templateUrl: './vd35-documentation.component.html',
  styleUrls: ['./vd35-documentation.component.scss']
})
export class Vd35DocumentationComponent {

  /**
   * Mô tả về biến var1
   */
  var1 = '';

  /**
  * Mô tả về biên var2
  * @deprecated
  * Mô tả về việc sẽ xoá bỏ trong tương lai
  */
  var2 = '';

  /**
   * Mô tả về hàm feature01()
   * nếu viết nhiều dòng thì khi
   * hiển thị cũng chỉ có một dòng
   * @param paramName Mô tả về paramName
   * @returns Mô tả về dữ liệu trả về
   */
  feature01(paramName: string): void { }

}
