const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { fullname, email, message } = req.body;

  if (!fullname || !email || !message) {
    return res.status(400).json({ success: false, message: 'Semua field wajib diisi.' });
  }

  // Gunakan environment variable di Vercel untuk keamanan
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // set di dashboard Vercel
      pass: process.env.MAIL_PASS  // set di dashboard Vercel (App Password Gmail)
    }
  });

  try {
    await transporter.sendMail({
      from: `"${fullname}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: 'Pesan dari Website Portfolio',
      text: `Nama: ${fullname}\nEmail: ${email}\nPesan:\n${message}`
    });
    res.status(200).json({ success: true, message: 'Pesan berhasil dikirim!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Gagal mengirim pesan.', error: err.message });
  }
}