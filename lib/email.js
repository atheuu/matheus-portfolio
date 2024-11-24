import nodemailer from "nodemailer";

export async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "matheusliveirr@gmail.com",
      pass: "ckpg qcwu bemz yzga",
    },
  });

  const mailOptions = {
    from: "matheusliveirr@gmail.com",
    to: "matheusliveirr@gmail.com",
    subject: `Novo contato: ${data.firstName} ${data.lastName}`,
    text: `
      Nome: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Telefone: ${data.phone || "Não informado"}
      Serviço: ${data.service || "Não informado"}
      Mensagem: ${data.message}
    `,
  };

  await transporter.sendMail(mailOptions);
}
