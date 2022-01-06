import time
import requests
import serial


temperature = 0
humity = 0
arduino = serial.Serial('/dev/ttyUSB0',9600) # If you will use Windows, change this serial port
url = 'http://127.0.0.1:8000/monitor/'

try:
    while True:
        if arduino.in_waiting > 0:
            # if data was recieved from arduino do:
            temperature = int(arduino.read(6)[3:5])
            humity = int(arduino.read(6)[3:5])

        # the values received from Arduino are converted to JSON format
        value = {
            "temperature": temperature,
            "humity": humity
        }
        # this "if" is the mean to ignore the initial values 
        if value['temperature'] != 0 and value['humity']!= 0:
            r = requests.post(url, json= value)
            print(r.status_code)
            
        time.sleep(1)
    
except KeyboardInterrupt:
    # To finish the process use ^C
    print("\nFinish sending data")

# IF DON'T WORK ON FIRST TIME TRY AGAIN!! THE ARDUINO DOESN'T SEND DATA 
# ARDUINO SENT T:  U: \n