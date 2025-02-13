export const userActivationUrlEmailTemplate = ({ email, name, url }) => {
  return {
    from: `"Local Library 👻" <${process.env.SMTP_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Action Required - Activate your new account", // Subject line
    text: `Hello ${name}, follow the link to activate your account: ${url}`,
    html: `
        <p>Hello ${name},</p>
        <br />
        <p>Your account has been created. Click the button below to activate your account:</p>
        <a href="${url}">
          <button>Activate Now</button>
        </a>
        <br />
        <br />
        Regards,
      `,
  };
};
