const int pushpin = 9;

void setup() {
  Serial.begin(9600);
  while (Serial.available() <= 0){
    Serial.println("hello");
    }
    delay(300);
}

void loop() {
  if (Serial.available() > 0){
    int reading = digitalRead(pushpin);
    Serial.write(reading);
  }
}
