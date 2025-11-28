// import nodemailer from "nodemailer";
// import { readBody, sendError, createError } from "h3";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const { firstName, lastName, email, phone, message } = body || {};

//   // Create transporter either from configured SMTP env vars or fall back to
//   // an Ethereal test account so local testing works without external SMTP.
//   let transporter: any = null;
//   let usingTestAccount = false;

//   if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
//     transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || 587),
//       secure: process.env.SMTP_SECURE === "true",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });
//   } else {
//     // No SMTP configured — create Ethereal test account for development
//     try {
//       const testAccount = await nodemailer.createTestAccount();
//       transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false,
//         auth: {
//           user: testAccount.user,
//           pass: testAccount.pass,
//         },
//       });
//       usingTestAccount = true;
//     } catch (err) {
//       // If creating a test account fails, report a clear error
//       return sendError(
//         event,
//         createError({
//           statusCode: 500,
//           statusMessage:
//             "SMTP not configured and cannot create Ethereal test account. Set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.",
//         })
//       );
//     }
//   }

//   try {
//     const fromAddress =
//       process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@example.com";
//     const toAddress = process.env.CONTACT_TO || "srdjanjokic13@gmail.com";

//     const info = await transporter.sendMail({
//       from: fromAddress,
//       to: toAddress,
//       subject: "Skippy website - novi kontakt",
//       text: `Ime: ${firstName || ""} ${lastName || ""}\nEmail: ${
//         email || ""
//       }\nTelefon: ${phone || ""}\n\nPoruka:\n${message || ""}`,
//     });

//     const result: any = { ok: true, info };
//     if (usingTestAccount) {
//       // Provide a preview URL so the developer can open the sent message in Ethereal
//       result.previewUrl = nodemailer.getTestMessageUrl(info) || null;
//     }

//     return result;
//   } catch (err) {
//     return sendError(
//       event,
//       createError({
//         statusCode: 500,
//         statusMessage: (err && (err as any).message) || "Mail send failed",
//       })
//     );
//   }
// });
