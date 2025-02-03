import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Configure o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Novo contato de ${name}`,
      text: `
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${phone}
        Mensagem: ${message}
      `,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    // Envie o e-mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return new Response(JSON.stringify({ error: 'Erro ao enviar mensagem' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}