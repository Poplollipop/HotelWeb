# Hotel Booking Management System - Frontend (Angular)

## 專案簡介
一個基於 Spring Boot 和 MySQL 的飯店房間管理系統，提供房間管理、訂房系統管理等功能。
![image](https://github.com/Poplollipop/HotelWeb/blob/main/demo.png)
## 技術
- **後端**: Java Spring Boot
- **前端**: Angular
- **數據庫**: MySQL

## 啟動指南
1. 安裝所需依賴：`mvn install`
2. 啟動後端：`mvn spring-boot:run`
3. 啟動前端：進入 `/angular` 目錄，執行 `ng serve`

## 文件結構
```
/src
 ├── app
 │   ├── pages
 │   │   ├── admin
 │   │   │   ├── pages
 │   │   │   │   ├── dashboard
 │   │   │   │   │   ├── dashboard.component.html
 │   │   │   │   │   ├── dashboard.component.scss
 │   │   │   │   │   ├── dashboard.component.spec.ts
 │   │   │   │   │   └── dashboard.component.ts
 │   │   │   │   ├── reservations
 │   │   │   │   │   ├── reservations.component.html
 │   │   │   │   │   ├── reservations.component.scss
 │   │   │   │   │   ├── reservations.component.spec.ts
 │   │   │   │   │   └── reservations.component.ts
 │   │   │   │   ├── rooms
 │   │   │   │   │   ├── rooms.component.html
 │   │   │   │   │   ├── rooms.component.scss
 │   │   │   │   │   ├── rooms.component.spec.ts
 │   │   │   │   │   └── rooms.component.ts
 │   │   │   │   └── update-rooms
 │   │   │   │       ├── update-rooms.component.html
 │   │   │   │       ├── update-rooms.component.scss
 │   │   │   │       ├── update-rooms.component.spec.ts
 │   │   │   │       └── update-rooms.component.ts
 │   │   │   ├── admin.component.html
 │   │   │   ├── admin.component.scss
 │   │   │   ├── admin.component.spec.ts
 │   │   │   ├── admin.component.ts
 │   │   │   └── admin.routes.ts
 │   │   ├── customer
 │   │   │   ├── pages
 │   │   │   │   ├── rooms
 │   │   │   │   │   ├── rooms.component.html
 │   │   │   │   │   ├── rooms.component.scss
 │   │   │   │   │   ├── rooms.component.spec.ts
 │   │   │   │   │   └── rooms.component.ts
 │   │   │   │   └── view-bookings
 │   │   │   │       ├── view-bookings.component.html
 │   │   │   │       ├── view-bookings.component.scss
 │   │   │   │       ├── view-bookings.component.spec.ts
 │   │   │   │       └── view-bookings.component.ts
 │   │   │   ├── customer.component.html
 │   │   │   ├── customer.component.scss
 │   │   │   ├── customer.component.spec.ts
 │   │   │   ├── customer.component.ts
 │   │   │   └── customer.routes.ts
 │   │   ├── login
 │   │   │   ├── login.component.html
 │   │   │   ├── login.component.scss
 │   │   │   ├── login.component.spec.ts
 │   │   │   └── login.component.ts
 │   │   ├── register
 │   │   │   ├── register.component.html
 │   │   │   ├── register.component.scss
 │   │   │   ├── register.component.spec.ts
 │   │   │   └── register.component.ts
 │   │   └── welcome
 │   │       ├── welcome.component.html
 │   │       ├── welcome.component.scss
 │   │       ├── welcome.component.ts
 │   │       └── welcome.routes.ts
 │   ├── service
 │   │   ├── admin-service
 │   │   │   └── admin.service.ts
 │   │   ├── auth
 │   │   │   └── auth.service.ts
 │   │   ├── customer-service
 │   │   │   └── customer.service.ts
 │   │   └── session
 │   │       └── session.service.ts
 │   ├── app.component.html
 │   ├── app.component.scss
 │   ├── app.component.spec.ts
 │   ├── app.component.ts
 │   ├── app.config.ts
 │   ├── app.routes.ts
 │   └── icons-provider.ts
 ├── index.html
 ├── main.ts
 └── styles.scss
```

## 文件解釋
src/app/pages
專案的主要頁面模組劃分，依照使用者角色分為：
📂 admin
📜 admin.component.ts
Admin 主頁的元件類別，作為子頁面（dashboard, rooms 等）的容器。
📜 admin.routes.ts
Admin 模組內的路由設定，實作子路由對應功能頁面。
📂 pages/dashboard
📜 dashboard.component.ts
管理員的儀表板頁面，顯示統計資料、系統概況。
📂 pages/reservations
📜 reservations.component.ts
顯示與管理所有訂房紀錄功能。
📂 pages/rooms
📜 rooms.component.ts
房間管理頁面，可查看/新增/刪除房間。
📂 pages/update-rooms
📜 update-rooms.component.ts
修改現有房間資訊的表單頁面。
📂 customer
📜 customer.component.ts
顧客功能模組的根元件。
📜 customer.routes.ts
客戶端子頁面路由設定。
📂 pages/rooms
📜 rooms.component.ts
顧客查看可預訂房間的頁面。
📂 pages/view-bookings
📜 view-bookings.component.ts
顯示顧客的預訂紀錄。
📂 login
📜 login.component.ts
使用者登入畫面，包含表單驗證、JWT 傳遞等。
📂 register
📜 register.component.ts
註冊新使用者（客戶或管理員）用的頁面。
📂 welcome
📜 welcome.component.ts
首頁或歡迎畫面，為訪客或未登入使用者展示簡介。
📜 welcome.routes.ts
對應 welcome 頁面之獨立路由設定。
📂 src/app/service
放置應用程式的服務邏輯，與後端 API 溝通、資料處理。
📂 admin-service
📜 admin.service.ts
管理員專用的後端呼叫服務，如房間管理、訂單查詢等。
📂 auth
📜 auth.service.ts
管理登入、登出、註冊、JWT token 驗證等邏輯。
📂 customer-service
📜 customer.service.ts
客戶端操作的服務，例如查詢可預訂房間、提交訂單等。
📂 session
📜 session.service.ts
用來儲存 session 資訊，例如目前登入使用者的角色與狀態。
📂 src/app 其餘檔案
app.component.ts
根元件，包含整體框架、全域樣式與初始設定。
app.routes.ts
應用程式的主路由設定（依角色導向對應模組）。

