@echo off
cd /d C:\Projetos\Site-Parceiro-IA

REM Pergunta a mensagem do commit
set /p msg="Digite a mensagem do commit: "

echo ===============================
echo Adicionando alterações...
git add .

echo ===============================
echo Commitando: %msg%
git commit -m "%msg%"

echo ===============================
echo Enviando para o GitHub...
git push origin main

echo ===============================
echo Deploy enviado! 
echo Se o Auto Deploy do Render estiver ligado, ele já vai começar.
pause
