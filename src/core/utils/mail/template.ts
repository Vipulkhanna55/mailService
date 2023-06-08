const mailHTML = (message: string) => {
  {
    return `
        <div style="background-image: linear-gradient(to right top, #a6d0dd, #99c1f0, #c0a5ec, #f280bc, #ff6969);
        padding:15px; border-radius:10px; color: #fff;">
        <h2 >This mail is send to deliver the message that ${message}</h2>
                      </div>`;
  }
};
export default mailHTML;
