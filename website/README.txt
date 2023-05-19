Setup environment
-----------------
cd website
pip install -r requirements.txt

Build HTML files
----------------
cd website
python build.py

Add a new HTML file
-------------------
# Target: path/to/mynewfile.html in the website/html directory

cd website/mustache
cp template.mustache pages/path/to/mynewfile.mustache

# edit pages/path/to/mynewfile.mustache
# when you are done:

git add pages/path/to/mynewfile.mustache
cd ..
python build.py # creates website/html/path/to/mynewfile.html
git add html/path/to/mynewfile.html
git commit -m "added mynewfile"
git push

Add files included in HTML
--------------------------
# add an image
cp newfile.jpg website/html/assets/images
git add newfile.jpg
git commit -m "new file"
git push