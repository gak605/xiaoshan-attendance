小山舍與孩子 v0.4.0 Cloud Edition

上傳到 GitHub 覆蓋這 5 個檔案：
- index.html
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png

測試網址：
https://xiaoshan-attendance.vercel.app/?v=040

本版重點：
- Firebase Firestore 雲端同步
- iPhone / iPad / 電腦使用同一份資料
- 學生資料、點名紀錄、學費設定、共同收費、貼紙資料都存雲端
- 上課日可複選
- 日期區間自動計算堂數
- 共同收費 ID 自動合併金額與貼紙
- 貼紙尺寸 80 × 56 mm；A4 3 × 5，共 15 張

注意：
- 目前 Firestore 使用測試模式。
- 之後加入登入功能後，再改正式安全規則。
