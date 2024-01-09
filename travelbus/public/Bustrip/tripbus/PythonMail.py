import smtplib
import getpass
import random
num1=0
def sendmail(mail,username):
    print(mail)
    
    HOST = "smtp-mail.outlook.com"
    PORT = 587

    FROM_EMAIL = "sumeshs2023@outlook.com"
    TO_EMAIL = mail
    PASSWORD = "sumesh123"

    SUBJECT = "OTP-Verification"
    num1 = random.randint(1010,9999)
    # print(num1)
    
    BODY = "Hi "+username+", We received a request to reset your password Enter the following password reset code : "+ str(num1)

    message = f"Subject: {SUBJECT}\n\n{BODY}"

    smtp = smtplib.SMTP(HOST, PORT)

    status_code, response = smtp.ehlo()
    print(f"[*] Echoing the server: {status_code} {response}")

    status_code, response = smtp.starttls()
    print(f"[*] Starting TLS connection: {status_code} {response}")

    status_code, response = smtp.login(FROM_EMAIL, PASSWORD)
    print(f"[*] Logging in: {status_code} {response}")

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, message)
    smtp.quit()
    return(num1)
