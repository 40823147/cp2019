var tipuesearch = {"pages": [{'title': 'Dart 迴圈程式', 'text': 'Gita: https://gist.github.com/40823147/1d4292cdc1748c8f89dc7e9e05fb49f2 \n Dartpad: https://mde.tw/dartpad/?id=1d4292cdc1748c8f89dc7e9e05fb49f2 \n 原始碼: \n void main() {\n    print("哈囉!");\n} \n \n Gits: https://gist.github.com/40823147/33eae5a0423ed36e8fe679641932807d \n Dartpad： https://mde.tw/dartpad/?id=33eae5a0423ed36e8fe679641932807d \n 原始碼: \n \n int i;\nint sum;\n \nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n}\n \n \n \n', 'tags': '', 'url': 'Dart 迴圈程式.html'}, {'title': 'Dart 亂數分組', 'text': 'Gits: https://gist.github.com/40823147/cf15f2e897874078c14b0d61b97e3d3c \n Dartpad: https://mde.tw/dartpad/?id=cf15f2e897874078c14b0d61b97e3d3c \n 原始碼: \n import   \'dart:html\' ; \n \xa0 \n void   main() { \n \xa0\xa0 // 每一組 10 人 \n \xa0\xa0 int num = 10; \n \xa0\xa0 // 組序由 1 開始 \n \xa0\xa0 int gth = 1; \n \xa0\xa0 // 迴圈序號變數 \n \xa0\xa0 int i; \n \xa0\xa0 // 每組學員暫存數列 \n \xa0\xa0 var gp_list = []; \n \xa0\xa0 // 全班分組數列 \n \xa0\xa0 var cp2019 = []; \n \xa0 \n \xa0\xa0 HttpRequest.getString( \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\' ) \n \xa0\xa0\xa0\xa0\xa0\xa0 .then((String resp) { \n \xa0\xa0\xa0\xa0 // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列 \n \xa0\xa0\xa0\xa0 var stud_list = resp.trim().split( "\\n" ); \n \xa0\xa0\xa0\xa0 // 數列利用 shuffle() 方法以隨機方法弄亂順序 \n \xa0\xa0\xa0\xa0 stud_list.shuffle(); \n \xa0\xa0\xa0\xa0 // 逐一讀取已經弄亂的學生學號數列, 利用模數運算每幾人分成一組 \n \xa0\xa0\xa0\xa0 for   (i = 0; i < stud_list.length; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0 // 0, 1~(num-1), num \n \xa0\xa0\xa0\xa0\xa0\xa0 if   (i % num == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gp_list = []; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 列印區隔符號 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print( \'=\'   * 20); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print( "group $gth :" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(stud_list[i]); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 在各分組數列中加入將對應的學員學號 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gp_list.add(stud_list[i]); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gth = gth + 1; \n \xa0\xa0\xa0\xa0\xa0\xa0 }  else   { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print(stud_list[i]); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 在各分組數列中加入將對應的學員學號 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gp_list.add(stud_list[i]); \n \xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0\xa0\xa0 if   (i % num == 0) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 逐步將各組暫存的分組數列加入全班分組數列中 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 cp2019.add(gp_list); \n \xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 // 列出全班分組數列 \n \xa0\xa0\xa0\xa0 print(cp2019); \n \xa0\xa0 }); \n } \n \n \n', 'tags': '', 'url': 'Dart 亂數分組.html'}, {'title': 'Dart 微分方程式', 'text': 'Gits: https://gist.github.com/40823147/c5e90dc1d3d583b9985e73a6f628afc4 \n Dartpad: https://dartpad.dartlang.org/?id=c5e90dc1d3d583b9985e73a6f628afc4 \n 原始碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式 // 設 t 為時間, x 則設為物體的位移 // 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b) // f 為沿位移方向的施力 // dx/dt = v, dv/dt = (f-kx-bv)/m // dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值 // // 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以 // h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x // 定義函式 rungeKutta, 共有四個輸入變數 // 物體質量 const num m = 1; // 對質量的施力 f const num f = 0.0; // 彈簧係數 const num k = 1; // 阻尼係數 const num b = 1; \n // 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h rungeKutta(t0, x0, v0, t, h) {  // 利用步階增量值 h 與 t 的起始及終點值  // 計算需要迭代的次數 n  int n = ((t - t0) / h).toInt();  // 宣告 x 為雙浮點數, 且設為起始值 x0  double x = x0;  // 宣告 v 為雙浮點數, 且設為起始值 v0  double v = v0; \n // 模擬運算前, 列出起始條件  // 只列到小數點第三位, 時間、位移與速度以 \\t 隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}"); \n // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n  for (int i = 1; i <= n; i++) {  // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值  // 因為必須兩個函式耦合, 必須同時計算  double xk1 = h * dxdt(t0, x, v);  double vk1 = h * dvdt(t0, x, v);  double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);  double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);  double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);  double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);  double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);  double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);  // 利用上述四個變數值求此步階增量後的對應 x 值  x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);  v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);  // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值  // t 起始值配合步階增量值 h, 進行增量  t0 = t0 + h;  // 列出各模擬運算時間點所得到的結果  // 只列到小數點第三位, 時間、位移與速度以 \\t 隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");  } \n // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值  return [x, v]; } \n // 將微分方程式 "dx / dt = v" 定義為 dxdt 函式 dxdt(t, x, v) {  return v; } \n // dx/dt = v, dv/dt = (f-kx-bv)/m dvdt(t, x, v) {  return (f - k * x - b * v) / m; } \n // 定義 main() 主函式內容, 目的在利用 rungeKutta 函式 // 解常微分方程式 main() { // Driver method // num 資料型別可以是整數或雙浮點數  num t0 = 0;  num x0 = 1;  num v0 = 0;  num t = 20;  double h = 0.1;  rungeKutta(t0, x0, v0, t, h); } \n \n \n Gits: https://gist.github.com/40823147/f4667a3cbebf547191742f57b1a920b5 \n Dartpad: https://dartpad.dartlang.org/?id=f4667a3cbebf547191742f57b1a920b5 \n 原始碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式 // 設 t 為時間, x 則設為物體的位移 // 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b) // f 為沿位移方向的施力 // dx/dt = v, dv/dt = (f-kx-bv)/m // dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值 // // 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以 // h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x // 定義函式 rungeKutta, 共有四個輸入變數 // 物體質量 const num m = 1; // 對質量的施力 f const num f = 0.0; // 彈簧係數 const num k = 1; // 阻尼係數 const num b = 0; \n // 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h rungeKutta(t0, x0, v0, t, h) {  // 利用步階增量值 h 與 t 的起始及終點值  // 計算需要迭代的次數 n  int n = ((t - t0) / h).toInt();  // 宣告 x 為雙浮點數, 且設為起始值 x0  double x = x0;  // 宣告 v 為雙浮點數, 且設為起始值 v0  double v = v0; \n // 模擬運算前, 列出起始條件  // 只列到小數點第三位, 時間、位移與速度以 \\t 隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}"); \n // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n  for (int i = 1; i <= n; i++) {  // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值  // 因為必須兩個函式耦合, 必須同時計算  double xk1 = h * dxdt(t0, x, v);  double vk1 = h * dvdt(t0, x, v);  double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);  double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);  double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);  double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);  double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);  double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);  // 利用上述四個變數值求此步階增量後的對應 x 值  x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);  v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);  // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值  // t 起始值配合步階增量值 h, 進行增量  t0 = t0 + h;  // 列出各模擬運算時間點所得到的結果  // 只列到小數點第三位, 時間、位移與速度以 \\t 隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");  } \n // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值  return [x, v]; } \n // 將微分方程式 "dx / dt = v" 定義為 dxdt 函式 dxdt(t, x, v) {  return v; } \n // dx/dt = v, dv/dt = (f-kx-bv)/m dvdt(t, x, v) {  return (f - k * x - b * v) / m; } \n // 定義 main() 主函式內容, 目的在利用 rungeKutta 函式 // 解常微分方程式 main() { // Driver method // num 資料型別可以是整數或雙浮點數  num t0 = 0;  num x0 = 1;  num v0 = 0;  num t = 20;  double h = 0.1;  rungeKutta(t0, x0, v0, t, h); } \n \n', 'tags': '', 'url': 'Dart 微分方程式.html'}]};