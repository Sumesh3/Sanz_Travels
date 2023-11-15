import qrcode
def Generateqr(sum):
    upi_id = '9539451245@ybl'
    name = 'Sumesh'
    note = 'Company'
    amount = sum

    # UPI URL format
    upi_url = f"upi://pay?pa={upi_id}&pn={name}&tn={note}&am={amount}&cu=INR"

    # Generate QR code
    qr = qrcode.make(upi_url)

    # Save the QR code as image
    qr.save(r"media\images\QR\upi_qr.png")