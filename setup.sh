clear

echo "downloading packages"

sleep 1

sudo apt-get install npm

sudo pacman -S npm

sudo dnf install npm

npm install electron --save-dev

clear

echo "done!"

echo 'now you can start by typing "npm start"'
