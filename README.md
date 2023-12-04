# BadSantaFullStack
# Run Angular FrontEnd

/BadSantaFullStack/ui/BadSantaNG/ng build --output-path docs

copy /browser/* to /var/www/html for hosting

sudo service nginx restart

# Run Django Backend

activate venv

# Run the service in the background
gunicorn --bind 0.0.0.0:9000 BadSantaAPI.wsgi &
