@echo off
set /p url=ใส่ลิงก์ YouTube: 

yt-dlp.exe -f mp4 "%url%"

pause