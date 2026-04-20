@echo off
echo ===================================================
echo Iniciando processo de upload e deploy para o GitHub...
echo ===================================================

:: Verifica se o git esta instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Git nao encontrado! Por favor, instale o Git para Windows.
    pause
    exit /b 1
)

:: Garante que se houver pastas velhas ou erradas do script antigo, elas sejam ignoradas
if exist "dist\.git" (
    rmdir /s /q "dist\.git"
)

:: Verifica se e um repositorio git, se nao for, inicializa e configura
if not exist ".git" (
    echo [!] Repositorio Git nao encontrado na pasta. Inicializando...
    git init
    git remote add origin https://github.com/Luikeng/Site_sistema_psicologia.git
    git branch -M main
)

:: Caso a pessoa ja tenha iniciado, garantir a URL remota certa
git remote set-url origin https://github.com/Luikeng/Site_sistema_psicologia.git
git branch -M main

:: Adiciona todos os arquivos modificados e novos
echo [1/3] Preparando arquivos...
git add .

:: Faz o commit.
echo [2/3] Criando commit...
git commit -m "Deploy automatico da Landing Page" >nul 2>&1

:: Forca o push para a branch main do repositorio remoto
echo [3/3] Forcando envio para o GitHub...
git push origin main --force

if %errorlevel% equ 0 (
    echo ===================================================
    echo SUCESSO! Arquivos fonte enviados para o GitHub.
    echo O GitHub Actions agora fara todo o trabalho pesado na nuvem!
    echo O site estara atualizado e online de 1 a 2 minutos.
    echo Acesse: https://sistemapsicologia.com.br/
    echo ===================================================
) else (
    echo ===================================================
    echo ERRO: Falha ao enviar para o GitHub.
    echo Verifique sua conexao ou permissoes do repositorio.
    echo ===================================================
)

pause
