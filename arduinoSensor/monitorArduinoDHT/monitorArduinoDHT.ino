#include <DHT.h>
#include <LiquidCrystal.h>


#define DHTTYPE DHT11

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int pinoDHT11 = A2; //Analogic port of DHT11
 
DHT dht(pinoDHT11, DHTTYPE);

void layout(){
  //Define Layout
  lcd.print("Temperatura:");
  lcd.print(" ");
  lcd.setCursor(15,0);
  lcd.print("C");
  lcd.setCursor(0,1);
  lcd.print("Umidade: ");
  lcd.print(" ");
  lcd.setCursor(15,1);
  lcd.print("%");
}
 
void setup(){
  Serial.begin(9600);
  dht.begin();
  //-------------------------------------------------------
  // Contrast configuration
  //-------------------------------------------------------
  pinMode(6, OUTPUT);
  analogWrite(6, 50);
  //-------------------------------------------------------
  lcd.begin(16, 2);
  delay(2000);
  layout();
  
}
 
void loop(){

  //-------------------------------------------------------
  // DHT11 Data
  //-------------------------------------------------------
  int umid = dht.readHumidity();
  int temp = dht.readTemperature();
  //-------------------------------------------------------
  Serial.print("T: ");
  Serial.print(temp);
  Serial.print(" U: ");
  Serial.print(umid);
  Serial.print("\n");
  //-------------------------------------------------------
  //LCD
  //-------------------------------------------------------
  lcd.setCursor(13,0);
  lcd.print(temp);
  lcd.setCursor(13,1);
  lcd.print(umid);
  //-------------------------------------------------------
  delay(2000);
  
}
