cd /d %~dp0\ComfyUI\env\Scripts
call activate
python.exe -m pip install --upgrade pip
call deactivate
exit